import { Schema, Query, schemaFactory } from 'graphql-schema-decorator';
import { GraphQLSchema, graphql } from 'graphql';
import { RootQuery } from './root-query';

@Schema()
class SchemaType {

    @Query() query: RootQuery;

}

/**
 * Schema that can be used to perform graphql queries against.
 */
const schema: GraphQLSchema = schemaFactory(SchemaType);


async function main() {
    const result = await graphql(schema, `query { example { foo, foo2, thisProperties, rootProperties } } `);
    console.log(result);
}

main().catch((err) => {
    console.error('error occurred', err);
})