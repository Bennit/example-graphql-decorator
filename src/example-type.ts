import { ObjectType, Field, Root } from 'graphql-schema-decorator';

export interface ExampleTypeData {
    foo: string;
}

@ObjectType()
export class ExampleType {

    constructor (private data: ExampleTypeData) {

    }

    // this one will error - this.data is undefined, however, this does contain the methods
    @Field()
    foo(): string {
        return this.data.foo;
    }

    // this one will work
    @Field()
    foo2(@Root() root: ExampleType): string {
        return root.data.foo;
    }

    @Field()
    thisProperties(): string {
        return this.properties(this);
    }

    @Field()
    rootProperties(@Root() root: ExampleType): string {
        return this.properties(root);
    }

    private properties(obj: any) {
        return Object.keys(obj).map(p => `${p} [${typeof(obj[p])}] = ${JSON.stringify(obj[p])}`).join(' | ');
    }
   
}