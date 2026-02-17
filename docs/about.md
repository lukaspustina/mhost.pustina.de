---
id: about
title: About mhost
sidebar_label: About mhost
slug: /
---

**mhost** is a modern, high-performance DNS Swiss Army knife and Rust library -- an advanced replacement for `host` and `dig`. It queries many DNS servers in parallel and aggregates their answers. It supports UDP, TCP, DNS-over-TLS, and DNS-over-HTTPS, understands 20+ record types, and ships with 84 pre-configured public resolvers.

Beyond simple lookups, mhost can profile an entire domain, discover subdomains, trace the delegation chain, validate your DNS configuration, check propagation, diff records across nameservers, and verify live DNS against a zone file -- all from a single binary.

## Two binaries, one toolkit

**`mhost`** is a powerful CLI for scripts, pipelines, and quick one-liners. **`mdive`** is an interactive TUI that lets you explore DNS like a file manager -- drill into subdomains, discover hidden records, and chase references across domains, all without leaving your terminal.

## Commands

| Command | Alias | What it does |
|---------|-------|--------------|
| `lookup` | `l` | Look up DNS records for a domain, IP address, or CIDR block |
| `domain-lookup` | `domain` | Profile a domain -- apex + 68 well-known subdomains in one operation |
| `discover` | `d` | Find subdomains using 10+ strategies (wordlists, CT logs, AXFR, NSEC walking, ...) |
| `check` | `c` | Validate DNS configuration against 13 lints (SOA, NS, SPF, DMARC, DNSSEC, ...) |
| `trace` | `t` | Trace the delegation path from root servers, querying all servers at each hop |
| `propagation` | `prop` | Check whether a DNS change has propagated across public resolvers |
| `verify` | `v` | Verify live DNS matches a BIND zone file -- catch drift before it bites |
| `diff` | -- | Compare DNS records between nameservers or JSON snapshots |
| `info` | -- | Built-in reference for record types, TXT sub-types, and well-known subdomains |

## Key features

- **Parallel multi-server queries** -- query up to 10,000 nameservers concurrently, with 84 built-in public resolvers from 6 providers
- **All four protocols** -- UDP, TCP, DNS-over-TLS (DoT), DNS-over-HTTPS (DoH)
- **20+ record types** -- A, AAAA, MX, TXT, CNAME, NS, SOA, CAA, SRV, HTTPS, SVCB, TLSA, SSHFP, NAPTR, HINFO, OPENPGPKEY, PTR, ANAME, DNSSEC types (DNSKEY, DS, RRSIG, NSEC, NSEC3, NSEC3PARAM), and more
- **Subdomain discovery** -- 10+ strategies including CT logs, wordlists, AXFR, NSEC walking, SRV probing, TXT mining, permutation, and recursive discovery
- **DNS configuration linting** -- 13 checks covering SOA, NS delegation, MX, SPF, DMARC, CAA, DNSSEC, HTTPS/SVCB, TTL consistency, zone transfer exposure, open resolver detection, and delegation consistency
- **Propagation checking** -- verify DNS changes across Cloudflare, Google, Quad9, Mullvad, Wikimedia, and DNS4EU
- **Record diffing** -- compare live DNS between nameservers, against saved JSON snapshots, or any combination
- **Zone file verification** -- compare live DNS against BIND zone files with non-zero exit codes for CI/CD integration
- **Delegation tracing** -- trace from root servers querying all nameservers at each hop in parallel, with referral divergence detection
- **DNSSEC visualization** -- walk the trust chain from root to target zone with color-coded key roles, algorithm strength, and signature expiry
- **Interactive TUI (mdive)** -- drill-down navigation, real-time discovery, WHOIS/geolocation, health checks, server stats, regex filtering, vi-style keybindings
- **JSON output** -- every command supports `--output json` for scripting and automation
- **Reusable Rust library** -- async builder API, typed DNS records, no CLI dependencies when built as library-only

## Postcardware

You're free to use `mhost`. If you find it useful, I would highly appreciate you sending me a postcard from your hometown mentioning how you use `mhost`. My work address is

```plain
     Lukas Pustina
     CenterDevice GmbH
     Rheinwerkallee 3
     53227 Bonn
     Germany
```
