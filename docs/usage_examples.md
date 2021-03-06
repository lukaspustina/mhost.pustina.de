---
id: usage_examples
title: Usage Examples
sidebar_label: Examples
slug: /usage_examples
---

`mhost` has three main verbs: `lookup`, `discover`, `check`. Each verb can be abbreviated to shorter forms as long as they remain unambiguous, e.g., `l` for `lookup`, `d` for `discover`, and `c` for `check`.

## Just lookup an IP address

```sh
$ mhost l github.com
```

![Default lookup for github.com.](/img/default-lookup-github.png)

In this run, all default settings are applied. Especially, `most` uses only the local system’s name servers and queries only the default record types.

### Just lookup an IP address, using more than just your local name servers

```sh
$ mhost -p l github.com
```

![Default lookup with predefined servers for github.com.](/img/default-lookup-predefined-servers-github.png)

See, there’re more answers than before!

`-p` add public name servers that `mhost` predefines for your convenience. By default, only the UDP is used to contact the predefined name servers. You can control this behaviour using `--predefined-filter` and filter for UDP, TCP, DoT, DoH. `--list-predefined` show all available predefined name servers.

### Just lookup an IP address, using even more than just your local name servers

```sh
$ mhost server-lists public-dns -o servers.txt
$ mhost --limit 6000 --max-concurrent-servers 1000 --timeout 1 -f servers.txt l www.github.com
```

![Default lookup with servers list for github.com.](/img/default-lookup-servers-list-github.png)

See, there’re even more answers than before!

The first command downloads a list of public available name servers that are maintained by the [Public DNS](https://public-dns.info) community. Usually only a subset of these are reachable, but it still a large set of active name servers.

The second command uses the name servers list from before and queries all of them concurrently. These settings are very aggressive and highly stresses your internet connection. `mhost` default settings are set much more cautiously.

### Just lookup an IP address, using UDP, TCP, DoT, and DoH

```sh
$ mhost -s 1.1.1.1 -s tcp:1.1.1.1 -s tls:1.1.1.1:853,tls_auth_name=cloudflare-dns.com -s https:1.1.1.1:443,tls_auth_name=cloudflare-dns.com,name=Cloudflare -p l github.com
```

As already mentioned before, `mhost` supports DNS queries over UDP, TCP, DNS over TLS (DoT), as well as DNS over HTTPS (DoH). In the above example, `mhost` uses all four protocols to query Cloudflare’s name servers.

This command also shows the syntax for name server specification, which in general is `protocol:<host name | ip address>:port,tls_auth_name=hostname,name=human-readable-name`.

![Default lookup with all protocols for github.com.](/img/default-lookup-all-protocols-github.png)

## Discover a domain

Sometimes you want to know which host names and subdomains a domain has. `mhost` offers a simple command to help you find these. Please mind, that `mhost` only uses DNS specific discovery methods. If you want even deeper discoveries using Google, Shodan etc. there are other tools available.

```sh
$ mhost -p d github.com -p
```

This command uses the predefined name servers to discover the GitHub domain. The `-s` reduces all discovered names to real subdomains of `github.com.`.

![Discover github.com.](/img/discover-github.png)

You can go one more step and explore the autonomous systems GitHub uses. In order to discover those, you can use the following commands:

```sh
$ mhost -p l --all -w github.com
$ mhost -p l --all 140.82.121.0/24
```

![Discover AS of github.com.](/img/discover-as-github.png)

## Check your name server configuration

```sh
$ mhost -p c github.com -p
```

![Check github.com.](/img/check-github.png)


