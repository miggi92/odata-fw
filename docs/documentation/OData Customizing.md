---
title: OData Customizing
description: OData Customizing
tags:
  - customizing
date created: Wednesday, August 23rd 2023, 6:18:18 pm
date modified: Tuesday, September 5th 2023, 5:38:06 pm
---
# OData Customizing

## Transaction

Transactioncode: **ZODATA_CUST**

> [!info]
> This transaction is calling the "SM34" transaction code with the view cluster name.
> So make sure, that you have the permissions to change entries in the view cluster "ZODATA_VC".

## Create Namespace

To create a namespace, just enter the namespace you want to use and define weather it is a [[#global namespace]] or not. The name should match the name that you used in the [[DPC]] and [[MPC]] framework methods mention in the [[Creating a service]] file ([[Creating a service#Implement the framework MPC method]] / [[Creating a service#Implementing the framework DPC methods]] )

![[cust_create_namespace.png]]  

### Global Namespace

A global namespace is appended to **every** OData Service that is using this framework. It might be useful for some global entities such as a "document" entity.

## Define Entities

To define entities you need to select the namespace you want to define an entity for.

![[cust_define_entity.png]]

The classes added to the customizing should inherit from "[[ZCL_ODATA_MAIN]]" class.

## Define Properties

>[!warning]
>Still not documented

## Navigation Properties / Associations

A navigation property also known as association can easily be created via customizing. The navigation properties are defined under an entity. 

![[cust_nav_prop_tree.png]]

Just enter the navigation property name, the entity you want to navigate from and the entity you want to navigate to and at least the relation of that navigation.

![[nav_prop_cust.png]]
