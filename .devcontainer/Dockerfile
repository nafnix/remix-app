# syntax=docker/dockerfile:1
FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

ARG DEBIAN_FRONTEND=noninteractive
ARG SOURCES_MIRROR=deb.debian.org
ARG SECURITY_SOURCES_MIRROR=deb.debian.org
RUN <<EOT
    sed -i "s/deb.debian.org\/debian$/${SOURCES_MIRROR}\/debian/g" /etc/apt/sources.list.d/debian.sources
    sed -i "s/deb.debian.org\/debian-security$/${SECURITY_SOURCES_MIRROR}\/debian-security/g" /etc/apt/sources.list.d/debian.sources
EOT


ARG NPM_MIRROR=https://registry.npmjs.org/
RUN <<EOT
    pnpm set registry ${NPM_MIRROR}
EOT


ARG USER=node
ARG DEFAULT_SHELL=/bin/zsh
RUN <<EOT
    usermod -s ${DEFAULT_SHELL} ${USER}
EOT


USER ${USER}
ARG HOME=/home/${USER}
ARG ZSH=${HOME}/.oh-my-zsh
ARG ZSH_CUSTOM=${ZSH}/custom
WORKDIR ${HOME}

ARG OHMYZSH_REMOTE=https://github.com/ohmyzsh/ohmyzsh.git
RUN <<EOT
    git -C ${ZSH} remote set-url origin ${OHMYZSH_REMOTE}
    git -C ${ZSH} pull
EOT

RUN <<EOT
    mkdir -p ${ZSH_CUSTOM}/plugins/pnpm
    pnpm completion zsh > ${ZSH_CUSTOM}/plugins/pnpm/_pnpm
    sed -i "s|^plugins=(|&pnpm |" .zshrc
    echo 'alias pn=pnpm' >> .zshrc
EOT

ARG P10K_REMOTE=https://github.com/romkatv/powerlevel10k.git
RUN <<EOT
    mkdir -p ${ZSH_CUSTOM}/themes/
    git clone --depth=1 ${P10K_REMOTE} ${ZSH_CUSTOM}/themes/powerlevel10k
    sed -i 's|ZSH_THEME="devcontainers"|ZSH_THEME="powerlevel10k/powerlevel10k"|g' .zshrc
    echo 'POWERLEVEL9K_DISABLE_CONFIGURATION_WIZARD=true' >> .zshrc
EOT
