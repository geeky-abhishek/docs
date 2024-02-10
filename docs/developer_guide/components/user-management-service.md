---
title: User Management Service
sidebar_label: User Management Service
---

The BharatSahAIyak system does not manage bot users in itself. So for restricting a bot to a particular segment of users or sending out broadcast messages to a group of users, a bot is linked to a `UserSegment` config. This UserSegment config consists the url of an external User Management Service which is responsible for registering, verifying and providing user details.

Learn more about how to create your own User Management Service [here](../guides/creating_user_management_service.md).
