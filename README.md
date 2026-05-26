# inkwell

A cloud-synced markdown notebook. Local-first feel with real cross-device sync, an AI layer that surfaces connections between notes, and a writing experience designed to stay out of your way.

## Status

Pre-development. Scope and architecture defined; implementation in progress.

## Why this exists

Markdown notebooks (Obsidian, Bear, iA Writer) hit a sweet spot of utility, but most are either local-only or sync-and-pray. This project takes the local-first feel and adds real cloud sync, multi-device continuity, and an AI layer that surfaces connections between notes without auto-generating slop.

## Planned stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js 15 (App Router) | Familiar; SSR for shared notes |
| Editor | Tiptap (ProseMirror) | Markdown-first, extensible, performant |
| Sync | Local-first (Y.js) + Postgres | Offline writes, lossless merge |
| Embeddings | pgvector | Semantic search and auto-link suggestions |
| AI | Vercel AI SDK + Claude / GPT | Streamed completions, configurable |
| Storage | S3-compatible for attachments | Standard pattern |
| Auth | Clerk | Quick to integrate |
| Deploy | Vercel + Neon Postgres | Standard split |

## Planned features

- Markdown editor with live preview, slash commands, keyboard-first
- Cloud sync across devices, offline-first
- Backlinks and graph view
- AI auto-link: surface relevant prior notes as you write
- Semantic search across the vault
- Daily notes, tags, folders
- Public sharing for individual notes

## Roadmap

- [ ] Local-only editor + persistence
- [ ] Auth + cloud sync
- [ ] Backlinks and graph view
- [ ] Embeddings pipeline + semantic search
- [ ] AI auto-link suggestions
- [ ] Public note sharing

---

By [Jamison Kimminau](https://github.com/jkimminau).
