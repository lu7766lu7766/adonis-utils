# Adonis Repository

adonisjs some tools

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

  async run() {
    this.service......
  }
}
```

## 📝 Contributing

If you find any issue, bug or missing feature, please kindly create an issue or submit a pull request.
