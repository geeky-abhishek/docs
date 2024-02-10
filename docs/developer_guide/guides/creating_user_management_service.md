---
title: Creating a User Management Service
sidebar_label: Creating a User Management Service
---

import ApiEndpoint from '@components/global/ApiEndpoint';
import InfoCard from '@components/global/Info';

A User Management Service is a simple service which exposes CRUD APIs for user management. BharatSahAIyak platform is able to seamlessly integrate with any User Management Service as long as it follows the following spec and exposes the following APIs.

<h2>Registering a User</h2>

<ApiEndpoint method='POST' endpoint='/register/{deviceId}' description='Register a user given a `deviceId`.'/>

<h3>Url Parameters</h3>

Name | Type | Required | Description |
--- | --- | --- | --- |
deviceId | String | YES | The unique device Id of the user which an adapter uses to send messages.

<h3>Request Body</h3>

Name | Type | Required | Description |
--- | --- | --- | --- |
verificationId | String | YES | The verification Id that the user provides, which can be used to verify the user. For example email, phone number, etc.

<h3>Response</h3>

<h5>Success (201)</h5>
Return a 201 response code if the user registration request has been successfully made.

<h5>Conflict (409)</h5>
Return a 409 response if a user already exists with the same `deviceId` or `verificationId`.

<h5>Failure Response (any other code)</h5>
Return the corresponding error code with relevant error message.

```JSON
{
    "error": "This went wrong",
}
```

<h2>Fetching Users</h2>

<ApiEndpoint 
    method='GET'
    endpoint='/'
    description='Fetch all users in segment.'
    info='If `page` is not provided, all users are returned. If `size` is not provided, it defaults to 10.'
/>

<h3>Query Parameters</h3>

Name | Type | Required | Description |
--- | --- | --- | --- |
page | number | NO | The page number of the user segment being retrieved in a paginated query. All users are returned by default if page is not provided.
size | number | NO | The size of the page being retrieved in a paginated query. By default this value if 10.

<h3>Response</h3>
The service must respond with a 200 status code for a successfull call, or else provide the corresponding error code along with an error message.

<h5>Success Response (200)</h5>

```JSON
[
    {
        "name": "abc",
        "deviceId": "xyz",
        "verificationId": "aaa",
    },
    {
        "name": "aac",
        "deviceId": "yyz",
        "verificationId": "abb",
    },
    ...
]
```

<h5>Failure Response (other than 200)</h5>

```JSON
{
    "error": "This went wrong",
}
```

<h2>Fetching Single User</h2>
<ApiEndpoint method='GET' endpoint='/{deviceId}' description='Fetch user based on `deviceId`.'/>

<h3>Url Parameters</h3>

Name | Type | Required | Description |
--- | --- | --- | --- |
deviceId | String | YES | The unique device Id of the user which an adapter uses to send messages.

<h3>Response</h3>

<h5>Success (200)</h5>
Return a 200 response code if the user is found.

```JSON
{
    "name": "abc",
    "deviceId": "xyz",
    "verificationId": "aaa",
}
```

<h5>Not Found (404)</h5>
Return a 404 response if a user is not registered to the segment.

<h5>Failure Response (any other code)</h5>
Return the corresponding error code with relevant error message.

```JSON
{
    "error": "This went wrong",
}
```

<h2>Deleting a registration</h2>
<ApiEndpoint method='DELETE' endpoint='/{deviceId}' description='Delete a user registration based on `deviceId`.'/>

<h3>Url Parameters</h3>

Name | Type | Required | Description |
--- | --- | --- | --- |
deviceId | String | YES | The unique device Id of the user which an adapter uses to send messages.

<h3>Response</h3>

<h5>Success (200)</h5>
Return a 200 response code if the user registration is deleted successfully.

<h5>Not Found (404)</h5>
Return a 404 response if a user is not registered to the segment.

<h5>Failure Response (any other code)</h5>
Return the corresponding error code with relevant error message.

```JSON
{
    "error": "This went wrong",
}
```

<h2>Updating deviceId of a given user</h2>
<ApiEndpoint method='PATCH' endpoint='/{verificationId}' description='Update a user registration based on `verificationId`.'/>

<h3>Url Parameters</h3>

Name | Type | Required | Description |
--- | --- | --- | --- |
verificationId | String | YES | The unique verification Id of the user which was used to verify the user during registration.

<h3>Request Body</h3>

Name | Type | Required | Description |
--- | --- | --- | --- |
deviceId | String | YES | The unique device Id of the user which an adapter uses to send messages.

<h3>Response</h3>

<h5>Success (200)</h5>
Return a 200 response code if the user registration was successfully updated.

<h5>Not Found (404)</h5>
Return a 404 response if a user is not registered to the segment.

<h5>Failure Response (any other code)</h5>
Return the corresponding error code with relevant error message.

```JSON
{
    "error": "This went wrong",
}
```
