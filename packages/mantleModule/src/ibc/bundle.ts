//@ts-nocheck
import * as _271 from "./applications/transfer/v1/genesis";
import * as _272 from "./applications/transfer/v1/query";
import * as _273 from "./applications/transfer/v1/transfer";
import * as _274 from "./applications/transfer/v1/tx";
import * as _275 from "./applications/transfer/v2/packet";
import * as _276 from "./core/channel/v1/channel";
import * as _277 from "./core/channel/v1/genesis";
import * as _278 from "./core/channel/v1/query";
import * as _279 from "./core/channel/v1/tx";
import * as _280 from "./core/client/v1/client";
import * as _281 from "./core/client/v1/genesis";
import * as _282 from "./core/client/v1/query";
import * as _283 from "./core/client/v1/tx";
import * as _284 from "./core/commitment/v1/commitment";
import * as _285 from "./core/connection/v1/connection";
import * as _286 from "./core/connection/v1/genesis";
import * as _287 from "./core/connection/v1/query";
import * as _288 from "./core/connection/v1/tx";
import * as _289 from "./lightclients/localhost/v1/localhost";
import * as _290 from "./lightclients/solomachine/v1/solomachine";
import * as _291 from "./lightclients/solomachine/v2/solomachine";
import * as _292 from "./lightclients/tendermint/v1/tendermint";
import * as _453 from "./applications/transfer/v1/tx.amino";
import * as _454 from "./core/channel/v1/tx.amino";
import * as _455 from "./core/client/v1/tx.amino";
import * as _456 from "./core/connection/v1/tx.amino";
import * as _457 from "./applications/transfer/v1/tx.registry";
import * as _458 from "./core/channel/v1/tx.registry";
import * as _459 from "./core/client/v1/tx.registry";
import * as _460 from "./core/connection/v1/tx.registry";
import * as _461 from "./applications/transfer/v1/query.rpc.Query";
import * as _462 from "./core/channel/v1/query.rpc.Query";
import * as _463 from "./core/client/v1/query.rpc.Query";
import * as _464 from "./core/connection/v1/query.rpc.Query";
import * as _465 from "./applications/transfer/v1/tx.rpc.msg";
import * as _466 from "./core/channel/v1/tx.rpc.msg";
import * as _467 from "./core/client/v1/tx.rpc.msg";
import * as _468 from "./core/connection/v1/tx.rpc.msg";
import * as _473 from "./rpc.query";
import * as _474 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._271,
        ..._272,
        ..._273,
        ..._274,
        ..._453,
        ..._457,
        ..._461,
        ..._465
      };
      export const v2 = {
        ..._275
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._276,
        ..._277,
        ..._278,
        ..._279,
        ..._454,
        ..._458,
        ..._462,
        ..._466
      };
    }
    export namespace client {
      export const v1 = {
        ..._280,
        ..._281,
        ..._282,
        ..._283,
        ..._455,
        ..._459,
        ..._463,
        ..._467
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._284
      };
    }
    export namespace connection {
      export const v1 = {
        ..._285,
        ..._286,
        ..._287,
        ..._288,
        ..._456,
        ..._460,
        ..._464,
        ..._468
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._289
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._290
      };
      export const v2 = {
        ..._291
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._292
      };
    }
  }
  export const ClientFactory = {
    ..._473,
    ..._474
  };
}