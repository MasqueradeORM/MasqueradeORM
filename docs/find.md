## Find


```js
await ExampleClass.find(findObj)
```

The find method is the most complex part of the ORM - **IntelliSense is your friend.**

It accepts a single argument, findObj, which contains three optional fields.
Because all fields are optional, findObj itself may be an empty object — although this is rarely useful, as it would return all instances of ExampleClass.

The three optional fields are:

- relations
- where
- relationalWhere

Note: findObj is fully covered by IntelliSense. You are strongly encouraged to rely on it.


### 'relations' field:

The 'relations' field determines which relations are eagerly loaded from the database.

A crucial detail to understand is that relations are never filtered.
They are either loaded or not — the ORM never displays partial relational data.

```js
// assume that relationalProp is a property of type SomeClass or SomeClass[]
await ExampleClass.find(
    {
        relations: {relationalProp: true},
        where: {
            relationalProp: {
                id: 57
            }
        }
    }
)
```

The example above translates to:   
**“Fetch all instances of ExampleClass whose relationalProp contains a SomeClass instance with id = 57.”**

In other words, the condition matches when either of the following is true:    
```js
exampleClassInstance.relationalProp = someClassId57
```    
or    
```js
exampleClassInstance.relationalProp = [someClassId57, ...rest]
```    

### 'where' field:

The 'where' field is for filtering the root instances, in the following case, Chat instances.
```js
await Chat.find({
    where: {
        messages: {
            sender: {
                id: 12
            }
        }
    }
})
```
Translation: **“Find all chats that contain a message from a user with the id 12, without loading messages.“**     

Something to note is that the scope of the where condtions is agnostic to the scope of the relations/eager loading.       
It is completely safe to filter based on specific relations without having said relations passed into the 'relations' field.      

```js
await Angel.find({
    where: {
        // Name is either "Micheal" OR "Gabriel"
        name: OR("Micheal", "Gabriel"),

        // demonsSentToAbyss is greater than 12,000 AND less than 57,000
        demonsSentToAbyss: AND(sql`> 12000`, sql`< 57000`),
    }
})
```

```js
await User.find({
    where: {
        // donations between 1,200 and 5,700 cents (exclusive)
        donations: sql`1200 < # AND # < 5700`, 
        // similar to the example above, but instead of having an implicit # placeholder inserted
        // into the left side of the sql statement string, here #'s are written explicitly

        // registered using a Gmail email
        email: sql`LIKE '%@gmail.com%'`,
    }
})
```

### 'relationalWhere' field:

```js
await User.find({
   relationalWhere: (user) => sql`${user.chats.messages.sender.username} = 'glory2Christ'`
})
// finds users that have at least one chat that contain at least one message whose sender's username is 'glory2Christ'
```

```js
// finds users that have at least one chat that contain at least one message whose sender's username is 'glory2Christ'
await User.find({
  where: { 
    chats: {
     relationalWhere_: (chat) => sql`${chat.messages.sender.username} = 'glory2Christ'`
    }
  }
})
// identical to the previous example, but here relational where is called from a different scope.
```
