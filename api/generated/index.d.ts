
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Worker
 * 
 */
export type Worker = $Result.DefaultSelection<Prisma.$WorkerPayload>
/**
 * Model Machine
 * 
 */
export type Machine = $Result.DefaultSelection<Prisma.$MachinePayload>
/**
 * Model Worksite
 * 
 */
export type Worksite = $Result.DefaultSelection<Prisma.$WorksitePayload>
/**
 * Model WorksiteCompany
 * 
 */
export type WorksiteCompany = $Result.DefaultSelection<Prisma.$WorksiteCompanyPayload>
/**
 * Model WorksiteWorker
 * 
 */
export type WorksiteWorker = $Result.DefaultSelection<Prisma.$WorksiteWorkerPayload>
/**
 * Model WorksiteMachine
 * 
 */
export type WorksiteMachine = $Result.DefaultSelection<Prisma.$WorksiteMachinePayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DocumentOwnerType: {
  COMPANY: 'COMPANY',
  WORKER: 'WORKER',
  MACHINE: 'MACHINE'
};

export type DocumentOwnerType = (typeof DocumentOwnerType)[keyof typeof DocumentOwnerType]


export const DocumentStatus: {
  VALID: 'VALID',
  EXPIRING: 'EXPIRING',
  EXPIRED: 'EXPIRED',
  MISSING: 'MISSING',
  PENDING_REVIEW: 'PENDING_REVIEW',
  REJECTED: 'REJECTED'
};

export type DocumentStatus = (typeof DocumentStatus)[keyof typeof DocumentStatus]

}

export type DocumentOwnerType = $Enums.DocumentOwnerType

export const DocumentOwnerType: typeof $Enums.DocumentOwnerType

export type DocumentStatus = $Enums.DocumentStatus

export const DocumentStatus: typeof $Enums.DocumentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.worker`: Exposes CRUD operations for the **Worker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workers
    * const workers = await prisma.worker.findMany()
    * ```
    */
  get worker(): Prisma.WorkerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.machine`: Exposes CRUD operations for the **Machine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Machines
    * const machines = await prisma.machine.findMany()
    * ```
    */
  get machine(): Prisma.MachineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.worksite`: Exposes CRUD operations for the **Worksite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Worksites
    * const worksites = await prisma.worksite.findMany()
    * ```
    */
  get worksite(): Prisma.WorksiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.worksiteCompany`: Exposes CRUD operations for the **WorksiteCompany** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorksiteCompanies
    * const worksiteCompanies = await prisma.worksiteCompany.findMany()
    * ```
    */
  get worksiteCompany(): Prisma.WorksiteCompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.worksiteWorker`: Exposes CRUD operations for the **WorksiteWorker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorksiteWorkers
    * const worksiteWorkers = await prisma.worksiteWorker.findMany()
    * ```
    */
  get worksiteWorker(): Prisma.WorksiteWorkerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.worksiteMachine`: Exposes CRUD operations for the **WorksiteMachine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorksiteMachines
    * const worksiteMachines = await prisma.worksiteMachine.findMany()
    * ```
    */
  get worksiteMachine(): Prisma.WorksiteMachineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Company: 'Company',
    Worker: 'Worker',
    Machine: 'Machine',
    Worksite: 'Worksite',
    WorksiteCompany: 'WorksiteCompany',
    WorksiteWorker: 'WorksiteWorker',
    WorksiteMachine: 'WorksiteMachine',
    Document: 'Document'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "company" | "worker" | "machine" | "worksite" | "worksiteCompany" | "worksiteWorker" | "worksiteMachine" | "document"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Worker: {
        payload: Prisma.$WorkerPayload<ExtArgs>
        fields: Prisma.WorkerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          findFirst: {
            args: Prisma.WorkerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          findMany: {
            args: Prisma.WorkerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>[]
          }
          create: {
            args: Prisma.WorkerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          createMany: {
            args: Prisma.WorkerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>[]
          }
          delete: {
            args: Prisma.WorkerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          update: {
            args: Prisma.WorkerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          deleteMany: {
            args: Prisma.WorkerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>[]
          }
          upsert: {
            args: Prisma.WorkerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          aggregate: {
            args: Prisma.WorkerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorker>
          }
          groupBy: {
            args: Prisma.WorkerGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkerGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkerCountArgs<ExtArgs>
            result: $Utils.Optional<WorkerCountAggregateOutputType> | number
          }
        }
      }
      Machine: {
        payload: Prisma.$MachinePayload<ExtArgs>
        fields: Prisma.MachineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MachineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MachineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload>
          }
          findFirst: {
            args: Prisma.MachineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MachineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload>
          }
          findMany: {
            args: Prisma.MachineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload>[]
          }
          create: {
            args: Prisma.MachineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload>
          }
          createMany: {
            args: Prisma.MachineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MachineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload>[]
          }
          delete: {
            args: Prisma.MachineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload>
          }
          update: {
            args: Prisma.MachineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload>
          }
          deleteMany: {
            args: Prisma.MachineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MachineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MachineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload>[]
          }
          upsert: {
            args: Prisma.MachineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload>
          }
          aggregate: {
            args: Prisma.MachineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMachine>
          }
          groupBy: {
            args: Prisma.MachineGroupByArgs<ExtArgs>
            result: $Utils.Optional<MachineGroupByOutputType>[]
          }
          count: {
            args: Prisma.MachineCountArgs<ExtArgs>
            result: $Utils.Optional<MachineCountAggregateOutputType> | number
          }
        }
      }
      Worksite: {
        payload: Prisma.$WorksitePayload<ExtArgs>
        fields: Prisma.WorksiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorksiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorksiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksitePayload>
          }
          findFirst: {
            args: Prisma.WorksiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorksiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksitePayload>
          }
          findMany: {
            args: Prisma.WorksiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksitePayload>[]
          }
          create: {
            args: Prisma.WorksiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksitePayload>
          }
          createMany: {
            args: Prisma.WorksiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorksiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksitePayload>[]
          }
          delete: {
            args: Prisma.WorksiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksitePayload>
          }
          update: {
            args: Prisma.WorksiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksitePayload>
          }
          deleteMany: {
            args: Prisma.WorksiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorksiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorksiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksitePayload>[]
          }
          upsert: {
            args: Prisma.WorksiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksitePayload>
          }
          aggregate: {
            args: Prisma.WorksiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorksite>
          }
          groupBy: {
            args: Prisma.WorksiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorksiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorksiteCountArgs<ExtArgs>
            result: $Utils.Optional<WorksiteCountAggregateOutputType> | number
          }
        }
      }
      WorksiteCompany: {
        payload: Prisma.$WorksiteCompanyPayload<ExtArgs>
        fields: Prisma.WorksiteCompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorksiteCompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteCompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorksiteCompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteCompanyPayload>
          }
          findFirst: {
            args: Prisma.WorksiteCompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteCompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorksiteCompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteCompanyPayload>
          }
          findMany: {
            args: Prisma.WorksiteCompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteCompanyPayload>[]
          }
          create: {
            args: Prisma.WorksiteCompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteCompanyPayload>
          }
          createMany: {
            args: Prisma.WorksiteCompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorksiteCompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteCompanyPayload>[]
          }
          delete: {
            args: Prisma.WorksiteCompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteCompanyPayload>
          }
          update: {
            args: Prisma.WorksiteCompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteCompanyPayload>
          }
          deleteMany: {
            args: Prisma.WorksiteCompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorksiteCompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorksiteCompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteCompanyPayload>[]
          }
          upsert: {
            args: Prisma.WorksiteCompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteCompanyPayload>
          }
          aggregate: {
            args: Prisma.WorksiteCompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorksiteCompany>
          }
          groupBy: {
            args: Prisma.WorksiteCompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorksiteCompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorksiteCompanyCountArgs<ExtArgs>
            result: $Utils.Optional<WorksiteCompanyCountAggregateOutputType> | number
          }
        }
      }
      WorksiteWorker: {
        payload: Prisma.$WorksiteWorkerPayload<ExtArgs>
        fields: Prisma.WorksiteWorkerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorksiteWorkerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteWorkerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorksiteWorkerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteWorkerPayload>
          }
          findFirst: {
            args: Prisma.WorksiteWorkerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteWorkerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorksiteWorkerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteWorkerPayload>
          }
          findMany: {
            args: Prisma.WorksiteWorkerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteWorkerPayload>[]
          }
          create: {
            args: Prisma.WorksiteWorkerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteWorkerPayload>
          }
          createMany: {
            args: Prisma.WorksiteWorkerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorksiteWorkerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteWorkerPayload>[]
          }
          delete: {
            args: Prisma.WorksiteWorkerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteWorkerPayload>
          }
          update: {
            args: Prisma.WorksiteWorkerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteWorkerPayload>
          }
          deleteMany: {
            args: Prisma.WorksiteWorkerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorksiteWorkerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorksiteWorkerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteWorkerPayload>[]
          }
          upsert: {
            args: Prisma.WorksiteWorkerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteWorkerPayload>
          }
          aggregate: {
            args: Prisma.WorksiteWorkerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorksiteWorker>
          }
          groupBy: {
            args: Prisma.WorksiteWorkerGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorksiteWorkerGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorksiteWorkerCountArgs<ExtArgs>
            result: $Utils.Optional<WorksiteWorkerCountAggregateOutputType> | number
          }
        }
      }
      WorksiteMachine: {
        payload: Prisma.$WorksiteMachinePayload<ExtArgs>
        fields: Prisma.WorksiteMachineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorksiteMachineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteMachinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorksiteMachineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteMachinePayload>
          }
          findFirst: {
            args: Prisma.WorksiteMachineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteMachinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorksiteMachineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteMachinePayload>
          }
          findMany: {
            args: Prisma.WorksiteMachineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteMachinePayload>[]
          }
          create: {
            args: Prisma.WorksiteMachineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteMachinePayload>
          }
          createMany: {
            args: Prisma.WorksiteMachineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorksiteMachineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteMachinePayload>[]
          }
          delete: {
            args: Prisma.WorksiteMachineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteMachinePayload>
          }
          update: {
            args: Prisma.WorksiteMachineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteMachinePayload>
          }
          deleteMany: {
            args: Prisma.WorksiteMachineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorksiteMachineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorksiteMachineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteMachinePayload>[]
          }
          upsert: {
            args: Prisma.WorksiteMachineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksiteMachinePayload>
          }
          aggregate: {
            args: Prisma.WorksiteMachineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorksiteMachine>
          }
          groupBy: {
            args: Prisma.WorksiteMachineGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorksiteMachineGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorksiteMachineCountArgs<ExtArgs>
            result: $Utils.Optional<WorksiteMachineCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    company?: CompanyOmit
    worker?: WorkerOmit
    machine?: MachineOmit
    worksite?: WorksiteOmit
    worksiteCompany?: WorksiteCompanyOmit
    worksiteWorker?: WorksiteWorkerOmit
    worksiteMachine?: WorksiteMachineOmit
    document?: DocumentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    workers: number
    machines: number
    worksites: number
    documents: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workers?: boolean | CompanyCountOutputTypeCountWorkersArgs
    machines?: boolean | CompanyCountOutputTypeCountMachinesArgs
    worksites?: boolean | CompanyCountOutputTypeCountWorksitesArgs
    documents?: boolean | CompanyCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountWorkersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkerWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountMachinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MachineWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountWorksitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorksiteCompanyWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }


  /**
   * Count Type WorkerCountOutputType
   */

  export type WorkerCountOutputType = {
    worksites: number
    documents: number
  }

  export type WorkerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worksites?: boolean | WorkerCountOutputTypeCountWorksitesArgs
    documents?: boolean | WorkerCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * WorkerCountOutputType without action
   */
  export type WorkerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerCountOutputType
     */
    select?: WorkerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkerCountOutputType without action
   */
  export type WorkerCountOutputTypeCountWorksitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorksiteWorkerWhereInput
  }

  /**
   * WorkerCountOutputType without action
   */
  export type WorkerCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }


  /**
   * Count Type MachineCountOutputType
   */

  export type MachineCountOutputType = {
    worksites: number
    documents: number
  }

  export type MachineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worksites?: boolean | MachineCountOutputTypeCountWorksitesArgs
    documents?: boolean | MachineCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * MachineCountOutputType without action
   */
  export type MachineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineCountOutputType
     */
    select?: MachineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MachineCountOutputType without action
   */
  export type MachineCountOutputTypeCountWorksitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorksiteMachineWhereInput
  }

  /**
   * MachineCountOutputType without action
   */
  export type MachineCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }


  /**
   * Count Type WorksiteCountOutputType
   */

  export type WorksiteCountOutputType = {
    companies: number
    workers: number
    machines: number
  }

  export type WorksiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | WorksiteCountOutputTypeCountCompaniesArgs
    workers?: boolean | WorksiteCountOutputTypeCountWorkersArgs
    machines?: boolean | WorksiteCountOutputTypeCountMachinesArgs
  }

  // Custom InputTypes
  /**
   * WorksiteCountOutputType without action
   */
  export type WorksiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteCountOutputType
     */
    select?: WorksiteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorksiteCountOutputType without action
   */
  export type WorksiteCountOutputTypeCountCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorksiteCompanyWhereInput
  }

  /**
   * WorksiteCountOutputType without action
   */
  export type WorksiteCountOutputTypeCountWorkersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorksiteWorkerWhereInput
  }

  /**
   * WorksiteCountOutputType without action
   */
  export type WorksiteCountOutputTypeCountMachinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorksiteMachineWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    emailMain: string | null
    emailSub: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    emailMain: string | null
    emailSub: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    emailMain: number
    emailSub: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    emailMain?: true
    emailSub?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    emailMain?: true
    emailSub?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    emailMain?: true
    emailSub?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    isActive: boolean
    emailMain: string | null
    emailSub: string | null
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    emailMain?: boolean
    emailSub?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workers?: boolean | Company$workersArgs<ExtArgs>
    machines?: boolean | Company$machinesArgs<ExtArgs>
    worksites?: boolean | Company$worksitesArgs<ExtArgs>
    documents?: boolean | Company$documentsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    emailMain?: boolean
    emailSub?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    emailMain?: boolean
    emailSub?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    emailMain?: boolean
    emailSub?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isActive" | "emailMain" | "emailSub" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workers?: boolean | Company$workersArgs<ExtArgs>
    machines?: boolean | Company$machinesArgs<ExtArgs>
    worksites?: boolean | Company$worksitesArgs<ExtArgs>
    documents?: boolean | Company$documentsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      workers: Prisma.$WorkerPayload<ExtArgs>[]
      machines: Prisma.$MachinePayload<ExtArgs>[]
      worksites: Prisma.$WorksiteCompanyPayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      isActive: boolean
      emailMain: string | null
      emailSub: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workers<T extends Company$workersArgs<ExtArgs> = {}>(args?: Subset<T, Company$workersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    machines<T extends Company$machinesArgs<ExtArgs> = {}>(args?: Subset<T, Company$machinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    worksites<T extends Company$worksitesArgs<ExtArgs> = {}>(args?: Subset<T, Company$worksitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksiteCompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Company$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Company$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly isActive: FieldRef<"Company", 'Boolean'>
    readonly emailMain: FieldRef<"Company", 'String'>
    readonly emailSub: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.workers
   */
  export type Company$workersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    where?: WorkerWhereInput
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    cursor?: WorkerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * Company.machines
   */
  export type Company$machinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    where?: MachineWhereInput
    orderBy?: MachineOrderByWithRelationInput | MachineOrderByWithRelationInput[]
    cursor?: MachineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MachineScalarFieldEnum | MachineScalarFieldEnum[]
  }

  /**
   * Company.worksites
   */
  export type Company$worksitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteCompany
     */
    select?: WorksiteCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteCompany
     */
    omit?: WorksiteCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteCompanyInclude<ExtArgs> | null
    where?: WorksiteCompanyWhereInput
    orderBy?: WorksiteCompanyOrderByWithRelationInput | WorksiteCompanyOrderByWithRelationInput[]
    cursor?: WorksiteCompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorksiteCompanyScalarFieldEnum | WorksiteCompanyScalarFieldEnum[]
  }

  /**
   * Company.documents
   */
  export type Company$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model Worker
   */

  export type AggregateWorker = {
    _count: WorkerCountAggregateOutputType | null
    _min: WorkerMinAggregateOutputType | null
    _max: WorkerMaxAggregateOutputType | null
  }

  export type WorkerMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    isActive: boolean | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkerMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    isActive: boolean | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkerCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    isActive: number
    companyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkerMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    isActive?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkerMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    isActive?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkerCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    isActive?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Worker to aggregate.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workers
    **/
    _count?: true | WorkerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkerMaxAggregateInputType
  }

  export type GetWorkerAggregateType<T extends WorkerAggregateArgs> = {
        [P in keyof T & keyof AggregateWorker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorker[P]>
      : GetScalarType<T[P], AggregateWorker[P]>
  }




  export type WorkerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkerWhereInput
    orderBy?: WorkerOrderByWithAggregationInput | WorkerOrderByWithAggregationInput[]
    by: WorkerScalarFieldEnum[] | WorkerScalarFieldEnum
    having?: WorkerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkerCountAggregateInputType | true
    _min?: WorkerMinAggregateInputType
    _max?: WorkerMaxAggregateInputType
  }

  export type WorkerGroupByOutputType = {
    id: string
    fullName: string
    email: string
    isActive: boolean
    companyId: string
    createdAt: Date
    updatedAt: Date
    _count: WorkerCountAggregateOutputType | null
    _min: WorkerMinAggregateOutputType | null
    _max: WorkerMaxAggregateOutputType | null
  }

  type GetWorkerGroupByPayload<T extends WorkerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkerGroupByOutputType[P]>
            : GetScalarType<T[P], WorkerGroupByOutputType[P]>
        }
      >
    >


  export type WorkerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    isActive?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    worksites?: boolean | Worker$worksitesArgs<ExtArgs>
    documents?: boolean | Worker$documentsArgs<ExtArgs>
    _count?: boolean | WorkerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worker"]>

  export type WorkerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    isActive?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worker"]>

  export type WorkerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    isActive?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worker"]>

  export type WorkerSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    isActive?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "isActive" | "companyId" | "createdAt" | "updatedAt", ExtArgs["result"]["worker"]>
  export type WorkerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    worksites?: boolean | Worker$worksitesArgs<ExtArgs>
    documents?: boolean | Worker$documentsArgs<ExtArgs>
    _count?: boolean | WorkerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type WorkerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $WorkerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Worker"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      worksites: Prisma.$WorksiteWorkerPayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      isActive: boolean
      companyId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["worker"]>
    composites: {}
  }

  type WorkerGetPayload<S extends boolean | null | undefined | WorkerDefaultArgs> = $Result.GetResult<Prisma.$WorkerPayload, S>

  type WorkerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkerCountAggregateInputType | true
    }

  export interface WorkerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Worker'], meta: { name: 'Worker' } }
    /**
     * Find zero or one Worker that matches the filter.
     * @param {WorkerFindUniqueArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkerFindUniqueArgs>(args: SelectSubset<T, WorkerFindUniqueArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Worker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkerFindUniqueOrThrowArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkerFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Worker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerFindFirstArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkerFindFirstArgs>(args?: SelectSubset<T, WorkerFindFirstArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Worker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerFindFirstOrThrowArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkerFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkerFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workers
     * const workers = await prisma.worker.findMany()
     * 
     * // Get first 10 Workers
     * const workers = await prisma.worker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workerWithIdOnly = await prisma.worker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkerFindManyArgs>(args?: SelectSubset<T, WorkerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Worker.
     * @param {WorkerCreateArgs} args - Arguments to create a Worker.
     * @example
     * // Create one Worker
     * const Worker = await prisma.worker.create({
     *   data: {
     *     // ... data to create a Worker
     *   }
     * })
     * 
     */
    create<T extends WorkerCreateArgs>(args: SelectSubset<T, WorkerCreateArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workers.
     * @param {WorkerCreateManyArgs} args - Arguments to create many Workers.
     * @example
     * // Create many Workers
     * const worker = await prisma.worker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkerCreateManyArgs>(args?: SelectSubset<T, WorkerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workers and returns the data saved in the database.
     * @param {WorkerCreateManyAndReturnArgs} args - Arguments to create many Workers.
     * @example
     * // Create many Workers
     * const worker = await prisma.worker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workers and only return the `id`
     * const workerWithIdOnly = await prisma.worker.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkerCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Worker.
     * @param {WorkerDeleteArgs} args - Arguments to delete one Worker.
     * @example
     * // Delete one Worker
     * const Worker = await prisma.worker.delete({
     *   where: {
     *     // ... filter to delete one Worker
     *   }
     * })
     * 
     */
    delete<T extends WorkerDeleteArgs>(args: SelectSubset<T, WorkerDeleteArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Worker.
     * @param {WorkerUpdateArgs} args - Arguments to update one Worker.
     * @example
     * // Update one Worker
     * const worker = await prisma.worker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkerUpdateArgs>(args: SelectSubset<T, WorkerUpdateArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workers.
     * @param {WorkerDeleteManyArgs} args - Arguments to filter Workers to delete.
     * @example
     * // Delete a few Workers
     * const { count } = await prisma.worker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkerDeleteManyArgs>(args?: SelectSubset<T, WorkerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workers
     * const worker = await prisma.worker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkerUpdateManyArgs>(args: SelectSubset<T, WorkerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workers and returns the data updated in the database.
     * @param {WorkerUpdateManyAndReturnArgs} args - Arguments to update many Workers.
     * @example
     * // Update many Workers
     * const worker = await prisma.worker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workers and only return the `id`
     * const workerWithIdOnly = await prisma.worker.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkerUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Worker.
     * @param {WorkerUpsertArgs} args - Arguments to update or create a Worker.
     * @example
     * // Update or create a Worker
     * const worker = await prisma.worker.upsert({
     *   create: {
     *     // ... data to create a Worker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Worker we want to update
     *   }
     * })
     */
    upsert<T extends WorkerUpsertArgs>(args: SelectSubset<T, WorkerUpsertArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerCountArgs} args - Arguments to filter Workers to count.
     * @example
     * // Count the number of Workers
     * const count = await prisma.worker.count({
     *   where: {
     *     // ... the filter for the Workers we want to count
     *   }
     * })
    **/
    count<T extends WorkerCountArgs>(
      args?: Subset<T, WorkerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Worker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkerAggregateArgs>(args: Subset<T, WorkerAggregateArgs>): Prisma.PrismaPromise<GetWorkerAggregateType<T>>

    /**
     * Group by Worker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkerGroupByArgs['orderBy'] }
        : { orderBy?: WorkerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Worker model
   */
  readonly fields: WorkerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Worker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    worksites<T extends Worker$worksitesArgs<ExtArgs> = {}>(args?: Subset<T, Worker$worksitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksiteWorkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Worker$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Worker$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Worker model
   */
  interface WorkerFieldRefs {
    readonly id: FieldRef<"Worker", 'String'>
    readonly fullName: FieldRef<"Worker", 'String'>
    readonly email: FieldRef<"Worker", 'String'>
    readonly isActive: FieldRef<"Worker", 'Boolean'>
    readonly companyId: FieldRef<"Worker", 'String'>
    readonly createdAt: FieldRef<"Worker", 'DateTime'>
    readonly updatedAt: FieldRef<"Worker", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Worker findUnique
   */
  export type WorkerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker findUniqueOrThrow
   */
  export type WorkerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker findFirst
   */
  export type WorkerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workers.
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workers.
     */
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * Worker findFirstOrThrow
   */
  export type WorkerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workers.
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workers.
     */
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * Worker findMany
   */
  export type WorkerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Workers to fetch.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workers.
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * Worker create
   */
  export type WorkerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * The data needed to create a Worker.
     */
    data: XOR<WorkerCreateInput, WorkerUncheckedCreateInput>
  }

  /**
   * Worker createMany
   */
  export type WorkerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workers.
     */
    data: WorkerCreateManyInput | WorkerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Worker createManyAndReturn
   */
  export type WorkerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * The data used to create many Workers.
     */
    data: WorkerCreateManyInput | WorkerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Worker update
   */
  export type WorkerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * The data needed to update a Worker.
     */
    data: XOR<WorkerUpdateInput, WorkerUncheckedUpdateInput>
    /**
     * Choose, which Worker to update.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker updateMany
   */
  export type WorkerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workers.
     */
    data: XOR<WorkerUpdateManyMutationInput, WorkerUncheckedUpdateManyInput>
    /**
     * Filter which Workers to update
     */
    where?: WorkerWhereInput
    /**
     * Limit how many Workers to update.
     */
    limit?: number
  }

  /**
   * Worker updateManyAndReturn
   */
  export type WorkerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * The data used to update Workers.
     */
    data: XOR<WorkerUpdateManyMutationInput, WorkerUncheckedUpdateManyInput>
    /**
     * Filter which Workers to update
     */
    where?: WorkerWhereInput
    /**
     * Limit how many Workers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Worker upsert
   */
  export type WorkerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * The filter to search for the Worker to update in case it exists.
     */
    where: WorkerWhereUniqueInput
    /**
     * In case the Worker found by the `where` argument doesn't exist, create a new Worker with this data.
     */
    create: XOR<WorkerCreateInput, WorkerUncheckedCreateInput>
    /**
     * In case the Worker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkerUpdateInput, WorkerUncheckedUpdateInput>
  }

  /**
   * Worker delete
   */
  export type WorkerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter which Worker to delete.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker deleteMany
   */
  export type WorkerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workers to delete
     */
    where?: WorkerWhereInput
    /**
     * Limit how many Workers to delete.
     */
    limit?: number
  }

  /**
   * Worker.worksites
   */
  export type Worker$worksitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteWorker
     */
    select?: WorksiteWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteWorker
     */
    omit?: WorksiteWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteWorkerInclude<ExtArgs> | null
    where?: WorksiteWorkerWhereInput
    orderBy?: WorksiteWorkerOrderByWithRelationInput | WorksiteWorkerOrderByWithRelationInput[]
    cursor?: WorksiteWorkerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorksiteWorkerScalarFieldEnum | WorksiteWorkerScalarFieldEnum[]
  }

  /**
   * Worker.documents
   */
  export type Worker$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Worker without action
   */
  export type WorkerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
  }


  /**
   * Model Machine
   */

  export type AggregateMachine = {
    _count: MachineCountAggregateOutputType | null
    _min: MachineMinAggregateOutputType | null
    _max: MachineMaxAggregateOutputType | null
  }

  export type MachineMinAggregateOutputType = {
    id: string | null
    name: string | null
    serial: string | null
    isActive: boolean | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MachineMaxAggregateOutputType = {
    id: string | null
    name: string | null
    serial: string | null
    isActive: boolean | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MachineCountAggregateOutputType = {
    id: number
    name: number
    serial: number
    isActive: number
    companyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MachineMinAggregateInputType = {
    id?: true
    name?: true
    serial?: true
    isActive?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MachineMaxAggregateInputType = {
    id?: true
    name?: true
    serial?: true
    isActive?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MachineCountAggregateInputType = {
    id?: true
    name?: true
    serial?: true
    isActive?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MachineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Machine to aggregate.
     */
    where?: MachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Machines to fetch.
     */
    orderBy?: MachineOrderByWithRelationInput | MachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Machines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Machines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Machines
    **/
    _count?: true | MachineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MachineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MachineMaxAggregateInputType
  }

  export type GetMachineAggregateType<T extends MachineAggregateArgs> = {
        [P in keyof T & keyof AggregateMachine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMachine[P]>
      : GetScalarType<T[P], AggregateMachine[P]>
  }




  export type MachineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MachineWhereInput
    orderBy?: MachineOrderByWithAggregationInput | MachineOrderByWithAggregationInput[]
    by: MachineScalarFieldEnum[] | MachineScalarFieldEnum
    having?: MachineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MachineCountAggregateInputType | true
    _min?: MachineMinAggregateInputType
    _max?: MachineMaxAggregateInputType
  }

  export type MachineGroupByOutputType = {
    id: string
    name: string
    serial: string | null
    isActive: boolean
    companyId: string | null
    createdAt: Date
    updatedAt: Date
    _count: MachineCountAggregateOutputType | null
    _min: MachineMinAggregateOutputType | null
    _max: MachineMaxAggregateOutputType | null
  }

  type GetMachineGroupByPayload<T extends MachineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MachineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MachineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MachineGroupByOutputType[P]>
            : GetScalarType<T[P], MachineGroupByOutputType[P]>
        }
      >
    >


  export type MachineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serial?: boolean
    isActive?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | Machine$companyArgs<ExtArgs>
    worksites?: boolean | Machine$worksitesArgs<ExtArgs>
    documents?: boolean | Machine$documentsArgs<ExtArgs>
    _count?: boolean | MachineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["machine"]>

  export type MachineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serial?: boolean
    isActive?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | Machine$companyArgs<ExtArgs>
  }, ExtArgs["result"]["machine"]>

  export type MachineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serial?: boolean
    isActive?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | Machine$companyArgs<ExtArgs>
  }, ExtArgs["result"]["machine"]>

  export type MachineSelectScalar = {
    id?: boolean
    name?: boolean
    serial?: boolean
    isActive?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MachineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "serial" | "isActive" | "companyId" | "createdAt" | "updatedAt", ExtArgs["result"]["machine"]>
  export type MachineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | Machine$companyArgs<ExtArgs>
    worksites?: boolean | Machine$worksitesArgs<ExtArgs>
    documents?: boolean | Machine$documentsArgs<ExtArgs>
    _count?: boolean | MachineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MachineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | Machine$companyArgs<ExtArgs>
  }
  export type MachineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | Machine$companyArgs<ExtArgs>
  }

  export type $MachinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Machine"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs> | null
      worksites: Prisma.$WorksiteMachinePayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      serial: string | null
      isActive: boolean
      companyId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["machine"]>
    composites: {}
  }

  type MachineGetPayload<S extends boolean | null | undefined | MachineDefaultArgs> = $Result.GetResult<Prisma.$MachinePayload, S>

  type MachineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MachineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MachineCountAggregateInputType | true
    }

  export interface MachineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Machine'], meta: { name: 'Machine' } }
    /**
     * Find zero or one Machine that matches the filter.
     * @param {MachineFindUniqueArgs} args - Arguments to find a Machine
     * @example
     * // Get one Machine
     * const machine = await prisma.machine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MachineFindUniqueArgs>(args: SelectSubset<T, MachineFindUniqueArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Machine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MachineFindUniqueOrThrowArgs} args - Arguments to find a Machine
     * @example
     * // Get one Machine
     * const machine = await prisma.machine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MachineFindUniqueOrThrowArgs>(args: SelectSubset<T, MachineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Machine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineFindFirstArgs} args - Arguments to find a Machine
     * @example
     * // Get one Machine
     * const machine = await prisma.machine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MachineFindFirstArgs>(args?: SelectSubset<T, MachineFindFirstArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Machine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineFindFirstOrThrowArgs} args - Arguments to find a Machine
     * @example
     * // Get one Machine
     * const machine = await prisma.machine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MachineFindFirstOrThrowArgs>(args?: SelectSubset<T, MachineFindFirstOrThrowArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Machines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Machines
     * const machines = await prisma.machine.findMany()
     * 
     * // Get first 10 Machines
     * const machines = await prisma.machine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const machineWithIdOnly = await prisma.machine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MachineFindManyArgs>(args?: SelectSubset<T, MachineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Machine.
     * @param {MachineCreateArgs} args - Arguments to create a Machine.
     * @example
     * // Create one Machine
     * const Machine = await prisma.machine.create({
     *   data: {
     *     // ... data to create a Machine
     *   }
     * })
     * 
     */
    create<T extends MachineCreateArgs>(args: SelectSubset<T, MachineCreateArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Machines.
     * @param {MachineCreateManyArgs} args - Arguments to create many Machines.
     * @example
     * // Create many Machines
     * const machine = await prisma.machine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MachineCreateManyArgs>(args?: SelectSubset<T, MachineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Machines and returns the data saved in the database.
     * @param {MachineCreateManyAndReturnArgs} args - Arguments to create many Machines.
     * @example
     * // Create many Machines
     * const machine = await prisma.machine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Machines and only return the `id`
     * const machineWithIdOnly = await prisma.machine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MachineCreateManyAndReturnArgs>(args?: SelectSubset<T, MachineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Machine.
     * @param {MachineDeleteArgs} args - Arguments to delete one Machine.
     * @example
     * // Delete one Machine
     * const Machine = await prisma.machine.delete({
     *   where: {
     *     // ... filter to delete one Machine
     *   }
     * })
     * 
     */
    delete<T extends MachineDeleteArgs>(args: SelectSubset<T, MachineDeleteArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Machine.
     * @param {MachineUpdateArgs} args - Arguments to update one Machine.
     * @example
     * // Update one Machine
     * const machine = await prisma.machine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MachineUpdateArgs>(args: SelectSubset<T, MachineUpdateArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Machines.
     * @param {MachineDeleteManyArgs} args - Arguments to filter Machines to delete.
     * @example
     * // Delete a few Machines
     * const { count } = await prisma.machine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MachineDeleteManyArgs>(args?: SelectSubset<T, MachineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Machines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Machines
     * const machine = await prisma.machine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MachineUpdateManyArgs>(args: SelectSubset<T, MachineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Machines and returns the data updated in the database.
     * @param {MachineUpdateManyAndReturnArgs} args - Arguments to update many Machines.
     * @example
     * // Update many Machines
     * const machine = await prisma.machine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Machines and only return the `id`
     * const machineWithIdOnly = await prisma.machine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MachineUpdateManyAndReturnArgs>(args: SelectSubset<T, MachineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Machine.
     * @param {MachineUpsertArgs} args - Arguments to update or create a Machine.
     * @example
     * // Update or create a Machine
     * const machine = await prisma.machine.upsert({
     *   create: {
     *     // ... data to create a Machine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Machine we want to update
     *   }
     * })
     */
    upsert<T extends MachineUpsertArgs>(args: SelectSubset<T, MachineUpsertArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Machines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineCountArgs} args - Arguments to filter Machines to count.
     * @example
     * // Count the number of Machines
     * const count = await prisma.machine.count({
     *   where: {
     *     // ... the filter for the Machines we want to count
     *   }
     * })
    **/
    count<T extends MachineCountArgs>(
      args?: Subset<T, MachineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MachineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Machine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MachineAggregateArgs>(args: Subset<T, MachineAggregateArgs>): Prisma.PrismaPromise<GetMachineAggregateType<T>>

    /**
     * Group by Machine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MachineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MachineGroupByArgs['orderBy'] }
        : { orderBy?: MachineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MachineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMachineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Machine model
   */
  readonly fields: MachineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Machine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MachineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends Machine$companyArgs<ExtArgs> = {}>(args?: Subset<T, Machine$companyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    worksites<T extends Machine$worksitesArgs<ExtArgs> = {}>(args?: Subset<T, Machine$worksitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksiteMachinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Machine$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Machine$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Machine model
   */
  interface MachineFieldRefs {
    readonly id: FieldRef<"Machine", 'String'>
    readonly name: FieldRef<"Machine", 'String'>
    readonly serial: FieldRef<"Machine", 'String'>
    readonly isActive: FieldRef<"Machine", 'Boolean'>
    readonly companyId: FieldRef<"Machine", 'String'>
    readonly createdAt: FieldRef<"Machine", 'DateTime'>
    readonly updatedAt: FieldRef<"Machine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Machine findUnique
   */
  export type MachineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * Filter, which Machine to fetch.
     */
    where: MachineWhereUniqueInput
  }

  /**
   * Machine findUniqueOrThrow
   */
  export type MachineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * Filter, which Machine to fetch.
     */
    where: MachineWhereUniqueInput
  }

  /**
   * Machine findFirst
   */
  export type MachineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * Filter, which Machine to fetch.
     */
    where?: MachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Machines to fetch.
     */
    orderBy?: MachineOrderByWithRelationInput | MachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Machines.
     */
    cursor?: MachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Machines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Machines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Machines.
     */
    distinct?: MachineScalarFieldEnum | MachineScalarFieldEnum[]
  }

  /**
   * Machine findFirstOrThrow
   */
  export type MachineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * Filter, which Machine to fetch.
     */
    where?: MachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Machines to fetch.
     */
    orderBy?: MachineOrderByWithRelationInput | MachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Machines.
     */
    cursor?: MachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Machines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Machines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Machines.
     */
    distinct?: MachineScalarFieldEnum | MachineScalarFieldEnum[]
  }

  /**
   * Machine findMany
   */
  export type MachineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * Filter, which Machines to fetch.
     */
    where?: MachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Machines to fetch.
     */
    orderBy?: MachineOrderByWithRelationInput | MachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Machines.
     */
    cursor?: MachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Machines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Machines.
     */
    skip?: number
    distinct?: MachineScalarFieldEnum | MachineScalarFieldEnum[]
  }

  /**
   * Machine create
   */
  export type MachineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * The data needed to create a Machine.
     */
    data: XOR<MachineCreateInput, MachineUncheckedCreateInput>
  }

  /**
   * Machine createMany
   */
  export type MachineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Machines.
     */
    data: MachineCreateManyInput | MachineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Machine createManyAndReturn
   */
  export type MachineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * The data used to create many Machines.
     */
    data: MachineCreateManyInput | MachineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Machine update
   */
  export type MachineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * The data needed to update a Machine.
     */
    data: XOR<MachineUpdateInput, MachineUncheckedUpdateInput>
    /**
     * Choose, which Machine to update.
     */
    where: MachineWhereUniqueInput
  }

  /**
   * Machine updateMany
   */
  export type MachineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Machines.
     */
    data: XOR<MachineUpdateManyMutationInput, MachineUncheckedUpdateManyInput>
    /**
     * Filter which Machines to update
     */
    where?: MachineWhereInput
    /**
     * Limit how many Machines to update.
     */
    limit?: number
  }

  /**
   * Machine updateManyAndReturn
   */
  export type MachineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * The data used to update Machines.
     */
    data: XOR<MachineUpdateManyMutationInput, MachineUncheckedUpdateManyInput>
    /**
     * Filter which Machines to update
     */
    where?: MachineWhereInput
    /**
     * Limit how many Machines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Machine upsert
   */
  export type MachineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * The filter to search for the Machine to update in case it exists.
     */
    where: MachineWhereUniqueInput
    /**
     * In case the Machine found by the `where` argument doesn't exist, create a new Machine with this data.
     */
    create: XOR<MachineCreateInput, MachineUncheckedCreateInput>
    /**
     * In case the Machine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MachineUpdateInput, MachineUncheckedUpdateInput>
  }

  /**
   * Machine delete
   */
  export type MachineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * Filter which Machine to delete.
     */
    where: MachineWhereUniqueInput
  }

  /**
   * Machine deleteMany
   */
  export type MachineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Machines to delete
     */
    where?: MachineWhereInput
    /**
     * Limit how many Machines to delete.
     */
    limit?: number
  }

  /**
   * Machine.company
   */
  export type Machine$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * Machine.worksites
   */
  export type Machine$worksitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteMachine
     */
    select?: WorksiteMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteMachine
     */
    omit?: WorksiteMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteMachineInclude<ExtArgs> | null
    where?: WorksiteMachineWhereInput
    orderBy?: WorksiteMachineOrderByWithRelationInput | WorksiteMachineOrderByWithRelationInput[]
    cursor?: WorksiteMachineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorksiteMachineScalarFieldEnum | WorksiteMachineScalarFieldEnum[]
  }

  /**
   * Machine.documents
   */
  export type Machine$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Machine without action
   */
  export type MachineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
  }


  /**
   * Model Worksite
   */

  export type AggregateWorksite = {
    _count: WorksiteCountAggregateOutputType | null
    _min: WorksiteMinAggregateOutputType | null
    _max: WorksiteMaxAggregateOutputType | null
  }

  export type WorksiteMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    isActive: boolean | null
    startsAt: Date | null
    endsAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorksiteMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    isActive: boolean | null
    startsAt: Date | null
    endsAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorksiteCountAggregateOutputType = {
    id: number
    name: number
    location: number
    isActive: number
    startsAt: number
    endsAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorksiteMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    isActive?: true
    startsAt?: true
    endsAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorksiteMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    isActive?: true
    startsAt?: true
    endsAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorksiteCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    isActive?: true
    startsAt?: true
    endsAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorksiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Worksite to aggregate.
     */
    where?: WorksiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worksites to fetch.
     */
    orderBy?: WorksiteOrderByWithRelationInput | WorksiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorksiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worksites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worksites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Worksites
    **/
    _count?: true | WorksiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorksiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorksiteMaxAggregateInputType
  }

  export type GetWorksiteAggregateType<T extends WorksiteAggregateArgs> = {
        [P in keyof T & keyof AggregateWorksite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorksite[P]>
      : GetScalarType<T[P], AggregateWorksite[P]>
  }




  export type WorksiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorksiteWhereInput
    orderBy?: WorksiteOrderByWithAggregationInput | WorksiteOrderByWithAggregationInput[]
    by: WorksiteScalarFieldEnum[] | WorksiteScalarFieldEnum
    having?: WorksiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorksiteCountAggregateInputType | true
    _min?: WorksiteMinAggregateInputType
    _max?: WorksiteMaxAggregateInputType
  }

  export type WorksiteGroupByOutputType = {
    id: string
    name: string
    location: string | null
    isActive: boolean
    startsAt: Date | null
    endsAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: WorksiteCountAggregateOutputType | null
    _min: WorksiteMinAggregateOutputType | null
    _max: WorksiteMaxAggregateOutputType | null
  }

  type GetWorksiteGroupByPayload<T extends WorksiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorksiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorksiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorksiteGroupByOutputType[P]>
            : GetScalarType<T[P], WorksiteGroupByOutputType[P]>
        }
      >
    >


  export type WorksiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    isActive?: boolean
    startsAt?: boolean
    endsAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companies?: boolean | Worksite$companiesArgs<ExtArgs>
    workers?: boolean | Worksite$workersArgs<ExtArgs>
    machines?: boolean | Worksite$machinesArgs<ExtArgs>
    _count?: boolean | WorksiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worksite"]>

  export type WorksiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    isActive?: boolean
    startsAt?: boolean
    endsAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["worksite"]>

  export type WorksiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    isActive?: boolean
    startsAt?: boolean
    endsAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["worksite"]>

  export type WorksiteSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    isActive?: boolean
    startsAt?: boolean
    endsAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorksiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "isActive" | "startsAt" | "endsAt" | "createdAt" | "updatedAt", ExtArgs["result"]["worksite"]>
  export type WorksiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | Worksite$companiesArgs<ExtArgs>
    workers?: boolean | Worksite$workersArgs<ExtArgs>
    machines?: boolean | Worksite$machinesArgs<ExtArgs>
    _count?: boolean | WorksiteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorksiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WorksiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorksitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Worksite"
    objects: {
      companies: Prisma.$WorksiteCompanyPayload<ExtArgs>[]
      workers: Prisma.$WorksiteWorkerPayload<ExtArgs>[]
      machines: Prisma.$WorksiteMachinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location: string | null
      isActive: boolean
      startsAt: Date | null
      endsAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["worksite"]>
    composites: {}
  }

  type WorksiteGetPayload<S extends boolean | null | undefined | WorksiteDefaultArgs> = $Result.GetResult<Prisma.$WorksitePayload, S>

  type WorksiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorksiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorksiteCountAggregateInputType | true
    }

  export interface WorksiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Worksite'], meta: { name: 'Worksite' } }
    /**
     * Find zero or one Worksite that matches the filter.
     * @param {WorksiteFindUniqueArgs} args - Arguments to find a Worksite
     * @example
     * // Get one Worksite
     * const worksite = await prisma.worksite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorksiteFindUniqueArgs>(args: SelectSubset<T, WorksiteFindUniqueArgs<ExtArgs>>): Prisma__WorksiteClient<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Worksite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorksiteFindUniqueOrThrowArgs} args - Arguments to find a Worksite
     * @example
     * // Get one Worksite
     * const worksite = await prisma.worksite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorksiteFindUniqueOrThrowArgs>(args: SelectSubset<T, WorksiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorksiteClient<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Worksite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteFindFirstArgs} args - Arguments to find a Worksite
     * @example
     * // Get one Worksite
     * const worksite = await prisma.worksite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorksiteFindFirstArgs>(args?: SelectSubset<T, WorksiteFindFirstArgs<ExtArgs>>): Prisma__WorksiteClient<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Worksite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteFindFirstOrThrowArgs} args - Arguments to find a Worksite
     * @example
     * // Get one Worksite
     * const worksite = await prisma.worksite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorksiteFindFirstOrThrowArgs>(args?: SelectSubset<T, WorksiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorksiteClient<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Worksites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Worksites
     * const worksites = await prisma.worksite.findMany()
     * 
     * // Get first 10 Worksites
     * const worksites = await prisma.worksite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worksiteWithIdOnly = await prisma.worksite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorksiteFindManyArgs>(args?: SelectSubset<T, WorksiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Worksite.
     * @param {WorksiteCreateArgs} args - Arguments to create a Worksite.
     * @example
     * // Create one Worksite
     * const Worksite = await prisma.worksite.create({
     *   data: {
     *     // ... data to create a Worksite
     *   }
     * })
     * 
     */
    create<T extends WorksiteCreateArgs>(args: SelectSubset<T, WorksiteCreateArgs<ExtArgs>>): Prisma__WorksiteClient<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Worksites.
     * @param {WorksiteCreateManyArgs} args - Arguments to create many Worksites.
     * @example
     * // Create many Worksites
     * const worksite = await prisma.worksite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorksiteCreateManyArgs>(args?: SelectSubset<T, WorksiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Worksites and returns the data saved in the database.
     * @param {WorksiteCreateManyAndReturnArgs} args - Arguments to create many Worksites.
     * @example
     * // Create many Worksites
     * const worksite = await prisma.worksite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Worksites and only return the `id`
     * const worksiteWithIdOnly = await prisma.worksite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorksiteCreateManyAndReturnArgs>(args?: SelectSubset<T, WorksiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Worksite.
     * @param {WorksiteDeleteArgs} args - Arguments to delete one Worksite.
     * @example
     * // Delete one Worksite
     * const Worksite = await prisma.worksite.delete({
     *   where: {
     *     // ... filter to delete one Worksite
     *   }
     * })
     * 
     */
    delete<T extends WorksiteDeleteArgs>(args: SelectSubset<T, WorksiteDeleteArgs<ExtArgs>>): Prisma__WorksiteClient<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Worksite.
     * @param {WorksiteUpdateArgs} args - Arguments to update one Worksite.
     * @example
     * // Update one Worksite
     * const worksite = await prisma.worksite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorksiteUpdateArgs>(args: SelectSubset<T, WorksiteUpdateArgs<ExtArgs>>): Prisma__WorksiteClient<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Worksites.
     * @param {WorksiteDeleteManyArgs} args - Arguments to filter Worksites to delete.
     * @example
     * // Delete a few Worksites
     * const { count } = await prisma.worksite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorksiteDeleteManyArgs>(args?: SelectSubset<T, WorksiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Worksites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Worksites
     * const worksite = await prisma.worksite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorksiteUpdateManyArgs>(args: SelectSubset<T, WorksiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Worksites and returns the data updated in the database.
     * @param {WorksiteUpdateManyAndReturnArgs} args - Arguments to update many Worksites.
     * @example
     * // Update many Worksites
     * const worksite = await prisma.worksite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Worksites and only return the `id`
     * const worksiteWithIdOnly = await prisma.worksite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorksiteUpdateManyAndReturnArgs>(args: SelectSubset<T, WorksiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Worksite.
     * @param {WorksiteUpsertArgs} args - Arguments to update or create a Worksite.
     * @example
     * // Update or create a Worksite
     * const worksite = await prisma.worksite.upsert({
     *   create: {
     *     // ... data to create a Worksite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Worksite we want to update
     *   }
     * })
     */
    upsert<T extends WorksiteUpsertArgs>(args: SelectSubset<T, WorksiteUpsertArgs<ExtArgs>>): Prisma__WorksiteClient<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Worksites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteCountArgs} args - Arguments to filter Worksites to count.
     * @example
     * // Count the number of Worksites
     * const count = await prisma.worksite.count({
     *   where: {
     *     // ... the filter for the Worksites we want to count
     *   }
     * })
    **/
    count<T extends WorksiteCountArgs>(
      args?: Subset<T, WorksiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorksiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Worksite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorksiteAggregateArgs>(args: Subset<T, WorksiteAggregateArgs>): Prisma.PrismaPromise<GetWorksiteAggregateType<T>>

    /**
     * Group by Worksite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorksiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorksiteGroupByArgs['orderBy'] }
        : { orderBy?: WorksiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorksiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorksiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Worksite model
   */
  readonly fields: WorksiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Worksite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorksiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companies<T extends Worksite$companiesArgs<ExtArgs> = {}>(args?: Subset<T, Worksite$companiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksiteCompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workers<T extends Worksite$workersArgs<ExtArgs> = {}>(args?: Subset<T, Worksite$workersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksiteWorkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    machines<T extends Worksite$machinesArgs<ExtArgs> = {}>(args?: Subset<T, Worksite$machinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksiteMachinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Worksite model
   */
  interface WorksiteFieldRefs {
    readonly id: FieldRef<"Worksite", 'String'>
    readonly name: FieldRef<"Worksite", 'String'>
    readonly location: FieldRef<"Worksite", 'String'>
    readonly isActive: FieldRef<"Worksite", 'Boolean'>
    readonly startsAt: FieldRef<"Worksite", 'DateTime'>
    readonly endsAt: FieldRef<"Worksite", 'DateTime'>
    readonly createdAt: FieldRef<"Worksite", 'DateTime'>
    readonly updatedAt: FieldRef<"Worksite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Worksite findUnique
   */
  export type WorksiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksite
     */
    select?: WorksiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worksite
     */
    omit?: WorksiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteInclude<ExtArgs> | null
    /**
     * Filter, which Worksite to fetch.
     */
    where: WorksiteWhereUniqueInput
  }

  /**
   * Worksite findUniqueOrThrow
   */
  export type WorksiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksite
     */
    select?: WorksiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worksite
     */
    omit?: WorksiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteInclude<ExtArgs> | null
    /**
     * Filter, which Worksite to fetch.
     */
    where: WorksiteWhereUniqueInput
  }

  /**
   * Worksite findFirst
   */
  export type WorksiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksite
     */
    select?: WorksiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worksite
     */
    omit?: WorksiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteInclude<ExtArgs> | null
    /**
     * Filter, which Worksite to fetch.
     */
    where?: WorksiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worksites to fetch.
     */
    orderBy?: WorksiteOrderByWithRelationInput | WorksiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Worksites.
     */
    cursor?: WorksiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worksites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worksites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Worksites.
     */
    distinct?: WorksiteScalarFieldEnum | WorksiteScalarFieldEnum[]
  }

  /**
   * Worksite findFirstOrThrow
   */
  export type WorksiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksite
     */
    select?: WorksiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worksite
     */
    omit?: WorksiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteInclude<ExtArgs> | null
    /**
     * Filter, which Worksite to fetch.
     */
    where?: WorksiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worksites to fetch.
     */
    orderBy?: WorksiteOrderByWithRelationInput | WorksiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Worksites.
     */
    cursor?: WorksiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worksites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worksites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Worksites.
     */
    distinct?: WorksiteScalarFieldEnum | WorksiteScalarFieldEnum[]
  }

  /**
   * Worksite findMany
   */
  export type WorksiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksite
     */
    select?: WorksiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worksite
     */
    omit?: WorksiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteInclude<ExtArgs> | null
    /**
     * Filter, which Worksites to fetch.
     */
    where?: WorksiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worksites to fetch.
     */
    orderBy?: WorksiteOrderByWithRelationInput | WorksiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Worksites.
     */
    cursor?: WorksiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worksites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worksites.
     */
    skip?: number
    distinct?: WorksiteScalarFieldEnum | WorksiteScalarFieldEnum[]
  }

  /**
   * Worksite create
   */
  export type WorksiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksite
     */
    select?: WorksiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worksite
     */
    omit?: WorksiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Worksite.
     */
    data: XOR<WorksiteCreateInput, WorksiteUncheckedCreateInput>
  }

  /**
   * Worksite createMany
   */
  export type WorksiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Worksites.
     */
    data: WorksiteCreateManyInput | WorksiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Worksite createManyAndReturn
   */
  export type WorksiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksite
     */
    select?: WorksiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Worksite
     */
    omit?: WorksiteOmit<ExtArgs> | null
    /**
     * The data used to create many Worksites.
     */
    data: WorksiteCreateManyInput | WorksiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Worksite update
   */
  export type WorksiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksite
     */
    select?: WorksiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worksite
     */
    omit?: WorksiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Worksite.
     */
    data: XOR<WorksiteUpdateInput, WorksiteUncheckedUpdateInput>
    /**
     * Choose, which Worksite to update.
     */
    where: WorksiteWhereUniqueInput
  }

  /**
   * Worksite updateMany
   */
  export type WorksiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Worksites.
     */
    data: XOR<WorksiteUpdateManyMutationInput, WorksiteUncheckedUpdateManyInput>
    /**
     * Filter which Worksites to update
     */
    where?: WorksiteWhereInput
    /**
     * Limit how many Worksites to update.
     */
    limit?: number
  }

  /**
   * Worksite updateManyAndReturn
   */
  export type WorksiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksite
     */
    select?: WorksiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Worksite
     */
    omit?: WorksiteOmit<ExtArgs> | null
    /**
     * The data used to update Worksites.
     */
    data: XOR<WorksiteUpdateManyMutationInput, WorksiteUncheckedUpdateManyInput>
    /**
     * Filter which Worksites to update
     */
    where?: WorksiteWhereInput
    /**
     * Limit how many Worksites to update.
     */
    limit?: number
  }

  /**
   * Worksite upsert
   */
  export type WorksiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksite
     */
    select?: WorksiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worksite
     */
    omit?: WorksiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Worksite to update in case it exists.
     */
    where: WorksiteWhereUniqueInput
    /**
     * In case the Worksite found by the `where` argument doesn't exist, create a new Worksite with this data.
     */
    create: XOR<WorksiteCreateInput, WorksiteUncheckedCreateInput>
    /**
     * In case the Worksite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorksiteUpdateInput, WorksiteUncheckedUpdateInput>
  }

  /**
   * Worksite delete
   */
  export type WorksiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksite
     */
    select?: WorksiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worksite
     */
    omit?: WorksiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteInclude<ExtArgs> | null
    /**
     * Filter which Worksite to delete.
     */
    where: WorksiteWhereUniqueInput
  }

  /**
   * Worksite deleteMany
   */
  export type WorksiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Worksites to delete
     */
    where?: WorksiteWhereInput
    /**
     * Limit how many Worksites to delete.
     */
    limit?: number
  }

  /**
   * Worksite.companies
   */
  export type Worksite$companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteCompany
     */
    select?: WorksiteCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteCompany
     */
    omit?: WorksiteCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteCompanyInclude<ExtArgs> | null
    where?: WorksiteCompanyWhereInput
    orderBy?: WorksiteCompanyOrderByWithRelationInput | WorksiteCompanyOrderByWithRelationInput[]
    cursor?: WorksiteCompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorksiteCompanyScalarFieldEnum | WorksiteCompanyScalarFieldEnum[]
  }

  /**
   * Worksite.workers
   */
  export type Worksite$workersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteWorker
     */
    select?: WorksiteWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteWorker
     */
    omit?: WorksiteWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteWorkerInclude<ExtArgs> | null
    where?: WorksiteWorkerWhereInput
    orderBy?: WorksiteWorkerOrderByWithRelationInput | WorksiteWorkerOrderByWithRelationInput[]
    cursor?: WorksiteWorkerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorksiteWorkerScalarFieldEnum | WorksiteWorkerScalarFieldEnum[]
  }

  /**
   * Worksite.machines
   */
  export type Worksite$machinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteMachine
     */
    select?: WorksiteMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteMachine
     */
    omit?: WorksiteMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteMachineInclude<ExtArgs> | null
    where?: WorksiteMachineWhereInput
    orderBy?: WorksiteMachineOrderByWithRelationInput | WorksiteMachineOrderByWithRelationInput[]
    cursor?: WorksiteMachineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorksiteMachineScalarFieldEnum | WorksiteMachineScalarFieldEnum[]
  }

  /**
   * Worksite without action
   */
  export type WorksiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksite
     */
    select?: WorksiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worksite
     */
    omit?: WorksiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteInclude<ExtArgs> | null
  }


  /**
   * Model WorksiteCompany
   */

  export type AggregateWorksiteCompany = {
    _count: WorksiteCompanyCountAggregateOutputType | null
    _min: WorksiteCompanyMinAggregateOutputType | null
    _max: WorksiteCompanyMaxAggregateOutputType | null
  }

  export type WorksiteCompanyMinAggregateOutputType = {
    id: string | null
    worksiteId: string | null
    companyId: string | null
    isActive: boolean | null
    joinedAt: Date | null
    leftAt: Date | null
  }

  export type WorksiteCompanyMaxAggregateOutputType = {
    id: string | null
    worksiteId: string | null
    companyId: string | null
    isActive: boolean | null
    joinedAt: Date | null
    leftAt: Date | null
  }

  export type WorksiteCompanyCountAggregateOutputType = {
    id: number
    worksiteId: number
    companyId: number
    isActive: number
    joinedAt: number
    leftAt: number
    _all: number
  }


  export type WorksiteCompanyMinAggregateInputType = {
    id?: true
    worksiteId?: true
    companyId?: true
    isActive?: true
    joinedAt?: true
    leftAt?: true
  }

  export type WorksiteCompanyMaxAggregateInputType = {
    id?: true
    worksiteId?: true
    companyId?: true
    isActive?: true
    joinedAt?: true
    leftAt?: true
  }

  export type WorksiteCompanyCountAggregateInputType = {
    id?: true
    worksiteId?: true
    companyId?: true
    isActive?: true
    joinedAt?: true
    leftAt?: true
    _all?: true
  }

  export type WorksiteCompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorksiteCompany to aggregate.
     */
    where?: WorksiteCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorksiteCompanies to fetch.
     */
    orderBy?: WorksiteCompanyOrderByWithRelationInput | WorksiteCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorksiteCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorksiteCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorksiteCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorksiteCompanies
    **/
    _count?: true | WorksiteCompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorksiteCompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorksiteCompanyMaxAggregateInputType
  }

  export type GetWorksiteCompanyAggregateType<T extends WorksiteCompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateWorksiteCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorksiteCompany[P]>
      : GetScalarType<T[P], AggregateWorksiteCompany[P]>
  }




  export type WorksiteCompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorksiteCompanyWhereInput
    orderBy?: WorksiteCompanyOrderByWithAggregationInput | WorksiteCompanyOrderByWithAggregationInput[]
    by: WorksiteCompanyScalarFieldEnum[] | WorksiteCompanyScalarFieldEnum
    having?: WorksiteCompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorksiteCompanyCountAggregateInputType | true
    _min?: WorksiteCompanyMinAggregateInputType
    _max?: WorksiteCompanyMaxAggregateInputType
  }

  export type WorksiteCompanyGroupByOutputType = {
    id: string
    worksiteId: string
    companyId: string
    isActive: boolean
    joinedAt: Date
    leftAt: Date | null
    _count: WorksiteCompanyCountAggregateOutputType | null
    _min: WorksiteCompanyMinAggregateOutputType | null
    _max: WorksiteCompanyMaxAggregateOutputType | null
  }

  type GetWorksiteCompanyGroupByPayload<T extends WorksiteCompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorksiteCompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorksiteCompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorksiteCompanyGroupByOutputType[P]>
            : GetScalarType<T[P], WorksiteCompanyGroupByOutputType[P]>
        }
      >
    >


  export type WorksiteCompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worksiteId?: boolean
    companyId?: boolean
    isActive?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    worksite?: boolean | WorksiteDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worksiteCompany"]>

  export type WorksiteCompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worksiteId?: boolean
    companyId?: boolean
    isActive?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    worksite?: boolean | WorksiteDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worksiteCompany"]>

  export type WorksiteCompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worksiteId?: boolean
    companyId?: boolean
    isActive?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    worksite?: boolean | WorksiteDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worksiteCompany"]>

  export type WorksiteCompanySelectScalar = {
    id?: boolean
    worksiteId?: boolean
    companyId?: boolean
    isActive?: boolean
    joinedAt?: boolean
    leftAt?: boolean
  }

  export type WorksiteCompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "worksiteId" | "companyId" | "isActive" | "joinedAt" | "leftAt", ExtArgs["result"]["worksiteCompany"]>
  export type WorksiteCompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worksite?: boolean | WorksiteDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type WorksiteCompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worksite?: boolean | WorksiteDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type WorksiteCompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worksite?: boolean | WorksiteDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $WorksiteCompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorksiteCompany"
    objects: {
      worksite: Prisma.$WorksitePayload<ExtArgs>
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      worksiteId: string
      companyId: string
      isActive: boolean
      joinedAt: Date
      leftAt: Date | null
    }, ExtArgs["result"]["worksiteCompany"]>
    composites: {}
  }

  type WorksiteCompanyGetPayload<S extends boolean | null | undefined | WorksiteCompanyDefaultArgs> = $Result.GetResult<Prisma.$WorksiteCompanyPayload, S>

  type WorksiteCompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorksiteCompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorksiteCompanyCountAggregateInputType | true
    }

  export interface WorksiteCompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorksiteCompany'], meta: { name: 'WorksiteCompany' } }
    /**
     * Find zero or one WorksiteCompany that matches the filter.
     * @param {WorksiteCompanyFindUniqueArgs} args - Arguments to find a WorksiteCompany
     * @example
     * // Get one WorksiteCompany
     * const worksiteCompany = await prisma.worksiteCompany.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorksiteCompanyFindUniqueArgs>(args: SelectSubset<T, WorksiteCompanyFindUniqueArgs<ExtArgs>>): Prisma__WorksiteCompanyClient<$Result.GetResult<Prisma.$WorksiteCompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorksiteCompany that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorksiteCompanyFindUniqueOrThrowArgs} args - Arguments to find a WorksiteCompany
     * @example
     * // Get one WorksiteCompany
     * const worksiteCompany = await prisma.worksiteCompany.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorksiteCompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, WorksiteCompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorksiteCompanyClient<$Result.GetResult<Prisma.$WorksiteCompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorksiteCompany that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteCompanyFindFirstArgs} args - Arguments to find a WorksiteCompany
     * @example
     * // Get one WorksiteCompany
     * const worksiteCompany = await prisma.worksiteCompany.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorksiteCompanyFindFirstArgs>(args?: SelectSubset<T, WorksiteCompanyFindFirstArgs<ExtArgs>>): Prisma__WorksiteCompanyClient<$Result.GetResult<Prisma.$WorksiteCompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorksiteCompany that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteCompanyFindFirstOrThrowArgs} args - Arguments to find a WorksiteCompany
     * @example
     * // Get one WorksiteCompany
     * const worksiteCompany = await prisma.worksiteCompany.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorksiteCompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, WorksiteCompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorksiteCompanyClient<$Result.GetResult<Prisma.$WorksiteCompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorksiteCompanies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteCompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorksiteCompanies
     * const worksiteCompanies = await prisma.worksiteCompany.findMany()
     * 
     * // Get first 10 WorksiteCompanies
     * const worksiteCompanies = await prisma.worksiteCompany.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worksiteCompanyWithIdOnly = await prisma.worksiteCompany.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorksiteCompanyFindManyArgs>(args?: SelectSubset<T, WorksiteCompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksiteCompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorksiteCompany.
     * @param {WorksiteCompanyCreateArgs} args - Arguments to create a WorksiteCompany.
     * @example
     * // Create one WorksiteCompany
     * const WorksiteCompany = await prisma.worksiteCompany.create({
     *   data: {
     *     // ... data to create a WorksiteCompany
     *   }
     * })
     * 
     */
    create<T extends WorksiteCompanyCreateArgs>(args: SelectSubset<T, WorksiteCompanyCreateArgs<ExtArgs>>): Prisma__WorksiteCompanyClient<$Result.GetResult<Prisma.$WorksiteCompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorksiteCompanies.
     * @param {WorksiteCompanyCreateManyArgs} args - Arguments to create many WorksiteCompanies.
     * @example
     * // Create many WorksiteCompanies
     * const worksiteCompany = await prisma.worksiteCompany.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorksiteCompanyCreateManyArgs>(args?: SelectSubset<T, WorksiteCompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorksiteCompanies and returns the data saved in the database.
     * @param {WorksiteCompanyCreateManyAndReturnArgs} args - Arguments to create many WorksiteCompanies.
     * @example
     * // Create many WorksiteCompanies
     * const worksiteCompany = await prisma.worksiteCompany.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorksiteCompanies and only return the `id`
     * const worksiteCompanyWithIdOnly = await prisma.worksiteCompany.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorksiteCompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, WorksiteCompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksiteCompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorksiteCompany.
     * @param {WorksiteCompanyDeleteArgs} args - Arguments to delete one WorksiteCompany.
     * @example
     * // Delete one WorksiteCompany
     * const WorksiteCompany = await prisma.worksiteCompany.delete({
     *   where: {
     *     // ... filter to delete one WorksiteCompany
     *   }
     * })
     * 
     */
    delete<T extends WorksiteCompanyDeleteArgs>(args: SelectSubset<T, WorksiteCompanyDeleteArgs<ExtArgs>>): Prisma__WorksiteCompanyClient<$Result.GetResult<Prisma.$WorksiteCompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorksiteCompany.
     * @param {WorksiteCompanyUpdateArgs} args - Arguments to update one WorksiteCompany.
     * @example
     * // Update one WorksiteCompany
     * const worksiteCompany = await prisma.worksiteCompany.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorksiteCompanyUpdateArgs>(args: SelectSubset<T, WorksiteCompanyUpdateArgs<ExtArgs>>): Prisma__WorksiteCompanyClient<$Result.GetResult<Prisma.$WorksiteCompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorksiteCompanies.
     * @param {WorksiteCompanyDeleteManyArgs} args - Arguments to filter WorksiteCompanies to delete.
     * @example
     * // Delete a few WorksiteCompanies
     * const { count } = await prisma.worksiteCompany.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorksiteCompanyDeleteManyArgs>(args?: SelectSubset<T, WorksiteCompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorksiteCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteCompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorksiteCompanies
     * const worksiteCompany = await prisma.worksiteCompany.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorksiteCompanyUpdateManyArgs>(args: SelectSubset<T, WorksiteCompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorksiteCompanies and returns the data updated in the database.
     * @param {WorksiteCompanyUpdateManyAndReturnArgs} args - Arguments to update many WorksiteCompanies.
     * @example
     * // Update many WorksiteCompanies
     * const worksiteCompany = await prisma.worksiteCompany.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorksiteCompanies and only return the `id`
     * const worksiteCompanyWithIdOnly = await prisma.worksiteCompany.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorksiteCompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, WorksiteCompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksiteCompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorksiteCompany.
     * @param {WorksiteCompanyUpsertArgs} args - Arguments to update or create a WorksiteCompany.
     * @example
     * // Update or create a WorksiteCompany
     * const worksiteCompany = await prisma.worksiteCompany.upsert({
     *   create: {
     *     // ... data to create a WorksiteCompany
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorksiteCompany we want to update
     *   }
     * })
     */
    upsert<T extends WorksiteCompanyUpsertArgs>(args: SelectSubset<T, WorksiteCompanyUpsertArgs<ExtArgs>>): Prisma__WorksiteCompanyClient<$Result.GetResult<Prisma.$WorksiteCompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorksiteCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteCompanyCountArgs} args - Arguments to filter WorksiteCompanies to count.
     * @example
     * // Count the number of WorksiteCompanies
     * const count = await prisma.worksiteCompany.count({
     *   where: {
     *     // ... the filter for the WorksiteCompanies we want to count
     *   }
     * })
    **/
    count<T extends WorksiteCompanyCountArgs>(
      args?: Subset<T, WorksiteCompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorksiteCompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorksiteCompany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteCompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorksiteCompanyAggregateArgs>(args: Subset<T, WorksiteCompanyAggregateArgs>): Prisma.PrismaPromise<GetWorksiteCompanyAggregateType<T>>

    /**
     * Group by WorksiteCompany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteCompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorksiteCompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorksiteCompanyGroupByArgs['orderBy'] }
        : { orderBy?: WorksiteCompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorksiteCompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorksiteCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorksiteCompany model
   */
  readonly fields: WorksiteCompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorksiteCompany.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorksiteCompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    worksite<T extends WorksiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorksiteDefaultArgs<ExtArgs>>): Prisma__WorksiteClient<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorksiteCompany model
   */
  interface WorksiteCompanyFieldRefs {
    readonly id: FieldRef<"WorksiteCompany", 'String'>
    readonly worksiteId: FieldRef<"WorksiteCompany", 'String'>
    readonly companyId: FieldRef<"WorksiteCompany", 'String'>
    readonly isActive: FieldRef<"WorksiteCompany", 'Boolean'>
    readonly joinedAt: FieldRef<"WorksiteCompany", 'DateTime'>
    readonly leftAt: FieldRef<"WorksiteCompany", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorksiteCompany findUnique
   */
  export type WorksiteCompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteCompany
     */
    select?: WorksiteCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteCompany
     */
    omit?: WorksiteCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteCompanyInclude<ExtArgs> | null
    /**
     * Filter, which WorksiteCompany to fetch.
     */
    where: WorksiteCompanyWhereUniqueInput
  }

  /**
   * WorksiteCompany findUniqueOrThrow
   */
  export type WorksiteCompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteCompany
     */
    select?: WorksiteCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteCompany
     */
    omit?: WorksiteCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteCompanyInclude<ExtArgs> | null
    /**
     * Filter, which WorksiteCompany to fetch.
     */
    where: WorksiteCompanyWhereUniqueInput
  }

  /**
   * WorksiteCompany findFirst
   */
  export type WorksiteCompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteCompany
     */
    select?: WorksiteCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteCompany
     */
    omit?: WorksiteCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteCompanyInclude<ExtArgs> | null
    /**
     * Filter, which WorksiteCompany to fetch.
     */
    where?: WorksiteCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorksiteCompanies to fetch.
     */
    orderBy?: WorksiteCompanyOrderByWithRelationInput | WorksiteCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorksiteCompanies.
     */
    cursor?: WorksiteCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorksiteCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorksiteCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorksiteCompanies.
     */
    distinct?: WorksiteCompanyScalarFieldEnum | WorksiteCompanyScalarFieldEnum[]
  }

  /**
   * WorksiteCompany findFirstOrThrow
   */
  export type WorksiteCompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteCompany
     */
    select?: WorksiteCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteCompany
     */
    omit?: WorksiteCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteCompanyInclude<ExtArgs> | null
    /**
     * Filter, which WorksiteCompany to fetch.
     */
    where?: WorksiteCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorksiteCompanies to fetch.
     */
    orderBy?: WorksiteCompanyOrderByWithRelationInput | WorksiteCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorksiteCompanies.
     */
    cursor?: WorksiteCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorksiteCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorksiteCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorksiteCompanies.
     */
    distinct?: WorksiteCompanyScalarFieldEnum | WorksiteCompanyScalarFieldEnum[]
  }

  /**
   * WorksiteCompany findMany
   */
  export type WorksiteCompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteCompany
     */
    select?: WorksiteCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteCompany
     */
    omit?: WorksiteCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteCompanyInclude<ExtArgs> | null
    /**
     * Filter, which WorksiteCompanies to fetch.
     */
    where?: WorksiteCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorksiteCompanies to fetch.
     */
    orderBy?: WorksiteCompanyOrderByWithRelationInput | WorksiteCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorksiteCompanies.
     */
    cursor?: WorksiteCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorksiteCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorksiteCompanies.
     */
    skip?: number
    distinct?: WorksiteCompanyScalarFieldEnum | WorksiteCompanyScalarFieldEnum[]
  }

  /**
   * WorksiteCompany create
   */
  export type WorksiteCompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteCompany
     */
    select?: WorksiteCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteCompany
     */
    omit?: WorksiteCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteCompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a WorksiteCompany.
     */
    data: XOR<WorksiteCompanyCreateInput, WorksiteCompanyUncheckedCreateInput>
  }

  /**
   * WorksiteCompany createMany
   */
  export type WorksiteCompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorksiteCompanies.
     */
    data: WorksiteCompanyCreateManyInput | WorksiteCompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorksiteCompany createManyAndReturn
   */
  export type WorksiteCompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteCompany
     */
    select?: WorksiteCompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteCompany
     */
    omit?: WorksiteCompanyOmit<ExtArgs> | null
    /**
     * The data used to create many WorksiteCompanies.
     */
    data: WorksiteCompanyCreateManyInput | WorksiteCompanyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteCompanyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorksiteCompany update
   */
  export type WorksiteCompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteCompany
     */
    select?: WorksiteCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteCompany
     */
    omit?: WorksiteCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteCompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a WorksiteCompany.
     */
    data: XOR<WorksiteCompanyUpdateInput, WorksiteCompanyUncheckedUpdateInput>
    /**
     * Choose, which WorksiteCompany to update.
     */
    where: WorksiteCompanyWhereUniqueInput
  }

  /**
   * WorksiteCompany updateMany
   */
  export type WorksiteCompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorksiteCompanies.
     */
    data: XOR<WorksiteCompanyUpdateManyMutationInput, WorksiteCompanyUncheckedUpdateManyInput>
    /**
     * Filter which WorksiteCompanies to update
     */
    where?: WorksiteCompanyWhereInput
    /**
     * Limit how many WorksiteCompanies to update.
     */
    limit?: number
  }

  /**
   * WorksiteCompany updateManyAndReturn
   */
  export type WorksiteCompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteCompany
     */
    select?: WorksiteCompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteCompany
     */
    omit?: WorksiteCompanyOmit<ExtArgs> | null
    /**
     * The data used to update WorksiteCompanies.
     */
    data: XOR<WorksiteCompanyUpdateManyMutationInput, WorksiteCompanyUncheckedUpdateManyInput>
    /**
     * Filter which WorksiteCompanies to update
     */
    where?: WorksiteCompanyWhereInput
    /**
     * Limit how many WorksiteCompanies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteCompanyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorksiteCompany upsert
   */
  export type WorksiteCompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteCompany
     */
    select?: WorksiteCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteCompany
     */
    omit?: WorksiteCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteCompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the WorksiteCompany to update in case it exists.
     */
    where: WorksiteCompanyWhereUniqueInput
    /**
     * In case the WorksiteCompany found by the `where` argument doesn't exist, create a new WorksiteCompany with this data.
     */
    create: XOR<WorksiteCompanyCreateInput, WorksiteCompanyUncheckedCreateInput>
    /**
     * In case the WorksiteCompany was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorksiteCompanyUpdateInput, WorksiteCompanyUncheckedUpdateInput>
  }

  /**
   * WorksiteCompany delete
   */
  export type WorksiteCompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteCompany
     */
    select?: WorksiteCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteCompany
     */
    omit?: WorksiteCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteCompanyInclude<ExtArgs> | null
    /**
     * Filter which WorksiteCompany to delete.
     */
    where: WorksiteCompanyWhereUniqueInput
  }

  /**
   * WorksiteCompany deleteMany
   */
  export type WorksiteCompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorksiteCompanies to delete
     */
    where?: WorksiteCompanyWhereInput
    /**
     * Limit how many WorksiteCompanies to delete.
     */
    limit?: number
  }

  /**
   * WorksiteCompany without action
   */
  export type WorksiteCompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteCompany
     */
    select?: WorksiteCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteCompany
     */
    omit?: WorksiteCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteCompanyInclude<ExtArgs> | null
  }


  /**
   * Model WorksiteWorker
   */

  export type AggregateWorksiteWorker = {
    _count: WorksiteWorkerCountAggregateOutputType | null
    _min: WorksiteWorkerMinAggregateOutputType | null
    _max: WorksiteWorkerMaxAggregateOutputType | null
  }

  export type WorksiteWorkerMinAggregateOutputType = {
    id: string | null
    worksiteId: string | null
    workerId: string | null
    isActive: boolean | null
    joinedAt: Date | null
    leftAt: Date | null
  }

  export type WorksiteWorkerMaxAggregateOutputType = {
    id: string | null
    worksiteId: string | null
    workerId: string | null
    isActive: boolean | null
    joinedAt: Date | null
    leftAt: Date | null
  }

  export type WorksiteWorkerCountAggregateOutputType = {
    id: number
    worksiteId: number
    workerId: number
    isActive: number
    joinedAt: number
    leftAt: number
    _all: number
  }


  export type WorksiteWorkerMinAggregateInputType = {
    id?: true
    worksiteId?: true
    workerId?: true
    isActive?: true
    joinedAt?: true
    leftAt?: true
  }

  export type WorksiteWorkerMaxAggregateInputType = {
    id?: true
    worksiteId?: true
    workerId?: true
    isActive?: true
    joinedAt?: true
    leftAt?: true
  }

  export type WorksiteWorkerCountAggregateInputType = {
    id?: true
    worksiteId?: true
    workerId?: true
    isActive?: true
    joinedAt?: true
    leftAt?: true
    _all?: true
  }

  export type WorksiteWorkerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorksiteWorker to aggregate.
     */
    where?: WorksiteWorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorksiteWorkers to fetch.
     */
    orderBy?: WorksiteWorkerOrderByWithRelationInput | WorksiteWorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorksiteWorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorksiteWorkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorksiteWorkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorksiteWorkers
    **/
    _count?: true | WorksiteWorkerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorksiteWorkerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorksiteWorkerMaxAggregateInputType
  }

  export type GetWorksiteWorkerAggregateType<T extends WorksiteWorkerAggregateArgs> = {
        [P in keyof T & keyof AggregateWorksiteWorker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorksiteWorker[P]>
      : GetScalarType<T[P], AggregateWorksiteWorker[P]>
  }




  export type WorksiteWorkerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorksiteWorkerWhereInput
    orderBy?: WorksiteWorkerOrderByWithAggregationInput | WorksiteWorkerOrderByWithAggregationInput[]
    by: WorksiteWorkerScalarFieldEnum[] | WorksiteWorkerScalarFieldEnum
    having?: WorksiteWorkerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorksiteWorkerCountAggregateInputType | true
    _min?: WorksiteWorkerMinAggregateInputType
    _max?: WorksiteWorkerMaxAggregateInputType
  }

  export type WorksiteWorkerGroupByOutputType = {
    id: string
    worksiteId: string
    workerId: string
    isActive: boolean
    joinedAt: Date
    leftAt: Date | null
    _count: WorksiteWorkerCountAggregateOutputType | null
    _min: WorksiteWorkerMinAggregateOutputType | null
    _max: WorksiteWorkerMaxAggregateOutputType | null
  }

  type GetWorksiteWorkerGroupByPayload<T extends WorksiteWorkerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorksiteWorkerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorksiteWorkerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorksiteWorkerGroupByOutputType[P]>
            : GetScalarType<T[P], WorksiteWorkerGroupByOutputType[P]>
        }
      >
    >


  export type WorksiteWorkerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worksiteId?: boolean
    workerId?: boolean
    isActive?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    worksite?: boolean | WorksiteDefaultArgs<ExtArgs>
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worksiteWorker"]>

  export type WorksiteWorkerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worksiteId?: boolean
    workerId?: boolean
    isActive?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    worksite?: boolean | WorksiteDefaultArgs<ExtArgs>
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worksiteWorker"]>

  export type WorksiteWorkerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worksiteId?: boolean
    workerId?: boolean
    isActive?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    worksite?: boolean | WorksiteDefaultArgs<ExtArgs>
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worksiteWorker"]>

  export type WorksiteWorkerSelectScalar = {
    id?: boolean
    worksiteId?: boolean
    workerId?: boolean
    isActive?: boolean
    joinedAt?: boolean
    leftAt?: boolean
  }

  export type WorksiteWorkerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "worksiteId" | "workerId" | "isActive" | "joinedAt" | "leftAt", ExtArgs["result"]["worksiteWorker"]>
  export type WorksiteWorkerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worksite?: boolean | WorksiteDefaultArgs<ExtArgs>
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
  }
  export type WorksiteWorkerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worksite?: boolean | WorksiteDefaultArgs<ExtArgs>
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
  }
  export type WorksiteWorkerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worksite?: boolean | WorksiteDefaultArgs<ExtArgs>
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
  }

  export type $WorksiteWorkerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorksiteWorker"
    objects: {
      worksite: Prisma.$WorksitePayload<ExtArgs>
      worker: Prisma.$WorkerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      worksiteId: string
      workerId: string
      isActive: boolean
      joinedAt: Date
      leftAt: Date | null
    }, ExtArgs["result"]["worksiteWorker"]>
    composites: {}
  }

  type WorksiteWorkerGetPayload<S extends boolean | null | undefined | WorksiteWorkerDefaultArgs> = $Result.GetResult<Prisma.$WorksiteWorkerPayload, S>

  type WorksiteWorkerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorksiteWorkerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorksiteWorkerCountAggregateInputType | true
    }

  export interface WorksiteWorkerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorksiteWorker'], meta: { name: 'WorksiteWorker' } }
    /**
     * Find zero or one WorksiteWorker that matches the filter.
     * @param {WorksiteWorkerFindUniqueArgs} args - Arguments to find a WorksiteWorker
     * @example
     * // Get one WorksiteWorker
     * const worksiteWorker = await prisma.worksiteWorker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorksiteWorkerFindUniqueArgs>(args: SelectSubset<T, WorksiteWorkerFindUniqueArgs<ExtArgs>>): Prisma__WorksiteWorkerClient<$Result.GetResult<Prisma.$WorksiteWorkerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorksiteWorker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorksiteWorkerFindUniqueOrThrowArgs} args - Arguments to find a WorksiteWorker
     * @example
     * // Get one WorksiteWorker
     * const worksiteWorker = await prisma.worksiteWorker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorksiteWorkerFindUniqueOrThrowArgs>(args: SelectSubset<T, WorksiteWorkerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorksiteWorkerClient<$Result.GetResult<Prisma.$WorksiteWorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorksiteWorker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteWorkerFindFirstArgs} args - Arguments to find a WorksiteWorker
     * @example
     * // Get one WorksiteWorker
     * const worksiteWorker = await prisma.worksiteWorker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorksiteWorkerFindFirstArgs>(args?: SelectSubset<T, WorksiteWorkerFindFirstArgs<ExtArgs>>): Prisma__WorksiteWorkerClient<$Result.GetResult<Prisma.$WorksiteWorkerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorksiteWorker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteWorkerFindFirstOrThrowArgs} args - Arguments to find a WorksiteWorker
     * @example
     * // Get one WorksiteWorker
     * const worksiteWorker = await prisma.worksiteWorker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorksiteWorkerFindFirstOrThrowArgs>(args?: SelectSubset<T, WorksiteWorkerFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorksiteWorkerClient<$Result.GetResult<Prisma.$WorksiteWorkerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorksiteWorkers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteWorkerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorksiteWorkers
     * const worksiteWorkers = await prisma.worksiteWorker.findMany()
     * 
     * // Get first 10 WorksiteWorkers
     * const worksiteWorkers = await prisma.worksiteWorker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worksiteWorkerWithIdOnly = await prisma.worksiteWorker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorksiteWorkerFindManyArgs>(args?: SelectSubset<T, WorksiteWorkerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksiteWorkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorksiteWorker.
     * @param {WorksiteWorkerCreateArgs} args - Arguments to create a WorksiteWorker.
     * @example
     * // Create one WorksiteWorker
     * const WorksiteWorker = await prisma.worksiteWorker.create({
     *   data: {
     *     // ... data to create a WorksiteWorker
     *   }
     * })
     * 
     */
    create<T extends WorksiteWorkerCreateArgs>(args: SelectSubset<T, WorksiteWorkerCreateArgs<ExtArgs>>): Prisma__WorksiteWorkerClient<$Result.GetResult<Prisma.$WorksiteWorkerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorksiteWorkers.
     * @param {WorksiteWorkerCreateManyArgs} args - Arguments to create many WorksiteWorkers.
     * @example
     * // Create many WorksiteWorkers
     * const worksiteWorker = await prisma.worksiteWorker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorksiteWorkerCreateManyArgs>(args?: SelectSubset<T, WorksiteWorkerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorksiteWorkers and returns the data saved in the database.
     * @param {WorksiteWorkerCreateManyAndReturnArgs} args - Arguments to create many WorksiteWorkers.
     * @example
     * // Create many WorksiteWorkers
     * const worksiteWorker = await prisma.worksiteWorker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorksiteWorkers and only return the `id`
     * const worksiteWorkerWithIdOnly = await prisma.worksiteWorker.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorksiteWorkerCreateManyAndReturnArgs>(args?: SelectSubset<T, WorksiteWorkerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksiteWorkerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorksiteWorker.
     * @param {WorksiteWorkerDeleteArgs} args - Arguments to delete one WorksiteWorker.
     * @example
     * // Delete one WorksiteWorker
     * const WorksiteWorker = await prisma.worksiteWorker.delete({
     *   where: {
     *     // ... filter to delete one WorksiteWorker
     *   }
     * })
     * 
     */
    delete<T extends WorksiteWorkerDeleteArgs>(args: SelectSubset<T, WorksiteWorkerDeleteArgs<ExtArgs>>): Prisma__WorksiteWorkerClient<$Result.GetResult<Prisma.$WorksiteWorkerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorksiteWorker.
     * @param {WorksiteWorkerUpdateArgs} args - Arguments to update one WorksiteWorker.
     * @example
     * // Update one WorksiteWorker
     * const worksiteWorker = await prisma.worksiteWorker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorksiteWorkerUpdateArgs>(args: SelectSubset<T, WorksiteWorkerUpdateArgs<ExtArgs>>): Prisma__WorksiteWorkerClient<$Result.GetResult<Prisma.$WorksiteWorkerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorksiteWorkers.
     * @param {WorksiteWorkerDeleteManyArgs} args - Arguments to filter WorksiteWorkers to delete.
     * @example
     * // Delete a few WorksiteWorkers
     * const { count } = await prisma.worksiteWorker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorksiteWorkerDeleteManyArgs>(args?: SelectSubset<T, WorksiteWorkerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorksiteWorkers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteWorkerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorksiteWorkers
     * const worksiteWorker = await prisma.worksiteWorker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorksiteWorkerUpdateManyArgs>(args: SelectSubset<T, WorksiteWorkerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorksiteWorkers and returns the data updated in the database.
     * @param {WorksiteWorkerUpdateManyAndReturnArgs} args - Arguments to update many WorksiteWorkers.
     * @example
     * // Update many WorksiteWorkers
     * const worksiteWorker = await prisma.worksiteWorker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorksiteWorkers and only return the `id`
     * const worksiteWorkerWithIdOnly = await prisma.worksiteWorker.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorksiteWorkerUpdateManyAndReturnArgs>(args: SelectSubset<T, WorksiteWorkerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksiteWorkerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorksiteWorker.
     * @param {WorksiteWorkerUpsertArgs} args - Arguments to update or create a WorksiteWorker.
     * @example
     * // Update or create a WorksiteWorker
     * const worksiteWorker = await prisma.worksiteWorker.upsert({
     *   create: {
     *     // ... data to create a WorksiteWorker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorksiteWorker we want to update
     *   }
     * })
     */
    upsert<T extends WorksiteWorkerUpsertArgs>(args: SelectSubset<T, WorksiteWorkerUpsertArgs<ExtArgs>>): Prisma__WorksiteWorkerClient<$Result.GetResult<Prisma.$WorksiteWorkerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorksiteWorkers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteWorkerCountArgs} args - Arguments to filter WorksiteWorkers to count.
     * @example
     * // Count the number of WorksiteWorkers
     * const count = await prisma.worksiteWorker.count({
     *   where: {
     *     // ... the filter for the WorksiteWorkers we want to count
     *   }
     * })
    **/
    count<T extends WorksiteWorkerCountArgs>(
      args?: Subset<T, WorksiteWorkerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorksiteWorkerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorksiteWorker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteWorkerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorksiteWorkerAggregateArgs>(args: Subset<T, WorksiteWorkerAggregateArgs>): Prisma.PrismaPromise<GetWorksiteWorkerAggregateType<T>>

    /**
     * Group by WorksiteWorker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteWorkerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorksiteWorkerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorksiteWorkerGroupByArgs['orderBy'] }
        : { orderBy?: WorksiteWorkerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorksiteWorkerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorksiteWorkerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorksiteWorker model
   */
  readonly fields: WorksiteWorkerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorksiteWorker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorksiteWorkerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    worksite<T extends WorksiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorksiteDefaultArgs<ExtArgs>>): Prisma__WorksiteClient<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    worker<T extends WorkerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkerDefaultArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorksiteWorker model
   */
  interface WorksiteWorkerFieldRefs {
    readonly id: FieldRef<"WorksiteWorker", 'String'>
    readonly worksiteId: FieldRef<"WorksiteWorker", 'String'>
    readonly workerId: FieldRef<"WorksiteWorker", 'String'>
    readonly isActive: FieldRef<"WorksiteWorker", 'Boolean'>
    readonly joinedAt: FieldRef<"WorksiteWorker", 'DateTime'>
    readonly leftAt: FieldRef<"WorksiteWorker", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorksiteWorker findUnique
   */
  export type WorksiteWorkerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteWorker
     */
    select?: WorksiteWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteWorker
     */
    omit?: WorksiteWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteWorkerInclude<ExtArgs> | null
    /**
     * Filter, which WorksiteWorker to fetch.
     */
    where: WorksiteWorkerWhereUniqueInput
  }

  /**
   * WorksiteWorker findUniqueOrThrow
   */
  export type WorksiteWorkerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteWorker
     */
    select?: WorksiteWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteWorker
     */
    omit?: WorksiteWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteWorkerInclude<ExtArgs> | null
    /**
     * Filter, which WorksiteWorker to fetch.
     */
    where: WorksiteWorkerWhereUniqueInput
  }

  /**
   * WorksiteWorker findFirst
   */
  export type WorksiteWorkerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteWorker
     */
    select?: WorksiteWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteWorker
     */
    omit?: WorksiteWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteWorkerInclude<ExtArgs> | null
    /**
     * Filter, which WorksiteWorker to fetch.
     */
    where?: WorksiteWorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorksiteWorkers to fetch.
     */
    orderBy?: WorksiteWorkerOrderByWithRelationInput | WorksiteWorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorksiteWorkers.
     */
    cursor?: WorksiteWorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorksiteWorkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorksiteWorkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorksiteWorkers.
     */
    distinct?: WorksiteWorkerScalarFieldEnum | WorksiteWorkerScalarFieldEnum[]
  }

  /**
   * WorksiteWorker findFirstOrThrow
   */
  export type WorksiteWorkerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteWorker
     */
    select?: WorksiteWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteWorker
     */
    omit?: WorksiteWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteWorkerInclude<ExtArgs> | null
    /**
     * Filter, which WorksiteWorker to fetch.
     */
    where?: WorksiteWorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorksiteWorkers to fetch.
     */
    orderBy?: WorksiteWorkerOrderByWithRelationInput | WorksiteWorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorksiteWorkers.
     */
    cursor?: WorksiteWorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorksiteWorkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorksiteWorkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorksiteWorkers.
     */
    distinct?: WorksiteWorkerScalarFieldEnum | WorksiteWorkerScalarFieldEnum[]
  }

  /**
   * WorksiteWorker findMany
   */
  export type WorksiteWorkerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteWorker
     */
    select?: WorksiteWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteWorker
     */
    omit?: WorksiteWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteWorkerInclude<ExtArgs> | null
    /**
     * Filter, which WorksiteWorkers to fetch.
     */
    where?: WorksiteWorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorksiteWorkers to fetch.
     */
    orderBy?: WorksiteWorkerOrderByWithRelationInput | WorksiteWorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorksiteWorkers.
     */
    cursor?: WorksiteWorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorksiteWorkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorksiteWorkers.
     */
    skip?: number
    distinct?: WorksiteWorkerScalarFieldEnum | WorksiteWorkerScalarFieldEnum[]
  }

  /**
   * WorksiteWorker create
   */
  export type WorksiteWorkerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteWorker
     */
    select?: WorksiteWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteWorker
     */
    omit?: WorksiteWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteWorkerInclude<ExtArgs> | null
    /**
     * The data needed to create a WorksiteWorker.
     */
    data: XOR<WorksiteWorkerCreateInput, WorksiteWorkerUncheckedCreateInput>
  }

  /**
   * WorksiteWorker createMany
   */
  export type WorksiteWorkerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorksiteWorkers.
     */
    data: WorksiteWorkerCreateManyInput | WorksiteWorkerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorksiteWorker createManyAndReturn
   */
  export type WorksiteWorkerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteWorker
     */
    select?: WorksiteWorkerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteWorker
     */
    omit?: WorksiteWorkerOmit<ExtArgs> | null
    /**
     * The data used to create many WorksiteWorkers.
     */
    data: WorksiteWorkerCreateManyInput | WorksiteWorkerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteWorkerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorksiteWorker update
   */
  export type WorksiteWorkerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteWorker
     */
    select?: WorksiteWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteWorker
     */
    omit?: WorksiteWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteWorkerInclude<ExtArgs> | null
    /**
     * The data needed to update a WorksiteWorker.
     */
    data: XOR<WorksiteWorkerUpdateInput, WorksiteWorkerUncheckedUpdateInput>
    /**
     * Choose, which WorksiteWorker to update.
     */
    where: WorksiteWorkerWhereUniqueInput
  }

  /**
   * WorksiteWorker updateMany
   */
  export type WorksiteWorkerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorksiteWorkers.
     */
    data: XOR<WorksiteWorkerUpdateManyMutationInput, WorksiteWorkerUncheckedUpdateManyInput>
    /**
     * Filter which WorksiteWorkers to update
     */
    where?: WorksiteWorkerWhereInput
    /**
     * Limit how many WorksiteWorkers to update.
     */
    limit?: number
  }

  /**
   * WorksiteWorker updateManyAndReturn
   */
  export type WorksiteWorkerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteWorker
     */
    select?: WorksiteWorkerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteWorker
     */
    omit?: WorksiteWorkerOmit<ExtArgs> | null
    /**
     * The data used to update WorksiteWorkers.
     */
    data: XOR<WorksiteWorkerUpdateManyMutationInput, WorksiteWorkerUncheckedUpdateManyInput>
    /**
     * Filter which WorksiteWorkers to update
     */
    where?: WorksiteWorkerWhereInput
    /**
     * Limit how many WorksiteWorkers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteWorkerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorksiteWorker upsert
   */
  export type WorksiteWorkerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteWorker
     */
    select?: WorksiteWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteWorker
     */
    omit?: WorksiteWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteWorkerInclude<ExtArgs> | null
    /**
     * The filter to search for the WorksiteWorker to update in case it exists.
     */
    where: WorksiteWorkerWhereUniqueInput
    /**
     * In case the WorksiteWorker found by the `where` argument doesn't exist, create a new WorksiteWorker with this data.
     */
    create: XOR<WorksiteWorkerCreateInput, WorksiteWorkerUncheckedCreateInput>
    /**
     * In case the WorksiteWorker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorksiteWorkerUpdateInput, WorksiteWorkerUncheckedUpdateInput>
  }

  /**
   * WorksiteWorker delete
   */
  export type WorksiteWorkerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteWorker
     */
    select?: WorksiteWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteWorker
     */
    omit?: WorksiteWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteWorkerInclude<ExtArgs> | null
    /**
     * Filter which WorksiteWorker to delete.
     */
    where: WorksiteWorkerWhereUniqueInput
  }

  /**
   * WorksiteWorker deleteMany
   */
  export type WorksiteWorkerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorksiteWorkers to delete
     */
    where?: WorksiteWorkerWhereInput
    /**
     * Limit how many WorksiteWorkers to delete.
     */
    limit?: number
  }

  /**
   * WorksiteWorker without action
   */
  export type WorksiteWorkerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteWorker
     */
    select?: WorksiteWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteWorker
     */
    omit?: WorksiteWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteWorkerInclude<ExtArgs> | null
  }


  /**
   * Model WorksiteMachine
   */

  export type AggregateWorksiteMachine = {
    _count: WorksiteMachineCountAggregateOutputType | null
    _min: WorksiteMachineMinAggregateOutputType | null
    _max: WorksiteMachineMaxAggregateOutputType | null
  }

  export type WorksiteMachineMinAggregateOutputType = {
    id: string | null
    worksiteId: string | null
    machineId: string | null
    isActive: boolean | null
    joinedAt: Date | null
    leftAt: Date | null
  }

  export type WorksiteMachineMaxAggregateOutputType = {
    id: string | null
    worksiteId: string | null
    machineId: string | null
    isActive: boolean | null
    joinedAt: Date | null
    leftAt: Date | null
  }

  export type WorksiteMachineCountAggregateOutputType = {
    id: number
    worksiteId: number
    machineId: number
    isActive: number
    joinedAt: number
    leftAt: number
    _all: number
  }


  export type WorksiteMachineMinAggregateInputType = {
    id?: true
    worksiteId?: true
    machineId?: true
    isActive?: true
    joinedAt?: true
    leftAt?: true
  }

  export type WorksiteMachineMaxAggregateInputType = {
    id?: true
    worksiteId?: true
    machineId?: true
    isActive?: true
    joinedAt?: true
    leftAt?: true
  }

  export type WorksiteMachineCountAggregateInputType = {
    id?: true
    worksiteId?: true
    machineId?: true
    isActive?: true
    joinedAt?: true
    leftAt?: true
    _all?: true
  }

  export type WorksiteMachineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorksiteMachine to aggregate.
     */
    where?: WorksiteMachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorksiteMachines to fetch.
     */
    orderBy?: WorksiteMachineOrderByWithRelationInput | WorksiteMachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorksiteMachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorksiteMachines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorksiteMachines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorksiteMachines
    **/
    _count?: true | WorksiteMachineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorksiteMachineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorksiteMachineMaxAggregateInputType
  }

  export type GetWorksiteMachineAggregateType<T extends WorksiteMachineAggregateArgs> = {
        [P in keyof T & keyof AggregateWorksiteMachine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorksiteMachine[P]>
      : GetScalarType<T[P], AggregateWorksiteMachine[P]>
  }




  export type WorksiteMachineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorksiteMachineWhereInput
    orderBy?: WorksiteMachineOrderByWithAggregationInput | WorksiteMachineOrderByWithAggregationInput[]
    by: WorksiteMachineScalarFieldEnum[] | WorksiteMachineScalarFieldEnum
    having?: WorksiteMachineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorksiteMachineCountAggregateInputType | true
    _min?: WorksiteMachineMinAggregateInputType
    _max?: WorksiteMachineMaxAggregateInputType
  }

  export type WorksiteMachineGroupByOutputType = {
    id: string
    worksiteId: string
    machineId: string
    isActive: boolean
    joinedAt: Date
    leftAt: Date | null
    _count: WorksiteMachineCountAggregateOutputType | null
    _min: WorksiteMachineMinAggregateOutputType | null
    _max: WorksiteMachineMaxAggregateOutputType | null
  }

  type GetWorksiteMachineGroupByPayload<T extends WorksiteMachineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorksiteMachineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorksiteMachineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorksiteMachineGroupByOutputType[P]>
            : GetScalarType<T[P], WorksiteMachineGroupByOutputType[P]>
        }
      >
    >


  export type WorksiteMachineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worksiteId?: boolean
    machineId?: boolean
    isActive?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    worksite?: boolean | WorksiteDefaultArgs<ExtArgs>
    machine?: boolean | MachineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worksiteMachine"]>

  export type WorksiteMachineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worksiteId?: boolean
    machineId?: boolean
    isActive?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    worksite?: boolean | WorksiteDefaultArgs<ExtArgs>
    machine?: boolean | MachineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worksiteMachine"]>

  export type WorksiteMachineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worksiteId?: boolean
    machineId?: boolean
    isActive?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    worksite?: boolean | WorksiteDefaultArgs<ExtArgs>
    machine?: boolean | MachineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worksiteMachine"]>

  export type WorksiteMachineSelectScalar = {
    id?: boolean
    worksiteId?: boolean
    machineId?: boolean
    isActive?: boolean
    joinedAt?: boolean
    leftAt?: boolean
  }

  export type WorksiteMachineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "worksiteId" | "machineId" | "isActive" | "joinedAt" | "leftAt", ExtArgs["result"]["worksiteMachine"]>
  export type WorksiteMachineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worksite?: boolean | WorksiteDefaultArgs<ExtArgs>
    machine?: boolean | MachineDefaultArgs<ExtArgs>
  }
  export type WorksiteMachineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worksite?: boolean | WorksiteDefaultArgs<ExtArgs>
    machine?: boolean | MachineDefaultArgs<ExtArgs>
  }
  export type WorksiteMachineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worksite?: boolean | WorksiteDefaultArgs<ExtArgs>
    machine?: boolean | MachineDefaultArgs<ExtArgs>
  }

  export type $WorksiteMachinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorksiteMachine"
    objects: {
      worksite: Prisma.$WorksitePayload<ExtArgs>
      machine: Prisma.$MachinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      worksiteId: string
      machineId: string
      isActive: boolean
      joinedAt: Date
      leftAt: Date | null
    }, ExtArgs["result"]["worksiteMachine"]>
    composites: {}
  }

  type WorksiteMachineGetPayload<S extends boolean | null | undefined | WorksiteMachineDefaultArgs> = $Result.GetResult<Prisma.$WorksiteMachinePayload, S>

  type WorksiteMachineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorksiteMachineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorksiteMachineCountAggregateInputType | true
    }

  export interface WorksiteMachineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorksiteMachine'], meta: { name: 'WorksiteMachine' } }
    /**
     * Find zero or one WorksiteMachine that matches the filter.
     * @param {WorksiteMachineFindUniqueArgs} args - Arguments to find a WorksiteMachine
     * @example
     * // Get one WorksiteMachine
     * const worksiteMachine = await prisma.worksiteMachine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorksiteMachineFindUniqueArgs>(args: SelectSubset<T, WorksiteMachineFindUniqueArgs<ExtArgs>>): Prisma__WorksiteMachineClient<$Result.GetResult<Prisma.$WorksiteMachinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorksiteMachine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorksiteMachineFindUniqueOrThrowArgs} args - Arguments to find a WorksiteMachine
     * @example
     * // Get one WorksiteMachine
     * const worksiteMachine = await prisma.worksiteMachine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorksiteMachineFindUniqueOrThrowArgs>(args: SelectSubset<T, WorksiteMachineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorksiteMachineClient<$Result.GetResult<Prisma.$WorksiteMachinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorksiteMachine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteMachineFindFirstArgs} args - Arguments to find a WorksiteMachine
     * @example
     * // Get one WorksiteMachine
     * const worksiteMachine = await prisma.worksiteMachine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorksiteMachineFindFirstArgs>(args?: SelectSubset<T, WorksiteMachineFindFirstArgs<ExtArgs>>): Prisma__WorksiteMachineClient<$Result.GetResult<Prisma.$WorksiteMachinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorksiteMachine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteMachineFindFirstOrThrowArgs} args - Arguments to find a WorksiteMachine
     * @example
     * // Get one WorksiteMachine
     * const worksiteMachine = await prisma.worksiteMachine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorksiteMachineFindFirstOrThrowArgs>(args?: SelectSubset<T, WorksiteMachineFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorksiteMachineClient<$Result.GetResult<Prisma.$WorksiteMachinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorksiteMachines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteMachineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorksiteMachines
     * const worksiteMachines = await prisma.worksiteMachine.findMany()
     * 
     * // Get first 10 WorksiteMachines
     * const worksiteMachines = await prisma.worksiteMachine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worksiteMachineWithIdOnly = await prisma.worksiteMachine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorksiteMachineFindManyArgs>(args?: SelectSubset<T, WorksiteMachineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksiteMachinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorksiteMachine.
     * @param {WorksiteMachineCreateArgs} args - Arguments to create a WorksiteMachine.
     * @example
     * // Create one WorksiteMachine
     * const WorksiteMachine = await prisma.worksiteMachine.create({
     *   data: {
     *     // ... data to create a WorksiteMachine
     *   }
     * })
     * 
     */
    create<T extends WorksiteMachineCreateArgs>(args: SelectSubset<T, WorksiteMachineCreateArgs<ExtArgs>>): Prisma__WorksiteMachineClient<$Result.GetResult<Prisma.$WorksiteMachinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorksiteMachines.
     * @param {WorksiteMachineCreateManyArgs} args - Arguments to create many WorksiteMachines.
     * @example
     * // Create many WorksiteMachines
     * const worksiteMachine = await prisma.worksiteMachine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorksiteMachineCreateManyArgs>(args?: SelectSubset<T, WorksiteMachineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorksiteMachines and returns the data saved in the database.
     * @param {WorksiteMachineCreateManyAndReturnArgs} args - Arguments to create many WorksiteMachines.
     * @example
     * // Create many WorksiteMachines
     * const worksiteMachine = await prisma.worksiteMachine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorksiteMachines and only return the `id`
     * const worksiteMachineWithIdOnly = await prisma.worksiteMachine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorksiteMachineCreateManyAndReturnArgs>(args?: SelectSubset<T, WorksiteMachineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksiteMachinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorksiteMachine.
     * @param {WorksiteMachineDeleteArgs} args - Arguments to delete one WorksiteMachine.
     * @example
     * // Delete one WorksiteMachine
     * const WorksiteMachine = await prisma.worksiteMachine.delete({
     *   where: {
     *     // ... filter to delete one WorksiteMachine
     *   }
     * })
     * 
     */
    delete<T extends WorksiteMachineDeleteArgs>(args: SelectSubset<T, WorksiteMachineDeleteArgs<ExtArgs>>): Prisma__WorksiteMachineClient<$Result.GetResult<Prisma.$WorksiteMachinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorksiteMachine.
     * @param {WorksiteMachineUpdateArgs} args - Arguments to update one WorksiteMachine.
     * @example
     * // Update one WorksiteMachine
     * const worksiteMachine = await prisma.worksiteMachine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorksiteMachineUpdateArgs>(args: SelectSubset<T, WorksiteMachineUpdateArgs<ExtArgs>>): Prisma__WorksiteMachineClient<$Result.GetResult<Prisma.$WorksiteMachinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorksiteMachines.
     * @param {WorksiteMachineDeleteManyArgs} args - Arguments to filter WorksiteMachines to delete.
     * @example
     * // Delete a few WorksiteMachines
     * const { count } = await prisma.worksiteMachine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorksiteMachineDeleteManyArgs>(args?: SelectSubset<T, WorksiteMachineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorksiteMachines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteMachineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorksiteMachines
     * const worksiteMachine = await prisma.worksiteMachine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorksiteMachineUpdateManyArgs>(args: SelectSubset<T, WorksiteMachineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorksiteMachines and returns the data updated in the database.
     * @param {WorksiteMachineUpdateManyAndReturnArgs} args - Arguments to update many WorksiteMachines.
     * @example
     * // Update many WorksiteMachines
     * const worksiteMachine = await prisma.worksiteMachine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorksiteMachines and only return the `id`
     * const worksiteMachineWithIdOnly = await prisma.worksiteMachine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorksiteMachineUpdateManyAndReturnArgs>(args: SelectSubset<T, WorksiteMachineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksiteMachinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorksiteMachine.
     * @param {WorksiteMachineUpsertArgs} args - Arguments to update or create a WorksiteMachine.
     * @example
     * // Update or create a WorksiteMachine
     * const worksiteMachine = await prisma.worksiteMachine.upsert({
     *   create: {
     *     // ... data to create a WorksiteMachine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorksiteMachine we want to update
     *   }
     * })
     */
    upsert<T extends WorksiteMachineUpsertArgs>(args: SelectSubset<T, WorksiteMachineUpsertArgs<ExtArgs>>): Prisma__WorksiteMachineClient<$Result.GetResult<Prisma.$WorksiteMachinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorksiteMachines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteMachineCountArgs} args - Arguments to filter WorksiteMachines to count.
     * @example
     * // Count the number of WorksiteMachines
     * const count = await prisma.worksiteMachine.count({
     *   where: {
     *     // ... the filter for the WorksiteMachines we want to count
     *   }
     * })
    **/
    count<T extends WorksiteMachineCountArgs>(
      args?: Subset<T, WorksiteMachineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorksiteMachineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorksiteMachine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteMachineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorksiteMachineAggregateArgs>(args: Subset<T, WorksiteMachineAggregateArgs>): Prisma.PrismaPromise<GetWorksiteMachineAggregateType<T>>

    /**
     * Group by WorksiteMachine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteMachineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorksiteMachineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorksiteMachineGroupByArgs['orderBy'] }
        : { orderBy?: WorksiteMachineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorksiteMachineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorksiteMachineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorksiteMachine model
   */
  readonly fields: WorksiteMachineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorksiteMachine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorksiteMachineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    worksite<T extends WorksiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorksiteDefaultArgs<ExtArgs>>): Prisma__WorksiteClient<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    machine<T extends MachineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MachineDefaultArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorksiteMachine model
   */
  interface WorksiteMachineFieldRefs {
    readonly id: FieldRef<"WorksiteMachine", 'String'>
    readonly worksiteId: FieldRef<"WorksiteMachine", 'String'>
    readonly machineId: FieldRef<"WorksiteMachine", 'String'>
    readonly isActive: FieldRef<"WorksiteMachine", 'Boolean'>
    readonly joinedAt: FieldRef<"WorksiteMachine", 'DateTime'>
    readonly leftAt: FieldRef<"WorksiteMachine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorksiteMachine findUnique
   */
  export type WorksiteMachineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteMachine
     */
    select?: WorksiteMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteMachine
     */
    omit?: WorksiteMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteMachineInclude<ExtArgs> | null
    /**
     * Filter, which WorksiteMachine to fetch.
     */
    where: WorksiteMachineWhereUniqueInput
  }

  /**
   * WorksiteMachine findUniqueOrThrow
   */
  export type WorksiteMachineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteMachine
     */
    select?: WorksiteMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteMachine
     */
    omit?: WorksiteMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteMachineInclude<ExtArgs> | null
    /**
     * Filter, which WorksiteMachine to fetch.
     */
    where: WorksiteMachineWhereUniqueInput
  }

  /**
   * WorksiteMachine findFirst
   */
  export type WorksiteMachineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteMachine
     */
    select?: WorksiteMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteMachine
     */
    omit?: WorksiteMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteMachineInclude<ExtArgs> | null
    /**
     * Filter, which WorksiteMachine to fetch.
     */
    where?: WorksiteMachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorksiteMachines to fetch.
     */
    orderBy?: WorksiteMachineOrderByWithRelationInput | WorksiteMachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorksiteMachines.
     */
    cursor?: WorksiteMachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorksiteMachines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorksiteMachines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorksiteMachines.
     */
    distinct?: WorksiteMachineScalarFieldEnum | WorksiteMachineScalarFieldEnum[]
  }

  /**
   * WorksiteMachine findFirstOrThrow
   */
  export type WorksiteMachineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteMachine
     */
    select?: WorksiteMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteMachine
     */
    omit?: WorksiteMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteMachineInclude<ExtArgs> | null
    /**
     * Filter, which WorksiteMachine to fetch.
     */
    where?: WorksiteMachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorksiteMachines to fetch.
     */
    orderBy?: WorksiteMachineOrderByWithRelationInput | WorksiteMachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorksiteMachines.
     */
    cursor?: WorksiteMachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorksiteMachines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorksiteMachines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorksiteMachines.
     */
    distinct?: WorksiteMachineScalarFieldEnum | WorksiteMachineScalarFieldEnum[]
  }

  /**
   * WorksiteMachine findMany
   */
  export type WorksiteMachineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteMachine
     */
    select?: WorksiteMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteMachine
     */
    omit?: WorksiteMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteMachineInclude<ExtArgs> | null
    /**
     * Filter, which WorksiteMachines to fetch.
     */
    where?: WorksiteMachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorksiteMachines to fetch.
     */
    orderBy?: WorksiteMachineOrderByWithRelationInput | WorksiteMachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorksiteMachines.
     */
    cursor?: WorksiteMachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorksiteMachines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorksiteMachines.
     */
    skip?: number
    distinct?: WorksiteMachineScalarFieldEnum | WorksiteMachineScalarFieldEnum[]
  }

  /**
   * WorksiteMachine create
   */
  export type WorksiteMachineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteMachine
     */
    select?: WorksiteMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteMachine
     */
    omit?: WorksiteMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteMachineInclude<ExtArgs> | null
    /**
     * The data needed to create a WorksiteMachine.
     */
    data: XOR<WorksiteMachineCreateInput, WorksiteMachineUncheckedCreateInput>
  }

  /**
   * WorksiteMachine createMany
   */
  export type WorksiteMachineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorksiteMachines.
     */
    data: WorksiteMachineCreateManyInput | WorksiteMachineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorksiteMachine createManyAndReturn
   */
  export type WorksiteMachineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteMachine
     */
    select?: WorksiteMachineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteMachine
     */
    omit?: WorksiteMachineOmit<ExtArgs> | null
    /**
     * The data used to create many WorksiteMachines.
     */
    data: WorksiteMachineCreateManyInput | WorksiteMachineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteMachineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorksiteMachine update
   */
  export type WorksiteMachineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteMachine
     */
    select?: WorksiteMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteMachine
     */
    omit?: WorksiteMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteMachineInclude<ExtArgs> | null
    /**
     * The data needed to update a WorksiteMachine.
     */
    data: XOR<WorksiteMachineUpdateInput, WorksiteMachineUncheckedUpdateInput>
    /**
     * Choose, which WorksiteMachine to update.
     */
    where: WorksiteMachineWhereUniqueInput
  }

  /**
   * WorksiteMachine updateMany
   */
  export type WorksiteMachineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorksiteMachines.
     */
    data: XOR<WorksiteMachineUpdateManyMutationInput, WorksiteMachineUncheckedUpdateManyInput>
    /**
     * Filter which WorksiteMachines to update
     */
    where?: WorksiteMachineWhereInput
    /**
     * Limit how many WorksiteMachines to update.
     */
    limit?: number
  }

  /**
   * WorksiteMachine updateManyAndReturn
   */
  export type WorksiteMachineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteMachine
     */
    select?: WorksiteMachineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteMachine
     */
    omit?: WorksiteMachineOmit<ExtArgs> | null
    /**
     * The data used to update WorksiteMachines.
     */
    data: XOR<WorksiteMachineUpdateManyMutationInput, WorksiteMachineUncheckedUpdateManyInput>
    /**
     * Filter which WorksiteMachines to update
     */
    where?: WorksiteMachineWhereInput
    /**
     * Limit how many WorksiteMachines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteMachineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorksiteMachine upsert
   */
  export type WorksiteMachineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteMachine
     */
    select?: WorksiteMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteMachine
     */
    omit?: WorksiteMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteMachineInclude<ExtArgs> | null
    /**
     * The filter to search for the WorksiteMachine to update in case it exists.
     */
    where: WorksiteMachineWhereUniqueInput
    /**
     * In case the WorksiteMachine found by the `where` argument doesn't exist, create a new WorksiteMachine with this data.
     */
    create: XOR<WorksiteMachineCreateInput, WorksiteMachineUncheckedCreateInput>
    /**
     * In case the WorksiteMachine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorksiteMachineUpdateInput, WorksiteMachineUncheckedUpdateInput>
  }

  /**
   * WorksiteMachine delete
   */
  export type WorksiteMachineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteMachine
     */
    select?: WorksiteMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteMachine
     */
    omit?: WorksiteMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteMachineInclude<ExtArgs> | null
    /**
     * Filter which WorksiteMachine to delete.
     */
    where: WorksiteMachineWhereUniqueInput
  }

  /**
   * WorksiteMachine deleteMany
   */
  export type WorksiteMachineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorksiteMachines to delete
     */
    where?: WorksiteMachineWhereInput
    /**
     * Limit how many WorksiteMachines to delete.
     */
    limit?: number
  }

  /**
   * WorksiteMachine without action
   */
  export type WorksiteMachineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteMachine
     */
    select?: WorksiteMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorksiteMachine
     */
    omit?: WorksiteMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteMachineInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type DocumentSumAggregateOutputType = {
    fileSize: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    ownerType: $Enums.DocumentOwnerType | null
    companyId: string | null
    workerId: string | null
    machineId: string | null
    title: string | null
    docType: string | null
    fileKey: string | null
    mimeType: string | null
    fileSize: number | null
    checksum: string | null
    issuedAt: Date | null
    expiresAt: Date | null
    status: $Enums.DocumentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    ownerType: $Enums.DocumentOwnerType | null
    companyId: string | null
    workerId: string | null
    machineId: string | null
    title: string | null
    docType: string | null
    fileKey: string | null
    mimeType: string | null
    fileSize: number | null
    checksum: string | null
    issuedAt: Date | null
    expiresAt: Date | null
    status: $Enums.DocumentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    ownerType: number
    companyId: number
    workerId: number
    machineId: number
    title: number
    docType: number
    fileKey: number
    mimeType: number
    fileSize: number
    checksum: number
    issuedAt: number
    expiresAt: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    fileSize?: true
  }

  export type DocumentSumAggregateInputType = {
    fileSize?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    ownerType?: true
    companyId?: true
    workerId?: true
    machineId?: true
    title?: true
    docType?: true
    fileKey?: true
    mimeType?: true
    fileSize?: true
    checksum?: true
    issuedAt?: true
    expiresAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    ownerType?: true
    companyId?: true
    workerId?: true
    machineId?: true
    title?: true
    docType?: true
    fileKey?: true
    mimeType?: true
    fileSize?: true
    checksum?: true
    issuedAt?: true
    expiresAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    ownerType?: true
    companyId?: true
    workerId?: true
    machineId?: true
    title?: true
    docType?: true
    fileKey?: true
    mimeType?: true
    fileSize?: true
    checksum?: true
    issuedAt?: true
    expiresAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    ownerType: $Enums.DocumentOwnerType
    companyId: string | null
    workerId: string | null
    machineId: string | null
    title: string
    docType: string
    fileKey: string
    mimeType: string | null
    fileSize: number | null
    checksum: string | null
    issuedAt: Date | null
    expiresAt: Date | null
    status: $Enums.DocumentStatus
    createdAt: Date
    updatedAt: Date
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerType?: boolean
    companyId?: boolean
    workerId?: boolean
    machineId?: boolean
    title?: boolean
    docType?: boolean
    fileKey?: boolean
    mimeType?: boolean
    fileSize?: boolean
    checksum?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | Document$companyArgs<ExtArgs>
    worker?: boolean | Document$workerArgs<ExtArgs>
    machine?: boolean | Document$machineArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerType?: boolean
    companyId?: boolean
    workerId?: boolean
    machineId?: boolean
    title?: boolean
    docType?: boolean
    fileKey?: boolean
    mimeType?: boolean
    fileSize?: boolean
    checksum?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | Document$companyArgs<ExtArgs>
    worker?: boolean | Document$workerArgs<ExtArgs>
    machine?: boolean | Document$machineArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerType?: boolean
    companyId?: boolean
    workerId?: boolean
    machineId?: boolean
    title?: boolean
    docType?: boolean
    fileKey?: boolean
    mimeType?: boolean
    fileSize?: boolean
    checksum?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | Document$companyArgs<ExtArgs>
    worker?: boolean | Document$workerArgs<ExtArgs>
    machine?: boolean | Document$machineArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    ownerType?: boolean
    companyId?: boolean
    workerId?: boolean
    machineId?: boolean
    title?: boolean
    docType?: boolean
    fileKey?: boolean
    mimeType?: boolean
    fileSize?: boolean
    checksum?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerType" | "companyId" | "workerId" | "machineId" | "title" | "docType" | "fileKey" | "mimeType" | "fileSize" | "checksum" | "issuedAt" | "expiresAt" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | Document$companyArgs<ExtArgs>
    worker?: boolean | Document$workerArgs<ExtArgs>
    machine?: boolean | Document$machineArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | Document$companyArgs<ExtArgs>
    worker?: boolean | Document$workerArgs<ExtArgs>
    machine?: boolean | Document$machineArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | Document$companyArgs<ExtArgs>
    worker?: boolean | Document$workerArgs<ExtArgs>
    machine?: boolean | Document$machineArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs> | null
      worker: Prisma.$WorkerPayload<ExtArgs> | null
      machine: Prisma.$MachinePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerType: $Enums.DocumentOwnerType
      companyId: string | null
      workerId: string | null
      machineId: string | null
      title: string
      docType: string
      fileKey: string
      mimeType: string | null
      fileSize: number | null
      checksum: string | null
      issuedAt: Date | null
      expiresAt: Date | null
      status: $Enums.DocumentStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends Document$companyArgs<ExtArgs> = {}>(args?: Subset<T, Document$companyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    worker<T extends Document$workerArgs<ExtArgs> = {}>(args?: Subset<T, Document$workerArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    machine<T extends Document$machineArgs<ExtArgs> = {}>(args?: Subset<T, Document$machineArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly ownerType: FieldRef<"Document", 'DocumentOwnerType'>
    readonly companyId: FieldRef<"Document", 'String'>
    readonly workerId: FieldRef<"Document", 'String'>
    readonly machineId: FieldRef<"Document", 'String'>
    readonly title: FieldRef<"Document", 'String'>
    readonly docType: FieldRef<"Document", 'String'>
    readonly fileKey: FieldRef<"Document", 'String'>
    readonly mimeType: FieldRef<"Document", 'String'>
    readonly fileSize: FieldRef<"Document", 'Int'>
    readonly checksum: FieldRef<"Document", 'String'>
    readonly issuedAt: FieldRef<"Document", 'DateTime'>
    readonly expiresAt: FieldRef<"Document", 'DateTime'>
    readonly status: FieldRef<"Document", 'DocumentStatus'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
    readonly updatedAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document.company
   */
  export type Document$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * Document.worker
   */
  export type Document$workerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    where?: WorkerWhereInput
  }

  /**
   * Document.machine
   */
  export type Document$machineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    where?: MachineWhereInput
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive',
    emailMain: 'emailMain',
    emailSub: 'emailSub',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const WorkerScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    isActive: 'isActive',
    companyId: 'companyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkerScalarFieldEnum = (typeof WorkerScalarFieldEnum)[keyof typeof WorkerScalarFieldEnum]


  export const MachineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    serial: 'serial',
    isActive: 'isActive',
    companyId: 'companyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MachineScalarFieldEnum = (typeof MachineScalarFieldEnum)[keyof typeof MachineScalarFieldEnum]


  export const WorksiteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    isActive: 'isActive',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorksiteScalarFieldEnum = (typeof WorksiteScalarFieldEnum)[keyof typeof WorksiteScalarFieldEnum]


  export const WorksiteCompanyScalarFieldEnum: {
    id: 'id',
    worksiteId: 'worksiteId',
    companyId: 'companyId',
    isActive: 'isActive',
    joinedAt: 'joinedAt',
    leftAt: 'leftAt'
  };

  export type WorksiteCompanyScalarFieldEnum = (typeof WorksiteCompanyScalarFieldEnum)[keyof typeof WorksiteCompanyScalarFieldEnum]


  export const WorksiteWorkerScalarFieldEnum: {
    id: 'id',
    worksiteId: 'worksiteId',
    workerId: 'workerId',
    isActive: 'isActive',
    joinedAt: 'joinedAt',
    leftAt: 'leftAt'
  };

  export type WorksiteWorkerScalarFieldEnum = (typeof WorksiteWorkerScalarFieldEnum)[keyof typeof WorksiteWorkerScalarFieldEnum]


  export const WorksiteMachineScalarFieldEnum: {
    id: 'id',
    worksiteId: 'worksiteId',
    machineId: 'machineId',
    isActive: 'isActive',
    joinedAt: 'joinedAt',
    leftAt: 'leftAt'
  };

  export type WorksiteMachineScalarFieldEnum = (typeof WorksiteMachineScalarFieldEnum)[keyof typeof WorksiteMachineScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    ownerType: 'ownerType',
    companyId: 'companyId',
    workerId: 'workerId',
    machineId: 'machineId',
    title: 'title',
    docType: 'docType',
    fileKey: 'fileKey',
    mimeType: 'mimeType',
    fileSize: 'fileSize',
    checksum: 'checksum',
    issuedAt: 'issuedAt',
    expiresAt: 'expiresAt',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'DocumentOwnerType'
   */
  export type EnumDocumentOwnerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentOwnerType'>
    


  /**
   * Reference to a field of type 'DocumentOwnerType[]'
   */
  export type ListEnumDocumentOwnerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentOwnerType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DocumentStatus'
   */
  export type EnumDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentStatus'>
    


  /**
   * Reference to a field of type 'DocumentStatus[]'
   */
  export type ListEnumDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    isActive?: BoolFilter<"Company"> | boolean
    emailMain?: StringNullableFilter<"Company"> | string | null
    emailSub?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    workers?: WorkerListRelationFilter
    machines?: MachineListRelationFilter
    worksites?: WorksiteCompanyListRelationFilter
    documents?: DocumentListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    emailMain?: SortOrderInput | SortOrder
    emailSub?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workers?: WorkerOrderByRelationAggregateInput
    machines?: MachineOrderByRelationAggregateInput
    worksites?: WorksiteCompanyOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    isActive?: BoolFilter<"Company"> | boolean
    emailMain?: StringNullableFilter<"Company"> | string | null
    emailSub?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    workers?: WorkerListRelationFilter
    machines?: MachineListRelationFilter
    worksites?: WorksiteCompanyListRelationFilter
    documents?: DocumentListRelationFilter
  }, "id" | "name">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    emailMain?: SortOrderInput | SortOrder
    emailSub?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    isActive?: BoolWithAggregatesFilter<"Company"> | boolean
    emailMain?: StringNullableWithAggregatesFilter<"Company"> | string | null
    emailSub?: StringNullableWithAggregatesFilter<"Company"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type WorkerWhereInput = {
    AND?: WorkerWhereInput | WorkerWhereInput[]
    OR?: WorkerWhereInput[]
    NOT?: WorkerWhereInput | WorkerWhereInput[]
    id?: StringFilter<"Worker"> | string
    fullName?: StringFilter<"Worker"> | string
    email?: StringFilter<"Worker"> | string
    isActive?: BoolFilter<"Worker"> | boolean
    companyId?: StringFilter<"Worker"> | string
    createdAt?: DateTimeFilter<"Worker"> | Date | string
    updatedAt?: DateTimeFilter<"Worker"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    worksites?: WorksiteWorkerListRelationFilter
    documents?: DocumentListRelationFilter
  }

  export type WorkerOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    worksites?: WorksiteWorkerOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
  }

  export type WorkerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: WorkerWhereInput | WorkerWhereInput[]
    OR?: WorkerWhereInput[]
    NOT?: WorkerWhereInput | WorkerWhereInput[]
    fullName?: StringFilter<"Worker"> | string
    isActive?: BoolFilter<"Worker"> | boolean
    companyId?: StringFilter<"Worker"> | string
    createdAt?: DateTimeFilter<"Worker"> | Date | string
    updatedAt?: DateTimeFilter<"Worker"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    worksites?: WorksiteWorkerListRelationFilter
    documents?: DocumentListRelationFilter
  }, "id" | "email">

  export type WorkerOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkerCountOrderByAggregateInput
    _max?: WorkerMaxOrderByAggregateInput
    _min?: WorkerMinOrderByAggregateInput
  }

  export type WorkerScalarWhereWithAggregatesInput = {
    AND?: WorkerScalarWhereWithAggregatesInput | WorkerScalarWhereWithAggregatesInput[]
    OR?: WorkerScalarWhereWithAggregatesInput[]
    NOT?: WorkerScalarWhereWithAggregatesInput | WorkerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Worker"> | string
    fullName?: StringWithAggregatesFilter<"Worker"> | string
    email?: StringWithAggregatesFilter<"Worker"> | string
    isActive?: BoolWithAggregatesFilter<"Worker"> | boolean
    companyId?: StringWithAggregatesFilter<"Worker"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Worker"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Worker"> | Date | string
  }

  export type MachineWhereInput = {
    AND?: MachineWhereInput | MachineWhereInput[]
    OR?: MachineWhereInput[]
    NOT?: MachineWhereInput | MachineWhereInput[]
    id?: StringFilter<"Machine"> | string
    name?: StringFilter<"Machine"> | string
    serial?: StringNullableFilter<"Machine"> | string | null
    isActive?: BoolFilter<"Machine"> | boolean
    companyId?: StringNullableFilter<"Machine"> | string | null
    createdAt?: DateTimeFilter<"Machine"> | Date | string
    updatedAt?: DateTimeFilter<"Machine"> | Date | string
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    worksites?: WorksiteMachineListRelationFilter
    documents?: DocumentListRelationFilter
  }

  export type MachineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    serial?: SortOrderInput | SortOrder
    isActive?: SortOrder
    companyId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    worksites?: WorksiteMachineOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
  }

  export type MachineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    serial?: string
    AND?: MachineWhereInput | MachineWhereInput[]
    OR?: MachineWhereInput[]
    NOT?: MachineWhereInput | MachineWhereInput[]
    name?: StringFilter<"Machine"> | string
    isActive?: BoolFilter<"Machine"> | boolean
    companyId?: StringNullableFilter<"Machine"> | string | null
    createdAt?: DateTimeFilter<"Machine"> | Date | string
    updatedAt?: DateTimeFilter<"Machine"> | Date | string
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    worksites?: WorksiteMachineListRelationFilter
    documents?: DocumentListRelationFilter
  }, "id" | "serial">

  export type MachineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    serial?: SortOrderInput | SortOrder
    isActive?: SortOrder
    companyId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MachineCountOrderByAggregateInput
    _max?: MachineMaxOrderByAggregateInput
    _min?: MachineMinOrderByAggregateInput
  }

  export type MachineScalarWhereWithAggregatesInput = {
    AND?: MachineScalarWhereWithAggregatesInput | MachineScalarWhereWithAggregatesInput[]
    OR?: MachineScalarWhereWithAggregatesInput[]
    NOT?: MachineScalarWhereWithAggregatesInput | MachineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Machine"> | string
    name?: StringWithAggregatesFilter<"Machine"> | string
    serial?: StringNullableWithAggregatesFilter<"Machine"> | string | null
    isActive?: BoolWithAggregatesFilter<"Machine"> | boolean
    companyId?: StringNullableWithAggregatesFilter<"Machine"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Machine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Machine"> | Date | string
  }

  export type WorksiteWhereInput = {
    AND?: WorksiteWhereInput | WorksiteWhereInput[]
    OR?: WorksiteWhereInput[]
    NOT?: WorksiteWhereInput | WorksiteWhereInput[]
    id?: StringFilter<"Worksite"> | string
    name?: StringFilter<"Worksite"> | string
    location?: StringNullableFilter<"Worksite"> | string | null
    isActive?: BoolFilter<"Worksite"> | boolean
    startsAt?: DateTimeNullableFilter<"Worksite"> | Date | string | null
    endsAt?: DateTimeNullableFilter<"Worksite"> | Date | string | null
    createdAt?: DateTimeFilter<"Worksite"> | Date | string
    updatedAt?: DateTimeFilter<"Worksite"> | Date | string
    companies?: WorksiteCompanyListRelationFilter
    workers?: WorksiteWorkerListRelationFilter
    machines?: WorksiteMachineListRelationFilter
  }

  export type WorksiteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    isActive?: SortOrder
    startsAt?: SortOrderInput | SortOrder
    endsAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companies?: WorksiteCompanyOrderByRelationAggregateInput
    workers?: WorksiteWorkerOrderByRelationAggregateInput
    machines?: WorksiteMachineOrderByRelationAggregateInput
  }

  export type WorksiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorksiteWhereInput | WorksiteWhereInput[]
    OR?: WorksiteWhereInput[]
    NOT?: WorksiteWhereInput | WorksiteWhereInput[]
    name?: StringFilter<"Worksite"> | string
    location?: StringNullableFilter<"Worksite"> | string | null
    isActive?: BoolFilter<"Worksite"> | boolean
    startsAt?: DateTimeNullableFilter<"Worksite"> | Date | string | null
    endsAt?: DateTimeNullableFilter<"Worksite"> | Date | string | null
    createdAt?: DateTimeFilter<"Worksite"> | Date | string
    updatedAt?: DateTimeFilter<"Worksite"> | Date | string
    companies?: WorksiteCompanyListRelationFilter
    workers?: WorksiteWorkerListRelationFilter
    machines?: WorksiteMachineListRelationFilter
  }, "id">

  export type WorksiteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    isActive?: SortOrder
    startsAt?: SortOrderInput | SortOrder
    endsAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorksiteCountOrderByAggregateInput
    _max?: WorksiteMaxOrderByAggregateInput
    _min?: WorksiteMinOrderByAggregateInput
  }

  export type WorksiteScalarWhereWithAggregatesInput = {
    AND?: WorksiteScalarWhereWithAggregatesInput | WorksiteScalarWhereWithAggregatesInput[]
    OR?: WorksiteScalarWhereWithAggregatesInput[]
    NOT?: WorksiteScalarWhereWithAggregatesInput | WorksiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Worksite"> | string
    name?: StringWithAggregatesFilter<"Worksite"> | string
    location?: StringNullableWithAggregatesFilter<"Worksite"> | string | null
    isActive?: BoolWithAggregatesFilter<"Worksite"> | boolean
    startsAt?: DateTimeNullableWithAggregatesFilter<"Worksite"> | Date | string | null
    endsAt?: DateTimeNullableWithAggregatesFilter<"Worksite"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Worksite"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Worksite"> | Date | string
  }

  export type WorksiteCompanyWhereInput = {
    AND?: WorksiteCompanyWhereInput | WorksiteCompanyWhereInput[]
    OR?: WorksiteCompanyWhereInput[]
    NOT?: WorksiteCompanyWhereInput | WorksiteCompanyWhereInput[]
    id?: StringFilter<"WorksiteCompany"> | string
    worksiteId?: StringFilter<"WorksiteCompany"> | string
    companyId?: StringFilter<"WorksiteCompany"> | string
    isActive?: BoolFilter<"WorksiteCompany"> | boolean
    joinedAt?: DateTimeFilter<"WorksiteCompany"> | Date | string
    leftAt?: DateTimeNullableFilter<"WorksiteCompany"> | Date | string | null
    worksite?: XOR<WorksiteScalarRelationFilter, WorksiteWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type WorksiteCompanyOrderByWithRelationInput = {
    id?: SortOrder
    worksiteId?: SortOrder
    companyId?: SortOrder
    isActive?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    worksite?: WorksiteOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
  }

  export type WorksiteCompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    worksiteId_companyId?: WorksiteCompanyWorksiteIdCompanyIdCompoundUniqueInput
    AND?: WorksiteCompanyWhereInput | WorksiteCompanyWhereInput[]
    OR?: WorksiteCompanyWhereInput[]
    NOT?: WorksiteCompanyWhereInput | WorksiteCompanyWhereInput[]
    worksiteId?: StringFilter<"WorksiteCompany"> | string
    companyId?: StringFilter<"WorksiteCompany"> | string
    isActive?: BoolFilter<"WorksiteCompany"> | boolean
    joinedAt?: DateTimeFilter<"WorksiteCompany"> | Date | string
    leftAt?: DateTimeNullableFilter<"WorksiteCompany"> | Date | string | null
    worksite?: XOR<WorksiteScalarRelationFilter, WorksiteWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id" | "worksiteId_companyId">

  export type WorksiteCompanyOrderByWithAggregationInput = {
    id?: SortOrder
    worksiteId?: SortOrder
    companyId?: SortOrder
    isActive?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    _count?: WorksiteCompanyCountOrderByAggregateInput
    _max?: WorksiteCompanyMaxOrderByAggregateInput
    _min?: WorksiteCompanyMinOrderByAggregateInput
  }

  export type WorksiteCompanyScalarWhereWithAggregatesInput = {
    AND?: WorksiteCompanyScalarWhereWithAggregatesInput | WorksiteCompanyScalarWhereWithAggregatesInput[]
    OR?: WorksiteCompanyScalarWhereWithAggregatesInput[]
    NOT?: WorksiteCompanyScalarWhereWithAggregatesInput | WorksiteCompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorksiteCompany"> | string
    worksiteId?: StringWithAggregatesFilter<"WorksiteCompany"> | string
    companyId?: StringWithAggregatesFilter<"WorksiteCompany"> | string
    isActive?: BoolWithAggregatesFilter<"WorksiteCompany"> | boolean
    joinedAt?: DateTimeWithAggregatesFilter<"WorksiteCompany"> | Date | string
    leftAt?: DateTimeNullableWithAggregatesFilter<"WorksiteCompany"> | Date | string | null
  }

  export type WorksiteWorkerWhereInput = {
    AND?: WorksiteWorkerWhereInput | WorksiteWorkerWhereInput[]
    OR?: WorksiteWorkerWhereInput[]
    NOT?: WorksiteWorkerWhereInput | WorksiteWorkerWhereInput[]
    id?: StringFilter<"WorksiteWorker"> | string
    worksiteId?: StringFilter<"WorksiteWorker"> | string
    workerId?: StringFilter<"WorksiteWorker"> | string
    isActive?: BoolFilter<"WorksiteWorker"> | boolean
    joinedAt?: DateTimeFilter<"WorksiteWorker"> | Date | string
    leftAt?: DateTimeNullableFilter<"WorksiteWorker"> | Date | string | null
    worksite?: XOR<WorksiteScalarRelationFilter, WorksiteWhereInput>
    worker?: XOR<WorkerScalarRelationFilter, WorkerWhereInput>
  }

  export type WorksiteWorkerOrderByWithRelationInput = {
    id?: SortOrder
    worksiteId?: SortOrder
    workerId?: SortOrder
    isActive?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    worksite?: WorksiteOrderByWithRelationInput
    worker?: WorkerOrderByWithRelationInput
  }

  export type WorksiteWorkerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    worksiteId_workerId?: WorksiteWorkerWorksiteIdWorkerIdCompoundUniqueInput
    AND?: WorksiteWorkerWhereInput | WorksiteWorkerWhereInput[]
    OR?: WorksiteWorkerWhereInput[]
    NOT?: WorksiteWorkerWhereInput | WorksiteWorkerWhereInput[]
    worksiteId?: StringFilter<"WorksiteWorker"> | string
    workerId?: StringFilter<"WorksiteWorker"> | string
    isActive?: BoolFilter<"WorksiteWorker"> | boolean
    joinedAt?: DateTimeFilter<"WorksiteWorker"> | Date | string
    leftAt?: DateTimeNullableFilter<"WorksiteWorker"> | Date | string | null
    worksite?: XOR<WorksiteScalarRelationFilter, WorksiteWhereInput>
    worker?: XOR<WorkerScalarRelationFilter, WorkerWhereInput>
  }, "id" | "worksiteId_workerId">

  export type WorksiteWorkerOrderByWithAggregationInput = {
    id?: SortOrder
    worksiteId?: SortOrder
    workerId?: SortOrder
    isActive?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    _count?: WorksiteWorkerCountOrderByAggregateInput
    _max?: WorksiteWorkerMaxOrderByAggregateInput
    _min?: WorksiteWorkerMinOrderByAggregateInput
  }

  export type WorksiteWorkerScalarWhereWithAggregatesInput = {
    AND?: WorksiteWorkerScalarWhereWithAggregatesInput | WorksiteWorkerScalarWhereWithAggregatesInput[]
    OR?: WorksiteWorkerScalarWhereWithAggregatesInput[]
    NOT?: WorksiteWorkerScalarWhereWithAggregatesInput | WorksiteWorkerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorksiteWorker"> | string
    worksiteId?: StringWithAggregatesFilter<"WorksiteWorker"> | string
    workerId?: StringWithAggregatesFilter<"WorksiteWorker"> | string
    isActive?: BoolWithAggregatesFilter<"WorksiteWorker"> | boolean
    joinedAt?: DateTimeWithAggregatesFilter<"WorksiteWorker"> | Date | string
    leftAt?: DateTimeNullableWithAggregatesFilter<"WorksiteWorker"> | Date | string | null
  }

  export type WorksiteMachineWhereInput = {
    AND?: WorksiteMachineWhereInput | WorksiteMachineWhereInput[]
    OR?: WorksiteMachineWhereInput[]
    NOT?: WorksiteMachineWhereInput | WorksiteMachineWhereInput[]
    id?: StringFilter<"WorksiteMachine"> | string
    worksiteId?: StringFilter<"WorksiteMachine"> | string
    machineId?: StringFilter<"WorksiteMachine"> | string
    isActive?: BoolFilter<"WorksiteMachine"> | boolean
    joinedAt?: DateTimeFilter<"WorksiteMachine"> | Date | string
    leftAt?: DateTimeNullableFilter<"WorksiteMachine"> | Date | string | null
    worksite?: XOR<WorksiteScalarRelationFilter, WorksiteWhereInput>
    machine?: XOR<MachineScalarRelationFilter, MachineWhereInput>
  }

  export type WorksiteMachineOrderByWithRelationInput = {
    id?: SortOrder
    worksiteId?: SortOrder
    machineId?: SortOrder
    isActive?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    worksite?: WorksiteOrderByWithRelationInput
    machine?: MachineOrderByWithRelationInput
  }

  export type WorksiteMachineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    worksiteId_machineId?: WorksiteMachineWorksiteIdMachineIdCompoundUniqueInput
    AND?: WorksiteMachineWhereInput | WorksiteMachineWhereInput[]
    OR?: WorksiteMachineWhereInput[]
    NOT?: WorksiteMachineWhereInput | WorksiteMachineWhereInput[]
    worksiteId?: StringFilter<"WorksiteMachine"> | string
    machineId?: StringFilter<"WorksiteMachine"> | string
    isActive?: BoolFilter<"WorksiteMachine"> | boolean
    joinedAt?: DateTimeFilter<"WorksiteMachine"> | Date | string
    leftAt?: DateTimeNullableFilter<"WorksiteMachine"> | Date | string | null
    worksite?: XOR<WorksiteScalarRelationFilter, WorksiteWhereInput>
    machine?: XOR<MachineScalarRelationFilter, MachineWhereInput>
  }, "id" | "worksiteId_machineId">

  export type WorksiteMachineOrderByWithAggregationInput = {
    id?: SortOrder
    worksiteId?: SortOrder
    machineId?: SortOrder
    isActive?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    _count?: WorksiteMachineCountOrderByAggregateInput
    _max?: WorksiteMachineMaxOrderByAggregateInput
    _min?: WorksiteMachineMinOrderByAggregateInput
  }

  export type WorksiteMachineScalarWhereWithAggregatesInput = {
    AND?: WorksiteMachineScalarWhereWithAggregatesInput | WorksiteMachineScalarWhereWithAggregatesInput[]
    OR?: WorksiteMachineScalarWhereWithAggregatesInput[]
    NOT?: WorksiteMachineScalarWhereWithAggregatesInput | WorksiteMachineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorksiteMachine"> | string
    worksiteId?: StringWithAggregatesFilter<"WorksiteMachine"> | string
    machineId?: StringWithAggregatesFilter<"WorksiteMachine"> | string
    isActive?: BoolWithAggregatesFilter<"WorksiteMachine"> | boolean
    joinedAt?: DateTimeWithAggregatesFilter<"WorksiteMachine"> | Date | string
    leftAt?: DateTimeNullableWithAggregatesFilter<"WorksiteMachine"> | Date | string | null
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    ownerType?: EnumDocumentOwnerTypeFilter<"Document"> | $Enums.DocumentOwnerType
    companyId?: StringNullableFilter<"Document"> | string | null
    workerId?: StringNullableFilter<"Document"> | string | null
    machineId?: StringNullableFilter<"Document"> | string | null
    title?: StringFilter<"Document"> | string
    docType?: StringFilter<"Document"> | string
    fileKey?: StringFilter<"Document"> | string
    mimeType?: StringNullableFilter<"Document"> | string | null
    fileSize?: IntNullableFilter<"Document"> | number | null
    checksum?: StringNullableFilter<"Document"> | string | null
    issuedAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    status?: EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    worker?: XOR<WorkerNullableScalarRelationFilter, WorkerWhereInput> | null
    machine?: XOR<MachineNullableScalarRelationFilter, MachineWhereInput> | null
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    ownerType?: SortOrder
    companyId?: SortOrderInput | SortOrder
    workerId?: SortOrderInput | SortOrder
    machineId?: SortOrderInput | SortOrder
    title?: SortOrder
    docType?: SortOrder
    fileKey?: SortOrder
    mimeType?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    checksum?: SortOrderInput | SortOrder
    issuedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    worker?: WorkerOrderByWithRelationInput
    machine?: MachineOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    ownerType?: EnumDocumentOwnerTypeFilter<"Document"> | $Enums.DocumentOwnerType
    companyId?: StringNullableFilter<"Document"> | string | null
    workerId?: StringNullableFilter<"Document"> | string | null
    machineId?: StringNullableFilter<"Document"> | string | null
    title?: StringFilter<"Document"> | string
    docType?: StringFilter<"Document"> | string
    fileKey?: StringFilter<"Document"> | string
    mimeType?: StringNullableFilter<"Document"> | string | null
    fileSize?: IntNullableFilter<"Document"> | number | null
    checksum?: StringNullableFilter<"Document"> | string | null
    issuedAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    status?: EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    worker?: XOR<WorkerNullableScalarRelationFilter, WorkerWhereInput> | null
    machine?: XOR<MachineNullableScalarRelationFilter, MachineWhereInput> | null
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    ownerType?: SortOrder
    companyId?: SortOrderInput | SortOrder
    workerId?: SortOrderInput | SortOrder
    machineId?: SortOrderInput | SortOrder
    title?: SortOrder
    docType?: SortOrder
    fileKey?: SortOrder
    mimeType?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    checksum?: SortOrderInput | SortOrder
    issuedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    ownerType?: EnumDocumentOwnerTypeWithAggregatesFilter<"Document"> | $Enums.DocumentOwnerType
    companyId?: StringNullableWithAggregatesFilter<"Document"> | string | null
    workerId?: StringNullableWithAggregatesFilter<"Document"> | string | null
    machineId?: StringNullableWithAggregatesFilter<"Document"> | string | null
    title?: StringWithAggregatesFilter<"Document"> | string
    docType?: StringWithAggregatesFilter<"Document"> | string
    fileKey?: StringWithAggregatesFilter<"Document"> | string
    mimeType?: StringNullableWithAggregatesFilter<"Document"> | string | null
    fileSize?: IntNullableWithAggregatesFilter<"Document"> | number | null
    checksum?: StringNullableWithAggregatesFilter<"Document"> | string | null
    issuedAt?: DateTimeNullableWithAggregatesFilter<"Document"> | Date | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Document"> | Date | string | null
    status?: EnumDocumentStatusWithAggregatesFilter<"Document"> | $Enums.DocumentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    isActive?: boolean
    emailMain?: string | null
    emailSub?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workers?: WorkerCreateNestedManyWithoutCompanyInput
    machines?: MachineCreateNestedManyWithoutCompanyInput
    worksites?: WorksiteCompanyCreateNestedManyWithoutCompanyInput
    documents?: DocumentCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    isActive?: boolean
    emailMain?: string | null
    emailSub?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workers?: WorkerUncheckedCreateNestedManyWithoutCompanyInput
    machines?: MachineUncheckedCreateNestedManyWithoutCompanyInput
    worksites?: WorksiteCompanyUncheckedCreateNestedManyWithoutCompanyInput
    documents?: DocumentUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailMain?: NullableStringFieldUpdateOperationsInput | string | null
    emailSub?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workers?: WorkerUpdateManyWithoutCompanyNestedInput
    machines?: MachineUpdateManyWithoutCompanyNestedInput
    worksites?: WorksiteCompanyUpdateManyWithoutCompanyNestedInput
    documents?: DocumentUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailMain?: NullableStringFieldUpdateOperationsInput | string | null
    emailSub?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workers?: WorkerUncheckedUpdateManyWithoutCompanyNestedInput
    machines?: MachineUncheckedUpdateManyWithoutCompanyNestedInput
    worksites?: WorksiteCompanyUncheckedUpdateManyWithoutCompanyNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    isActive?: boolean
    emailMain?: string | null
    emailSub?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailMain?: NullableStringFieldUpdateOperationsInput | string | null
    emailSub?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailMain?: NullableStringFieldUpdateOperationsInput | string | null
    emailSub?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkerCreateInput = {
    id?: string
    fullName: string
    email: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutWorkersInput
    worksites?: WorksiteWorkerCreateNestedManyWithoutWorkerInput
    documents?: DocumentCreateNestedManyWithoutWorkerInput
  }

  export type WorkerUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    isActive?: boolean
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    worksites?: WorksiteWorkerUncheckedCreateNestedManyWithoutWorkerInput
    documents?: DocumentUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutWorkersNestedInput
    worksites?: WorksiteWorkerUpdateManyWithoutWorkerNestedInput
    documents?: DocumentUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worksites?: WorksiteWorkerUncheckedUpdateManyWithoutWorkerNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerCreateManyInput = {
    id?: string
    fullName: string
    email: string
    isActive?: boolean
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineCreateInput = {
    id?: string
    name: string
    serial?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyCreateNestedOneWithoutMachinesInput
    worksites?: WorksiteMachineCreateNestedManyWithoutMachineInput
    documents?: DocumentCreateNestedManyWithoutMachineInput
  }

  export type MachineUncheckedCreateInput = {
    id?: string
    name: string
    serial?: string | null
    isActive?: boolean
    companyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    worksites?: WorksiteMachineUncheckedCreateNestedManyWithoutMachineInput
    documents?: DocumentUncheckedCreateNestedManyWithoutMachineInput
  }

  export type MachineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serial?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutMachinesNestedInput
    worksites?: WorksiteMachineUpdateManyWithoutMachineNestedInput
    documents?: DocumentUpdateManyWithoutMachineNestedInput
  }

  export type MachineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serial?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worksites?: WorksiteMachineUncheckedUpdateManyWithoutMachineNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutMachineNestedInput
  }

  export type MachineCreateManyInput = {
    id?: string
    name: string
    serial?: string | null
    isActive?: boolean
    companyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MachineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serial?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serial?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorksiteCreateInput = {
    id?: string
    name: string
    location?: string | null
    isActive?: boolean
    startsAt?: Date | string | null
    endsAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: WorksiteCompanyCreateNestedManyWithoutWorksiteInput
    workers?: WorksiteWorkerCreateNestedManyWithoutWorksiteInput
    machines?: WorksiteMachineCreateNestedManyWithoutWorksiteInput
  }

  export type WorksiteUncheckedCreateInput = {
    id?: string
    name: string
    location?: string | null
    isActive?: boolean
    startsAt?: Date | string | null
    endsAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: WorksiteCompanyUncheckedCreateNestedManyWithoutWorksiteInput
    workers?: WorksiteWorkerUncheckedCreateNestedManyWithoutWorksiteInput
    machines?: WorksiteMachineUncheckedCreateNestedManyWithoutWorksiteInput
  }

  export type WorksiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: WorksiteCompanyUpdateManyWithoutWorksiteNestedInput
    workers?: WorksiteWorkerUpdateManyWithoutWorksiteNestedInput
    machines?: WorksiteMachineUpdateManyWithoutWorksiteNestedInput
  }

  export type WorksiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: WorksiteCompanyUncheckedUpdateManyWithoutWorksiteNestedInput
    workers?: WorksiteWorkerUncheckedUpdateManyWithoutWorksiteNestedInput
    machines?: WorksiteMachineUncheckedUpdateManyWithoutWorksiteNestedInput
  }

  export type WorksiteCreateManyInput = {
    id?: string
    name: string
    location?: string | null
    isActive?: boolean
    startsAt?: Date | string | null
    endsAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorksiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorksiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorksiteCompanyCreateInput = {
    id?: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
    worksite: WorksiteCreateNestedOneWithoutCompaniesInput
    company: CompanyCreateNestedOneWithoutWorksitesInput
  }

  export type WorksiteCompanyUncheckedCreateInput = {
    id?: string
    worksiteId: string
    companyId: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type WorksiteCompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    worksite?: WorksiteUpdateOneRequiredWithoutCompaniesNestedInput
    company?: CompanyUpdateOneRequiredWithoutWorksitesNestedInput
  }

  export type WorksiteCompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    worksiteId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorksiteCompanyCreateManyInput = {
    id?: string
    worksiteId: string
    companyId: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type WorksiteCompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorksiteCompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    worksiteId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorksiteWorkerCreateInput = {
    id?: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
    worksite: WorksiteCreateNestedOneWithoutWorkersInput
    worker: WorkerCreateNestedOneWithoutWorksitesInput
  }

  export type WorksiteWorkerUncheckedCreateInput = {
    id?: string
    worksiteId: string
    workerId: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type WorksiteWorkerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    worksite?: WorksiteUpdateOneRequiredWithoutWorkersNestedInput
    worker?: WorkerUpdateOneRequiredWithoutWorksitesNestedInput
  }

  export type WorksiteWorkerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    worksiteId?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorksiteWorkerCreateManyInput = {
    id?: string
    worksiteId: string
    workerId: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type WorksiteWorkerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorksiteWorkerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    worksiteId?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorksiteMachineCreateInput = {
    id?: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
    worksite: WorksiteCreateNestedOneWithoutMachinesInput
    machine: MachineCreateNestedOneWithoutWorksitesInput
  }

  export type WorksiteMachineUncheckedCreateInput = {
    id?: string
    worksiteId: string
    machineId: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type WorksiteMachineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    worksite?: WorksiteUpdateOneRequiredWithoutMachinesNestedInput
    machine?: MachineUpdateOneRequiredWithoutWorksitesNestedInput
  }

  export type WorksiteMachineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    worksiteId?: StringFieldUpdateOperationsInput | string
    machineId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorksiteMachineCreateManyInput = {
    id?: string
    worksiteId: string
    machineId: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type WorksiteMachineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorksiteMachineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    worksiteId?: StringFieldUpdateOperationsInput | string
    machineId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentCreateInput = {
    id?: string
    ownerType: $Enums.DocumentOwnerType
    title: string
    docType: string
    fileKey: string
    mimeType?: string | null
    fileSize?: number | null
    checksum?: string | null
    issuedAt?: Date | string | null
    expiresAt?: Date | string | null
    status?: $Enums.DocumentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyCreateNestedOneWithoutDocumentsInput
    worker?: WorkerCreateNestedOneWithoutDocumentsInput
    machine?: MachineCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    ownerType: $Enums.DocumentOwnerType
    companyId?: string | null
    workerId?: string | null
    machineId?: string | null
    title: string
    docType: string
    fileKey: string
    mimeType?: string | null
    fileSize?: number | null
    checksum?: string | null
    issuedAt?: Date | string | null
    expiresAt?: Date | string | null
    status?: $Enums.DocumentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumDocumentOwnerTypeFieldUpdateOperationsInput | $Enums.DocumentOwnerType
    title?: StringFieldUpdateOperationsInput | string
    docType?: StringFieldUpdateOperationsInput | string
    fileKey?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutDocumentsNestedInput
    worker?: WorkerUpdateOneWithoutDocumentsNestedInput
    machine?: MachineUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumDocumentOwnerTypeFieldUpdateOperationsInput | $Enums.DocumentOwnerType
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    workerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    docType?: StringFieldUpdateOperationsInput | string
    fileKey?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyInput = {
    id?: string
    ownerType: $Enums.DocumentOwnerType
    companyId?: string | null
    workerId?: string | null
    machineId?: string | null
    title: string
    docType: string
    fileKey: string
    mimeType?: string | null
    fileSize?: number | null
    checksum?: string | null
    issuedAt?: Date | string | null
    expiresAt?: Date | string | null
    status?: $Enums.DocumentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumDocumentOwnerTypeFieldUpdateOperationsInput | $Enums.DocumentOwnerType
    title?: StringFieldUpdateOperationsInput | string
    docType?: StringFieldUpdateOperationsInput | string
    fileKey?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumDocumentOwnerTypeFieldUpdateOperationsInput | $Enums.DocumentOwnerType
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    workerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    docType?: StringFieldUpdateOperationsInput | string
    fileKey?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WorkerListRelationFilter = {
    every?: WorkerWhereInput
    some?: WorkerWhereInput
    none?: WorkerWhereInput
  }

  export type MachineListRelationFilter = {
    every?: MachineWhereInput
    some?: MachineWhereInput
    none?: MachineWhereInput
  }

  export type WorksiteCompanyListRelationFilter = {
    every?: WorksiteCompanyWhereInput
    some?: WorksiteCompanyWhereInput
    none?: WorksiteCompanyWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MachineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorksiteCompanyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    emailMain?: SortOrder
    emailSub?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    emailMain?: SortOrder
    emailSub?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    emailMain?: SortOrder
    emailSub?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type WorksiteWorkerListRelationFilter = {
    every?: WorksiteWorkerWhereInput
    some?: WorksiteWorkerWhereInput
    none?: WorksiteWorkerWhereInput
  }

  export type WorksiteWorkerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkerCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkerMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkerMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type WorksiteMachineListRelationFilter = {
    every?: WorksiteMachineWhereInput
    some?: WorksiteMachineWhereInput
    none?: WorksiteMachineWhereInput
  }

  export type WorksiteMachineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MachineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serial?: SortOrder
    isActive?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MachineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serial?: SortOrder
    isActive?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MachineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serial?: SortOrder
    isActive?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type WorksiteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    isActive?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorksiteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    isActive?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorksiteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    isActive?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type WorksiteScalarRelationFilter = {
    is?: WorksiteWhereInput
    isNot?: WorksiteWhereInput
  }

  export type WorksiteCompanyWorksiteIdCompanyIdCompoundUniqueInput = {
    worksiteId: string
    companyId: string
  }

  export type WorksiteCompanyCountOrderByAggregateInput = {
    id?: SortOrder
    worksiteId?: SortOrder
    companyId?: SortOrder
    isActive?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type WorksiteCompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    worksiteId?: SortOrder
    companyId?: SortOrder
    isActive?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type WorksiteCompanyMinOrderByAggregateInput = {
    id?: SortOrder
    worksiteId?: SortOrder
    companyId?: SortOrder
    isActive?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type WorkerScalarRelationFilter = {
    is?: WorkerWhereInput
    isNot?: WorkerWhereInput
  }

  export type WorksiteWorkerWorksiteIdWorkerIdCompoundUniqueInput = {
    worksiteId: string
    workerId: string
  }

  export type WorksiteWorkerCountOrderByAggregateInput = {
    id?: SortOrder
    worksiteId?: SortOrder
    workerId?: SortOrder
    isActive?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type WorksiteWorkerMaxOrderByAggregateInput = {
    id?: SortOrder
    worksiteId?: SortOrder
    workerId?: SortOrder
    isActive?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type WorksiteWorkerMinOrderByAggregateInput = {
    id?: SortOrder
    worksiteId?: SortOrder
    workerId?: SortOrder
    isActive?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type MachineScalarRelationFilter = {
    is?: MachineWhereInput
    isNot?: MachineWhereInput
  }

  export type WorksiteMachineWorksiteIdMachineIdCompoundUniqueInput = {
    worksiteId: string
    machineId: string
  }

  export type WorksiteMachineCountOrderByAggregateInput = {
    id?: SortOrder
    worksiteId?: SortOrder
    machineId?: SortOrder
    isActive?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type WorksiteMachineMaxOrderByAggregateInput = {
    id?: SortOrder
    worksiteId?: SortOrder
    machineId?: SortOrder
    isActive?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type WorksiteMachineMinOrderByAggregateInput = {
    id?: SortOrder
    worksiteId?: SortOrder
    machineId?: SortOrder
    isActive?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type EnumDocumentOwnerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentOwnerType | EnumDocumentOwnerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentOwnerType[] | ListEnumDocumentOwnerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentOwnerType[] | ListEnumDocumentOwnerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentOwnerTypeFilter<$PrismaModel> | $Enums.DocumentOwnerType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusFilter<$PrismaModel> | $Enums.DocumentStatus
  }

  export type WorkerNullableScalarRelationFilter = {
    is?: WorkerWhereInput | null
    isNot?: WorkerWhereInput | null
  }

  export type MachineNullableScalarRelationFilter = {
    is?: MachineWhereInput | null
    isNot?: MachineWhereInput | null
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    ownerType?: SortOrder
    companyId?: SortOrder
    workerId?: SortOrder
    machineId?: SortOrder
    title?: SortOrder
    docType?: SortOrder
    fileKey?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    checksum?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerType?: SortOrder
    companyId?: SortOrder
    workerId?: SortOrder
    machineId?: SortOrder
    title?: SortOrder
    docType?: SortOrder
    fileKey?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    checksum?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    ownerType?: SortOrder
    companyId?: SortOrder
    workerId?: SortOrder
    machineId?: SortOrder
    title?: SortOrder
    docType?: SortOrder
    fileKey?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    checksum?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type EnumDocumentOwnerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentOwnerType | EnumDocumentOwnerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentOwnerType[] | ListEnumDocumentOwnerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentOwnerType[] | ListEnumDocumentOwnerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentOwnerTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentOwnerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentOwnerTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentOwnerTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumDocumentStatusFilter<$PrismaModel>
  }

  export type WorkerCreateNestedManyWithoutCompanyInput = {
    create?: XOR<WorkerCreateWithoutCompanyInput, WorkerUncheckedCreateWithoutCompanyInput> | WorkerCreateWithoutCompanyInput[] | WorkerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: WorkerCreateOrConnectWithoutCompanyInput | WorkerCreateOrConnectWithoutCompanyInput[]
    createMany?: WorkerCreateManyCompanyInputEnvelope
    connect?: WorkerWhereUniqueInput | WorkerWhereUniqueInput[]
  }

  export type MachineCreateNestedManyWithoutCompanyInput = {
    create?: XOR<MachineCreateWithoutCompanyInput, MachineUncheckedCreateWithoutCompanyInput> | MachineCreateWithoutCompanyInput[] | MachineUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: MachineCreateOrConnectWithoutCompanyInput | MachineCreateOrConnectWithoutCompanyInput[]
    createMany?: MachineCreateManyCompanyInputEnvelope
    connect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
  }

  export type WorksiteCompanyCreateNestedManyWithoutCompanyInput = {
    create?: XOR<WorksiteCompanyCreateWithoutCompanyInput, WorksiteCompanyUncheckedCreateWithoutCompanyInput> | WorksiteCompanyCreateWithoutCompanyInput[] | WorksiteCompanyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: WorksiteCompanyCreateOrConnectWithoutCompanyInput | WorksiteCompanyCreateOrConnectWithoutCompanyInput[]
    createMany?: WorksiteCompanyCreateManyCompanyInputEnvelope
    connect?: WorksiteCompanyWhereUniqueInput | WorksiteCompanyWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutCompanyInput = {
    create?: XOR<DocumentCreateWithoutCompanyInput, DocumentUncheckedCreateWithoutCompanyInput> | DocumentCreateWithoutCompanyInput[] | DocumentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCompanyInput | DocumentCreateOrConnectWithoutCompanyInput[]
    createMany?: DocumentCreateManyCompanyInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type WorkerUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<WorkerCreateWithoutCompanyInput, WorkerUncheckedCreateWithoutCompanyInput> | WorkerCreateWithoutCompanyInput[] | WorkerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: WorkerCreateOrConnectWithoutCompanyInput | WorkerCreateOrConnectWithoutCompanyInput[]
    createMany?: WorkerCreateManyCompanyInputEnvelope
    connect?: WorkerWhereUniqueInput | WorkerWhereUniqueInput[]
  }

  export type MachineUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<MachineCreateWithoutCompanyInput, MachineUncheckedCreateWithoutCompanyInput> | MachineCreateWithoutCompanyInput[] | MachineUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: MachineCreateOrConnectWithoutCompanyInput | MachineCreateOrConnectWithoutCompanyInput[]
    createMany?: MachineCreateManyCompanyInputEnvelope
    connect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
  }

  export type WorksiteCompanyUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<WorksiteCompanyCreateWithoutCompanyInput, WorksiteCompanyUncheckedCreateWithoutCompanyInput> | WorksiteCompanyCreateWithoutCompanyInput[] | WorksiteCompanyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: WorksiteCompanyCreateOrConnectWithoutCompanyInput | WorksiteCompanyCreateOrConnectWithoutCompanyInput[]
    createMany?: WorksiteCompanyCreateManyCompanyInputEnvelope
    connect?: WorksiteCompanyWhereUniqueInput | WorksiteCompanyWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<DocumentCreateWithoutCompanyInput, DocumentUncheckedCreateWithoutCompanyInput> | DocumentCreateWithoutCompanyInput[] | DocumentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCompanyInput | DocumentCreateOrConnectWithoutCompanyInput[]
    createMany?: DocumentCreateManyCompanyInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WorkerUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<WorkerCreateWithoutCompanyInput, WorkerUncheckedCreateWithoutCompanyInput> | WorkerCreateWithoutCompanyInput[] | WorkerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: WorkerCreateOrConnectWithoutCompanyInput | WorkerCreateOrConnectWithoutCompanyInput[]
    upsert?: WorkerUpsertWithWhereUniqueWithoutCompanyInput | WorkerUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: WorkerCreateManyCompanyInputEnvelope
    set?: WorkerWhereUniqueInput | WorkerWhereUniqueInput[]
    disconnect?: WorkerWhereUniqueInput | WorkerWhereUniqueInput[]
    delete?: WorkerWhereUniqueInput | WorkerWhereUniqueInput[]
    connect?: WorkerWhereUniqueInput | WorkerWhereUniqueInput[]
    update?: WorkerUpdateWithWhereUniqueWithoutCompanyInput | WorkerUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: WorkerUpdateManyWithWhereWithoutCompanyInput | WorkerUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: WorkerScalarWhereInput | WorkerScalarWhereInput[]
  }

  export type MachineUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<MachineCreateWithoutCompanyInput, MachineUncheckedCreateWithoutCompanyInput> | MachineCreateWithoutCompanyInput[] | MachineUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: MachineCreateOrConnectWithoutCompanyInput | MachineCreateOrConnectWithoutCompanyInput[]
    upsert?: MachineUpsertWithWhereUniqueWithoutCompanyInput | MachineUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: MachineCreateManyCompanyInputEnvelope
    set?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    disconnect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    delete?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    connect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    update?: MachineUpdateWithWhereUniqueWithoutCompanyInput | MachineUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: MachineUpdateManyWithWhereWithoutCompanyInput | MachineUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: MachineScalarWhereInput | MachineScalarWhereInput[]
  }

  export type WorksiteCompanyUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<WorksiteCompanyCreateWithoutCompanyInput, WorksiteCompanyUncheckedCreateWithoutCompanyInput> | WorksiteCompanyCreateWithoutCompanyInput[] | WorksiteCompanyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: WorksiteCompanyCreateOrConnectWithoutCompanyInput | WorksiteCompanyCreateOrConnectWithoutCompanyInput[]
    upsert?: WorksiteCompanyUpsertWithWhereUniqueWithoutCompanyInput | WorksiteCompanyUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: WorksiteCompanyCreateManyCompanyInputEnvelope
    set?: WorksiteCompanyWhereUniqueInput | WorksiteCompanyWhereUniqueInput[]
    disconnect?: WorksiteCompanyWhereUniqueInput | WorksiteCompanyWhereUniqueInput[]
    delete?: WorksiteCompanyWhereUniqueInput | WorksiteCompanyWhereUniqueInput[]
    connect?: WorksiteCompanyWhereUniqueInput | WorksiteCompanyWhereUniqueInput[]
    update?: WorksiteCompanyUpdateWithWhereUniqueWithoutCompanyInput | WorksiteCompanyUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: WorksiteCompanyUpdateManyWithWhereWithoutCompanyInput | WorksiteCompanyUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: WorksiteCompanyScalarWhereInput | WorksiteCompanyScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<DocumentCreateWithoutCompanyInput, DocumentUncheckedCreateWithoutCompanyInput> | DocumentCreateWithoutCompanyInput[] | DocumentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCompanyInput | DocumentCreateOrConnectWithoutCompanyInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutCompanyInput | DocumentUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: DocumentCreateManyCompanyInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutCompanyInput | DocumentUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutCompanyInput | DocumentUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type WorkerUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<WorkerCreateWithoutCompanyInput, WorkerUncheckedCreateWithoutCompanyInput> | WorkerCreateWithoutCompanyInput[] | WorkerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: WorkerCreateOrConnectWithoutCompanyInput | WorkerCreateOrConnectWithoutCompanyInput[]
    upsert?: WorkerUpsertWithWhereUniqueWithoutCompanyInput | WorkerUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: WorkerCreateManyCompanyInputEnvelope
    set?: WorkerWhereUniqueInput | WorkerWhereUniqueInput[]
    disconnect?: WorkerWhereUniqueInput | WorkerWhereUniqueInput[]
    delete?: WorkerWhereUniqueInput | WorkerWhereUniqueInput[]
    connect?: WorkerWhereUniqueInput | WorkerWhereUniqueInput[]
    update?: WorkerUpdateWithWhereUniqueWithoutCompanyInput | WorkerUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: WorkerUpdateManyWithWhereWithoutCompanyInput | WorkerUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: WorkerScalarWhereInput | WorkerScalarWhereInput[]
  }

  export type MachineUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<MachineCreateWithoutCompanyInput, MachineUncheckedCreateWithoutCompanyInput> | MachineCreateWithoutCompanyInput[] | MachineUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: MachineCreateOrConnectWithoutCompanyInput | MachineCreateOrConnectWithoutCompanyInput[]
    upsert?: MachineUpsertWithWhereUniqueWithoutCompanyInput | MachineUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: MachineCreateManyCompanyInputEnvelope
    set?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    disconnect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    delete?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    connect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    update?: MachineUpdateWithWhereUniqueWithoutCompanyInput | MachineUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: MachineUpdateManyWithWhereWithoutCompanyInput | MachineUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: MachineScalarWhereInput | MachineScalarWhereInput[]
  }

  export type WorksiteCompanyUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<WorksiteCompanyCreateWithoutCompanyInput, WorksiteCompanyUncheckedCreateWithoutCompanyInput> | WorksiteCompanyCreateWithoutCompanyInput[] | WorksiteCompanyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: WorksiteCompanyCreateOrConnectWithoutCompanyInput | WorksiteCompanyCreateOrConnectWithoutCompanyInput[]
    upsert?: WorksiteCompanyUpsertWithWhereUniqueWithoutCompanyInput | WorksiteCompanyUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: WorksiteCompanyCreateManyCompanyInputEnvelope
    set?: WorksiteCompanyWhereUniqueInput | WorksiteCompanyWhereUniqueInput[]
    disconnect?: WorksiteCompanyWhereUniqueInput | WorksiteCompanyWhereUniqueInput[]
    delete?: WorksiteCompanyWhereUniqueInput | WorksiteCompanyWhereUniqueInput[]
    connect?: WorksiteCompanyWhereUniqueInput | WorksiteCompanyWhereUniqueInput[]
    update?: WorksiteCompanyUpdateWithWhereUniqueWithoutCompanyInput | WorksiteCompanyUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: WorksiteCompanyUpdateManyWithWhereWithoutCompanyInput | WorksiteCompanyUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: WorksiteCompanyScalarWhereInput | WorksiteCompanyScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<DocumentCreateWithoutCompanyInput, DocumentUncheckedCreateWithoutCompanyInput> | DocumentCreateWithoutCompanyInput[] | DocumentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCompanyInput | DocumentCreateOrConnectWithoutCompanyInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutCompanyInput | DocumentUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: DocumentCreateManyCompanyInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutCompanyInput | DocumentUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutCompanyInput | DocumentUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutWorkersInput = {
    create?: XOR<CompanyCreateWithoutWorkersInput, CompanyUncheckedCreateWithoutWorkersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutWorkersInput
    connect?: CompanyWhereUniqueInput
  }

  export type WorksiteWorkerCreateNestedManyWithoutWorkerInput = {
    create?: XOR<WorksiteWorkerCreateWithoutWorkerInput, WorksiteWorkerUncheckedCreateWithoutWorkerInput> | WorksiteWorkerCreateWithoutWorkerInput[] | WorksiteWorkerUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: WorksiteWorkerCreateOrConnectWithoutWorkerInput | WorksiteWorkerCreateOrConnectWithoutWorkerInput[]
    createMany?: WorksiteWorkerCreateManyWorkerInputEnvelope
    connect?: WorksiteWorkerWhereUniqueInput | WorksiteWorkerWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutWorkerInput = {
    create?: XOR<DocumentCreateWithoutWorkerInput, DocumentUncheckedCreateWithoutWorkerInput> | DocumentCreateWithoutWorkerInput[] | DocumentUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutWorkerInput | DocumentCreateOrConnectWithoutWorkerInput[]
    createMany?: DocumentCreateManyWorkerInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type WorksiteWorkerUncheckedCreateNestedManyWithoutWorkerInput = {
    create?: XOR<WorksiteWorkerCreateWithoutWorkerInput, WorksiteWorkerUncheckedCreateWithoutWorkerInput> | WorksiteWorkerCreateWithoutWorkerInput[] | WorksiteWorkerUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: WorksiteWorkerCreateOrConnectWithoutWorkerInput | WorksiteWorkerCreateOrConnectWithoutWorkerInput[]
    createMany?: WorksiteWorkerCreateManyWorkerInputEnvelope
    connect?: WorksiteWorkerWhereUniqueInput | WorksiteWorkerWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutWorkerInput = {
    create?: XOR<DocumentCreateWithoutWorkerInput, DocumentUncheckedCreateWithoutWorkerInput> | DocumentCreateWithoutWorkerInput[] | DocumentUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutWorkerInput | DocumentCreateOrConnectWithoutWorkerInput[]
    createMany?: DocumentCreateManyWorkerInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutWorkersNestedInput = {
    create?: XOR<CompanyCreateWithoutWorkersInput, CompanyUncheckedCreateWithoutWorkersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutWorkersInput
    upsert?: CompanyUpsertWithoutWorkersInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutWorkersInput, CompanyUpdateWithoutWorkersInput>, CompanyUncheckedUpdateWithoutWorkersInput>
  }

  export type WorksiteWorkerUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<WorksiteWorkerCreateWithoutWorkerInput, WorksiteWorkerUncheckedCreateWithoutWorkerInput> | WorksiteWorkerCreateWithoutWorkerInput[] | WorksiteWorkerUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: WorksiteWorkerCreateOrConnectWithoutWorkerInput | WorksiteWorkerCreateOrConnectWithoutWorkerInput[]
    upsert?: WorksiteWorkerUpsertWithWhereUniqueWithoutWorkerInput | WorksiteWorkerUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: WorksiteWorkerCreateManyWorkerInputEnvelope
    set?: WorksiteWorkerWhereUniqueInput | WorksiteWorkerWhereUniqueInput[]
    disconnect?: WorksiteWorkerWhereUniqueInput | WorksiteWorkerWhereUniqueInput[]
    delete?: WorksiteWorkerWhereUniqueInput | WorksiteWorkerWhereUniqueInput[]
    connect?: WorksiteWorkerWhereUniqueInput | WorksiteWorkerWhereUniqueInput[]
    update?: WorksiteWorkerUpdateWithWhereUniqueWithoutWorkerInput | WorksiteWorkerUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: WorksiteWorkerUpdateManyWithWhereWithoutWorkerInput | WorksiteWorkerUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: WorksiteWorkerScalarWhereInput | WorksiteWorkerScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<DocumentCreateWithoutWorkerInput, DocumentUncheckedCreateWithoutWorkerInput> | DocumentCreateWithoutWorkerInput[] | DocumentUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutWorkerInput | DocumentCreateOrConnectWithoutWorkerInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutWorkerInput | DocumentUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: DocumentCreateManyWorkerInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutWorkerInput | DocumentUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutWorkerInput | DocumentUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type WorksiteWorkerUncheckedUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<WorksiteWorkerCreateWithoutWorkerInput, WorksiteWorkerUncheckedCreateWithoutWorkerInput> | WorksiteWorkerCreateWithoutWorkerInput[] | WorksiteWorkerUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: WorksiteWorkerCreateOrConnectWithoutWorkerInput | WorksiteWorkerCreateOrConnectWithoutWorkerInput[]
    upsert?: WorksiteWorkerUpsertWithWhereUniqueWithoutWorkerInput | WorksiteWorkerUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: WorksiteWorkerCreateManyWorkerInputEnvelope
    set?: WorksiteWorkerWhereUniqueInput | WorksiteWorkerWhereUniqueInput[]
    disconnect?: WorksiteWorkerWhereUniqueInput | WorksiteWorkerWhereUniqueInput[]
    delete?: WorksiteWorkerWhereUniqueInput | WorksiteWorkerWhereUniqueInput[]
    connect?: WorksiteWorkerWhereUniqueInput | WorksiteWorkerWhereUniqueInput[]
    update?: WorksiteWorkerUpdateWithWhereUniqueWithoutWorkerInput | WorksiteWorkerUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: WorksiteWorkerUpdateManyWithWhereWithoutWorkerInput | WorksiteWorkerUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: WorksiteWorkerScalarWhereInput | WorksiteWorkerScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<DocumentCreateWithoutWorkerInput, DocumentUncheckedCreateWithoutWorkerInput> | DocumentCreateWithoutWorkerInput[] | DocumentUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutWorkerInput | DocumentCreateOrConnectWithoutWorkerInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutWorkerInput | DocumentUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: DocumentCreateManyWorkerInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutWorkerInput | DocumentUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutWorkerInput | DocumentUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutMachinesInput = {
    create?: XOR<CompanyCreateWithoutMachinesInput, CompanyUncheckedCreateWithoutMachinesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutMachinesInput
    connect?: CompanyWhereUniqueInput
  }

  export type WorksiteMachineCreateNestedManyWithoutMachineInput = {
    create?: XOR<WorksiteMachineCreateWithoutMachineInput, WorksiteMachineUncheckedCreateWithoutMachineInput> | WorksiteMachineCreateWithoutMachineInput[] | WorksiteMachineUncheckedCreateWithoutMachineInput[]
    connectOrCreate?: WorksiteMachineCreateOrConnectWithoutMachineInput | WorksiteMachineCreateOrConnectWithoutMachineInput[]
    createMany?: WorksiteMachineCreateManyMachineInputEnvelope
    connect?: WorksiteMachineWhereUniqueInput | WorksiteMachineWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutMachineInput = {
    create?: XOR<DocumentCreateWithoutMachineInput, DocumentUncheckedCreateWithoutMachineInput> | DocumentCreateWithoutMachineInput[] | DocumentUncheckedCreateWithoutMachineInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutMachineInput | DocumentCreateOrConnectWithoutMachineInput[]
    createMany?: DocumentCreateManyMachineInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type WorksiteMachineUncheckedCreateNestedManyWithoutMachineInput = {
    create?: XOR<WorksiteMachineCreateWithoutMachineInput, WorksiteMachineUncheckedCreateWithoutMachineInput> | WorksiteMachineCreateWithoutMachineInput[] | WorksiteMachineUncheckedCreateWithoutMachineInput[]
    connectOrCreate?: WorksiteMachineCreateOrConnectWithoutMachineInput | WorksiteMachineCreateOrConnectWithoutMachineInput[]
    createMany?: WorksiteMachineCreateManyMachineInputEnvelope
    connect?: WorksiteMachineWhereUniqueInput | WorksiteMachineWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutMachineInput = {
    create?: XOR<DocumentCreateWithoutMachineInput, DocumentUncheckedCreateWithoutMachineInput> | DocumentCreateWithoutMachineInput[] | DocumentUncheckedCreateWithoutMachineInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutMachineInput | DocumentCreateOrConnectWithoutMachineInput[]
    createMany?: DocumentCreateManyMachineInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type CompanyUpdateOneWithoutMachinesNestedInput = {
    create?: XOR<CompanyCreateWithoutMachinesInput, CompanyUncheckedCreateWithoutMachinesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutMachinesInput
    upsert?: CompanyUpsertWithoutMachinesInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutMachinesInput, CompanyUpdateWithoutMachinesInput>, CompanyUncheckedUpdateWithoutMachinesInput>
  }

  export type WorksiteMachineUpdateManyWithoutMachineNestedInput = {
    create?: XOR<WorksiteMachineCreateWithoutMachineInput, WorksiteMachineUncheckedCreateWithoutMachineInput> | WorksiteMachineCreateWithoutMachineInput[] | WorksiteMachineUncheckedCreateWithoutMachineInput[]
    connectOrCreate?: WorksiteMachineCreateOrConnectWithoutMachineInput | WorksiteMachineCreateOrConnectWithoutMachineInput[]
    upsert?: WorksiteMachineUpsertWithWhereUniqueWithoutMachineInput | WorksiteMachineUpsertWithWhereUniqueWithoutMachineInput[]
    createMany?: WorksiteMachineCreateManyMachineInputEnvelope
    set?: WorksiteMachineWhereUniqueInput | WorksiteMachineWhereUniqueInput[]
    disconnect?: WorksiteMachineWhereUniqueInput | WorksiteMachineWhereUniqueInput[]
    delete?: WorksiteMachineWhereUniqueInput | WorksiteMachineWhereUniqueInput[]
    connect?: WorksiteMachineWhereUniqueInput | WorksiteMachineWhereUniqueInput[]
    update?: WorksiteMachineUpdateWithWhereUniqueWithoutMachineInput | WorksiteMachineUpdateWithWhereUniqueWithoutMachineInput[]
    updateMany?: WorksiteMachineUpdateManyWithWhereWithoutMachineInput | WorksiteMachineUpdateManyWithWhereWithoutMachineInput[]
    deleteMany?: WorksiteMachineScalarWhereInput | WorksiteMachineScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutMachineNestedInput = {
    create?: XOR<DocumentCreateWithoutMachineInput, DocumentUncheckedCreateWithoutMachineInput> | DocumentCreateWithoutMachineInput[] | DocumentUncheckedCreateWithoutMachineInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutMachineInput | DocumentCreateOrConnectWithoutMachineInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutMachineInput | DocumentUpsertWithWhereUniqueWithoutMachineInput[]
    createMany?: DocumentCreateManyMachineInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutMachineInput | DocumentUpdateWithWhereUniqueWithoutMachineInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutMachineInput | DocumentUpdateManyWithWhereWithoutMachineInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type WorksiteMachineUncheckedUpdateManyWithoutMachineNestedInput = {
    create?: XOR<WorksiteMachineCreateWithoutMachineInput, WorksiteMachineUncheckedCreateWithoutMachineInput> | WorksiteMachineCreateWithoutMachineInput[] | WorksiteMachineUncheckedCreateWithoutMachineInput[]
    connectOrCreate?: WorksiteMachineCreateOrConnectWithoutMachineInput | WorksiteMachineCreateOrConnectWithoutMachineInput[]
    upsert?: WorksiteMachineUpsertWithWhereUniqueWithoutMachineInput | WorksiteMachineUpsertWithWhereUniqueWithoutMachineInput[]
    createMany?: WorksiteMachineCreateManyMachineInputEnvelope
    set?: WorksiteMachineWhereUniqueInput | WorksiteMachineWhereUniqueInput[]
    disconnect?: WorksiteMachineWhereUniqueInput | WorksiteMachineWhereUniqueInput[]
    delete?: WorksiteMachineWhereUniqueInput | WorksiteMachineWhereUniqueInput[]
    connect?: WorksiteMachineWhereUniqueInput | WorksiteMachineWhereUniqueInput[]
    update?: WorksiteMachineUpdateWithWhereUniqueWithoutMachineInput | WorksiteMachineUpdateWithWhereUniqueWithoutMachineInput[]
    updateMany?: WorksiteMachineUpdateManyWithWhereWithoutMachineInput | WorksiteMachineUpdateManyWithWhereWithoutMachineInput[]
    deleteMany?: WorksiteMachineScalarWhereInput | WorksiteMachineScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutMachineNestedInput = {
    create?: XOR<DocumentCreateWithoutMachineInput, DocumentUncheckedCreateWithoutMachineInput> | DocumentCreateWithoutMachineInput[] | DocumentUncheckedCreateWithoutMachineInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutMachineInput | DocumentCreateOrConnectWithoutMachineInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutMachineInput | DocumentUpsertWithWhereUniqueWithoutMachineInput[]
    createMany?: DocumentCreateManyMachineInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutMachineInput | DocumentUpdateWithWhereUniqueWithoutMachineInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutMachineInput | DocumentUpdateManyWithWhereWithoutMachineInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type WorksiteCompanyCreateNestedManyWithoutWorksiteInput = {
    create?: XOR<WorksiteCompanyCreateWithoutWorksiteInput, WorksiteCompanyUncheckedCreateWithoutWorksiteInput> | WorksiteCompanyCreateWithoutWorksiteInput[] | WorksiteCompanyUncheckedCreateWithoutWorksiteInput[]
    connectOrCreate?: WorksiteCompanyCreateOrConnectWithoutWorksiteInput | WorksiteCompanyCreateOrConnectWithoutWorksiteInput[]
    createMany?: WorksiteCompanyCreateManyWorksiteInputEnvelope
    connect?: WorksiteCompanyWhereUniqueInput | WorksiteCompanyWhereUniqueInput[]
  }

  export type WorksiteWorkerCreateNestedManyWithoutWorksiteInput = {
    create?: XOR<WorksiteWorkerCreateWithoutWorksiteInput, WorksiteWorkerUncheckedCreateWithoutWorksiteInput> | WorksiteWorkerCreateWithoutWorksiteInput[] | WorksiteWorkerUncheckedCreateWithoutWorksiteInput[]
    connectOrCreate?: WorksiteWorkerCreateOrConnectWithoutWorksiteInput | WorksiteWorkerCreateOrConnectWithoutWorksiteInput[]
    createMany?: WorksiteWorkerCreateManyWorksiteInputEnvelope
    connect?: WorksiteWorkerWhereUniqueInput | WorksiteWorkerWhereUniqueInput[]
  }

  export type WorksiteMachineCreateNestedManyWithoutWorksiteInput = {
    create?: XOR<WorksiteMachineCreateWithoutWorksiteInput, WorksiteMachineUncheckedCreateWithoutWorksiteInput> | WorksiteMachineCreateWithoutWorksiteInput[] | WorksiteMachineUncheckedCreateWithoutWorksiteInput[]
    connectOrCreate?: WorksiteMachineCreateOrConnectWithoutWorksiteInput | WorksiteMachineCreateOrConnectWithoutWorksiteInput[]
    createMany?: WorksiteMachineCreateManyWorksiteInputEnvelope
    connect?: WorksiteMachineWhereUniqueInput | WorksiteMachineWhereUniqueInput[]
  }

  export type WorksiteCompanyUncheckedCreateNestedManyWithoutWorksiteInput = {
    create?: XOR<WorksiteCompanyCreateWithoutWorksiteInput, WorksiteCompanyUncheckedCreateWithoutWorksiteInput> | WorksiteCompanyCreateWithoutWorksiteInput[] | WorksiteCompanyUncheckedCreateWithoutWorksiteInput[]
    connectOrCreate?: WorksiteCompanyCreateOrConnectWithoutWorksiteInput | WorksiteCompanyCreateOrConnectWithoutWorksiteInput[]
    createMany?: WorksiteCompanyCreateManyWorksiteInputEnvelope
    connect?: WorksiteCompanyWhereUniqueInput | WorksiteCompanyWhereUniqueInput[]
  }

  export type WorksiteWorkerUncheckedCreateNestedManyWithoutWorksiteInput = {
    create?: XOR<WorksiteWorkerCreateWithoutWorksiteInput, WorksiteWorkerUncheckedCreateWithoutWorksiteInput> | WorksiteWorkerCreateWithoutWorksiteInput[] | WorksiteWorkerUncheckedCreateWithoutWorksiteInput[]
    connectOrCreate?: WorksiteWorkerCreateOrConnectWithoutWorksiteInput | WorksiteWorkerCreateOrConnectWithoutWorksiteInput[]
    createMany?: WorksiteWorkerCreateManyWorksiteInputEnvelope
    connect?: WorksiteWorkerWhereUniqueInput | WorksiteWorkerWhereUniqueInput[]
  }

  export type WorksiteMachineUncheckedCreateNestedManyWithoutWorksiteInput = {
    create?: XOR<WorksiteMachineCreateWithoutWorksiteInput, WorksiteMachineUncheckedCreateWithoutWorksiteInput> | WorksiteMachineCreateWithoutWorksiteInput[] | WorksiteMachineUncheckedCreateWithoutWorksiteInput[]
    connectOrCreate?: WorksiteMachineCreateOrConnectWithoutWorksiteInput | WorksiteMachineCreateOrConnectWithoutWorksiteInput[]
    createMany?: WorksiteMachineCreateManyWorksiteInputEnvelope
    connect?: WorksiteMachineWhereUniqueInput | WorksiteMachineWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type WorksiteCompanyUpdateManyWithoutWorksiteNestedInput = {
    create?: XOR<WorksiteCompanyCreateWithoutWorksiteInput, WorksiteCompanyUncheckedCreateWithoutWorksiteInput> | WorksiteCompanyCreateWithoutWorksiteInput[] | WorksiteCompanyUncheckedCreateWithoutWorksiteInput[]
    connectOrCreate?: WorksiteCompanyCreateOrConnectWithoutWorksiteInput | WorksiteCompanyCreateOrConnectWithoutWorksiteInput[]
    upsert?: WorksiteCompanyUpsertWithWhereUniqueWithoutWorksiteInput | WorksiteCompanyUpsertWithWhereUniqueWithoutWorksiteInput[]
    createMany?: WorksiteCompanyCreateManyWorksiteInputEnvelope
    set?: WorksiteCompanyWhereUniqueInput | WorksiteCompanyWhereUniqueInput[]
    disconnect?: WorksiteCompanyWhereUniqueInput | WorksiteCompanyWhereUniqueInput[]
    delete?: WorksiteCompanyWhereUniqueInput | WorksiteCompanyWhereUniqueInput[]
    connect?: WorksiteCompanyWhereUniqueInput | WorksiteCompanyWhereUniqueInput[]
    update?: WorksiteCompanyUpdateWithWhereUniqueWithoutWorksiteInput | WorksiteCompanyUpdateWithWhereUniqueWithoutWorksiteInput[]
    updateMany?: WorksiteCompanyUpdateManyWithWhereWithoutWorksiteInput | WorksiteCompanyUpdateManyWithWhereWithoutWorksiteInput[]
    deleteMany?: WorksiteCompanyScalarWhereInput | WorksiteCompanyScalarWhereInput[]
  }

  export type WorksiteWorkerUpdateManyWithoutWorksiteNestedInput = {
    create?: XOR<WorksiteWorkerCreateWithoutWorksiteInput, WorksiteWorkerUncheckedCreateWithoutWorksiteInput> | WorksiteWorkerCreateWithoutWorksiteInput[] | WorksiteWorkerUncheckedCreateWithoutWorksiteInput[]
    connectOrCreate?: WorksiteWorkerCreateOrConnectWithoutWorksiteInput | WorksiteWorkerCreateOrConnectWithoutWorksiteInput[]
    upsert?: WorksiteWorkerUpsertWithWhereUniqueWithoutWorksiteInput | WorksiteWorkerUpsertWithWhereUniqueWithoutWorksiteInput[]
    createMany?: WorksiteWorkerCreateManyWorksiteInputEnvelope
    set?: WorksiteWorkerWhereUniqueInput | WorksiteWorkerWhereUniqueInput[]
    disconnect?: WorksiteWorkerWhereUniqueInput | WorksiteWorkerWhereUniqueInput[]
    delete?: WorksiteWorkerWhereUniqueInput | WorksiteWorkerWhereUniqueInput[]
    connect?: WorksiteWorkerWhereUniqueInput | WorksiteWorkerWhereUniqueInput[]
    update?: WorksiteWorkerUpdateWithWhereUniqueWithoutWorksiteInput | WorksiteWorkerUpdateWithWhereUniqueWithoutWorksiteInput[]
    updateMany?: WorksiteWorkerUpdateManyWithWhereWithoutWorksiteInput | WorksiteWorkerUpdateManyWithWhereWithoutWorksiteInput[]
    deleteMany?: WorksiteWorkerScalarWhereInput | WorksiteWorkerScalarWhereInput[]
  }

  export type WorksiteMachineUpdateManyWithoutWorksiteNestedInput = {
    create?: XOR<WorksiteMachineCreateWithoutWorksiteInput, WorksiteMachineUncheckedCreateWithoutWorksiteInput> | WorksiteMachineCreateWithoutWorksiteInput[] | WorksiteMachineUncheckedCreateWithoutWorksiteInput[]
    connectOrCreate?: WorksiteMachineCreateOrConnectWithoutWorksiteInput | WorksiteMachineCreateOrConnectWithoutWorksiteInput[]
    upsert?: WorksiteMachineUpsertWithWhereUniqueWithoutWorksiteInput | WorksiteMachineUpsertWithWhereUniqueWithoutWorksiteInput[]
    createMany?: WorksiteMachineCreateManyWorksiteInputEnvelope
    set?: WorksiteMachineWhereUniqueInput | WorksiteMachineWhereUniqueInput[]
    disconnect?: WorksiteMachineWhereUniqueInput | WorksiteMachineWhereUniqueInput[]
    delete?: WorksiteMachineWhereUniqueInput | WorksiteMachineWhereUniqueInput[]
    connect?: WorksiteMachineWhereUniqueInput | WorksiteMachineWhereUniqueInput[]
    update?: WorksiteMachineUpdateWithWhereUniqueWithoutWorksiteInput | WorksiteMachineUpdateWithWhereUniqueWithoutWorksiteInput[]
    updateMany?: WorksiteMachineUpdateManyWithWhereWithoutWorksiteInput | WorksiteMachineUpdateManyWithWhereWithoutWorksiteInput[]
    deleteMany?: WorksiteMachineScalarWhereInput | WorksiteMachineScalarWhereInput[]
  }

  export type WorksiteCompanyUncheckedUpdateManyWithoutWorksiteNestedInput = {
    create?: XOR<WorksiteCompanyCreateWithoutWorksiteInput, WorksiteCompanyUncheckedCreateWithoutWorksiteInput> | WorksiteCompanyCreateWithoutWorksiteInput[] | WorksiteCompanyUncheckedCreateWithoutWorksiteInput[]
    connectOrCreate?: WorksiteCompanyCreateOrConnectWithoutWorksiteInput | WorksiteCompanyCreateOrConnectWithoutWorksiteInput[]
    upsert?: WorksiteCompanyUpsertWithWhereUniqueWithoutWorksiteInput | WorksiteCompanyUpsertWithWhereUniqueWithoutWorksiteInput[]
    createMany?: WorksiteCompanyCreateManyWorksiteInputEnvelope
    set?: WorksiteCompanyWhereUniqueInput | WorksiteCompanyWhereUniqueInput[]
    disconnect?: WorksiteCompanyWhereUniqueInput | WorksiteCompanyWhereUniqueInput[]
    delete?: WorksiteCompanyWhereUniqueInput | WorksiteCompanyWhereUniqueInput[]
    connect?: WorksiteCompanyWhereUniqueInput | WorksiteCompanyWhereUniqueInput[]
    update?: WorksiteCompanyUpdateWithWhereUniqueWithoutWorksiteInput | WorksiteCompanyUpdateWithWhereUniqueWithoutWorksiteInput[]
    updateMany?: WorksiteCompanyUpdateManyWithWhereWithoutWorksiteInput | WorksiteCompanyUpdateManyWithWhereWithoutWorksiteInput[]
    deleteMany?: WorksiteCompanyScalarWhereInput | WorksiteCompanyScalarWhereInput[]
  }

  export type WorksiteWorkerUncheckedUpdateManyWithoutWorksiteNestedInput = {
    create?: XOR<WorksiteWorkerCreateWithoutWorksiteInput, WorksiteWorkerUncheckedCreateWithoutWorksiteInput> | WorksiteWorkerCreateWithoutWorksiteInput[] | WorksiteWorkerUncheckedCreateWithoutWorksiteInput[]
    connectOrCreate?: WorksiteWorkerCreateOrConnectWithoutWorksiteInput | WorksiteWorkerCreateOrConnectWithoutWorksiteInput[]
    upsert?: WorksiteWorkerUpsertWithWhereUniqueWithoutWorksiteInput | WorksiteWorkerUpsertWithWhereUniqueWithoutWorksiteInput[]
    createMany?: WorksiteWorkerCreateManyWorksiteInputEnvelope
    set?: WorksiteWorkerWhereUniqueInput | WorksiteWorkerWhereUniqueInput[]
    disconnect?: WorksiteWorkerWhereUniqueInput | WorksiteWorkerWhereUniqueInput[]
    delete?: WorksiteWorkerWhereUniqueInput | WorksiteWorkerWhereUniqueInput[]
    connect?: WorksiteWorkerWhereUniqueInput | WorksiteWorkerWhereUniqueInput[]
    update?: WorksiteWorkerUpdateWithWhereUniqueWithoutWorksiteInput | WorksiteWorkerUpdateWithWhereUniqueWithoutWorksiteInput[]
    updateMany?: WorksiteWorkerUpdateManyWithWhereWithoutWorksiteInput | WorksiteWorkerUpdateManyWithWhereWithoutWorksiteInput[]
    deleteMany?: WorksiteWorkerScalarWhereInput | WorksiteWorkerScalarWhereInput[]
  }

  export type WorksiteMachineUncheckedUpdateManyWithoutWorksiteNestedInput = {
    create?: XOR<WorksiteMachineCreateWithoutWorksiteInput, WorksiteMachineUncheckedCreateWithoutWorksiteInput> | WorksiteMachineCreateWithoutWorksiteInput[] | WorksiteMachineUncheckedCreateWithoutWorksiteInput[]
    connectOrCreate?: WorksiteMachineCreateOrConnectWithoutWorksiteInput | WorksiteMachineCreateOrConnectWithoutWorksiteInput[]
    upsert?: WorksiteMachineUpsertWithWhereUniqueWithoutWorksiteInput | WorksiteMachineUpsertWithWhereUniqueWithoutWorksiteInput[]
    createMany?: WorksiteMachineCreateManyWorksiteInputEnvelope
    set?: WorksiteMachineWhereUniqueInput | WorksiteMachineWhereUniqueInput[]
    disconnect?: WorksiteMachineWhereUniqueInput | WorksiteMachineWhereUniqueInput[]
    delete?: WorksiteMachineWhereUniqueInput | WorksiteMachineWhereUniqueInput[]
    connect?: WorksiteMachineWhereUniqueInput | WorksiteMachineWhereUniqueInput[]
    update?: WorksiteMachineUpdateWithWhereUniqueWithoutWorksiteInput | WorksiteMachineUpdateWithWhereUniqueWithoutWorksiteInput[]
    updateMany?: WorksiteMachineUpdateManyWithWhereWithoutWorksiteInput | WorksiteMachineUpdateManyWithWhereWithoutWorksiteInput[]
    deleteMany?: WorksiteMachineScalarWhereInput | WorksiteMachineScalarWhereInput[]
  }

  export type WorksiteCreateNestedOneWithoutCompaniesInput = {
    create?: XOR<WorksiteCreateWithoutCompaniesInput, WorksiteUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: WorksiteCreateOrConnectWithoutCompaniesInput
    connect?: WorksiteWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutWorksitesInput = {
    create?: XOR<CompanyCreateWithoutWorksitesInput, CompanyUncheckedCreateWithoutWorksitesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutWorksitesInput
    connect?: CompanyWhereUniqueInput
  }

  export type WorksiteUpdateOneRequiredWithoutCompaniesNestedInput = {
    create?: XOR<WorksiteCreateWithoutCompaniesInput, WorksiteUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: WorksiteCreateOrConnectWithoutCompaniesInput
    upsert?: WorksiteUpsertWithoutCompaniesInput
    connect?: WorksiteWhereUniqueInput
    update?: XOR<XOR<WorksiteUpdateToOneWithWhereWithoutCompaniesInput, WorksiteUpdateWithoutCompaniesInput>, WorksiteUncheckedUpdateWithoutCompaniesInput>
  }

  export type CompanyUpdateOneRequiredWithoutWorksitesNestedInput = {
    create?: XOR<CompanyCreateWithoutWorksitesInput, CompanyUncheckedCreateWithoutWorksitesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutWorksitesInput
    upsert?: CompanyUpsertWithoutWorksitesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutWorksitesInput, CompanyUpdateWithoutWorksitesInput>, CompanyUncheckedUpdateWithoutWorksitesInput>
  }

  export type WorksiteCreateNestedOneWithoutWorkersInput = {
    create?: XOR<WorksiteCreateWithoutWorkersInput, WorksiteUncheckedCreateWithoutWorkersInput>
    connectOrCreate?: WorksiteCreateOrConnectWithoutWorkersInput
    connect?: WorksiteWhereUniqueInput
  }

  export type WorkerCreateNestedOneWithoutWorksitesInput = {
    create?: XOR<WorkerCreateWithoutWorksitesInput, WorkerUncheckedCreateWithoutWorksitesInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutWorksitesInput
    connect?: WorkerWhereUniqueInput
  }

  export type WorksiteUpdateOneRequiredWithoutWorkersNestedInput = {
    create?: XOR<WorksiteCreateWithoutWorkersInput, WorksiteUncheckedCreateWithoutWorkersInput>
    connectOrCreate?: WorksiteCreateOrConnectWithoutWorkersInput
    upsert?: WorksiteUpsertWithoutWorkersInput
    connect?: WorksiteWhereUniqueInput
    update?: XOR<XOR<WorksiteUpdateToOneWithWhereWithoutWorkersInput, WorksiteUpdateWithoutWorkersInput>, WorksiteUncheckedUpdateWithoutWorkersInput>
  }

  export type WorkerUpdateOneRequiredWithoutWorksitesNestedInput = {
    create?: XOR<WorkerCreateWithoutWorksitesInput, WorkerUncheckedCreateWithoutWorksitesInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutWorksitesInput
    upsert?: WorkerUpsertWithoutWorksitesInput
    connect?: WorkerWhereUniqueInput
    update?: XOR<XOR<WorkerUpdateToOneWithWhereWithoutWorksitesInput, WorkerUpdateWithoutWorksitesInput>, WorkerUncheckedUpdateWithoutWorksitesInput>
  }

  export type WorksiteCreateNestedOneWithoutMachinesInput = {
    create?: XOR<WorksiteCreateWithoutMachinesInput, WorksiteUncheckedCreateWithoutMachinesInput>
    connectOrCreate?: WorksiteCreateOrConnectWithoutMachinesInput
    connect?: WorksiteWhereUniqueInput
  }

  export type MachineCreateNestedOneWithoutWorksitesInput = {
    create?: XOR<MachineCreateWithoutWorksitesInput, MachineUncheckedCreateWithoutWorksitesInput>
    connectOrCreate?: MachineCreateOrConnectWithoutWorksitesInput
    connect?: MachineWhereUniqueInput
  }

  export type WorksiteUpdateOneRequiredWithoutMachinesNestedInput = {
    create?: XOR<WorksiteCreateWithoutMachinesInput, WorksiteUncheckedCreateWithoutMachinesInput>
    connectOrCreate?: WorksiteCreateOrConnectWithoutMachinesInput
    upsert?: WorksiteUpsertWithoutMachinesInput
    connect?: WorksiteWhereUniqueInput
    update?: XOR<XOR<WorksiteUpdateToOneWithWhereWithoutMachinesInput, WorksiteUpdateWithoutMachinesInput>, WorksiteUncheckedUpdateWithoutMachinesInput>
  }

  export type MachineUpdateOneRequiredWithoutWorksitesNestedInput = {
    create?: XOR<MachineCreateWithoutWorksitesInput, MachineUncheckedCreateWithoutWorksitesInput>
    connectOrCreate?: MachineCreateOrConnectWithoutWorksitesInput
    upsert?: MachineUpsertWithoutWorksitesInput
    connect?: MachineWhereUniqueInput
    update?: XOR<XOR<MachineUpdateToOneWithWhereWithoutWorksitesInput, MachineUpdateWithoutWorksitesInput>, MachineUncheckedUpdateWithoutWorksitesInput>
  }

  export type CompanyCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<CompanyCreateWithoutDocumentsInput, CompanyUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutDocumentsInput
    connect?: CompanyWhereUniqueInput
  }

  export type WorkerCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<WorkerCreateWithoutDocumentsInput, WorkerUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutDocumentsInput
    connect?: WorkerWhereUniqueInput
  }

  export type MachineCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<MachineCreateWithoutDocumentsInput, MachineUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: MachineCreateOrConnectWithoutDocumentsInput
    connect?: MachineWhereUniqueInput
  }

  export type EnumDocumentOwnerTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocumentOwnerType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumDocumentStatusFieldUpdateOperationsInput = {
    set?: $Enums.DocumentStatus
  }

  export type CompanyUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<CompanyCreateWithoutDocumentsInput, CompanyUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutDocumentsInput
    upsert?: CompanyUpsertWithoutDocumentsInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutDocumentsInput, CompanyUpdateWithoutDocumentsInput>, CompanyUncheckedUpdateWithoutDocumentsInput>
  }

  export type WorkerUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<WorkerCreateWithoutDocumentsInput, WorkerUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutDocumentsInput
    upsert?: WorkerUpsertWithoutDocumentsInput
    disconnect?: WorkerWhereInput | boolean
    delete?: WorkerWhereInput | boolean
    connect?: WorkerWhereUniqueInput
    update?: XOR<XOR<WorkerUpdateToOneWithWhereWithoutDocumentsInput, WorkerUpdateWithoutDocumentsInput>, WorkerUncheckedUpdateWithoutDocumentsInput>
  }

  export type MachineUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<MachineCreateWithoutDocumentsInput, MachineUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: MachineCreateOrConnectWithoutDocumentsInput
    upsert?: MachineUpsertWithoutDocumentsInput
    disconnect?: MachineWhereInput | boolean
    delete?: MachineWhereInput | boolean
    connect?: MachineWhereUniqueInput
    update?: XOR<XOR<MachineUpdateToOneWithWhereWithoutDocumentsInput, MachineUpdateWithoutDocumentsInput>, MachineUncheckedUpdateWithoutDocumentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumDocumentOwnerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentOwnerType | EnumDocumentOwnerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentOwnerType[] | ListEnumDocumentOwnerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentOwnerType[] | ListEnumDocumentOwnerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentOwnerTypeFilter<$PrismaModel> | $Enums.DocumentOwnerType
  }

  export type NestedEnumDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusFilter<$PrismaModel> | $Enums.DocumentStatus
  }

  export type NestedEnumDocumentOwnerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentOwnerType | EnumDocumentOwnerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentOwnerType[] | ListEnumDocumentOwnerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentOwnerType[] | ListEnumDocumentOwnerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentOwnerTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentOwnerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentOwnerTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentOwnerTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumDocumentStatusFilter<$PrismaModel>
  }

  export type WorkerCreateWithoutCompanyInput = {
    id?: string
    fullName: string
    email: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    worksites?: WorksiteWorkerCreateNestedManyWithoutWorkerInput
    documents?: DocumentCreateNestedManyWithoutWorkerInput
  }

  export type WorkerUncheckedCreateWithoutCompanyInput = {
    id?: string
    fullName: string
    email: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    worksites?: WorksiteWorkerUncheckedCreateNestedManyWithoutWorkerInput
    documents?: DocumentUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerCreateOrConnectWithoutCompanyInput = {
    where: WorkerWhereUniqueInput
    create: XOR<WorkerCreateWithoutCompanyInput, WorkerUncheckedCreateWithoutCompanyInput>
  }

  export type WorkerCreateManyCompanyInputEnvelope = {
    data: WorkerCreateManyCompanyInput | WorkerCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type MachineCreateWithoutCompanyInput = {
    id?: string
    name: string
    serial?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    worksites?: WorksiteMachineCreateNestedManyWithoutMachineInput
    documents?: DocumentCreateNestedManyWithoutMachineInput
  }

  export type MachineUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    serial?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    worksites?: WorksiteMachineUncheckedCreateNestedManyWithoutMachineInput
    documents?: DocumentUncheckedCreateNestedManyWithoutMachineInput
  }

  export type MachineCreateOrConnectWithoutCompanyInput = {
    where: MachineWhereUniqueInput
    create: XOR<MachineCreateWithoutCompanyInput, MachineUncheckedCreateWithoutCompanyInput>
  }

  export type MachineCreateManyCompanyInputEnvelope = {
    data: MachineCreateManyCompanyInput | MachineCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type WorksiteCompanyCreateWithoutCompanyInput = {
    id?: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
    worksite: WorksiteCreateNestedOneWithoutCompaniesInput
  }

  export type WorksiteCompanyUncheckedCreateWithoutCompanyInput = {
    id?: string
    worksiteId: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type WorksiteCompanyCreateOrConnectWithoutCompanyInput = {
    where: WorksiteCompanyWhereUniqueInput
    create: XOR<WorksiteCompanyCreateWithoutCompanyInput, WorksiteCompanyUncheckedCreateWithoutCompanyInput>
  }

  export type WorksiteCompanyCreateManyCompanyInputEnvelope = {
    data: WorksiteCompanyCreateManyCompanyInput | WorksiteCompanyCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutCompanyInput = {
    id?: string
    ownerType: $Enums.DocumentOwnerType
    title: string
    docType: string
    fileKey: string
    mimeType?: string | null
    fileSize?: number | null
    checksum?: string | null
    issuedAt?: Date | string | null
    expiresAt?: Date | string | null
    status?: $Enums.DocumentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    worker?: WorkerCreateNestedOneWithoutDocumentsInput
    machine?: MachineCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutCompanyInput = {
    id?: string
    ownerType: $Enums.DocumentOwnerType
    workerId?: string | null
    machineId?: string | null
    title: string
    docType: string
    fileKey: string
    mimeType?: string | null
    fileSize?: number | null
    checksum?: string | null
    issuedAt?: Date | string | null
    expiresAt?: Date | string | null
    status?: $Enums.DocumentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutCompanyInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutCompanyInput, DocumentUncheckedCreateWithoutCompanyInput>
  }

  export type DocumentCreateManyCompanyInputEnvelope = {
    data: DocumentCreateManyCompanyInput | DocumentCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type WorkerUpsertWithWhereUniqueWithoutCompanyInput = {
    where: WorkerWhereUniqueInput
    update: XOR<WorkerUpdateWithoutCompanyInput, WorkerUncheckedUpdateWithoutCompanyInput>
    create: XOR<WorkerCreateWithoutCompanyInput, WorkerUncheckedCreateWithoutCompanyInput>
  }

  export type WorkerUpdateWithWhereUniqueWithoutCompanyInput = {
    where: WorkerWhereUniqueInput
    data: XOR<WorkerUpdateWithoutCompanyInput, WorkerUncheckedUpdateWithoutCompanyInput>
  }

  export type WorkerUpdateManyWithWhereWithoutCompanyInput = {
    where: WorkerScalarWhereInput
    data: XOR<WorkerUpdateManyMutationInput, WorkerUncheckedUpdateManyWithoutCompanyInput>
  }

  export type WorkerScalarWhereInput = {
    AND?: WorkerScalarWhereInput | WorkerScalarWhereInput[]
    OR?: WorkerScalarWhereInput[]
    NOT?: WorkerScalarWhereInput | WorkerScalarWhereInput[]
    id?: StringFilter<"Worker"> | string
    fullName?: StringFilter<"Worker"> | string
    email?: StringFilter<"Worker"> | string
    isActive?: BoolFilter<"Worker"> | boolean
    companyId?: StringFilter<"Worker"> | string
    createdAt?: DateTimeFilter<"Worker"> | Date | string
    updatedAt?: DateTimeFilter<"Worker"> | Date | string
  }

  export type MachineUpsertWithWhereUniqueWithoutCompanyInput = {
    where: MachineWhereUniqueInput
    update: XOR<MachineUpdateWithoutCompanyInput, MachineUncheckedUpdateWithoutCompanyInput>
    create: XOR<MachineCreateWithoutCompanyInput, MachineUncheckedCreateWithoutCompanyInput>
  }

  export type MachineUpdateWithWhereUniqueWithoutCompanyInput = {
    where: MachineWhereUniqueInput
    data: XOR<MachineUpdateWithoutCompanyInput, MachineUncheckedUpdateWithoutCompanyInput>
  }

  export type MachineUpdateManyWithWhereWithoutCompanyInput = {
    where: MachineScalarWhereInput
    data: XOR<MachineUpdateManyMutationInput, MachineUncheckedUpdateManyWithoutCompanyInput>
  }

  export type MachineScalarWhereInput = {
    AND?: MachineScalarWhereInput | MachineScalarWhereInput[]
    OR?: MachineScalarWhereInput[]
    NOT?: MachineScalarWhereInput | MachineScalarWhereInput[]
    id?: StringFilter<"Machine"> | string
    name?: StringFilter<"Machine"> | string
    serial?: StringNullableFilter<"Machine"> | string | null
    isActive?: BoolFilter<"Machine"> | boolean
    companyId?: StringNullableFilter<"Machine"> | string | null
    createdAt?: DateTimeFilter<"Machine"> | Date | string
    updatedAt?: DateTimeFilter<"Machine"> | Date | string
  }

  export type WorksiteCompanyUpsertWithWhereUniqueWithoutCompanyInput = {
    where: WorksiteCompanyWhereUniqueInput
    update: XOR<WorksiteCompanyUpdateWithoutCompanyInput, WorksiteCompanyUncheckedUpdateWithoutCompanyInput>
    create: XOR<WorksiteCompanyCreateWithoutCompanyInput, WorksiteCompanyUncheckedCreateWithoutCompanyInput>
  }

  export type WorksiteCompanyUpdateWithWhereUniqueWithoutCompanyInput = {
    where: WorksiteCompanyWhereUniqueInput
    data: XOR<WorksiteCompanyUpdateWithoutCompanyInput, WorksiteCompanyUncheckedUpdateWithoutCompanyInput>
  }

  export type WorksiteCompanyUpdateManyWithWhereWithoutCompanyInput = {
    where: WorksiteCompanyScalarWhereInput
    data: XOR<WorksiteCompanyUpdateManyMutationInput, WorksiteCompanyUncheckedUpdateManyWithoutCompanyInput>
  }

  export type WorksiteCompanyScalarWhereInput = {
    AND?: WorksiteCompanyScalarWhereInput | WorksiteCompanyScalarWhereInput[]
    OR?: WorksiteCompanyScalarWhereInput[]
    NOT?: WorksiteCompanyScalarWhereInput | WorksiteCompanyScalarWhereInput[]
    id?: StringFilter<"WorksiteCompany"> | string
    worksiteId?: StringFilter<"WorksiteCompany"> | string
    companyId?: StringFilter<"WorksiteCompany"> | string
    isActive?: BoolFilter<"WorksiteCompany"> | boolean
    joinedAt?: DateTimeFilter<"WorksiteCompany"> | Date | string
    leftAt?: DateTimeNullableFilter<"WorksiteCompany"> | Date | string | null
  }

  export type DocumentUpsertWithWhereUniqueWithoutCompanyInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutCompanyInput, DocumentUncheckedUpdateWithoutCompanyInput>
    create: XOR<DocumentCreateWithoutCompanyInput, DocumentUncheckedCreateWithoutCompanyInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutCompanyInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutCompanyInput, DocumentUncheckedUpdateWithoutCompanyInput>
  }

  export type DocumentUpdateManyWithWhereWithoutCompanyInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutCompanyInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    ownerType?: EnumDocumentOwnerTypeFilter<"Document"> | $Enums.DocumentOwnerType
    companyId?: StringNullableFilter<"Document"> | string | null
    workerId?: StringNullableFilter<"Document"> | string | null
    machineId?: StringNullableFilter<"Document"> | string | null
    title?: StringFilter<"Document"> | string
    docType?: StringFilter<"Document"> | string
    fileKey?: StringFilter<"Document"> | string
    mimeType?: StringNullableFilter<"Document"> | string | null
    fileSize?: IntNullableFilter<"Document"> | number | null
    checksum?: StringNullableFilter<"Document"> | string | null
    issuedAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    status?: EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
  }

  export type CompanyCreateWithoutWorkersInput = {
    id?: string
    name: string
    isActive?: boolean
    emailMain?: string | null
    emailSub?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    machines?: MachineCreateNestedManyWithoutCompanyInput
    worksites?: WorksiteCompanyCreateNestedManyWithoutCompanyInput
    documents?: DocumentCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutWorkersInput = {
    id?: string
    name: string
    isActive?: boolean
    emailMain?: string | null
    emailSub?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    machines?: MachineUncheckedCreateNestedManyWithoutCompanyInput
    worksites?: WorksiteCompanyUncheckedCreateNestedManyWithoutCompanyInput
    documents?: DocumentUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutWorkersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutWorkersInput, CompanyUncheckedCreateWithoutWorkersInput>
  }

  export type WorksiteWorkerCreateWithoutWorkerInput = {
    id?: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
    worksite: WorksiteCreateNestedOneWithoutWorkersInput
  }

  export type WorksiteWorkerUncheckedCreateWithoutWorkerInput = {
    id?: string
    worksiteId: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type WorksiteWorkerCreateOrConnectWithoutWorkerInput = {
    where: WorksiteWorkerWhereUniqueInput
    create: XOR<WorksiteWorkerCreateWithoutWorkerInput, WorksiteWorkerUncheckedCreateWithoutWorkerInput>
  }

  export type WorksiteWorkerCreateManyWorkerInputEnvelope = {
    data: WorksiteWorkerCreateManyWorkerInput | WorksiteWorkerCreateManyWorkerInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutWorkerInput = {
    id?: string
    ownerType: $Enums.DocumentOwnerType
    title: string
    docType: string
    fileKey: string
    mimeType?: string | null
    fileSize?: number | null
    checksum?: string | null
    issuedAt?: Date | string | null
    expiresAt?: Date | string | null
    status?: $Enums.DocumentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyCreateNestedOneWithoutDocumentsInput
    machine?: MachineCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutWorkerInput = {
    id?: string
    ownerType: $Enums.DocumentOwnerType
    companyId?: string | null
    machineId?: string | null
    title: string
    docType: string
    fileKey: string
    mimeType?: string | null
    fileSize?: number | null
    checksum?: string | null
    issuedAt?: Date | string | null
    expiresAt?: Date | string | null
    status?: $Enums.DocumentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutWorkerInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutWorkerInput, DocumentUncheckedCreateWithoutWorkerInput>
  }

  export type DocumentCreateManyWorkerInputEnvelope = {
    data: DocumentCreateManyWorkerInput | DocumentCreateManyWorkerInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutWorkersInput = {
    update: XOR<CompanyUpdateWithoutWorkersInput, CompanyUncheckedUpdateWithoutWorkersInput>
    create: XOR<CompanyCreateWithoutWorkersInput, CompanyUncheckedCreateWithoutWorkersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutWorkersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutWorkersInput, CompanyUncheckedUpdateWithoutWorkersInput>
  }

  export type CompanyUpdateWithoutWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailMain?: NullableStringFieldUpdateOperationsInput | string | null
    emailSub?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    machines?: MachineUpdateManyWithoutCompanyNestedInput
    worksites?: WorksiteCompanyUpdateManyWithoutCompanyNestedInput
    documents?: DocumentUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailMain?: NullableStringFieldUpdateOperationsInput | string | null
    emailSub?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    machines?: MachineUncheckedUpdateManyWithoutCompanyNestedInput
    worksites?: WorksiteCompanyUncheckedUpdateManyWithoutCompanyNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type WorksiteWorkerUpsertWithWhereUniqueWithoutWorkerInput = {
    where: WorksiteWorkerWhereUniqueInput
    update: XOR<WorksiteWorkerUpdateWithoutWorkerInput, WorksiteWorkerUncheckedUpdateWithoutWorkerInput>
    create: XOR<WorksiteWorkerCreateWithoutWorkerInput, WorksiteWorkerUncheckedCreateWithoutWorkerInput>
  }

  export type WorksiteWorkerUpdateWithWhereUniqueWithoutWorkerInput = {
    where: WorksiteWorkerWhereUniqueInput
    data: XOR<WorksiteWorkerUpdateWithoutWorkerInput, WorksiteWorkerUncheckedUpdateWithoutWorkerInput>
  }

  export type WorksiteWorkerUpdateManyWithWhereWithoutWorkerInput = {
    where: WorksiteWorkerScalarWhereInput
    data: XOR<WorksiteWorkerUpdateManyMutationInput, WorksiteWorkerUncheckedUpdateManyWithoutWorkerInput>
  }

  export type WorksiteWorkerScalarWhereInput = {
    AND?: WorksiteWorkerScalarWhereInput | WorksiteWorkerScalarWhereInput[]
    OR?: WorksiteWorkerScalarWhereInput[]
    NOT?: WorksiteWorkerScalarWhereInput | WorksiteWorkerScalarWhereInput[]
    id?: StringFilter<"WorksiteWorker"> | string
    worksiteId?: StringFilter<"WorksiteWorker"> | string
    workerId?: StringFilter<"WorksiteWorker"> | string
    isActive?: BoolFilter<"WorksiteWorker"> | boolean
    joinedAt?: DateTimeFilter<"WorksiteWorker"> | Date | string
    leftAt?: DateTimeNullableFilter<"WorksiteWorker"> | Date | string | null
  }

  export type DocumentUpsertWithWhereUniqueWithoutWorkerInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutWorkerInput, DocumentUncheckedUpdateWithoutWorkerInput>
    create: XOR<DocumentCreateWithoutWorkerInput, DocumentUncheckedCreateWithoutWorkerInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutWorkerInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutWorkerInput, DocumentUncheckedUpdateWithoutWorkerInput>
  }

  export type DocumentUpdateManyWithWhereWithoutWorkerInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutWorkerInput>
  }

  export type CompanyCreateWithoutMachinesInput = {
    id?: string
    name: string
    isActive?: boolean
    emailMain?: string | null
    emailSub?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workers?: WorkerCreateNestedManyWithoutCompanyInput
    worksites?: WorksiteCompanyCreateNestedManyWithoutCompanyInput
    documents?: DocumentCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutMachinesInput = {
    id?: string
    name: string
    isActive?: boolean
    emailMain?: string | null
    emailSub?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workers?: WorkerUncheckedCreateNestedManyWithoutCompanyInput
    worksites?: WorksiteCompanyUncheckedCreateNestedManyWithoutCompanyInput
    documents?: DocumentUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutMachinesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutMachinesInput, CompanyUncheckedCreateWithoutMachinesInput>
  }

  export type WorksiteMachineCreateWithoutMachineInput = {
    id?: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
    worksite: WorksiteCreateNestedOneWithoutMachinesInput
  }

  export type WorksiteMachineUncheckedCreateWithoutMachineInput = {
    id?: string
    worksiteId: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type WorksiteMachineCreateOrConnectWithoutMachineInput = {
    where: WorksiteMachineWhereUniqueInput
    create: XOR<WorksiteMachineCreateWithoutMachineInput, WorksiteMachineUncheckedCreateWithoutMachineInput>
  }

  export type WorksiteMachineCreateManyMachineInputEnvelope = {
    data: WorksiteMachineCreateManyMachineInput | WorksiteMachineCreateManyMachineInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutMachineInput = {
    id?: string
    ownerType: $Enums.DocumentOwnerType
    title: string
    docType: string
    fileKey: string
    mimeType?: string | null
    fileSize?: number | null
    checksum?: string | null
    issuedAt?: Date | string | null
    expiresAt?: Date | string | null
    status?: $Enums.DocumentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyCreateNestedOneWithoutDocumentsInput
    worker?: WorkerCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutMachineInput = {
    id?: string
    ownerType: $Enums.DocumentOwnerType
    companyId?: string | null
    workerId?: string | null
    title: string
    docType: string
    fileKey: string
    mimeType?: string | null
    fileSize?: number | null
    checksum?: string | null
    issuedAt?: Date | string | null
    expiresAt?: Date | string | null
    status?: $Enums.DocumentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutMachineInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutMachineInput, DocumentUncheckedCreateWithoutMachineInput>
  }

  export type DocumentCreateManyMachineInputEnvelope = {
    data: DocumentCreateManyMachineInput | DocumentCreateManyMachineInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutMachinesInput = {
    update: XOR<CompanyUpdateWithoutMachinesInput, CompanyUncheckedUpdateWithoutMachinesInput>
    create: XOR<CompanyCreateWithoutMachinesInput, CompanyUncheckedCreateWithoutMachinesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutMachinesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutMachinesInput, CompanyUncheckedUpdateWithoutMachinesInput>
  }

  export type CompanyUpdateWithoutMachinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailMain?: NullableStringFieldUpdateOperationsInput | string | null
    emailSub?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workers?: WorkerUpdateManyWithoutCompanyNestedInput
    worksites?: WorksiteCompanyUpdateManyWithoutCompanyNestedInput
    documents?: DocumentUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutMachinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailMain?: NullableStringFieldUpdateOperationsInput | string | null
    emailSub?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workers?: WorkerUncheckedUpdateManyWithoutCompanyNestedInput
    worksites?: WorksiteCompanyUncheckedUpdateManyWithoutCompanyNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type WorksiteMachineUpsertWithWhereUniqueWithoutMachineInput = {
    where: WorksiteMachineWhereUniqueInput
    update: XOR<WorksiteMachineUpdateWithoutMachineInput, WorksiteMachineUncheckedUpdateWithoutMachineInput>
    create: XOR<WorksiteMachineCreateWithoutMachineInput, WorksiteMachineUncheckedCreateWithoutMachineInput>
  }

  export type WorksiteMachineUpdateWithWhereUniqueWithoutMachineInput = {
    where: WorksiteMachineWhereUniqueInput
    data: XOR<WorksiteMachineUpdateWithoutMachineInput, WorksiteMachineUncheckedUpdateWithoutMachineInput>
  }

  export type WorksiteMachineUpdateManyWithWhereWithoutMachineInput = {
    where: WorksiteMachineScalarWhereInput
    data: XOR<WorksiteMachineUpdateManyMutationInput, WorksiteMachineUncheckedUpdateManyWithoutMachineInput>
  }

  export type WorksiteMachineScalarWhereInput = {
    AND?: WorksiteMachineScalarWhereInput | WorksiteMachineScalarWhereInput[]
    OR?: WorksiteMachineScalarWhereInput[]
    NOT?: WorksiteMachineScalarWhereInput | WorksiteMachineScalarWhereInput[]
    id?: StringFilter<"WorksiteMachine"> | string
    worksiteId?: StringFilter<"WorksiteMachine"> | string
    machineId?: StringFilter<"WorksiteMachine"> | string
    isActive?: BoolFilter<"WorksiteMachine"> | boolean
    joinedAt?: DateTimeFilter<"WorksiteMachine"> | Date | string
    leftAt?: DateTimeNullableFilter<"WorksiteMachine"> | Date | string | null
  }

  export type DocumentUpsertWithWhereUniqueWithoutMachineInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutMachineInput, DocumentUncheckedUpdateWithoutMachineInput>
    create: XOR<DocumentCreateWithoutMachineInput, DocumentUncheckedCreateWithoutMachineInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutMachineInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutMachineInput, DocumentUncheckedUpdateWithoutMachineInput>
  }

  export type DocumentUpdateManyWithWhereWithoutMachineInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutMachineInput>
  }

  export type WorksiteCompanyCreateWithoutWorksiteInput = {
    id?: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
    company: CompanyCreateNestedOneWithoutWorksitesInput
  }

  export type WorksiteCompanyUncheckedCreateWithoutWorksiteInput = {
    id?: string
    companyId: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type WorksiteCompanyCreateOrConnectWithoutWorksiteInput = {
    where: WorksiteCompanyWhereUniqueInput
    create: XOR<WorksiteCompanyCreateWithoutWorksiteInput, WorksiteCompanyUncheckedCreateWithoutWorksiteInput>
  }

  export type WorksiteCompanyCreateManyWorksiteInputEnvelope = {
    data: WorksiteCompanyCreateManyWorksiteInput | WorksiteCompanyCreateManyWorksiteInput[]
    skipDuplicates?: boolean
  }

  export type WorksiteWorkerCreateWithoutWorksiteInput = {
    id?: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
    worker: WorkerCreateNestedOneWithoutWorksitesInput
  }

  export type WorksiteWorkerUncheckedCreateWithoutWorksiteInput = {
    id?: string
    workerId: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type WorksiteWorkerCreateOrConnectWithoutWorksiteInput = {
    where: WorksiteWorkerWhereUniqueInput
    create: XOR<WorksiteWorkerCreateWithoutWorksiteInput, WorksiteWorkerUncheckedCreateWithoutWorksiteInput>
  }

  export type WorksiteWorkerCreateManyWorksiteInputEnvelope = {
    data: WorksiteWorkerCreateManyWorksiteInput | WorksiteWorkerCreateManyWorksiteInput[]
    skipDuplicates?: boolean
  }

  export type WorksiteMachineCreateWithoutWorksiteInput = {
    id?: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
    machine: MachineCreateNestedOneWithoutWorksitesInput
  }

  export type WorksiteMachineUncheckedCreateWithoutWorksiteInput = {
    id?: string
    machineId: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type WorksiteMachineCreateOrConnectWithoutWorksiteInput = {
    where: WorksiteMachineWhereUniqueInput
    create: XOR<WorksiteMachineCreateWithoutWorksiteInput, WorksiteMachineUncheckedCreateWithoutWorksiteInput>
  }

  export type WorksiteMachineCreateManyWorksiteInputEnvelope = {
    data: WorksiteMachineCreateManyWorksiteInput | WorksiteMachineCreateManyWorksiteInput[]
    skipDuplicates?: boolean
  }

  export type WorksiteCompanyUpsertWithWhereUniqueWithoutWorksiteInput = {
    where: WorksiteCompanyWhereUniqueInput
    update: XOR<WorksiteCompanyUpdateWithoutWorksiteInput, WorksiteCompanyUncheckedUpdateWithoutWorksiteInput>
    create: XOR<WorksiteCompanyCreateWithoutWorksiteInput, WorksiteCompanyUncheckedCreateWithoutWorksiteInput>
  }

  export type WorksiteCompanyUpdateWithWhereUniqueWithoutWorksiteInput = {
    where: WorksiteCompanyWhereUniqueInput
    data: XOR<WorksiteCompanyUpdateWithoutWorksiteInput, WorksiteCompanyUncheckedUpdateWithoutWorksiteInput>
  }

  export type WorksiteCompanyUpdateManyWithWhereWithoutWorksiteInput = {
    where: WorksiteCompanyScalarWhereInput
    data: XOR<WorksiteCompanyUpdateManyMutationInput, WorksiteCompanyUncheckedUpdateManyWithoutWorksiteInput>
  }

  export type WorksiteWorkerUpsertWithWhereUniqueWithoutWorksiteInput = {
    where: WorksiteWorkerWhereUniqueInput
    update: XOR<WorksiteWorkerUpdateWithoutWorksiteInput, WorksiteWorkerUncheckedUpdateWithoutWorksiteInput>
    create: XOR<WorksiteWorkerCreateWithoutWorksiteInput, WorksiteWorkerUncheckedCreateWithoutWorksiteInput>
  }

  export type WorksiteWorkerUpdateWithWhereUniqueWithoutWorksiteInput = {
    where: WorksiteWorkerWhereUniqueInput
    data: XOR<WorksiteWorkerUpdateWithoutWorksiteInput, WorksiteWorkerUncheckedUpdateWithoutWorksiteInput>
  }

  export type WorksiteWorkerUpdateManyWithWhereWithoutWorksiteInput = {
    where: WorksiteWorkerScalarWhereInput
    data: XOR<WorksiteWorkerUpdateManyMutationInput, WorksiteWorkerUncheckedUpdateManyWithoutWorksiteInput>
  }

  export type WorksiteMachineUpsertWithWhereUniqueWithoutWorksiteInput = {
    where: WorksiteMachineWhereUniqueInput
    update: XOR<WorksiteMachineUpdateWithoutWorksiteInput, WorksiteMachineUncheckedUpdateWithoutWorksiteInput>
    create: XOR<WorksiteMachineCreateWithoutWorksiteInput, WorksiteMachineUncheckedCreateWithoutWorksiteInput>
  }

  export type WorksiteMachineUpdateWithWhereUniqueWithoutWorksiteInput = {
    where: WorksiteMachineWhereUniqueInput
    data: XOR<WorksiteMachineUpdateWithoutWorksiteInput, WorksiteMachineUncheckedUpdateWithoutWorksiteInput>
  }

  export type WorksiteMachineUpdateManyWithWhereWithoutWorksiteInput = {
    where: WorksiteMachineScalarWhereInput
    data: XOR<WorksiteMachineUpdateManyMutationInput, WorksiteMachineUncheckedUpdateManyWithoutWorksiteInput>
  }

  export type WorksiteCreateWithoutCompaniesInput = {
    id?: string
    name: string
    location?: string | null
    isActive?: boolean
    startsAt?: Date | string | null
    endsAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workers?: WorksiteWorkerCreateNestedManyWithoutWorksiteInput
    machines?: WorksiteMachineCreateNestedManyWithoutWorksiteInput
  }

  export type WorksiteUncheckedCreateWithoutCompaniesInput = {
    id?: string
    name: string
    location?: string | null
    isActive?: boolean
    startsAt?: Date | string | null
    endsAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workers?: WorksiteWorkerUncheckedCreateNestedManyWithoutWorksiteInput
    machines?: WorksiteMachineUncheckedCreateNestedManyWithoutWorksiteInput
  }

  export type WorksiteCreateOrConnectWithoutCompaniesInput = {
    where: WorksiteWhereUniqueInput
    create: XOR<WorksiteCreateWithoutCompaniesInput, WorksiteUncheckedCreateWithoutCompaniesInput>
  }

  export type CompanyCreateWithoutWorksitesInput = {
    id?: string
    name: string
    isActive?: boolean
    emailMain?: string | null
    emailSub?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workers?: WorkerCreateNestedManyWithoutCompanyInput
    machines?: MachineCreateNestedManyWithoutCompanyInput
    documents?: DocumentCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutWorksitesInput = {
    id?: string
    name: string
    isActive?: boolean
    emailMain?: string | null
    emailSub?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workers?: WorkerUncheckedCreateNestedManyWithoutCompanyInput
    machines?: MachineUncheckedCreateNestedManyWithoutCompanyInput
    documents?: DocumentUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutWorksitesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutWorksitesInput, CompanyUncheckedCreateWithoutWorksitesInput>
  }

  export type WorksiteUpsertWithoutCompaniesInput = {
    update: XOR<WorksiteUpdateWithoutCompaniesInput, WorksiteUncheckedUpdateWithoutCompaniesInput>
    create: XOR<WorksiteCreateWithoutCompaniesInput, WorksiteUncheckedCreateWithoutCompaniesInput>
    where?: WorksiteWhereInput
  }

  export type WorksiteUpdateToOneWithWhereWithoutCompaniesInput = {
    where?: WorksiteWhereInput
    data: XOR<WorksiteUpdateWithoutCompaniesInput, WorksiteUncheckedUpdateWithoutCompaniesInput>
  }

  export type WorksiteUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workers?: WorksiteWorkerUpdateManyWithoutWorksiteNestedInput
    machines?: WorksiteMachineUpdateManyWithoutWorksiteNestedInput
  }

  export type WorksiteUncheckedUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workers?: WorksiteWorkerUncheckedUpdateManyWithoutWorksiteNestedInput
    machines?: WorksiteMachineUncheckedUpdateManyWithoutWorksiteNestedInput
  }

  export type CompanyUpsertWithoutWorksitesInput = {
    update: XOR<CompanyUpdateWithoutWorksitesInput, CompanyUncheckedUpdateWithoutWorksitesInput>
    create: XOR<CompanyCreateWithoutWorksitesInput, CompanyUncheckedCreateWithoutWorksitesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutWorksitesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutWorksitesInput, CompanyUncheckedUpdateWithoutWorksitesInput>
  }

  export type CompanyUpdateWithoutWorksitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailMain?: NullableStringFieldUpdateOperationsInput | string | null
    emailSub?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workers?: WorkerUpdateManyWithoutCompanyNestedInput
    machines?: MachineUpdateManyWithoutCompanyNestedInput
    documents?: DocumentUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutWorksitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailMain?: NullableStringFieldUpdateOperationsInput | string | null
    emailSub?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workers?: WorkerUncheckedUpdateManyWithoutCompanyNestedInput
    machines?: MachineUncheckedUpdateManyWithoutCompanyNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type WorksiteCreateWithoutWorkersInput = {
    id?: string
    name: string
    location?: string | null
    isActive?: boolean
    startsAt?: Date | string | null
    endsAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: WorksiteCompanyCreateNestedManyWithoutWorksiteInput
    machines?: WorksiteMachineCreateNestedManyWithoutWorksiteInput
  }

  export type WorksiteUncheckedCreateWithoutWorkersInput = {
    id?: string
    name: string
    location?: string | null
    isActive?: boolean
    startsAt?: Date | string | null
    endsAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: WorksiteCompanyUncheckedCreateNestedManyWithoutWorksiteInput
    machines?: WorksiteMachineUncheckedCreateNestedManyWithoutWorksiteInput
  }

  export type WorksiteCreateOrConnectWithoutWorkersInput = {
    where: WorksiteWhereUniqueInput
    create: XOR<WorksiteCreateWithoutWorkersInput, WorksiteUncheckedCreateWithoutWorkersInput>
  }

  export type WorkerCreateWithoutWorksitesInput = {
    id?: string
    fullName: string
    email: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutWorkersInput
    documents?: DocumentCreateNestedManyWithoutWorkerInput
  }

  export type WorkerUncheckedCreateWithoutWorksitesInput = {
    id?: string
    fullName: string
    email: string
    isActive?: boolean
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerCreateOrConnectWithoutWorksitesInput = {
    where: WorkerWhereUniqueInput
    create: XOR<WorkerCreateWithoutWorksitesInput, WorkerUncheckedCreateWithoutWorksitesInput>
  }

  export type WorksiteUpsertWithoutWorkersInput = {
    update: XOR<WorksiteUpdateWithoutWorkersInput, WorksiteUncheckedUpdateWithoutWorkersInput>
    create: XOR<WorksiteCreateWithoutWorkersInput, WorksiteUncheckedCreateWithoutWorkersInput>
    where?: WorksiteWhereInput
  }

  export type WorksiteUpdateToOneWithWhereWithoutWorkersInput = {
    where?: WorksiteWhereInput
    data: XOR<WorksiteUpdateWithoutWorkersInput, WorksiteUncheckedUpdateWithoutWorkersInput>
  }

  export type WorksiteUpdateWithoutWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: WorksiteCompanyUpdateManyWithoutWorksiteNestedInput
    machines?: WorksiteMachineUpdateManyWithoutWorksiteNestedInput
  }

  export type WorksiteUncheckedUpdateWithoutWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: WorksiteCompanyUncheckedUpdateManyWithoutWorksiteNestedInput
    machines?: WorksiteMachineUncheckedUpdateManyWithoutWorksiteNestedInput
  }

  export type WorkerUpsertWithoutWorksitesInput = {
    update: XOR<WorkerUpdateWithoutWorksitesInput, WorkerUncheckedUpdateWithoutWorksitesInput>
    create: XOR<WorkerCreateWithoutWorksitesInput, WorkerUncheckedCreateWithoutWorksitesInput>
    where?: WorkerWhereInput
  }

  export type WorkerUpdateToOneWithWhereWithoutWorksitesInput = {
    where?: WorkerWhereInput
    data: XOR<WorkerUpdateWithoutWorksitesInput, WorkerUncheckedUpdateWithoutWorksitesInput>
  }

  export type WorkerUpdateWithoutWorksitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutWorkersNestedInput
    documents?: DocumentUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerUncheckedUpdateWithoutWorksitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type WorksiteCreateWithoutMachinesInput = {
    id?: string
    name: string
    location?: string | null
    isActive?: boolean
    startsAt?: Date | string | null
    endsAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: WorksiteCompanyCreateNestedManyWithoutWorksiteInput
    workers?: WorksiteWorkerCreateNestedManyWithoutWorksiteInput
  }

  export type WorksiteUncheckedCreateWithoutMachinesInput = {
    id?: string
    name: string
    location?: string | null
    isActive?: boolean
    startsAt?: Date | string | null
    endsAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: WorksiteCompanyUncheckedCreateNestedManyWithoutWorksiteInput
    workers?: WorksiteWorkerUncheckedCreateNestedManyWithoutWorksiteInput
  }

  export type WorksiteCreateOrConnectWithoutMachinesInput = {
    where: WorksiteWhereUniqueInput
    create: XOR<WorksiteCreateWithoutMachinesInput, WorksiteUncheckedCreateWithoutMachinesInput>
  }

  export type MachineCreateWithoutWorksitesInput = {
    id?: string
    name: string
    serial?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyCreateNestedOneWithoutMachinesInput
    documents?: DocumentCreateNestedManyWithoutMachineInput
  }

  export type MachineUncheckedCreateWithoutWorksitesInput = {
    id?: string
    name: string
    serial?: string | null
    isActive?: boolean
    companyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutMachineInput
  }

  export type MachineCreateOrConnectWithoutWorksitesInput = {
    where: MachineWhereUniqueInput
    create: XOR<MachineCreateWithoutWorksitesInput, MachineUncheckedCreateWithoutWorksitesInput>
  }

  export type WorksiteUpsertWithoutMachinesInput = {
    update: XOR<WorksiteUpdateWithoutMachinesInput, WorksiteUncheckedUpdateWithoutMachinesInput>
    create: XOR<WorksiteCreateWithoutMachinesInput, WorksiteUncheckedCreateWithoutMachinesInput>
    where?: WorksiteWhereInput
  }

  export type WorksiteUpdateToOneWithWhereWithoutMachinesInput = {
    where?: WorksiteWhereInput
    data: XOR<WorksiteUpdateWithoutMachinesInput, WorksiteUncheckedUpdateWithoutMachinesInput>
  }

  export type WorksiteUpdateWithoutMachinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: WorksiteCompanyUpdateManyWithoutWorksiteNestedInput
    workers?: WorksiteWorkerUpdateManyWithoutWorksiteNestedInput
  }

  export type WorksiteUncheckedUpdateWithoutMachinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: WorksiteCompanyUncheckedUpdateManyWithoutWorksiteNestedInput
    workers?: WorksiteWorkerUncheckedUpdateManyWithoutWorksiteNestedInput
  }

  export type MachineUpsertWithoutWorksitesInput = {
    update: XOR<MachineUpdateWithoutWorksitesInput, MachineUncheckedUpdateWithoutWorksitesInput>
    create: XOR<MachineCreateWithoutWorksitesInput, MachineUncheckedCreateWithoutWorksitesInput>
    where?: MachineWhereInput
  }

  export type MachineUpdateToOneWithWhereWithoutWorksitesInput = {
    where?: MachineWhereInput
    data: XOR<MachineUpdateWithoutWorksitesInput, MachineUncheckedUpdateWithoutWorksitesInput>
  }

  export type MachineUpdateWithoutWorksitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serial?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutMachinesNestedInput
    documents?: DocumentUpdateManyWithoutMachineNestedInput
  }

  export type MachineUncheckedUpdateWithoutWorksitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serial?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutMachineNestedInput
  }

  export type CompanyCreateWithoutDocumentsInput = {
    id?: string
    name: string
    isActive?: boolean
    emailMain?: string | null
    emailSub?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workers?: WorkerCreateNestedManyWithoutCompanyInput
    machines?: MachineCreateNestedManyWithoutCompanyInput
    worksites?: WorksiteCompanyCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutDocumentsInput = {
    id?: string
    name: string
    isActive?: boolean
    emailMain?: string | null
    emailSub?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workers?: WorkerUncheckedCreateNestedManyWithoutCompanyInput
    machines?: MachineUncheckedCreateNestedManyWithoutCompanyInput
    worksites?: WorksiteCompanyUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutDocumentsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutDocumentsInput, CompanyUncheckedCreateWithoutDocumentsInput>
  }

  export type WorkerCreateWithoutDocumentsInput = {
    id?: string
    fullName: string
    email: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutWorkersInput
    worksites?: WorksiteWorkerCreateNestedManyWithoutWorkerInput
  }

  export type WorkerUncheckedCreateWithoutDocumentsInput = {
    id?: string
    fullName: string
    email: string
    isActive?: boolean
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    worksites?: WorksiteWorkerUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerCreateOrConnectWithoutDocumentsInput = {
    where: WorkerWhereUniqueInput
    create: XOR<WorkerCreateWithoutDocumentsInput, WorkerUncheckedCreateWithoutDocumentsInput>
  }

  export type MachineCreateWithoutDocumentsInput = {
    id?: string
    name: string
    serial?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyCreateNestedOneWithoutMachinesInput
    worksites?: WorksiteMachineCreateNestedManyWithoutMachineInput
  }

  export type MachineUncheckedCreateWithoutDocumentsInput = {
    id?: string
    name: string
    serial?: string | null
    isActive?: boolean
    companyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    worksites?: WorksiteMachineUncheckedCreateNestedManyWithoutMachineInput
  }

  export type MachineCreateOrConnectWithoutDocumentsInput = {
    where: MachineWhereUniqueInput
    create: XOR<MachineCreateWithoutDocumentsInput, MachineUncheckedCreateWithoutDocumentsInput>
  }

  export type CompanyUpsertWithoutDocumentsInput = {
    update: XOR<CompanyUpdateWithoutDocumentsInput, CompanyUncheckedUpdateWithoutDocumentsInput>
    create: XOR<CompanyCreateWithoutDocumentsInput, CompanyUncheckedCreateWithoutDocumentsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutDocumentsInput, CompanyUncheckedUpdateWithoutDocumentsInput>
  }

  export type CompanyUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailMain?: NullableStringFieldUpdateOperationsInput | string | null
    emailSub?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workers?: WorkerUpdateManyWithoutCompanyNestedInput
    machines?: MachineUpdateManyWithoutCompanyNestedInput
    worksites?: WorksiteCompanyUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailMain?: NullableStringFieldUpdateOperationsInput | string | null
    emailSub?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workers?: WorkerUncheckedUpdateManyWithoutCompanyNestedInput
    machines?: MachineUncheckedUpdateManyWithoutCompanyNestedInput
    worksites?: WorksiteCompanyUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type WorkerUpsertWithoutDocumentsInput = {
    update: XOR<WorkerUpdateWithoutDocumentsInput, WorkerUncheckedUpdateWithoutDocumentsInput>
    create: XOR<WorkerCreateWithoutDocumentsInput, WorkerUncheckedCreateWithoutDocumentsInput>
    where?: WorkerWhereInput
  }

  export type WorkerUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: WorkerWhereInput
    data: XOR<WorkerUpdateWithoutDocumentsInput, WorkerUncheckedUpdateWithoutDocumentsInput>
  }

  export type WorkerUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutWorkersNestedInput
    worksites?: WorksiteWorkerUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worksites?: WorksiteWorkerUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type MachineUpsertWithoutDocumentsInput = {
    update: XOR<MachineUpdateWithoutDocumentsInput, MachineUncheckedUpdateWithoutDocumentsInput>
    create: XOR<MachineCreateWithoutDocumentsInput, MachineUncheckedCreateWithoutDocumentsInput>
    where?: MachineWhereInput
  }

  export type MachineUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: MachineWhereInput
    data: XOR<MachineUpdateWithoutDocumentsInput, MachineUncheckedUpdateWithoutDocumentsInput>
  }

  export type MachineUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serial?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutMachinesNestedInput
    worksites?: WorksiteMachineUpdateManyWithoutMachineNestedInput
  }

  export type MachineUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serial?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worksites?: WorksiteMachineUncheckedUpdateManyWithoutMachineNestedInput
  }

  export type WorkerCreateManyCompanyInput = {
    id?: string
    fullName: string
    email: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MachineCreateManyCompanyInput = {
    id?: string
    name: string
    serial?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorksiteCompanyCreateManyCompanyInput = {
    id?: string
    worksiteId: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type DocumentCreateManyCompanyInput = {
    id?: string
    ownerType: $Enums.DocumentOwnerType
    workerId?: string | null
    machineId?: string | null
    title: string
    docType: string
    fileKey: string
    mimeType?: string | null
    fileSize?: number | null
    checksum?: string | null
    issuedAt?: Date | string | null
    expiresAt?: Date | string | null
    status?: $Enums.DocumentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkerUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worksites?: WorksiteWorkerUpdateManyWithoutWorkerNestedInput
    documents?: DocumentUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worksites?: WorksiteWorkerUncheckedUpdateManyWithoutWorkerNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serial?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worksites?: WorksiteMachineUpdateManyWithoutMachineNestedInput
    documents?: DocumentUpdateManyWithoutMachineNestedInput
  }

  export type MachineUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serial?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worksites?: WorksiteMachineUncheckedUpdateManyWithoutMachineNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutMachineNestedInput
  }

  export type MachineUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serial?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorksiteCompanyUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    worksite?: WorksiteUpdateOneRequiredWithoutCompaniesNestedInput
  }

  export type WorksiteCompanyUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    worksiteId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorksiteCompanyUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    worksiteId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumDocumentOwnerTypeFieldUpdateOperationsInput | $Enums.DocumentOwnerType
    title?: StringFieldUpdateOperationsInput | string
    docType?: StringFieldUpdateOperationsInput | string
    fileKey?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worker?: WorkerUpdateOneWithoutDocumentsNestedInput
    machine?: MachineUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumDocumentOwnerTypeFieldUpdateOperationsInput | $Enums.DocumentOwnerType
    workerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    docType?: StringFieldUpdateOperationsInput | string
    fileKey?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumDocumentOwnerTypeFieldUpdateOperationsInput | $Enums.DocumentOwnerType
    workerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    docType?: StringFieldUpdateOperationsInput | string
    fileKey?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorksiteWorkerCreateManyWorkerInput = {
    id?: string
    worksiteId: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type DocumentCreateManyWorkerInput = {
    id?: string
    ownerType: $Enums.DocumentOwnerType
    companyId?: string | null
    machineId?: string | null
    title: string
    docType: string
    fileKey: string
    mimeType?: string | null
    fileSize?: number | null
    checksum?: string | null
    issuedAt?: Date | string | null
    expiresAt?: Date | string | null
    status?: $Enums.DocumentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorksiteWorkerUpdateWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    worksite?: WorksiteUpdateOneRequiredWithoutWorkersNestedInput
  }

  export type WorksiteWorkerUncheckedUpdateWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    worksiteId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorksiteWorkerUncheckedUpdateManyWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    worksiteId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentUpdateWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumDocumentOwnerTypeFieldUpdateOperationsInput | $Enums.DocumentOwnerType
    title?: StringFieldUpdateOperationsInput | string
    docType?: StringFieldUpdateOperationsInput | string
    fileKey?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutDocumentsNestedInput
    machine?: MachineUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumDocumentOwnerTypeFieldUpdateOperationsInput | $Enums.DocumentOwnerType
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    machineId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    docType?: StringFieldUpdateOperationsInput | string
    fileKey?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumDocumentOwnerTypeFieldUpdateOperationsInput | $Enums.DocumentOwnerType
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    machineId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    docType?: StringFieldUpdateOperationsInput | string
    fileKey?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorksiteMachineCreateManyMachineInput = {
    id?: string
    worksiteId: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type DocumentCreateManyMachineInput = {
    id?: string
    ownerType: $Enums.DocumentOwnerType
    companyId?: string | null
    workerId?: string | null
    title: string
    docType: string
    fileKey: string
    mimeType?: string | null
    fileSize?: number | null
    checksum?: string | null
    issuedAt?: Date | string | null
    expiresAt?: Date | string | null
    status?: $Enums.DocumentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorksiteMachineUpdateWithoutMachineInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    worksite?: WorksiteUpdateOneRequiredWithoutMachinesNestedInput
  }

  export type WorksiteMachineUncheckedUpdateWithoutMachineInput = {
    id?: StringFieldUpdateOperationsInput | string
    worksiteId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorksiteMachineUncheckedUpdateManyWithoutMachineInput = {
    id?: StringFieldUpdateOperationsInput | string
    worksiteId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentUpdateWithoutMachineInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumDocumentOwnerTypeFieldUpdateOperationsInput | $Enums.DocumentOwnerType
    title?: StringFieldUpdateOperationsInput | string
    docType?: StringFieldUpdateOperationsInput | string
    fileKey?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutDocumentsNestedInput
    worker?: WorkerUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutMachineInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumDocumentOwnerTypeFieldUpdateOperationsInput | $Enums.DocumentOwnerType
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    workerId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    docType?: StringFieldUpdateOperationsInput | string
    fileKey?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutMachineInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumDocumentOwnerTypeFieldUpdateOperationsInput | $Enums.DocumentOwnerType
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    workerId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    docType?: StringFieldUpdateOperationsInput | string
    fileKey?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorksiteCompanyCreateManyWorksiteInput = {
    id?: string
    companyId: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type WorksiteWorkerCreateManyWorksiteInput = {
    id?: string
    workerId: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type WorksiteMachineCreateManyWorksiteInput = {
    id?: string
    machineId: string
    isActive?: boolean
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type WorksiteCompanyUpdateWithoutWorksiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: CompanyUpdateOneRequiredWithoutWorksitesNestedInput
  }

  export type WorksiteCompanyUncheckedUpdateWithoutWorksiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorksiteCompanyUncheckedUpdateManyWithoutWorksiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorksiteWorkerUpdateWithoutWorksiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    worker?: WorkerUpdateOneRequiredWithoutWorksitesNestedInput
  }

  export type WorksiteWorkerUncheckedUpdateWithoutWorksiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorksiteWorkerUncheckedUpdateManyWithoutWorksiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorksiteMachineUpdateWithoutWorksiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    machine?: MachineUpdateOneRequiredWithoutWorksitesNestedInput
  }

  export type WorksiteMachineUncheckedUpdateWithoutWorksiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    machineId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorksiteMachineUncheckedUpdateManyWithoutWorksiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    machineId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}