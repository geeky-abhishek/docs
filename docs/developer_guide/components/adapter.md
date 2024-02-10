---
title: Adapters
sidebar_label: Adapters
---

Adapters convert information provided by channels (Telegram, Whatsapp) for each specific provider to [XMessage](./xmessage.md) and vise versa. Adapters are gateway to the external services and resposible to recieving user response and sending response to users. Adapters are the main component which enable the system to work generically with any provider or channel. Think of adapters as plugins to the system, where each added plugin adds a new functionality (capability to work with a new channel + provider combination) to the system.

Thus the two major functions of Adapters are:

- Convert API/webhook data from channel (and provider) to xMessages
- Convert xMessages back to API/webhook data format for the specific channel(and provider)

<img src="/img/adapter_block_diagram.jpeg"></img><br/><br/><br/>

Learn more about how to create an adapter for a new channel + provider combination [here](../guides/creating_new_adapter.md).
