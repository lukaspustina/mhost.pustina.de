---
id: about
title: About mhost
sidebar_label: About mhost
slug: /
---

DNS is a very old and robust service. Actually, it is so robust that more and more features have been added over time. Unfortunately, the classic tools haven't been updated to easily interoperate with these modern features.  `mhost` is a new tool that aligns with modern DNS. And what better language to choose for such a tool than Rust!

## `mhost`

`mhost` is very fast and uses multiple DNS servers concurrently to aggregate all results for more **reliable lookups**. You can use hundreds of name servers. If you don't know that many name servers personally, `mhost` allows you to download up-to-date server lists from [public-dns](https://public-dns.info) and [OpenNIC](https://www.opennic.org). It also comes with a serious list of publicly available name servers built-in. `mhost` supports classic DNS over **UDP** and **TCP** as well as modern DNS over **TLS** (DoT) and **HTTP** (DoH). `mhost` presents results in an easy, human readable format as well as JSON for post-processing. In case you want to do **service lookups**, `mhost` helps you with easy to use service lookups.

In addition to lookups, `mhost` may be used to **discover** host names and subdomains of domains as well as **lint** DNS zone configurations. You can use all these capabilities of `mhost` in your own projects using the async `mhost` Rust library.

You can install `mhost` via [homebrew](https://brew.sh) or [Rust's cargo](https://rustup.rs) as well as by packaged binaries for [Redhat and Ubuntu](https://github.com/lukaspustina/mhost/releases). There is also a ready to use [Docker image](https://hub.docker.com/r/lukaspustina/mhost).

Future steps will include support of more DNS record types and extending the set of lints as much as possible. I'm happy about any feedback and especially PRs.

## Postcardware

You’re free to use `mhost`. If you find it useful, I would highly appreciate you sending me a postcard from your hometown mentioning how you use `mhost`. My work address is

```plain
     Lukas Pustina
     CenterDevice GmbH
     Rheinwerkallee 3
     53227 Bonn
     Germany
```

