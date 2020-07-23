import { HttpRequest } from './common/http-request.ts';
import { Controller } from './decorators/controller.ts';
import { Mapping } from './decorators/mapping.ts';
import { HttpMethod } from './common/http.ts';
import { ReverbApplication } from './core/app.ts';
import { Body } from './decorators/parameter.ts';
import { Module } from './decorators/module.ts';
import './util/reflect.ts';


@Controller("/api")
class TestController {

    @Mapping(HttpMethod.GET, "/test")
    get() {
        console.log("test was run")
    }

    @Mapping(HttpMethod.GET, "/test2")
    get2(@Body() body: string) {
        console.log(body)
    }

    notMapping() {
        console.log("this is not a mapping")
    }
}

@Module({
    controllers: [TestController]
})
class AppModule { }

const app = new ReverbApplication(AppModule)

app.listen(8080)
