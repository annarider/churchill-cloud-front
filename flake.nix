{
  description = "churchill static landing website";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
  };

  outputs = inputs@{ self, flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [ "x86_64-linux" "aarch64-linux" ];

      perSystem = { pkgs, self', ... }: {
        packages = with pkgs; rec {
          # * The static website files as a package
          static = stdenv.mkDerivation rec {
            pname = "m32.io-static";
            version = "${self.shortRev or self.dirtyShortRev}";
            src = self;

            buildInputs = with pkgs; [
              jekyll
              rubyPackages.jekyll-feed

              tailwindcss
            ];

            phases = [ "unpackPhase" "configurePhase" "buildPhase" "installPhase" ];

            configurePhase = ''
              export PATH="$PATH:${pkgs.lib.makeBinPath buildInputs}"

              cp ${self'.packages.data-file} .nix-data.json
            '';

            buildPhase = ''
              	           ${pkgs.tailwindcss}/bin/tailwindcss -i assets/css/main.css -o assets/css/styles.css
                           ${pkgs.jekyll}/bin/jekyll build
            '';

            installPhase = ''
              mkdir -p $out
              cp -r ./_site/* $out
            '';
          };

          data-file = writeText "nix-data.json"
            (builtins.toJSON { inherit (self.sourceInfo) lastModified lastModifiedDate;
                               rev = self.sourceInfo.rev or self.sourceInfo.dirtyRev;
                               shortRev = self.sourceInfo.shortRev or self.sourceInfo.dirtyShortRev;
                             });

          default = static;
        };


        devShells.default = with pkgs;
          mkShell {
            nativeBuildInputs = [
              git
            ] ++ self'.packages.static.buildInputs;
          };
      };
    };

  nixConfig = {
    extra-experimental-features = "nix-command flakes recursive-nix";
  };

}
