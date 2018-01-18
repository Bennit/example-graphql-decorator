import { ObjectType, Field, Ctx } from 'graphql-schema-decorator';
import { ExampleType } from './example-type';

@ObjectType()
export class RootQuery {

    @Field({type: ExampleType }) example() {
        return new ExampleType({ foo: 'bar' });
    }
    
}
