import { __awaiter, __decorate } from "tslib";
/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
let APIService = class APIService {
    constructor() {
        this.OnCreateTodoListener = API.graphql(graphqlOperation(`subscription OnCreateTodo {
        onCreateTodo {
          __typename
          id
          name
          description
          test {
            __typename
            id
            name
            description
            todos {
              __typename
              nextToken
            }
          }
        }
      }`));
        this.OnUpdateTodoListener = API.graphql(graphqlOperation(`subscription OnUpdateTodo {
        onUpdateTodo {
          __typename
          id
          name
          description
          test {
            __typename
            id
            name
            description
            todos {
              __typename
              nextToken
            }
          }
        }
      }`));
        this.OnDeleteTodoListener = API.graphql(graphqlOperation(`subscription OnDeleteTodo {
        onDeleteTodo {
          __typename
          id
          name
          description
          test {
            __typename
            id
            name
            description
            todos {
              __typename
              nextToken
            }
          }
        }
      }`));
        this.OnCreateTestListener = API.graphql(graphqlOperation(`subscription OnCreateTest {
        onCreateTest {
          __typename
          id
          name
          description
          todos {
            __typename
            items {
              __typename
              id
              name
              description
            }
            nextToken
          }
        }
      }`));
        this.OnUpdateTestListener = API.graphql(graphqlOperation(`subscription OnUpdateTest {
        onUpdateTest {
          __typename
          id
          name
          description
          todos {
            __typename
            items {
              __typename
              id
              name
              description
            }
            nextToken
          }
        }
      }`));
        this.OnDeleteTestListener = API.graphql(graphqlOperation(`subscription OnDeleteTest {
        onDeleteTest {
          __typename
          id
          name
          description
          todos {
            __typename
            items {
              __typename
              id
              name
              description
            }
            nextToken
          }
        }
      }`));
    }
    CreateTodo(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const statement = `mutation CreateTodo($input: CreateTodoInput!) {
        createTodo(input: $input) {
          __typename
          id
          name
          description
          test {
            __typename
            id
            name
            description
            todos {
              __typename
              nextToken
            }
          }
        }
      }`;
            const gqlAPIServiceArguments = {
                input
            };
            const response = (yield API.graphql(graphqlOperation(statement, gqlAPIServiceArguments)));
            return response.data.createTodo;
        });
    }
    UpdateTodo(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const statement = `mutation UpdateTodo($input: UpdateTodoInput!) {
        updateTodo(input: $input) {
          __typename
          id
          name
          description
          test {
            __typename
            id
            name
            description
            todos {
              __typename
              nextToken
            }
          }
        }
      }`;
            const gqlAPIServiceArguments = {
                input
            };
            const response = (yield API.graphql(graphqlOperation(statement, gqlAPIServiceArguments)));
            return response.data.updateTodo;
        });
    }
    DeleteTodo(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const statement = `mutation DeleteTodo($input: DeleteTodoInput!) {
        deleteTodo(input: $input) {
          __typename
          id
          name
          description
          test {
            __typename
            id
            name
            description
            todos {
              __typename
              nextToken
            }
          }
        }
      }`;
            const gqlAPIServiceArguments = {
                input
            };
            const response = (yield API.graphql(graphqlOperation(statement, gqlAPIServiceArguments)));
            return response.data.deleteTodo;
        });
    }
    CreateTest(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const statement = `mutation CreateTest($input: CreateTestInput!) {
        createTest(input: $input) {
          __typename
          id
          name
          description
          todos {
            __typename
            items {
              __typename
              id
              name
              description
            }
            nextToken
          }
        }
      }`;
            const gqlAPIServiceArguments = {
                input
            };
            const response = (yield API.graphql(graphqlOperation(statement, gqlAPIServiceArguments)));
            return response.data.createTest;
        });
    }
    UpdateTest(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const statement = `mutation UpdateTest($input: UpdateTestInput!) {
        updateTest(input: $input) {
          __typename
          id
          name
          description
          todos {
            __typename
            items {
              __typename
              id
              name
              description
            }
            nextToken
          }
        }
      }`;
            const gqlAPIServiceArguments = {
                input
            };
            const response = (yield API.graphql(graphqlOperation(statement, gqlAPIServiceArguments)));
            return response.data.updateTest;
        });
    }
    DeleteTest(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const statement = `mutation DeleteTest($input: DeleteTestInput!) {
        deleteTest(input: $input) {
          __typename
          id
          name
          description
          todos {
            __typename
            items {
              __typename
              id
              name
              description
            }
            nextToken
          }
        }
      }`;
            const gqlAPIServiceArguments = {
                input
            };
            const response = (yield API.graphql(graphqlOperation(statement, gqlAPIServiceArguments)));
            return response.data.deleteTest;
        });
    }
    GetTodo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const statement = `query GetTodo($id: ID!) {
        getTodo(id: $id) {
          __typename
          id
          name
          description
          test {
            __typename
            id
            name
            description
            todos {
              __typename
              nextToken
            }
          }
        }
      }`;
            const gqlAPIServiceArguments = {
                id
            };
            const response = (yield API.graphql(graphqlOperation(statement, gqlAPIServiceArguments)));
            return response.data.getTodo;
        });
    }
    ListTodos(filter, limit, nextToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const statement = `query ListTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String) {
        listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            test {
              __typename
              id
              name
              description
            }
          }
          nextToken
        }
      }`;
            const gqlAPIServiceArguments = {};
            if (filter) {
                gqlAPIServiceArguments.filter = filter;
            }
            if (limit) {
                gqlAPIServiceArguments.limit = limit;
            }
            if (nextToken) {
                gqlAPIServiceArguments.nextToken = nextToken;
            }
            const response = (yield API.graphql(graphqlOperation(statement, gqlAPIServiceArguments)));
            return response.data.listTodos;
        });
    }
    GetTest(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const statement = `query GetTest($id: ID!) {
        getTest(id: $id) {
          __typename
          id
          name
          description
          todos {
            __typename
            items {
              __typename
              id
              name
              description
            }
            nextToken
          }
        }
      }`;
            const gqlAPIServiceArguments = {
                id
            };
            const response = (yield API.graphql(graphqlOperation(statement, gqlAPIServiceArguments)));
            return response.data.getTest;
        });
    }
    ListTests(filter, limit, nextToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const statement = `query ListTests($filter: ModelTestFilterInput, $limit: Int, $nextToken: String) {
        listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            todos {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
            const gqlAPIServiceArguments = {};
            if (filter) {
                gqlAPIServiceArguments.filter = filter;
            }
            if (limit) {
                gqlAPIServiceArguments.limit = limit;
            }
            if (nextToken) {
                gqlAPIServiceArguments.nextToken = nextToken;
            }
            const response = (yield API.graphql(graphqlOperation(statement, gqlAPIServiceArguments)));
            return response.data.listTests;
        });
    }
};
APIService = __decorate([
    Injectable({
        providedIn: "root"
    })
], APIService);
export { APIService };
//# sourceMappingURL=API.service.js.map