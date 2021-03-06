---
id: installation
title: Installation
sidebar_label: Installation
slug: /installation
---

## Docker

If you want to give `mhost` a quick spin and just try it out without too much hassle, you might want to try the Docker image:

```sh
$ docker run lukaspustina/mhost:latest mhost l mhost.pustina.de
```

## Homebrew

You can add this repository as a custom tap and then install `mhost` like this:

```sh
$ brew tap lukaspustina/mhost https://github.com/lukaspustina/mhost.git
$ brew install lukaspustina/mhost/mhost
```

## Debian and Ubuntu

You can find Debian packages on the [GitHub Release](https://github.com/lukaspustina/mhost/releases) page. Download the package as `mhost.deb` and the run

```sh
$ dpkg -i mhost.deb
```

## Redhat and Fedora

You can find RPM packages on the [GitHub Release](https://github.com/lukaspustina/mhost/releases) page. Download the package as `mhost.rpm` and the run

```sh
$ rpm -i mhost.rpm
```

## For Rust Developers

```sh
$ cargo install --features app mhost
```

## From Source

Please install Rust via [rustup](https://www.rustup.rs) and then run

```sh
$ git clone https://github.com/lukaspustina/mhost
$ cd mhost
$ make install
```

