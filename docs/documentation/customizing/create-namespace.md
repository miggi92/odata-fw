---
title: Create namespace
---
#  {{ $frontmatter.title }}

To create a namespace, just enter the namespace you want to use and define weather it is a [global namespace](#global-namespace) or not. The name should match the name that you used in the [DPC](../definitions/DPC) and [MPC](../definitions/MPC) framework methods mention in the [Creating a service](../Creating-a-service) file ([Implement the framework MPC method](../Creating-a-service#implement-the-framework-mpc-method) / [Implementing the framework DPC methods](../Creating-a-service#implementing-the-framework-dpc-methods) )

![Create namespace](./attachments/cust_create_namespace.png)  

## Global Namespace

A global namespace is appended to **every** OData Service that is using this framework. It might be useful for some global entities such as a "document" entity.
