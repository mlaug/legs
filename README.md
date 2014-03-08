# Legs

[![Build Status](https://travis-ci.org/feathersjs/legs.png?branch=master)](https://travis-ci.org/feathersjs/legs)

A collection of services providing an easy connection to different kinds of Backends.
Legs works great with [Feathers](https://github.com/feathersjs/feathers)

## Service interface

## Extension and customization

You can extend an already implemented service by adding an object as second parameter like

   var myTodoService = legs.mongodb(
       {
           collection: 'myTodoService',
           connectionString: 'mongodb://127.0.0.1:27017/configtool'
       },
       {
           get: function (id, params, cb) {
               console.log("I am an extended method");

               // this should be called every time to
               // base functionality
               this._super(id, params, cb);
           }
       }
   );

## Parameters

## Services

### Memory

### MongoDB
