# Adonis Repository

adonisjs some tools

## 📦 Installing

Simply run the following commands on your shell

```bash
npm install @lu7766lu7766/adonis-utils
node ace invoke @lu7766lu7766/adonis-utils
```

## 📌 Example

> Inject service in class
>
> > you can use inject to instead this case in normal situation, but there are some exceptions etc: seeders, so you can use this

```ts
// seeders/index.ts
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { InjectService } from "@ioc:Adonis/Repository"
import UserService from "App/Service/UserService"

class Seeder extends BaseSeeder {
  @InjectService(UserService)
  private service: UserService

  // or
  // @InjectService() // auto inject the type you declare
  // private service: UserService

  async run() {
    this.service......
  }
}
```

## 📝 Contributing

If you find any issue, bug or missing feature, please kindly create an issue or submit a pull request.
