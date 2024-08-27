//@ts-nocheck
import * as _203 from "./auth/v1beta1/auth";
import * as _204 from "./auth/v1beta1/genesis";
import * as _205 from "./auth/v1beta1/query";
import * as _206 from "./authz/v1beta1/authz";
import * as _207 from "./authz/v1beta1/event";
import * as _208 from "./authz/v1beta1/genesis";
import * as _209 from "./authz/v1beta1/query";
import * as _210 from "./authz/v1beta1/tx";
import * as _211 from "./bank/v1beta1/authz";
import * as _212 from "./bank/v1beta1/bank";
import * as _213 from "./bank/v1beta1/genesis";
import * as _214 from "./bank/v1beta1/query";
import * as _215 from "./bank/v1beta1/tx";
import * as _216 from "./base/abci/v1beta1/abci";
import * as _217 from "./base/query/v1beta1/pagination";
import * as _218 from "./base/reflection/v2alpha1/reflection";
import * as _219 from "./base/v1beta1/coin";
import * as _220 from "./crypto/ed25519/keys";
import * as _221 from "./crypto/hd/v1/hd";
import * as _222 from "./crypto/keyring/v1/record";
import * as _223 from "./crypto/multisig/keys";
import * as _224 from "./crypto/secp256k1/keys";
import * as _225 from "./crypto/secp256r1/keys";
import * as _226 from "./distribution/v1beta1/distribution";
import * as _227 from "./distribution/v1beta1/genesis";
import * as _228 from "./distribution/v1beta1/query";
import * as _229 from "./distribution/v1beta1/tx";
import * as _230 from "./feegrant/v1beta1/feegrant";
import * as _231 from "./feegrant/v1beta1/genesis";
import * as _232 from "./feegrant/v1beta1/query";
import * as _233 from "./feegrant/v1beta1/tx";
import * as _234 from "./gov/v1/genesis";
import * as _235 from "./gov/v1/gov";
import * as _236 from "./gov/v1/query";
import * as _237 from "./gov/v1/tx";
import * as _238 from "./gov/v1beta1/genesis";
import * as _239 from "./gov/v1beta1/gov";
import * as _240 from "./gov/v1beta1/query";
import * as _241 from "./gov/v1beta1/tx";
import * as _242 from "./group/v1/events";
import * as _243 from "./group/v1/genesis";
import * as _244 from "./group/v1/query";
import * as _245 from "./group/v1/tx";
import * as _246 from "./group/v1/types";
import * as _247 from "./mint/v1beta1/genesis";
import * as _248 from "./mint/v1beta1/mint";
import * as _249 from "./mint/v1beta1/query";
import * as _250 from "./params/v1beta1/params";
import * as _251 from "./params/v1beta1/query";
import * as _252 from "./staking/v1beta1/authz";
import * as _253 from "./staking/v1beta1/genesis";
import * as _254 from "./staking/v1beta1/query";
import * as _255 from "./staking/v1beta1/staking";
import * as _256 from "./staking/v1beta1/tx";
import * as _257 from "./tx/signing/v1beta1/signing";
import * as _258 from "./tx/v1beta1/service";
import * as _259 from "./tx/v1beta1/tx";
import * as _260 from "./upgrade/v1beta1/query";
import * as _261 from "./upgrade/v1beta1/tx";
import * as _262 from "./upgrade/v1beta1/upgrade";
import * as _263 from "./vesting/v1beta1/tx";
import * as _264 from "./vesting/v1beta1/vesting";
import * as _410 from "./authz/v1beta1/tx.amino";
import * as _411 from "./bank/v1beta1/tx.amino";
import * as _412 from "./distribution/v1beta1/tx.amino";
import * as _413 from "./feegrant/v1beta1/tx.amino";
import * as _414 from "./gov/v1/tx.amino";
import * as _415 from "./gov/v1beta1/tx.amino";
import * as _416 from "./group/v1/tx.amino";
import * as _417 from "./staking/v1beta1/tx.amino";
import * as _418 from "./upgrade/v1beta1/tx.amino";
import * as _419 from "./vesting/v1beta1/tx.amino";
import * as _420 from "./authz/v1beta1/tx.registry";
import * as _421 from "./bank/v1beta1/tx.registry";
import * as _422 from "./distribution/v1beta1/tx.registry";
import * as _423 from "./feegrant/v1beta1/tx.registry";
import * as _424 from "./gov/v1/tx.registry";
import * as _425 from "./gov/v1beta1/tx.registry";
import * as _426 from "./group/v1/tx.registry";
import * as _427 from "./staking/v1beta1/tx.registry";
import * as _428 from "./upgrade/v1beta1/tx.registry";
import * as _429 from "./vesting/v1beta1/tx.registry";
import * as _430 from "./auth/v1beta1/query.rpc.Query";
import * as _431 from "./authz/v1beta1/query.rpc.Query";
import * as _432 from "./bank/v1beta1/query.rpc.Query";
import * as _433 from "./distribution/v1beta1/query.rpc.Query";
import * as _434 from "./feegrant/v1beta1/query.rpc.Query";
import * as _435 from "./gov/v1/query.rpc.Query";
import * as _436 from "./gov/v1beta1/query.rpc.Query";
import * as _437 from "./group/v1/query.rpc.Query";
import * as _438 from "./mint/v1beta1/query.rpc.Query";
import * as _439 from "./params/v1beta1/query.rpc.Query";
import * as _440 from "./staking/v1beta1/query.rpc.Query";
import * as _441 from "./tx/v1beta1/service.rpc.Service";
import * as _442 from "./upgrade/v1beta1/query.rpc.Query";
import * as _443 from "./authz/v1beta1/tx.rpc.msg";
import * as _444 from "./bank/v1beta1/tx.rpc.msg";
import * as _445 from "./distribution/v1beta1/tx.rpc.msg";
import * as _446 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _447 from "./gov/v1/tx.rpc.msg";
import * as _448 from "./gov/v1beta1/tx.rpc.msg";
import * as _449 from "./group/v1/tx.rpc.msg";
import * as _450 from "./staking/v1beta1/tx.rpc.msg";
import * as _451 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _452 from "./vesting/v1beta1/tx.rpc.msg";
import * as _471 from "./rpc.query";
import * as _472 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._203,
      ..._204,
      ..._205,
      ..._430
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._206,
      ..._207,
      ..._208,
      ..._209,
      ..._210,
      ..._410,
      ..._420,
      ..._431,
      ..._443
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._211,
      ..._212,
      ..._213,
      ..._214,
      ..._215,
      ..._411,
      ..._421,
      ..._432,
      ..._444
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._216
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._217
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._218
      };
    }
    export const v1beta1 = {
      ..._219
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._220
    };
    export namespace hd {
      export const v1 = {
        ..._221
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._222
      };
    }
    export const multisig = {
      ..._223
    };
    export const secp256k1 = {
      ..._224
    };
    export const secp256r1 = {
      ..._225
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._226,
      ..._227,
      ..._228,
      ..._229,
      ..._412,
      ..._422,
      ..._433,
      ..._445
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._230,
      ..._231,
      ..._232,
      ..._233,
      ..._413,
      ..._423,
      ..._434,
      ..._446
    };
  }
  export namespace gov {
    export const v1 = {
      ..._234,
      ..._235,
      ..._236,
      ..._237,
      ..._414,
      ..._424,
      ..._435,
      ..._447
    };
    export const v1beta1 = {
      ..._238,
      ..._239,
      ..._240,
      ..._241,
      ..._415,
      ..._425,
      ..._436,
      ..._448
    };
  }
  export namespace group {
    export const v1 = {
      ..._242,
      ..._243,
      ..._244,
      ..._245,
      ..._246,
      ..._416,
      ..._426,
      ..._437,
      ..._449
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._247,
      ..._248,
      ..._249,
      ..._438
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._250,
      ..._251,
      ..._439
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._252,
      ..._253,
      ..._254,
      ..._255,
      ..._256,
      ..._417,
      ..._427,
      ..._440,
      ..._450
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._257
      };
    }
    export const v1beta1 = {
      ..._258,
      ..._259,
      ..._441
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._260,
      ..._261,
      ..._262,
      ..._418,
      ..._428,
      ..._442,
      ..._451
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._263,
      ..._264,
      ..._419,
      ..._429,
      ..._452
    };
  }
  export const ClientFactory = {
    ..._471,
    ..._472
  };
}