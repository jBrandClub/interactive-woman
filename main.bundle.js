! function(e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var r = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
  }
  n.m = e, n.c = t, n.d = function(e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    })
  }, n.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function(e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var r in e) n.d(i, r, function(t) {
        return e[t]
      }.bind(null, r));
    return i
  }, n.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 0)
}([function(e, t, n) {
  "use strict";
  n.r(t);
  void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function(e) {
    return "number" == typeof e && isFinite(e) && Math.floor(e) === e
  }), void 0 === Math.sign && (Math.sign = function(e) {
    return e < 0 ? -1 : e > 0 ? 1 : +e
  }), "name" in Function.prototype == !1 && Object.defineProperty(Function.prototype, "name", {
    get: function() {
      return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
    }
  }), void 0 === Object.assign && (Object.assign = function(e) {
    if (null == e) throw new TypeError("Cannot convert undefined or null to object");
    for (var t = Object(e), n = 1; n < arguments.length; n++) {
      var i = arguments[n];
      if (null != i)
        for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
    }
    return t
  });
  var i = 0,
    r = 1,
    a = 2,
    o = 1,
    s = 2,
    c = 3,
    l = 0,
    h = 1,
    u = 2,
    p = 0,
    d = 1,
    f = 2,
    m = 0,
    v = 1,
    g = 2,
    y = 3,
    x = 4,
    b = 5,
    w = 100,
    _ = 101,
    M = 102,
    S = 103,
    T = 104,
    E = 200,
    A = 201,
    L = 202,
    R = 203,
    P = 204,
    C = 205,
    O = 206,
    I = 207,
    N = 208,
    D = 209,
    z = 210,
    U = 0,
    F = 1,
    B = 2,
    G = 3,
    H = 4,
    V = 5,
    k = 6,
    j = 7,
    W = 0,
    q = 1,
    X = 2,
    Y = 0,
    Z = 1,
    J = 2,
    K = 3,
    Q = 4,
    $ = 5,
    ee = 301,
    te = 302,
    ne = 303,
    ie = 304,
    re = 305,
    ae = 306,
    oe = 307,
    se = 1e3,
    ce = 1001,
    le = 1002,
    he = 1003,
    ue = 1004,
    pe = 1005,
    de = 1006,
    fe = 1007,
    me = 1008,
    ve = 1009,
    ge = 1010,
    ye = 1011,
    xe = 1012,
    be = 1013,
    we = 1014,
    _e = 1015,
    Me = 1016,
    Se = 1017,
    Te = 1018,
    Ee = 1019,
    Ae = 1020,
    Le = 1021,
    Re = 1022,
    Pe = 1023,
    Ce = 1024,
    Oe = 1025,
    Ie = 1026,
    Ne = 1027,
    De = 1028,
    ze = 33776,
    Ue = 33777,
    Fe = 33778,
    Be = 33779,
    Ge = 35840,
    He = 35841,
    Ve = 35842,
    ke = 35843,
    je = 36196,
    We = 37808,
    qe = 37809,
    Xe = 37810,
    Ye = 37811,
    Ze = 37812,
    Je = 37813,
    Ke = 37814,
    Qe = 37815,
    $e = 37816,
    et = 37817,
    tt = 37818,
    nt = 37819,
    it = 37820,
    rt = 37821,
    at = 2201,
    ot = 2400,
    st = 0,
    ct = 1,
    lt = 2,
    ht = 3e3,
    ut = 3001,
    pt = 3007,
    dt = 3002,
    ft = 3003,
    mt = 3004,
    vt = 3005,
    gt = 3006,
    yt = 3200,
    xt = 3201,
    bt = 0,
    wt = 1,
    _t = 7680,
    Mt = 519,
    St = 35044;

  function Tt() {}
  Object.assign(Tt.prototype, {
    addEventListener: function(e, t) {
      void 0 === this._listeners && (this._listeners = {});
      var n = this._listeners;
      void 0 === n[e] && (n[e] = []), -1 === n[e].indexOf(t) && n[e].push(t)
    },
    hasEventListener: function(e, t) {
      if (void 0 === this._listeners) return !1;
      var n = this._listeners;
      return void 0 !== n[e] && -1 !== n[e].indexOf(t)
    },
    removeEventListener: function(e, t) {
      if (void 0 !== this._listeners) {
        var n = this._listeners[e];
        if (void 0 !== n) {
          var i = n.indexOf(t); - 1 !== i && n.splice(i, 1)
        }
      }
    },
    dispatchEvent: function(e) {
      if (void 0 !== this._listeners) {
        var t = this._listeners[e.type];
        if (void 0 !== t) {
          e.target = this;
          for (var n = t.slice(0), i = 0, r = n.length; i < r; i++) n[i].call(this, e)
        }
      }
    }
  });
  for (var Et = [], At = 0; At < 256; At++) Et[At] = (At < 16 ? "0" : "") + At.toString(16);
  var Lt = {
    DEG2RAD: Math.PI / 180,
    RAD2DEG: 180 / Math.PI,
    generateUUID: function() {
      var e = 4294967295 * Math.random() | 0,
        t = 4294967295 * Math.random() | 0,
        n = 4294967295 * Math.random() | 0,
        i = 4294967295 * Math.random() | 0;
      return (Et[255 & e] + Et[e >> 8 & 255] + Et[e >> 16 & 255] + Et[e >> 24 & 255] + "-" + Et[255 & t] + Et[t >> 8 & 255] + "-" + Et[t >> 16 & 15 | 64] + Et[t >> 24 & 255] + "-" + Et[63 & n | 128] + Et[n >> 8 & 255] + "-" + Et[n >> 16 & 255] + Et[n >> 24 & 255] + Et[255 & i] + Et[i >> 8 & 255] + Et[i >> 16 & 255] + Et[i >> 24 & 255]).toUpperCase()
    },
    clamp: function(e, t, n) {
      return Math.max(t, Math.min(n, e))
    },
    euclideanModulo: function(e, t) {
      return (e % t + t) % t
    },
    mapLinear: function(e, t, n, i, r) {
      return i + (e - t) * (r - i) / (n - t)
    },
    lerp: function(e, t, n) {
      return (1 - n) * e + n * t
    },
    smoothstep: function(e, t, n) {
      return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t)) * e * (3 - 2 * e)
    },
    smootherstep: function(e, t, n) {
      return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t)) * e * e * (e * (6 * e - 15) + 10)
    },
    randInt: function(e, t) {
      return e + Math.floor(Math.random() * (t - e + 1))
    },
    randFloat: function(e, t) {
      return e + Math.random() * (t - e)
    },
    randFloatSpread: function(e) {
      return e * (.5 - Math.random())
    },
    degToRad: function(e) {
      return e * Lt.DEG2RAD
    },
    radToDeg: function(e) {
      return e * Lt.RAD2DEG
    },
    isPowerOfTwo: function(e) {
      return 0 == (e & e - 1) && 0 !== e
    },
    ceilPowerOfTwo: function(e) {
      return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2))
    },
    floorPowerOfTwo: function(e) {
      return Math.pow(2, Math.floor(Math.log(e) / Math.LN2))
    }
  };

  function Rt(e, t) {
    this.x = e || 0, this.y = t || 0
  }

  function Pt(e, t, n, i) {
    this._x = e || 0, this._y = t || 0, this._z = n || 0, this._w = void 0 !== i ? i : 1
  }
  Object.defineProperties(Rt.prototype, {
    width: {
      get: function() {
        return this.x
      },
      set: function(e) {
        this.x = e
      }
    },
    height: {
      get: function() {
        return this.y
      },
      set: function(e) {
        this.y = e
      }
    }
  }), Object.assign(Rt.prototype, {
    isVector2: !0,
    set: function(e, t) {
      return this.x = e, this.y = t, this
    },
    setScalar: function(e) {
      return this.x = e, this.y = e, this
    },
    setX: function(e) {
      return this.x = e, this
    },
    setY: function(e) {
      return this.y = e, this
    },
    setComponent: function(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        default:
          throw new Error("index is out of range: " + e)
      }
      return this
    },
    getComponent: function(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + e)
      }
    },
    clone: function() {
      return new this.constructor(this.x, this.y)
    },
    copy: function(e) {
      return this.x = e.x, this.y = e.y, this
    },
    add: function(e, t) {
      return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
    },
    addScalar: function(e) {
      return this.x += e, this.y += e, this
    },
    addVectors: function(e, t) {
      return this.x = e.x + t.x, this.y = e.y + t.y, this
    },
    addScaledVector: function(e, t) {
      return this.x += e.x * t, this.y += e.y * t, this
    },
    sub: function(e, t) {
      return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
    },
    subScalar: function(e) {
      return this.x -= e, this.y -= e, this
    },
    subVectors: function(e, t) {
      return this.x = e.x - t.x, this.y = e.y - t.y, this
    },
    multiply: function(e) {
      return this.x *= e.x, this.y *= e.y, this
    },
    multiplyScalar: function(e) {
      return this.x *= e, this.y *= e, this
    },
    divide: function(e) {
      return this.x /= e.x, this.y /= e.y, this
    },
    divideScalar: function(e) {
      return this.multiplyScalar(1 / e)
    },
    applyMatrix3: function(e) {
      var t = this.x,
        n = this.y,
        i = e.elements;
      return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this
    },
    min: function(e) {
      return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this
    },
    max: function(e) {
      return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this
    },
    clamp: function(e, t) {
      return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this
    },
    clampScalar: function(e, t) {
      return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this
    },
    clampLength: function(e, t) {
      var n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    },
    floor: function() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
    },
    ceil: function() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
    },
    round: function() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this
    },
    roundToZero: function() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
    },
    negate: function() {
      return this.x = -this.x, this.y = -this.y, this
    },
    dot: function(e) {
      return this.x * e.x + this.y * e.y
    },
    cross: function(e) {
      return this.x * e.y - this.y * e.x
    },
    lengthSq: function() {
      return this.x * this.x + this.y * this.y
    },
    length: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y)
    },
    manhattanLength: function() {
      return Math.abs(this.x) + Math.abs(this.y)
    },
    normalize: function() {
      return this.divideScalar(this.length() || 1)
    },
    angle: function() {
      var e = Math.atan2(this.y, this.x);
      return e < 0 && (e += 2 * Math.PI), e
    },
    distanceTo: function(e) {
      return Math.sqrt(this.distanceToSquared(e))
    },
    distanceToSquared: function(e) {
      var t = this.x - e.x,
        n = this.y - e.y;
      return t * t + n * n
    },
    manhattanDistanceTo: function(e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
    },
    setLength: function(e) {
      return this.normalize().multiplyScalar(e)
    },
    lerp: function(e, t) {
      return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
    },
    lerpVectors: function(e, t, n) {
      return this.subVectors(t, e).multiplyScalar(n).add(e)
    },
    equals: function(e) {
      return e.x === this.x && e.y === this.y
    },
    fromArray: function(e, t) {
      return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this
    },
    toArray: function(e, t) {
      return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e
    },
    fromBufferAttribute: function(e, t, n) {
      return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this
    },
    rotateAround: function(e, t) {
      var n = Math.cos(t),
        i = Math.sin(t),
        r = this.x - e.x,
        a = this.y - e.y;
      return this.x = r * n - a * i + e.x, this.y = r * i + a * n + e.y, this
    }
  }), Object.assign(Pt, {
    slerp: function(e, t, n, i) {
      return n.copy(e).slerp(t, i)
    },
    slerpFlat: function(e, t, n, i, r, a, o) {
      var s = n[i + 0],
        c = n[i + 1],
        l = n[i + 2],
        h = n[i + 3],
        u = r[a + 0],
        p = r[a + 1],
        d = r[a + 2],
        f = r[a + 3];
      if (h !== f || s !== u || c !== p || l !== d) {
        var m = 1 - o,
          v = s * u + c * p + l * d + h * f,
          g = v >= 0 ? 1 : -1,
          y = 1 - v * v;
        if (y > Number.EPSILON) {
          var x = Math.sqrt(y),
            b = Math.atan2(x, v * g);
          m = Math.sin(m * b) / x, o = Math.sin(o * b) / x
        }
        var w = o * g;
        if (s = s * m + u * w, c = c * m + p * w, l = l * m + d * w, h = h * m + f * w, m === 1 - o) {
          var _ = 1 / Math.sqrt(s * s + c * c + l * l + h * h);
          s *= _, c *= _, l *= _, h *= _
        }
      }
      e[t] = s, e[t + 1] = c, e[t + 2] = l, e[t + 3] = h
    }
  }), Object.defineProperties(Pt.prototype, {
    x: {
      get: function() {
        return this._x
      },
      set: function(e) {
        this._x = e, this._onChangeCallback()
      }
    },
    y: {
      get: function() {
        return this._y
      },
      set: function(e) {
        this._y = e, this._onChangeCallback()
      }
    },
    z: {
      get: function() {
        return this._z
      },
      set: function(e) {
        this._z = e, this._onChangeCallback()
      }
    },
    w: {
      get: function() {
        return this._w
      },
      set: function(e) {
        this._w = e, this._onChangeCallback()
      }
    }
  }), Object.assign(Pt.prototype, {
    isQuaternion: !0,
    set: function(e, t, n, i) {
      return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this
    },
    clone: function() {
      return new this.constructor(this._x, this._y, this._z, this._w)
    },
    copy: function(e) {
      return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this
    },
    setFromEuler: function(e, t) {
      if (!e || !e.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
      var n = e._x,
        i = e._y,
        r = e._z,
        a = e.order,
        o = Math.cos,
        s = Math.sin,
        c = o(n / 2),
        l = o(i / 2),
        h = o(r / 2),
        u = s(n / 2),
        p = s(i / 2),
        d = s(r / 2);
      return "XYZ" === a ? (this._x = u * l * h + c * p * d, this._y = c * p * h - u * l * d, this._z = c * l * d + u * p * h, this._w = c * l * h - u * p * d) : "YXZ" === a ? (this._x = u * l * h + c * p * d, this._y = c * p * h - u * l * d, this._z = c * l * d - u * p * h, this._w = c * l * h + u * p * d) : "ZXY" === a ? (this._x = u * l * h - c * p * d, this._y = c * p * h + u * l * d, this._z = c * l * d + u * p * h, this._w = c * l * h - u * p * d) : "ZYX" === a ? (this._x = u * l * h - c * p * d, this._y = c * p * h + u * l * d, this._z = c * l * d - u * p * h, this._w = c * l * h + u * p * d) : "YZX" === a ? (this._x = u * l * h + c * p * d, this._y = c * p * h + u * l * d, this._z = c * l * d - u * p * h, this._w = c * l * h - u * p * d) : "XZY" === a && (this._x = u * l * h - c * p * d, this._y = c * p * h - u * l * d, this._z = c * l * d + u * p * h, this._w = c * l * h + u * p * d), !1 !== t && this._onChangeCallback(), this
    },
    setFromAxisAngle: function(e, t) {
      var n = t / 2,
        i = Math.sin(n);
      return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this
    },
    setFromRotationMatrix: function(e) {
      var t, n = e.elements,
        i = n[0],
        r = n[4],
        a = n[8],
        o = n[1],
        s = n[5],
        c = n[9],
        l = n[2],
        h = n[6],
        u = n[10],
        p = i + s + u;
      return p > 0 ? (t = .5 / Math.sqrt(p + 1), this._w = .25 / t, this._x = (h - c) * t, this._y = (a - l) * t, this._z = (o - r) * t) : i > s && i > u ? (t = 2 * Math.sqrt(1 + i - s - u), this._w = (h - c) / t, this._x = .25 * t, this._y = (r + o) / t, this._z = (a + l) / t) : s > u ? (t = 2 * Math.sqrt(1 + s - i - u), this._w = (a - l) / t, this._x = (r + o) / t, this._y = .25 * t, this._z = (c + h) / t) : (t = 2 * Math.sqrt(1 + u - i - s), this._w = (o - r) / t, this._x = (a + l) / t, this._y = (c + h) / t, this._z = .25 * t), this._onChangeCallback(), this
    },
    setFromUnitVectors: function(e, t) {
      var n = e.dot(t) + 1;
      return n < 1e-6 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize()
    },
    angleTo: function(e) {
      return 2 * Math.acos(Math.abs(Lt.clamp(this.dot(e), -1, 1)))
    },
    rotateTowards: function(e, t) {
      var n = this.angleTo(e);
      if (0 === n) return this;
      var i = Math.min(1, t / n);
      return this.slerp(e, i), this
    },
    inverse: function() {
      return this.conjugate()
    },
    conjugate: function() {
      return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
    },
    dot: function(e) {
      return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
    },
    lengthSq: function() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    },
    length: function() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    },
    normalize: function() {
      var e = this.length();
      return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this
    },
    multiply: function(e, t) {
      return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
    },
    premultiply: function(e) {
      return this.multiplyQuaternions(e, this)
    },
    multiplyQuaternions: function(e, t) {
      var n = e._x,
        i = e._y,
        r = e._z,
        a = e._w,
        o = t._x,
        s = t._y,
        c = t._z,
        l = t._w;
      return this._x = n * l + a * o + i * c - r * s, this._y = i * l + a * s + r * o - n * c, this._z = r * l + a * c + n * s - i * o, this._w = a * l - n * o - i * s - r * c, this._onChangeCallback(), this
    },
    slerp: function(e, t) {
      if (0 === t) return this;
      if (1 === t) return this.copy(e);
      var n = this._x,
        i = this._y,
        r = this._z,
        a = this._w,
        o = a * e._w + n * e._x + i * e._y + r * e._z;
      if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = n, this._y = i, this._z = r, this;
      var s = 1 - o * o;
      if (s <= Number.EPSILON) {
        var c = 1 - t;
        return this._w = c * a + t * this._w, this._x = c * n + t * this._x, this._y = c * i + t * this._y, this._z = c * r + t * this._z, this.normalize(), this._onChangeCallback(), this
      }
      var l = Math.sqrt(s),
        h = Math.atan2(l, o),
        u = Math.sin((1 - t) * h) / l,
        p = Math.sin(t * h) / l;
      return this._w = a * u + this._w * p, this._x = n * u + this._x * p, this._y = i * u + this._y * p, this._z = r * u + this._z * p, this._onChangeCallback(), this
    },
    equals: function(e) {
      return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
    },
    fromArray: function(e, t) {
      return void 0 === t && (t = 0), this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this
    },
    toArray: function(e, t) {
      return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
    },
    _onChange: function(e) {
      return this._onChangeCallback = e, this
    },
    _onChangeCallback: function() {}
  });
  var Ct = new It,
    Ot = new Pt;

  function It(e, t, n) {
    this.x = e || 0, this.y = t || 0, this.z = n || 0
  }
  Object.assign(It.prototype, {
    isVector3: !0,
    set: function(e, t, n) {
      return this.x = e, this.y = t, this.z = n, this
    },
    setScalar: function(e) {
      return this.x = e, this.y = e, this.z = e, this
    },
    setX: function(e) {
      return this.x = e, this
    },
    setY: function(e) {
      return this.y = e, this
    },
    setZ: function(e) {
      return this.z = e, this
    },
    setComponent: function(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        default:
          throw new Error("index is out of range: " + e)
      }
      return this
    },
    getComponent: function(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + e)
      }
    },
    clone: function() {
      return new this.constructor(this.x, this.y, this.z)
    },
    copy: function(e) {
      return this.x = e.x, this.y = e.y, this.z = e.z, this
    },
    add: function(e, t) {
      return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
    },
    addScalar: function(e) {
      return this.x += e, this.y += e, this.z += e, this
    },
    addVectors: function(e, t) {
      return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
    },
    addScaledVector: function(e, t) {
      return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this
    },
    sub: function(e, t) {
      return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
    },
    subScalar: function(e) {
      return this.x -= e, this.y -= e, this.z -= e, this
    },
    subVectors: function(e, t) {
      return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
    },
    multiply: function(e, t) {
      return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
    },
    multiplyScalar: function(e) {
      return this.x *= e, this.y *= e, this.z *= e, this
    },
    multiplyVectors: function(e, t) {
      return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
    },
    applyEuler: function(e) {
      return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(Ot.setFromEuler(e))
    },
    applyAxisAngle: function(e, t) {
      return this.applyQuaternion(Ot.setFromAxisAngle(e, t))
    },
    applyMatrix3: function(e) {
      var t = this.x,
        n = this.y,
        i = this.z,
        r = e.elements;
      return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this
    },
    applyMatrix4: function(e) {
      var t = this.x,
        n = this.y,
        i = this.z,
        r = e.elements,
        a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
      return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a, this
    },
    applyQuaternion: function(e) {
      var t = this.x,
        n = this.y,
        i = this.z,
        r = e.x,
        a = e.y,
        o = e.z,
        s = e.w,
        c = s * t + a * i - o * n,
        l = s * n + o * t - r * i,
        h = s * i + r * n - a * t,
        u = -r * t - a * n - o * i;
      return this.x = c * s + u * -r + l * -o - h * -a, this.y = l * s + u * -a + h * -r - c * -o, this.z = h * s + u * -o + c * -a - l * -r, this
    },
    project: function(e) {
      return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
    },
    unproject: function(e) {
      return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
    },
    transformDirection: function(e) {
      var t = this.x,
        n = this.y,
        i = this.z,
        r = e.elements;
      return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize()
    },
    divide: function(e) {
      return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
    },
    divideScalar: function(e) {
      return this.multiplyScalar(1 / e)
    },
    min: function(e) {
      return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
    },
    max: function(e) {
      return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
    },
    clamp: function(e, t) {
      return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this
    },
    clampScalar: function(e, t) {
      return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this
    },
    clampLength: function(e, t) {
      var n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    },
    floor: function() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
    },
    ceil: function() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
    },
    round: function() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
    },
    roundToZero: function() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
    },
    negate: function() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
    },
    dot: function(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z
    },
    lengthSq: function() {
      return this.x * this.x + this.y * this.y + this.z * this.z
    },
    length: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    },
    manhattanLength: function() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    },
    normalize: function() {
      return this.divideScalar(this.length() || 1)
    },
    setLength: function(e) {
      return this.normalize().multiplyScalar(e)
    },
    lerp: function(e, t) {
      return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
    },
    lerpVectors: function(e, t, n) {
      return this.subVectors(t, e).multiplyScalar(n).add(e)
    },
    cross: function(e, t) {
      return void 0 !== t ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t)) : this.crossVectors(this, e)
    },
    crossVectors: function(e, t) {
      var n = e.x,
        i = e.y,
        r = e.z,
        a = t.x,
        o = t.y,
        s = t.z;
      return this.x = i * s - r * o, this.y = r * a - n * s, this.z = n * o - i * a, this
    },
    projectOnVector: function(e) {
      var t = e.dot(this) / e.lengthSq();
      return this.copy(e).multiplyScalar(t)
    },
    projectOnPlane: function(e) {
      return Ct.copy(this).projectOnVector(e), this.sub(Ct)
    },
    reflect: function(e) {
      return this.sub(Ct.copy(e).multiplyScalar(2 * this.dot(e)))
    },
    angleTo: function(e) {
      var t = Math.sqrt(this.lengthSq() * e.lengthSq());
      0 === t && console.error("THREE.Vector3: angleTo() can't handle zero length vectors.");
      var n = this.dot(e) / t;
      return Math.acos(Lt.clamp(n, -1, 1))
    },
    distanceTo: function(e) {
      return Math.sqrt(this.distanceToSquared(e))
    },
    distanceToSquared: function(e) {
      var t = this.x - e.x,
        n = this.y - e.y,
        i = this.z - e.z;
      return t * t + n * n + i * i
    },
    manhattanDistanceTo: function(e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    },
    setFromSpherical: function(e) {
      return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
    },
    setFromSphericalCoords: function(e, t, n) {
      var i = Math.sin(t) * e;
      return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this
    },
    setFromCylindrical: function(e) {
      return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
    },
    setFromCylindricalCoords: function(e, t, n) {
      return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this
    },
    setFromMatrixPosition: function(e) {
      var t = e.elements;
      return this.x = t[12], this.y = t[13], this.z = t[14], this
    },
    setFromMatrixScale: function(e) {
      var t = this.setFromMatrixColumn(e, 0).length(),
        n = this.setFromMatrixColumn(e, 1).length(),
        i = this.setFromMatrixColumn(e, 2).length();
      return this.x = t, this.y = n, this.z = i, this
    },
    setFromMatrixColumn: function(e, t) {
      return this.fromArray(e.elements, 4 * t)
    },
    equals: function(e) {
      return e.x === this.x && e.y === this.y && e.z === this.z
    },
    fromArray: function(e, t) {
      return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
    },
    toArray: function(e, t) {
      return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
    },
    fromBufferAttribute: function(e, t, n) {
      return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this
    }
  });
  var Nt, Dt = new It;

  function zt() {
    this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
  }
  Object.assign(zt.prototype, {
    isMatrix3: !0,
    set: function(e, t, n, i, r, a, o, s, c) {
      var l = this.elements;
      return l[0] = e, l[1] = i, l[2] = o, l[3] = t, l[4] = r, l[5] = s, l[6] = n, l[7] = a, l[8] = c, this
    },
    identity: function() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
    },
    clone: function() {
      return (new this.constructor).fromArray(this.elements)
    },
    copy: function(e) {
      var t = this.elements,
        n = e.elements;
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this
    },
    setFromMatrix4: function(e) {
      var t = e.elements;
      return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    },
    applyToBufferAttribute: function(e) {
      for (var t = 0, n = e.count; t < n; t++) Dt.x = e.getX(t), Dt.y = e.getY(t), Dt.z = e.getZ(t), Dt.applyMatrix3(this), e.setXYZ(t, Dt.x, Dt.y, Dt.z);
      return e
    },
    multiply: function(e) {
      return this.multiplyMatrices(this, e)
    },
    premultiply: function(e) {
      return this.multiplyMatrices(e, this)
    },
    multiplyMatrices: function(e, t) {
      var n = e.elements,
        i = t.elements,
        r = this.elements,
        a = n[0],
        o = n[3],
        s = n[6],
        c = n[1],
        l = n[4],
        h = n[7],
        u = n[2],
        p = n[5],
        d = n[8],
        f = i[0],
        m = i[3],
        v = i[6],
        g = i[1],
        y = i[4],
        x = i[7],
        b = i[2],
        w = i[5],
        _ = i[8];
      return r[0] = a * f + o * g + s * b, r[3] = a * m + o * y + s * w, r[6] = a * v + o * x + s * _, r[1] = c * f + l * g + h * b, r[4] = c * m + l * y + h * w, r[7] = c * v + l * x + h * _, r[2] = u * f + p * g + d * b, r[5] = u * m + p * y + d * w, r[8] = u * v + p * x + d * _, this
    },
    multiplyScalar: function(e) {
      var t = this.elements;
      return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
    },
    determinant: function() {
      var e = this.elements,
        t = e[0],
        n = e[1],
        i = e[2],
        r = e[3],
        a = e[4],
        o = e[5],
        s = e[6],
        c = e[7],
        l = e[8];
      return t * a * l - t * o * c - n * r * l + n * o * s + i * r * c - i * a * s
    },
    getInverse: function(e, t) {
      e && e.isMatrix4 && console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");
      var n = e.elements,
        i = this.elements,
        r = n[0],
        a = n[1],
        o = n[2],
        s = n[3],
        c = n[4],
        l = n[5],
        h = n[6],
        u = n[7],
        p = n[8],
        d = p * c - l * u,
        f = l * h - p * s,
        m = u * s - c * h,
        v = r * d + a * f + o * m;
      if (0 === v) {
        var g = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";
        if (!0 === t) throw new Error(g);
        return console.warn(g), this.identity()
      }
      var y = 1 / v;
      return i[0] = d * y, i[1] = (o * u - p * a) * y, i[2] = (l * a - o * c) * y, i[3] = f * y, i[4] = (p * r - o * h) * y, i[5] = (o * s - l * r) * y, i[6] = m * y, i[7] = (a * h - u * r) * y, i[8] = (c * r - a * s) * y, this
    },
    transpose: function() {
      var e, t = this.elements;
      return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
    },
    getNormalMatrix: function(e) {
      return this.setFromMatrix4(e).getInverse(this).transpose()
    },
    transposeIntoArray: function(e) {
      var t = this.elements;
      return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
    },
    setUvTransform: function(e, t, n, i, r, a, o) {
      var s = Math.cos(r),
        c = Math.sin(r);
      this.set(n * s, n * c, -n * (s * a + c * o) + a + e, -i * c, i * s, -i * (-c * a + s * o) + o + t, 0, 0, 1)
    },
    scale: function(e, t) {
      var n = this.elements;
      return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this
    },
    rotate: function(e) {
      var t = Math.cos(e),
        n = Math.sin(e),
        i = this.elements,
        r = i[0],
        a = i[3],
        o = i[6],
        s = i[1],
        c = i[4],
        l = i[7];
      return i[0] = t * r + n * s, i[3] = t * a + n * c, i[6] = t * o + n * l, i[1] = -n * r + t * s, i[4] = -n * a + t * c, i[7] = -n * o + t * l, this
    },
    translate: function(e, t) {
      var n = this.elements;
      return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this
    },
    equals: function(e) {
      for (var t = this.elements, n = e.elements, i = 0; i < 9; i++)
        if (t[i] !== n[i]) return !1;
      return !0
    },
    fromArray: function(e, t) {
      void 0 === t && (t = 0);
      for (var n = 0; n < 9; n++) this.elements[n] = e[n + t];
      return this
    },
    toArray: function(e, t) {
      void 0 === e && (e = []), void 0 === t && (t = 0);
      var n = this.elements;
      return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e
    }
  });
  var Ut = {
      getDataURL: function(e) {
        var t;
        if ("undefined" == typeof HTMLCanvasElement) return e.src;
        if (e instanceof HTMLCanvasElement) t = e;
        else {
          void 0 === Nt && (Nt = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), Nt.width = e.width, Nt.height = e.height;
          var n = Nt.getContext("2d");
          e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Nt
        }
        return t.width > 2048 || t.height > 2048 ? t.toDataURL("image/jpeg", .6) : t.toDataURL("image/png")
      }
    },
    Ft = 0;

  function Bt(e, t, n, i, r, a, o, s, c, l) {
    Object.defineProperty(this, "id", {
      value: Ft++
    }), this.uuid = Lt.generateUUID(), this.name = "", this.image = void 0 !== e ? e : Bt.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== t ? t : Bt.DEFAULT_MAPPING, this.wrapS = void 0 !== n ? n : ce, this.wrapT = void 0 !== i ? i : ce, this.magFilter = void 0 !== r ? r : de, this.minFilter = void 0 !== a ? a : me, this.anisotropy = void 0 !== c ? c : 1, this.format = void 0 !== o ? o : Pe, this.type = void 0 !== s ? s : ve, this.offset = new Rt(0, 0), this.repeat = new Rt(1, 1), this.center = new Rt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new zt, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== l ? l : ht, this.version = 0, this.onUpdate = null
  }

  function Gt(e, t, n, i) {
    this.x = e || 0, this.y = t || 0, this.z = n || 0, this.w = void 0 !== i ? i : 1
  }

  function Ht(e, t, n) {
    this.width = e, this.height = t, this.scissor = new Gt(0, 0, e, t), this.scissorTest = !1, this.viewport = new Gt(0, 0, e, t), n = n || {}, this.texture = new Bt(void 0, void 0, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.image = {}, this.texture.image.width = e, this.texture.image.height = t, this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : de, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 === n.stencilBuffer || n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null
  }

  function Vt(e, t, n) {
    Ht.call(this, e, t, n), this.samples = 4
  }
  Bt.DEFAULT_IMAGE = void 0, Bt.DEFAULT_MAPPING = 300, Bt.prototype = Object.assign(Object.create(Tt.prototype), {
    constructor: Bt,
    isTexture: !0,
    updateMatrix: function() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(e) {
      return this.name = e.name, this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this
    },
    toJSON: function(e) {
      var t = void 0 === e || "string" == typeof e;
      if (!t && void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
      var n = {
        metadata: {
          version: 4.5,
          type: "Texture",
          generator: "Texture.toJSON"
        },
        uuid: this.uuid,
        name: this.name,
        mapping: this.mapping,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        type: this.type,
        encoding: this.encoding,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment
      };
      if (void 0 !== this.image) {
        var i = this.image;
        if (void 0 === i.uuid && (i.uuid = Lt.generateUUID()), !t && void 0 === e.images[i.uuid]) {
          var r;
          if (Array.isArray(i)) {
            r = [];
            for (var a = 0, o = i.length; a < o; a++) r.push(Ut.getDataURL(i[a]))
          } else r = Ut.getDataURL(i);
          e.images[i.uuid] = {
            uuid: i.uuid,
            url: r
          }
        }
        n.image = i.uuid
      }
      return t || (e.textures[this.uuid] = n), n
    },
    dispose: function() {
      this.dispatchEvent({
        type: "dispose"
      })
    },
    transformUv: function(e) {
      if (300 !== this.mapping) return e;
      if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
        case se:
          e.x = e.x - Math.floor(e.x);
          break;
        case ce:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case le:
          1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x)
      }
      if (e.y < 0 || e.y > 1) switch (this.wrapT) {
        case se:
          e.y = e.y - Math.floor(e.y);
          break;
        case ce:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case le:
          1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y)
      }
      return this.flipY && (e.y = 1 - e.y), e
    }
  }), Object.defineProperty(Bt.prototype, "needsUpdate", {
    set: function(e) {
      !0 === e && this.version++
    }
  }), Object.defineProperties(Gt.prototype, {
    width: {
      get: function() {
        return this.z
      },
      set: function(e) {
        this.z = e
      }
    },
    height: {
      get: function() {
        return this.w
      },
      set: function(e) {
        this.w = e
      }
    }
  }), Object.assign(Gt.prototype, {
    isVector4: !0,
    set: function(e, t, n, i) {
      return this.x = e, this.y = t, this.z = n, this.w = i, this
    },
    setScalar: function(e) {
      return this.x = e, this.y = e, this.z = e, this.w = e, this
    },
    setX: function(e) {
      return this.x = e, this
    },
    setY: function(e) {
      return this.y = e, this
    },
    setZ: function(e) {
      return this.z = e, this
    },
    setW: function(e) {
      return this.w = e, this
    },
    setComponent: function(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        case 3:
          this.w = t;
          break;
        default:
          throw new Error("index is out of range: " + e)
      }
      return this
    },
    getComponent: function(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + e)
      }
    },
    clone: function() {
      return new this.constructor(this.x, this.y, this.z, this.w)
    },
    copy: function(e) {
      return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this
    },
    add: function(e, t) {
      return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
    },
    addScalar: function(e) {
      return this.x += e, this.y += e, this.z += e, this.w += e, this
    },
    addVectors: function(e, t) {
      return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
    },
    addScaledVector: function(e, t) {
      return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this
    },
    sub: function(e, t) {
      return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
    },
    subScalar: function(e) {
      return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
    },
    subVectors: function(e, t) {
      return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
    },
    multiplyScalar: function(e) {
      return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
    },
    applyMatrix4: function(e) {
      var t = this.x,
        n = this.y,
        i = this.z,
        r = this.w,
        a = e.elements;
      return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r, this
    },
    divideScalar: function(e) {
      return this.multiplyScalar(1 / e)
    },
    setAxisAngleFromQuaternion: function(e) {
      this.w = 2 * Math.acos(e.w);
      var t = Math.sqrt(1 - e.w * e.w);
      return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
    },
    setAxisAngleFromRotationMatrix: function(e) {
      var t, n, i, r, a = e.elements,
        o = a[0],
        s = a[4],
        c = a[8],
        l = a[1],
        h = a[5],
        u = a[9],
        p = a[2],
        d = a[6],
        f = a[10];
      if (Math.abs(s - l) < .01 && Math.abs(c - p) < .01 && Math.abs(u - d) < .01) {
        if (Math.abs(s + l) < .1 && Math.abs(c + p) < .1 && Math.abs(u + d) < .1 && Math.abs(o + h + f - 3) < .1) return this.set(1, 0, 0, 0), this;
        t = Math.PI;
        var m = (o + 1) / 2,
          v = (h + 1) / 2,
          g = (f + 1) / 2,
          y = (s + l) / 4,
          x = (c + p) / 4,
          b = (u + d) / 4;
        return m > v && m > g ? m < .01 ? (n = 0, i = .707106781, r = .707106781) : (i = y / (n = Math.sqrt(m)), r = x / n) : v > g ? v < .01 ? (n = .707106781, i = 0, r = .707106781) : (n = y / (i = Math.sqrt(v)), r = b / i) : g < .01 ? (n = .707106781, i = .707106781, r = 0) : (n = x / (r = Math.sqrt(g)), i = b / r), this.set(n, i, r, t), this
      }
      var w = Math.sqrt((d - u) * (d - u) + (c - p) * (c - p) + (l - s) * (l - s));
      return Math.abs(w) < .001 && (w = 1), this.x = (d - u) / w, this.y = (c - p) / w, this.z = (l - s) / w, this.w = Math.acos((o + h + f - 1) / 2), this
    },
    min: function(e) {
      return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this
    },
    max: function(e) {
      return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this
    },
    clamp: function(e, t) {
      return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this
    },
    clampScalar: function(e, t) {
      return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this
    },
    clampLength: function(e, t) {
      var n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    },
    floor: function() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
    },
    ceil: function() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
    },
    round: function() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
    },
    roundToZero: function() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
    },
    negate: function() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
    },
    dot: function(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
    },
    lengthSq: function() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    },
    length: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    },
    manhattanLength: function() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    },
    normalize: function() {
      return this.divideScalar(this.length() || 1)
    },
    setLength: function(e) {
      return this.normalize().multiplyScalar(e)
    },
    lerp: function(e, t) {
      return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
    },
    lerpVectors: function(e, t, n) {
      return this.subVectors(t, e).multiplyScalar(n).add(e)
    },
    equals: function(e) {
      return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
    },
    fromArray: function(e, t) {
      return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
    },
    toArray: function(e, t) {
      return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
    },
    fromBufferAttribute: function(e, t, n) {
      return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this
    }
  }), Ht.prototype = Object.assign(Object.create(Tt.prototype), {
    constructor: Ht,
    isWebGLRenderTarget: !0,
    setSize: function(e, t) {
      this.width === e && this.height === t || (this.width = e, this.height = t, this.texture.image.width = e, this.texture.image.height = t, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t)
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(e) {
      return this.width = e.width, this.height = e.height, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this
    },
    dispose: function() {
      this.dispatchEvent({
        type: "dispose"
      })
    }
  }), Vt.prototype = Object.assign(Object.create(Ht.prototype), {
    constructor: Vt,
    isWebGLMultisampleRenderTarget: !0,
    copy: function(e) {
      return Ht.prototype.copy.call(this, e), this.samples = e.samples, this
    }
  });
  var kt = new It,
    jt = new Jt,
    Wt = new It(0, 0, 0),
    qt = new It(1, 1, 1),
    Xt = new It,
    Yt = new It,
    Zt = new It;

  function Jt() {
    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
  }
  Object.assign(Jt.prototype, {
    isMatrix4: !0,
    set: function(e, t, n, i, r, a, o, s, c, l, h, u, p, d, f, m) {
      var v = this.elements;
      return v[0] = e, v[4] = t, v[8] = n, v[12] = i, v[1] = r, v[5] = a, v[9] = o, v[13] = s, v[2] = c, v[6] = l, v[10] = h, v[14] = u, v[3] = p, v[7] = d, v[11] = f, v[15] = m, this
    },
    identity: function() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    },
    clone: function() {
      return (new Jt).fromArray(this.elements)
    },
    copy: function(e) {
      var t = this.elements,
        n = e.elements;
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this
    },
    copyPosition: function(e) {
      var t = this.elements,
        n = e.elements;
      return t[12] = n[12], t[13] = n[13], t[14] = n[14], this
    },
    extractBasis: function(e, t, n) {
      return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
    },
    makeBasis: function(e, t, n) {
      return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this
    },
    extractRotation: function(e) {
      var t = this.elements,
        n = e.elements,
        i = 1 / kt.setFromMatrixColumn(e, 0).length(),
        r = 1 / kt.setFromMatrixColumn(e, 1).length(),
        a = 1 / kt.setFromMatrixColumn(e, 2).length();
      return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
    },
    makeRotationFromEuler: function(e) {
      e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
      var t = this.elements,
        n = e.x,
        i = e.y,
        r = e.z,
        a = Math.cos(n),
        o = Math.sin(n),
        s = Math.cos(i),
        c = Math.sin(i),
        l = Math.cos(r),
        h = Math.sin(r);
      if ("XYZ" === e.order) {
        var u = a * l,
          p = a * h,
          d = o * l,
          f = o * h;
        t[0] = s * l, t[4] = -s * h, t[8] = c, t[1] = p + d * c, t[5] = u - f * c, t[9] = -o * s, t[2] = f - u * c, t[6] = d + p * c, t[10] = a * s
      } else if ("YXZ" === e.order) {
        var m = s * l,
          v = s * h,
          g = c * l,
          y = c * h;
        t[0] = m + y * o, t[4] = g * o - v, t[8] = a * c, t[1] = a * h, t[5] = a * l, t[9] = -o, t[2] = v * o - g, t[6] = y + m * o, t[10] = a * s
      } else if ("ZXY" === e.order) {
        m = s * l, v = s * h, g = c * l, y = c * h;
        t[0] = m - y * o, t[4] = -a * h, t[8] = g + v * o, t[1] = v + g * o, t[5] = a * l, t[9] = y - m * o, t[2] = -a * c, t[6] = o, t[10] = a * s
      } else if ("ZYX" === e.order) {
        u = a * l, p = a * h, d = o * l, f = o * h;
        t[0] = s * l, t[4] = d * c - p, t[8] = u * c + f, t[1] = s * h, t[5] = f * c + u, t[9] = p * c - d, t[2] = -c, t[6] = o * s, t[10] = a * s
      } else if ("YZX" === e.order) {
        var x = a * s,
          b = a * c,
          w = o * s,
          _ = o * c;
        t[0] = s * l, t[4] = _ - x * h, t[8] = w * h + b, t[1] = h, t[5] = a * l, t[9] = -o * l, t[2] = -c * l, t[6] = b * h + w, t[10] = x - _ * h
      } else if ("XZY" === e.order) {
        x = a * s, b = a * c, w = o * s, _ = o * c;
        t[0] = s * l, t[4] = -h, t[8] = c * l, t[1] = x * h + _, t[5] = a * l, t[9] = b * h - w, t[2] = w * h - b, t[6] = o * l, t[10] = _ * h + x
      }
      return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
    },
    makeRotationFromQuaternion: function(e) {
      return this.compose(Wt, e, qt)
    },
    lookAt: function(e, t, n) {
      var i = this.elements;
      return Zt.subVectors(e, t), 0 === Zt.lengthSq() && (Zt.z = 1), Zt.normalize(), Xt.crossVectors(n, Zt), 0 === Xt.lengthSq() && (1 === Math.abs(n.z) ? Zt.x += 1e-4 : Zt.z += 1e-4, Zt.normalize(), Xt.crossVectors(n, Zt)), Xt.normalize(), Yt.crossVectors(Zt, Xt), i[0] = Xt.x, i[4] = Yt.x, i[8] = Zt.x, i[1] = Xt.y, i[5] = Yt.y, i[9] = Zt.y, i[2] = Xt.z, i[6] = Yt.z, i[10] = Zt.z, this
    },
    multiply: function(e, t) {
      return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
    },
    premultiply: function(e) {
      return this.multiplyMatrices(e, this)
    },
    multiplyMatrices: function(e, t) {
      var n = e.elements,
        i = t.elements,
        r = this.elements,
        a = n[0],
        o = n[4],
        s = n[8],
        c = n[12],
        l = n[1],
        h = n[5],
        u = n[9],
        p = n[13],
        d = n[2],
        f = n[6],
        m = n[10],
        v = n[14],
        g = n[3],
        y = n[7],
        x = n[11],
        b = n[15],
        w = i[0],
        _ = i[4],
        M = i[8],
        S = i[12],
        T = i[1],
        E = i[5],
        A = i[9],
        L = i[13],
        R = i[2],
        P = i[6],
        C = i[10],
        O = i[14],
        I = i[3],
        N = i[7],
        D = i[11],
        z = i[15];
      return r[0] = a * w + o * T + s * R + c * I, r[4] = a * _ + o * E + s * P + c * N, r[8] = a * M + o * A + s * C + c * D, r[12] = a * S + o * L + s * O + c * z, r[1] = l * w + h * T + u * R + p * I, r[5] = l * _ + h * E + u * P + p * N, r[9] = l * M + h * A + u * C + p * D, r[13] = l * S + h * L + u * O + p * z, r[2] = d * w + f * T + m * R + v * I, r[6] = d * _ + f * E + m * P + v * N, r[10] = d * M + f * A + m * C + v * D, r[14] = d * S + f * L + m * O + v * z, r[3] = g * w + y * T + x * R + b * I, r[7] = g * _ + y * E + x * P + b * N, r[11] = g * M + y * A + x * C + b * D, r[15] = g * S + y * L + x * O + b * z, this
    },
    multiplyScalar: function(e) {
      var t = this.elements;
      return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
    },
    applyToBufferAttribute: function(e) {
      for (var t = 0, n = e.count; t < n; t++) kt.x = e.getX(t), kt.y = e.getY(t), kt.z = e.getZ(t), kt.applyMatrix4(this), e.setXYZ(t, kt.x, kt.y, kt.z);
      return e
    },
    determinant: function() {
      var e = this.elements,
        t = e[0],
        n = e[4],
        i = e[8],
        r = e[12],
        a = e[1],
        o = e[5],
        s = e[9],
        c = e[13],
        l = e[2],
        h = e[6],
        u = e[10],
        p = e[14];
      return e[3] * (+r * s * h - i * c * h - r * o * u + n * c * u + i * o * p - n * s * p) + e[7] * (+t * s * p - t * c * u + r * a * u - i * a * p + i * c * l - r * s * l) + e[11] * (+t * c * h - t * o * p - r * a * h + n * a * p + r * o * l - n * c * l) + e[15] * (-i * o * l - t * s * h + t * o * u + i * a * h - n * a * u + n * s * l)
    },
    transpose: function() {
      var e, t = this.elements;
      return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
    },
    setPosition: function(e, t, n) {
      var i = this.elements;
      return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this
    },
    getInverse: function(e, t) {
      var n = this.elements,
        i = e.elements,
        r = i[0],
        a = i[1],
        o = i[2],
        s = i[3],
        c = i[4],
        l = i[5],
        h = i[6],
        u = i[7],
        p = i[8],
        d = i[9],
        f = i[10],
        m = i[11],
        v = i[12],
        g = i[13],
        y = i[14],
        x = i[15],
        b = d * y * u - g * f * u + g * h * m - l * y * m - d * h * x + l * f * x,
        w = v * f * u - p * y * u - v * h * m + c * y * m + p * h * x - c * f * x,
        _ = p * g * u - v * d * u + v * l * m - c * g * m - p * l * x + c * d * x,
        M = v * d * h - p * g * h - v * l * f + c * g * f + p * l * y - c * d * y,
        S = r * b + a * w + o * _ + s * M;
      if (0 === S) {
        var T = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";
        if (!0 === t) throw new Error(T);
        return console.warn(T), this.identity()
      }
      var E = 1 / S;
      return n[0] = b * E, n[1] = (g * f * s - d * y * s - g * o * m + a * y * m + d * o * x - a * f * x) * E, n[2] = (l * y * s - g * h * s + g * o * u - a * y * u - l * o * x + a * h * x) * E, n[3] = (d * h * s - l * f * s - d * o * u + a * f * u + l * o * m - a * h * m) * E, n[4] = w * E, n[5] = (p * y * s - v * f * s + v * o * m - r * y * m - p * o * x + r * f * x) * E, n[6] = (v * h * s - c * y * s - v * o * u + r * y * u + c * o * x - r * h * x) * E, n[7] = (c * f * s - p * h * s + p * o * u - r * f * u - c * o * m + r * h * m) * E, n[8] = _ * E, n[9] = (v * d * s - p * g * s - v * a * m + r * g * m + p * a * x - r * d * x) * E, n[10] = (c * g * s - v * l * s + v * a * u - r * g * u - c * a * x + r * l * x) * E, n[11] = (p * l * s - c * d * s - p * a * u + r * d * u + c * a * m - r * l * m) * E, n[12] = M * E, n[13] = (p * g * o - v * d * o + v * a * f - r * g * f - p * a * y + r * d * y) * E, n[14] = (v * l * o - c * g * o - v * a * h + r * g * h + c * a * y - r * l * y) * E, n[15] = (c * d * o - p * l * o + p * a * h - r * d * h - c * a * f + r * l * f) * E, this
    },
    scale: function(e) {
      var t = this.elements,
        n = e.x,
        i = e.y,
        r = e.z;
      return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this
    },
    getMaxScaleOnAxis: function() {
      var e = this.elements,
        t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
        n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
        i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
      return Math.sqrt(Math.max(t, n, i))
    },
    makeTranslation: function(e, t, n) {
      return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this
    },
    makeRotationX: function(e) {
      var t = Math.cos(e),
        n = Math.sin(e);
      return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this
    },
    makeRotationY: function(e) {
      var t = Math.cos(e),
        n = Math.sin(e);
      return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this
    },
    makeRotationZ: function(e) {
      var t = Math.cos(e),
        n = Math.sin(e);
      return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    },
    makeRotationAxis: function(e, t) {
      var n = Math.cos(t),
        i = Math.sin(t),
        r = 1 - n,
        a = e.x,
        o = e.y,
        s = e.z,
        c = r * a,
        l = r * o;
      return this.set(c * a + n, c * o - i * s, c * s + i * o, 0, c * o + i * s, l * o + n, l * s - i * a, 0, c * s - i * o, l * s + i * a, r * s * s + n, 0, 0, 0, 0, 1), this
    },
    makeScale: function(e, t, n) {
      return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
    },
    makeShear: function(e, t, n) {
      return this.set(1, t, n, 0, e, 1, n, 0, e, t, 1, 0, 0, 0, 0, 1), this
    },
    compose: function(e, t, n) {
      var i = this.elements,
        r = t._x,
        a = t._y,
        o = t._z,
        s = t._w,
        c = r + r,
        l = a + a,
        h = o + o,
        u = r * c,
        p = r * l,
        d = r * h,
        f = a * l,
        m = a * h,
        v = o * h,
        g = s * c,
        y = s * l,
        x = s * h,
        b = n.x,
        w = n.y,
        _ = n.z;
      return i[0] = (1 - (f + v)) * b, i[1] = (p + x) * b, i[2] = (d - y) * b, i[3] = 0, i[4] = (p - x) * w, i[5] = (1 - (u + v)) * w, i[6] = (m + g) * w, i[7] = 0, i[8] = (d + y) * _, i[9] = (m - g) * _, i[10] = (1 - (u + f)) * _, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this
    },
    decompose: function(e, t, n) {
      var i = this.elements,
        r = kt.set(i[0], i[1], i[2]).length(),
        a = kt.set(i[4], i[5], i[6]).length(),
        o = kt.set(i[8], i[9], i[10]).length();
      this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], jt.copy(this);
      var s = 1 / r,
        c = 1 / a,
        l = 1 / o;
      return jt.elements[0] *= s, jt.elements[1] *= s, jt.elements[2] *= s, jt.elements[4] *= c, jt.elements[5] *= c, jt.elements[6] *= c, jt.elements[8] *= l, jt.elements[9] *= l, jt.elements[10] *= l, t.setFromRotationMatrix(jt), n.x = r, n.y = a, n.z = o, this
    },
    makePerspective: function(e, t, n, i, r, a) {
      void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
      var o = this.elements,
        s = 2 * r / (t - e),
        c = 2 * r / (n - i),
        l = (t + e) / (t - e),
        h = (n + i) / (n - i),
        u = -(a + r) / (a - r),
        p = -2 * a * r / (a - r);
      return o[0] = s, o[4] = 0, o[8] = l, o[12] = 0, o[1] = 0, o[5] = c, o[9] = h, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = u, o[14] = p, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
    },
    makeOrthographic: function(e, t, n, i, r, a) {
      var o = this.elements,
        s = 1 / (t - e),
        c = 1 / (n - i),
        l = 1 / (a - r),
        h = (t + e) * s,
        u = (n + i) * c,
        p = (a + r) * l;
      return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -h, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -u, o[2] = 0, o[6] = 0, o[10] = -2 * l, o[14] = -p, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
    },
    equals: function(e) {
      for (var t = this.elements, n = e.elements, i = 0; i < 16; i++)
        if (t[i] !== n[i]) return !1;
      return !0
    },
    fromArray: function(e, t) {
      void 0 === t && (t = 0);
      for (var n = 0; n < 16; n++) this.elements[n] = e[n + t];
      return this
    },
    toArray: function(e, t) {
      void 0 === e && (e = []), void 0 === t && (t = 0);
      var n = this.elements;
      return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e
    }
  });
  var Kt = new Jt,
    Qt = new Pt;

  function $t(e, t, n, i) {
    this._x = e || 0, this._y = t || 0, this._z = n || 0, this._order = i || $t.DefaultOrder
  }

  function en() {
    this.mask = 1
  }
  $t.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], $t.DefaultOrder = "XYZ", Object.defineProperties($t.prototype, {
    x: {
      get: function() {
        return this._x
      },
      set: function(e) {
        this._x = e, this._onChangeCallback()
      }
    },
    y: {
      get: function() {
        return this._y
      },
      set: function(e) {
        this._y = e, this._onChangeCallback()
      }
    },
    z: {
      get: function() {
        return this._z
      },
      set: function(e) {
        this._z = e, this._onChangeCallback()
      }
    },
    order: {
      get: function() {
        return this._order
      },
      set: function(e) {
        this._order = e, this._onChangeCallback()
      }
    }
  }), Object.assign($t.prototype, {
    isEuler: !0,
    set: function(e, t, n, i) {
      return this._x = e, this._y = t, this._z = n, this._order = i || this._order, this._onChangeCallback(), this
    },
    clone: function() {
      return new this.constructor(this._x, this._y, this._z, this._order)
    },
    copy: function(e) {
      return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this
    },
    setFromRotationMatrix: function(e, t, n) {
      var i = Lt.clamp,
        r = e.elements,
        a = r[0],
        o = r[4],
        s = r[8],
        c = r[1],
        l = r[5],
        h = r[9],
        u = r[2],
        p = r[6],
        d = r[10];
      return "XYZ" === (t = t || this._order) ? (this._y = Math.asin(i(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-h, d), this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(p, l), this._z = 0)) : "YXZ" === t ? (this._x = Math.asin(-i(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(s, d), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, a), this._z = 0)) : "ZXY" === t ? (this._x = Math.asin(i(p, -1, 1)), Math.abs(p) < .9999999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, a))) : "ZYX" === t ? (this._y = Math.asin(-i(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(p, d), this._z = Math.atan2(c, a)) : (this._x = 0, this._z = Math.atan2(-o, l))) : "YZX" === t ? (this._z = Math.asin(i(c, -1, 1)), Math.abs(c) < .9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, a)) : (this._x = 0, this._y = Math.atan2(s, d))) : "XZY" === t ? (this._z = Math.asin(-i(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(p, l), this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-h, d), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + t), this._order = t, !1 !== n && this._onChangeCallback(), this
    },
    setFromQuaternion: function(e, t, n) {
      return Kt.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Kt, t, n)
    },
    setFromVector3: function(e, t) {
      return this.set(e.x, e.y, e.z, t || this._order)
    },
    reorder: function(e) {
      return Qt.setFromEuler(this), this.setFromQuaternion(Qt, e)
    },
    equals: function(e) {
      return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
    },
    fromArray: function(e) {
      return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this._onChangeCallback(), this
    },
    toArray: function(e, t) {
      return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
    },
    toVector3: function(e) {
      return e ? e.set(this._x, this._y, this._z) : new It(this._x, this._y, this._z)
    },
    _onChange: function(e) {
      return this._onChangeCallback = e, this
    },
    _onChangeCallback: function() {}
  }), Object.assign(en.prototype, {
    set: function(e) {
      this.mask = 1 << e | 0
    },
    enable: function(e) {
      this.mask |= 1 << e | 0
    },
    enableAll: function() {
      this.mask = -1
    },
    toggle: function(e) {
      this.mask ^= 1 << e | 0
    },
    disable: function(e) {
      this.mask &= ~(1 << e | 0)
    },
    disableAll: function() {
      this.mask = 0
    },
    test: function(e) {
      return 0 != (this.mask & e.mask)
    }
  });
  var tn = 0,
    nn = new It,
    rn = new Pt,
    an = new Jt,
    on = new It,
    sn = new It,
    cn = new It,
    ln = new Pt,
    hn = new It(1, 0, 0),
    un = new It(0, 1, 0),
    pn = new It(0, 0, 1),
    dn = {
      type: "added"
    },
    fn = {
      type: "removed"
    };

  function mn() {
    Object.defineProperty(this, "id", {
      value: tn++
    }), this.uuid = Lt.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = mn.DefaultUp.clone();
    var e = new It,
      t = new $t,
      n = new Pt,
      i = new It(1, 1, 1);
    t._onChange((function() {
      n.setFromEuler(t, !1)
    })), n._onChange((function() {
      t.setFromQuaternion(n, void 0, !1)
    })), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new Jt
      },
      normalMatrix: {
        value: new zt
      }
    }), this.matrix = new Jt, this.matrixWorld = new Jt, this.matrixAutoUpdate = mn.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new en, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
  }

  function vn() {
    mn.call(this), this.type = "Scene", this.background = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
      detail: this
    }))
  }
  mn.DefaultUp = new It(0, 1, 0), mn.DefaultMatrixAutoUpdate = !0, mn.prototype = Object.assign(Object.create(Tt.prototype), {
    constructor: mn,
    isObject3D: !0,
    onBeforeRender: function() {},
    onAfterRender: function() {},
    applyMatrix: function(e) {
      this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale)
    },
    applyQuaternion: function(e) {
      return this.quaternion.premultiply(e), this
    },
    setRotationFromAxisAngle: function(e, t) {
      this.quaternion.setFromAxisAngle(e, t)
    },
    setRotationFromEuler: function(e) {
      this.quaternion.setFromEuler(e, !0)
    },
    setRotationFromMatrix: function(e) {
      this.quaternion.setFromRotationMatrix(e)
    },
    setRotationFromQuaternion: function(e) {
      this.quaternion.copy(e)
    },
    rotateOnAxis: function(e, t) {
      return rn.setFromAxisAngle(e, t), this.quaternion.multiply(rn), this
    },
    rotateOnWorldAxis: function(e, t) {
      return rn.setFromAxisAngle(e, t), this.quaternion.premultiply(rn), this
    },
    rotateX: function(e) {
      return this.rotateOnAxis(hn, e)
    },
    rotateY: function(e) {
      return this.rotateOnAxis(un, e)
    },
    rotateZ: function(e) {
      return this.rotateOnAxis(pn, e)
    },
    translateOnAxis: function(e, t) {
      return nn.copy(e).applyQuaternion(this.quaternion), this.position.add(nn.multiplyScalar(t)), this
    },
    translateX: function(e) {
      return this.translateOnAxis(hn, e)
    },
    translateY: function(e) {
      return this.translateOnAxis(un, e)
    },
    translateZ: function(e) {
      return this.translateOnAxis(pn, e)
    },
    localToWorld: function(e) {
      return e.applyMatrix4(this.matrixWorld)
    },
    worldToLocal: function(e) {
      return e.applyMatrix4(an.getInverse(this.matrixWorld))
    },
    lookAt: function(e, t, n) {
      e.isVector3 ? on.copy(e) : on.set(e, t, n);
      var i = this.parent;
      this.updateWorldMatrix(!0, !1), sn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? an.lookAt(sn, on, this.up) : an.lookAt(on, sn, this.up), this.quaternion.setFromRotationMatrix(an), i && (an.extractRotation(i.matrixWorld), rn.setFromRotationMatrix(an), this.quaternion.premultiply(rn.inverse()))
    },
    add: function(e) {
      if (arguments.length > 1) {
        for (var t = 0; t < arguments.length; t++) this.add(arguments[t]);
        return this
      }
      return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (null !== e.parent && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(dn)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this)
    },
    remove: function(e) {
      if (arguments.length > 1) {
        for (var t = 0; t < arguments.length; t++) this.remove(arguments[t]);
        return this
      }
      var n = this.children.indexOf(e);
      return -1 !== n && (e.parent = null, this.children.splice(n, 1), e.dispatchEvent(fn)), this
    },
    attach: function(e) {
      return this.updateWorldMatrix(!0, !1), an.getInverse(this.matrixWorld), null !== e.parent && (e.parent.updateWorldMatrix(!0, !1), an.multiply(e.parent.matrixWorld)), e.applyMatrix(an), e.updateWorldMatrix(!1, !1), this.add(e), this
    },
    getObjectById: function(e) {
      return this.getObjectByProperty("id", e)
    },
    getObjectByName: function(e) {
      return this.getObjectByProperty("name", e)
    },
    getObjectByProperty: function(e, t) {
      if (this[e] === t) return this;
      for (var n = 0, i = this.children.length; n < i; n++) {
        var r = this.children[n].getObjectByProperty(e, t);
        if (void 0 !== r) return r
      }
    },
    getWorldPosition: function(e) {
      return void 0 === e && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), e = new It), this.updateMatrixWorld(!0), e.setFromMatrixPosition(this.matrixWorld)
    },
    getWorldQuaternion: function(e) {
      return void 0 === e && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), e = new Pt), this.updateMatrixWorld(!0), this.matrixWorld.decompose(sn, e, cn), e
    },
    getWorldScale: function(e) {
      return void 0 === e && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), e = new It), this.updateMatrixWorld(!0), this.matrixWorld.decompose(sn, ln, e), e
    },
    getWorldDirection: function(e) {
      void 0 === e && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), e = new It), this.updateMatrixWorld(!0);
      var t = this.matrixWorld.elements;
      return e.set(t[8], t[9], t[10]).normalize()
    },
    raycast: function() {},
    traverse: function(e) {
      e(this);
      for (var t = this.children, n = 0, i = t.length; n < i; n++) t[n].traverse(e)
    },
    traverseVisible: function(e) {
      if (!1 !== this.visible) {
        e(this);
        for (var t = this.children, n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e)
      }
    },
    traverseAncestors: function(e) {
      var t = this.parent;
      null !== t && (e(t), t.traverseAncestors(e))
    },
    updateMatrix: function() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
    },
    updateMatrixWorld: function(e) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
      for (var t = this.children, n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e)
    },
    updateWorldMatrix: function(e, t) {
      var n = this.parent;
      if (!0 === e && null !== n && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === t)
        for (var i = this.children, r = 0, a = i.length; r < a; r++) i[r].updateWorldMatrix(!1, !0)
    },
    toJSON: function(e) {
      var t = void 0 === e || "string" == typeof e,
        n = {};
      t && (e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {}
      }, n.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON"
      });
      var i = {};

      function r(t, n) {
        return void 0 === t[n.uuid] && (t[n.uuid] = n.toJSON(e)), n.uuid
      }
      if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isMesh && this.drawMode !== st && (i.drawMode = this.drawMode), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON()), this.isMesh || this.isLine || this.isPoints) {
        i.geometry = r(e.geometries, this.geometry);
        var a = this.geometry.parameters;
        if (void 0 !== a && void 0 !== a.shapes) {
          var o = a.shapes;
          if (Array.isArray(o))
            for (var s = 0, c = o.length; s < c; s++) {
              var l = o[s];
              r(e.shapes, l)
            } else r(e.shapes, o)
        }
      }
      if (void 0 !== this.material)
        if (Array.isArray(this.material)) {
          var h = [];
          for (s = 0, c = this.material.length; s < c; s++) h.push(r(e.materials, this.material[s]));
          i.material = h
        } else i.material = r(e.materials, this.material);
      if (this.children.length > 0) {
        i.children = [];
        for (s = 0; s < this.children.length; s++) i.children.push(this.children[s].toJSON(e).object)
      }
      if (t) {
        var u = m(e.geometries),
          p = m(e.materials),
          d = m(e.textures),
          f = m(e.images);
        o = m(e.shapes);
        u.length > 0 && (n.geometries = u), p.length > 0 && (n.materials = p), d.length > 0 && (n.textures = d), f.length > 0 && (n.images = f), o.length > 0 && (n.shapes = o)
      }
      return n.object = i, n;

      function m(e) {
        var t = [];
        for (var n in e) {
          var i = e[n];
          delete i.metadata, t.push(i)
        }
        return t
      }
    },
    clone: function(e) {
      return (new this.constructor).copy(this, e)
    },
    copy: function(e, t) {
      if (void 0 === t && (t = !0), this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), !0 === t)
        for (var n = 0; n < e.children.length; n++) {
          var i = e.children[n];
          this.add(i.clone())
        }
      return this
    }
  }), vn.prototype = Object.assign(Object.create(mn.prototype), {
    constructor: vn,
    isScene: !0,
    copy: function(e, t) {
      return mn.prototype.copy.call(this, e, t), null !== e.background && (this.background = e.background.clone()), null !== e.fog && (this.fog = e.fog.clone()), null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this
    },
    toJSON: function(e) {
      var t = mn.prototype.toJSON.call(this, e);
      return null !== this.background && (t.object.background = this.background.toJSON(e)), null !== this.fog && (t.object.fog = this.fog.toJSON()), t
    },
    dispose: function() {
      this.dispatchEvent({
        type: "dispose"
      })
    }
  });
  var gn = [new It, new It, new It, new It, new It, new It, new It, new It],
    yn = new It,
    xn = new It,
    bn = new It,
    wn = new It,
    _n = new It,
    Mn = new It,
    Sn = new It,
    Tn = new It,
    En = new It,
    An = new It,
    Ln = new It;

  function Rn(e, t) {
    this.min = void 0 !== e ? e : new It(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== t ? t : new It(-1 / 0, -1 / 0, -1 / 0)
  }

  function Pn(e, t, n, i, r) {
    var a, o;
    for (a = 0, o = e.length - 3; a <= o; a += 3) {
      Ln.fromArray(e, a);
      var s = r.x * Math.abs(Ln.x) + r.y * Math.abs(Ln.y) + r.z * Math.abs(Ln.z),
        c = t.dot(Ln),
        l = n.dot(Ln),
        h = i.dot(Ln);
      if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > s) return !1
    }
    return !0
  }
  Object.assign(Rn.prototype, {
    isBox3: !0,
    set: function(e, t) {
      return this.min.copy(e), this.max.copy(t), this
    },
    setFromArray: function(e) {
      for (var t = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = e.length; s < c; s += 3) {
        var l = e[s],
          h = e[s + 1],
          u = e[s + 2];
        l < t && (t = l), h < n && (n = h), u < i && (i = u), l > r && (r = l), h > a && (a = h), u > o && (o = u)
      }
      return this.min.set(t, n, i), this.max.set(r, a, o), this
    },
    setFromBufferAttribute: function(e) {
      for (var t = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = e.count; s < c; s++) {
        var l = e.getX(s),
          h = e.getY(s),
          u = e.getZ(s);
        l < t && (t = l), h < n && (n = h), u < i && (i = u), l > r && (r = l), h > a && (a = h), u > o && (o = u)
      }
      return this.min.set(t, n, i), this.max.set(r, a, o), this
    },
    setFromPoints: function(e) {
      this.makeEmpty();
      for (var t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
      return this
    },
    setFromCenterAndSize: function(e, t) {
      var n = yn.copy(t).multiplyScalar(.5);
      return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
    },
    setFromObject: function(e) {
      return this.makeEmpty(), this.expandByObject(e)
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(e) {
      return this.min.copy(e.min), this.max.copy(e.max), this
    },
    makeEmpty: function() {
      return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
    },
    isEmpty: function() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    },
    getCenter: function(e) {
      return void 0 === e && (console.warn("THREE.Box3: .getCenter() target is now required"), e = new It), this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
    },
    getSize: function(e) {
      return void 0 === e && (console.warn("THREE.Box3: .getSize() target is now required"), e = new It), this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
    },
    expandByPoint: function(e) {
      return this.min.min(e), this.max.max(e), this
    },
    expandByVector: function(e) {
      return this.min.sub(e), this.max.add(e), this
    },
    expandByScalar: function(e) {
      return this.min.addScalar(-e), this.max.addScalar(e), this
    },
    expandByObject: function(e) {
      var t, n;
      e.updateWorldMatrix(!1, !1);
      var i = e.geometry;
      if (void 0 !== i)
        if (i.isGeometry) {
          var r = i.vertices;
          for (t = 0, n = r.length; t < n; t++) yn.copy(r[t]), yn.applyMatrix4(e.matrixWorld), this.expandByPoint(yn)
        } else if (i.isBufferGeometry) {
        var a = i.attributes.position;
        if (void 0 !== a)
          for (t = 0, n = a.count; t < n; t++) yn.fromBufferAttribute(a, t).applyMatrix4(e.matrixWorld), this.expandByPoint(yn)
      }
      var o = e.children;
      for (t = 0, n = o.length; t < n; t++) this.expandByObject(o[t]);
      return this
    },
    containsPoint: function(e) {
      return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
    },
    containsBox: function(e) {
      return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
    },
    getParameter: function(e, t) {
      return void 0 === t && (console.warn("THREE.Box3: .getParameter() target is now required"), t = new It), t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
    },
    intersectsBox: function(e) {
      return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
    },
    intersectsSphere: function(e) {
      return this.clampPoint(e.center, yn), yn.distanceToSquared(e.center) <= e.radius * e.radius
    },
    intersectsPlane: function(e) {
      var t, n;
      return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant
    },
    intersectsTriangle: function(e) {
      if (this.isEmpty()) return !1;
      this.getCenter(Tn), En.subVectors(this.max, Tn), xn.subVectors(e.a, Tn), bn.subVectors(e.b, Tn), wn.subVectors(e.c, Tn), _n.subVectors(bn, xn), Mn.subVectors(wn, bn), Sn.subVectors(xn, wn);
      var t = [0, -_n.z, _n.y, 0, -Mn.z, Mn.y, 0, -Sn.z, Sn.y, _n.z, 0, -_n.x, Mn.z, 0, -Mn.x, Sn.z, 0, -Sn.x, -_n.y, _n.x, 0, -Mn.y, Mn.x, 0, -Sn.y, Sn.x, 0];
      return !!Pn(t, xn, bn, wn, En) && (!!Pn(t = [1, 0, 0, 0, 1, 0, 0, 0, 1], xn, bn, wn, En) && (An.crossVectors(_n, Mn), Pn(t = [An.x, An.y, An.z], xn, bn, wn, En)))
    },
    clampPoint: function(e, t) {
      return void 0 === t && (console.warn("THREE.Box3: .clampPoint() target is now required"), t = new It), t.copy(e).clamp(this.min, this.max)
    },
    distanceToPoint: function(e) {
      return yn.copy(e).clamp(this.min, this.max).sub(e).length()
    },
    getBoundingSphere: function(e) {
      return void 0 === e && console.error("THREE.Box3: .getBoundingSphere() target is now required"), this.getCenter(e.center), e.radius = .5 * this.getSize(yn).length(), e
    },
    intersect: function(e) {
      return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this
    },
    union: function(e) {
      return this.min.min(e.min), this.max.max(e.max), this
    },
    applyMatrix4: function(e) {
      return this.isEmpty() ? this : (gn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), gn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), gn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), gn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), gn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), gn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), gn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), gn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(gn), this)
    },
    translate: function(e) {
      return this.min.add(e), this.max.add(e), this
    },
    equals: function(e) {
      return e.min.equals(this.min) && e.max.equals(this.max)
    }
  });
  var Cn = new Rn;

  function On(e, t) {
    this.center = void 0 !== e ? e : new It, this.radius = void 0 !== t ? t : 0
  }
  Object.assign(On.prototype, {
    set: function(e, t) {
      return this.center.copy(e), this.radius = t, this
    },
    setFromPoints: function(e, t) {
      var n = this.center;
      void 0 !== t ? n.copy(t) : Cn.setFromPoints(e).getCenter(n);
      for (var i = 0, r = 0, a = e.length; r < a; r++) i = Math.max(i, n.distanceToSquared(e[r]));
      return this.radius = Math.sqrt(i), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(e) {
      return this.center.copy(e.center), this.radius = e.radius, this
    },
    empty: function() {
      return this.radius <= 0
    },
    containsPoint: function(e) {
      return e.distanceToSquared(this.center) <= this.radius * this.radius
    },
    distanceToPoint: function(e) {
      return e.distanceTo(this.center) - this.radius
    },
    intersectsSphere: function(e) {
      var t = this.radius + e.radius;
      return e.center.distanceToSquared(this.center) <= t * t
    },
    intersectsBox: function(e) {
      return e.intersectsSphere(this)
    },
    intersectsPlane: function(e) {
      return Math.abs(e.distanceToPoint(this.center)) <= this.radius
    },
    clampPoint: function(e, t) {
      var n = this.center.distanceToSquared(e);
      return void 0 === t && (console.warn("THREE.Sphere: .clampPoint() target is now required"), t = new It), t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t
    },
    getBoundingBox: function(e) {
      return void 0 === e && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), e = new Rn), e.set(this.center, this.center), e.expandByScalar(this.radius), e
    },
    applyMatrix4: function(e) {
      return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
    },
    translate: function(e) {
      return this.center.add(e), this
    },
    equals: function(e) {
      return e.center.equals(this.center) && e.radius === this.radius
    }
  });
  var In = new It,
    Nn = new It,
    Dn = new It,
    zn = new It,
    Un = new It,
    Fn = new It,
    Bn = new It;

  function Gn(e, t) {
    this.origin = void 0 !== e ? e : new It, this.direction = void 0 !== t ? t : new It
  }
  Object.assign(Gn.prototype, {
    set: function(e, t) {
      return this.origin.copy(e), this.direction.copy(t), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(e) {
      return this.origin.copy(e.origin), this.direction.copy(e.direction), this
    },
    at: function(e, t) {
      return void 0 === t && (console.warn("THREE.Ray: .at() target is now required"), t = new It), t.copy(this.direction).multiplyScalar(e).add(this.origin)
    },
    lookAt: function(e) {
      return this.direction.copy(e).sub(this.origin).normalize(), this
    },
    recast: function(e) {
      return this.origin.copy(this.at(e, In)), this
    },
    closestPointToPoint: function(e, t) {
      void 0 === t && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), t = new It), t.subVectors(e, this.origin);
      var n = t.dot(this.direction);
      return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin)
    },
    distanceToPoint: function(e) {
      return Math.sqrt(this.distanceSqToPoint(e))
    },
    distanceSqToPoint: function(e) {
      var t = In.subVectors(e, this.origin).dot(this.direction);
      return t < 0 ? this.origin.distanceToSquared(e) : (In.copy(this.direction).multiplyScalar(t).add(this.origin), In.distanceToSquared(e))
    },
    distanceSqToSegment: function(e, t, n, i) {
      Nn.copy(e).add(t).multiplyScalar(.5), Dn.copy(t).sub(e).normalize(), zn.copy(this.origin).sub(Nn);
      var r, a, o, s, c = .5 * e.distanceTo(t),
        l = -this.direction.dot(Dn),
        h = zn.dot(this.direction),
        u = -zn.dot(Dn),
        p = zn.lengthSq(),
        d = Math.abs(1 - l * l);
      if (d > 0)
        if (a = l * h - u, s = c * d, (r = l * u - h) >= 0)
          if (a >= -s)
            if (a <= s) {
              var f = 1 / d;
              o = (r *= f) * (r + l * (a *= f) + 2 * h) + a * (l * r + a + 2 * u) + p
            } else a = c, o = -(r = Math.max(0, -(l * a + h))) * r + a * (a + 2 * u) + p;
      else a = -c, o = -(r = Math.max(0, -(l * a + h))) * r + a * (a + 2 * u) + p;
      else a <= -s ? o = -(r = Math.max(0, -(-l * c + h))) * r + (a = r > 0 ? -c : Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + p : a <= s ? (r = 0, o = (a = Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + p) : o = -(r = Math.max(0, -(l * c + h))) * r + (a = r > 0 ? c : Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + p;
      else a = l > 0 ? -c : c, o = -(r = Math.max(0, -(l * a + h))) * r + a * (a + 2 * u) + p;
      return n && n.copy(this.direction).multiplyScalar(r).add(this.origin), i && i.copy(Dn).multiplyScalar(a).add(Nn), o
    },
    intersectSphere: function(e, t) {
      In.subVectors(e.center, this.origin);
      var n = In.dot(this.direction),
        i = In.dot(In) - n * n,
        r = e.radius * e.radius;
      if (i > r) return null;
      var a = Math.sqrt(r - i),
        o = n - a,
        s = n + a;
      return o < 0 && s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t)
    },
    intersectsSphere: function(e) {
      return this.distanceSqToPoint(e.center) <= e.radius * e.radius
    },
    distanceToPlane: function(e) {
      var t = e.normal.dot(this.direction);
      if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
      var n = -(this.origin.dot(e.normal) + e.constant) / t;
      return n >= 0 ? n : null
    },
    intersectPlane: function(e, t) {
      var n = this.distanceToPlane(e);
      return null === n ? null : this.at(n, t)
    },
    intersectsPlane: function(e) {
      var t = e.distanceToPoint(this.origin);
      return 0 === t || e.normal.dot(this.direction) * t < 0
    },
    intersectBox: function(e, t) {
      var n, i, r, a, o, s, c = 1 / this.direction.x,
        l = 1 / this.direction.y,
        h = 1 / this.direction.z,
        u = this.origin;
      return c >= 0 ? (n = (e.min.x - u.x) * c, i = (e.max.x - u.x) * c) : (n = (e.max.x - u.x) * c, i = (e.min.x - u.x) * c), l >= 0 ? (r = (e.min.y - u.y) * l, a = (e.max.y - u.y) * l) : (r = (e.max.y - u.y) * l, a = (e.min.y - u.y) * l), n > a || r > i ? null : ((r > n || n != n) && (n = r), (a < i || i != i) && (i = a), h >= 0 ? (o = (e.min.z - u.z) * h, s = (e.max.z - u.z) * h) : (o = (e.max.z - u.z) * h, s = (e.min.z - u.z) * h), n > s || o > i ? null : ((o > n || n != n) && (n = o), (s < i || i != i) && (i = s), i < 0 ? null : this.at(n >= 0 ? n : i, t)))
    },
    intersectsBox: function(e) {
      return null !== this.intersectBox(e, In)
    },
    intersectTriangle: function(e, t, n, i, r) {
      Un.subVectors(t, e), Fn.subVectors(n, e), Bn.crossVectors(Un, Fn);
      var a, o = this.direction.dot(Bn);
      if (o > 0) {
        if (i) return null;
        a = 1
      } else {
        if (!(o < 0)) return null;
        a = -1, o = -o
      }
      zn.subVectors(this.origin, e);
      var s = a * this.direction.dot(Fn.crossVectors(zn, Fn));
      if (s < 0) return null;
      var c = a * this.direction.dot(Un.cross(zn));
      if (c < 0) return null;
      if (s + c > o) return null;
      var l = -a * zn.dot(Bn);
      return l < 0 ? null : this.at(l / o, r)
    },
    applyMatrix4: function(e) {
      return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    },
    equals: function(e) {
      return e.origin.equals(this.origin) && e.direction.equals(this.direction)
    }
  });
  var Hn = new It,
    Vn = new It,
    kn = new zt;

  function jn(e, t) {
    this.normal = void 0 !== e ? e : new It(1, 0, 0), this.constant = void 0 !== t ? t : 0
  }
  Object.assign(jn.prototype, {
    isPlane: !0,
    set: function(e, t) {
      return this.normal.copy(e), this.constant = t, this
    },
    setComponents: function(e, t, n, i) {
      return this.normal.set(e, t, n), this.constant = i, this
    },
    setFromNormalAndCoplanarPoint: function(e, t) {
      return this.normal.copy(e), this.constant = -t.dot(this.normal), this
    },
    setFromCoplanarPoints: function(e, t, n) {
      var i = Hn.subVectors(n, t).cross(Vn.subVectors(e, t)).normalize();
      return this.setFromNormalAndCoplanarPoint(i, e), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(e) {
      return this.normal.copy(e.normal), this.constant = e.constant, this
    },
    normalize: function() {
      var e = 1 / this.normal.length();
      return this.normal.multiplyScalar(e), this.constant *= e, this
    },
    negate: function() {
      return this.constant *= -1, this.normal.negate(), this
    },
    distanceToPoint: function(e) {
      return this.normal.dot(e) + this.constant
    },
    distanceToSphere: function(e) {
      return this.distanceToPoint(e.center) - e.radius
    },
    projectPoint: function(e, t) {
      return void 0 === t && (console.warn("THREE.Plane: .projectPoint() target is now required"), t = new It), t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
    },
    intersectLine: function(e, t) {
      void 0 === t && (console.warn("THREE.Plane: .intersectLine() target is now required"), t = new It);
      var n = e.delta(Hn),
        i = this.normal.dot(n);
      if (0 === i) return 0 === this.distanceToPoint(e.start) ? t.copy(e.start) : void 0;
      var r = -(e.start.dot(this.normal) + this.constant) / i;
      return r < 0 || r > 1 ? void 0 : t.copy(n).multiplyScalar(r).add(e.start)
    },
    intersectsLine: function(e) {
      var t = this.distanceToPoint(e.start),
        n = this.distanceToPoint(e.end);
      return t < 0 && n > 0 || n < 0 && t > 0
    },
    intersectsBox: function(e) {
      return e.intersectsPlane(this)
    },
    intersectsSphere: function(e) {
      return e.intersectsPlane(this)
    },
    coplanarPoint: function(e) {
      return void 0 === e && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), e = new It), e.copy(this.normal).multiplyScalar(-this.constant)
    },
    applyMatrix4: function(e, t) {
      var n = t || kn.getNormalMatrix(e),
        i = this.coplanarPoint(Hn).applyMatrix4(e),
        r = this.normal.applyMatrix3(n).normalize();
      return this.constant = -i.dot(r), this
    },
    translate: function(e) {
      return this.constant -= e.dot(this.normal), this
    },
    equals: function(e) {
      return e.normal.equals(this.normal) && e.constant === this.constant
    }
  });
  var Wn = new It,
    qn = new It,
    Xn = new It,
    Yn = new It,
    Zn = new It,
    Jn = new It,
    Kn = new It,
    Qn = new It,
    $n = new It,
    ei = new It;

  function ti(e, t, n) {
    this.a = void 0 !== e ? e : new It, this.b = void 0 !== t ? t : new It, this.c = void 0 !== n ? n : new It
  }
  Object.assign(ti, {
    getNormal: function(e, t, n, i) {
      void 0 === i && (console.warn("THREE.Triangle: .getNormal() target is now required"), i = new It), i.subVectors(n, t), Wn.subVectors(e, t), i.cross(Wn);
      var r = i.lengthSq();
      return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0)
    },
    getBarycoord: function(e, t, n, i, r) {
      Wn.subVectors(i, t), qn.subVectors(n, t), Xn.subVectors(e, t);
      var a = Wn.dot(Wn),
        o = Wn.dot(qn),
        s = Wn.dot(Xn),
        c = qn.dot(qn),
        l = qn.dot(Xn),
        h = a * c - o * o;
      if (void 0 === r && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), r = new It), 0 === h) return r.set(-2, -1, -1);
      var u = 1 / h,
        p = (c * s - o * l) * u,
        d = (a * l - o * s) * u;
      return r.set(1 - p - d, d, p)
    },
    containsPoint: function(e, t, n, i) {
      return ti.getBarycoord(e, t, n, i, Yn), Yn.x >= 0 && Yn.y >= 0 && Yn.x + Yn.y <= 1
    },
    getUV: function(e, t, n, i, r, a, o, s) {
      return this.getBarycoord(e, t, n, i, Yn), s.set(0, 0), s.addScaledVector(r, Yn.x), s.addScaledVector(a, Yn.y), s.addScaledVector(o, Yn.z), s
    },
    isFrontFacing: function(e, t, n, i) {
      return Wn.subVectors(n, t), qn.subVectors(e, t), Wn.cross(qn).dot(i) < 0
    }
  }), Object.assign(ti.prototype, {
    set: function(e, t, n) {
      return this.a.copy(e), this.b.copy(t), this.c.copy(n), this
    },
    setFromPointsAndIndices: function(e, t, n, i) {
      return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(e) {
      return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
    },
    getArea: function() {
      return Wn.subVectors(this.c, this.b), qn.subVectors(this.a, this.b), .5 * Wn.cross(qn).length()
    },
    getMidpoint: function(e) {
      return void 0 === e && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), e = new It), e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    },
    getNormal: function(e) {
      return ti.getNormal(this.a, this.b, this.c, e)
    },
    getPlane: function(e) {
      return void 0 === e && (console.warn("THREE.Triangle: .getPlane() target is now required"), e = new jn), e.setFromCoplanarPoints(this.a, this.b, this.c)
    },
    getBarycoord: function(e, t) {
      return ti.getBarycoord(e, this.a, this.b, this.c, t)
    },
    getUV: function(e, t, n, i, r) {
      return ti.getUV(e, this.a, this.b, this.c, t, n, i, r)
    },
    containsPoint: function(e) {
      return ti.containsPoint(e, this.a, this.b, this.c)
    },
    isFrontFacing: function(e) {
      return ti.isFrontFacing(this.a, this.b, this.c, e)
    },
    intersectsBox: function(e) {
      return e.intersectsTriangle(this)
    },
    closestPointToPoint: function(e, t) {
      void 0 === t && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), t = new It);
      var n, i, r = this.a,
        a = this.b,
        o = this.c;
      Zn.subVectors(a, r), Jn.subVectors(o, r), Qn.subVectors(e, r);
      var s = Zn.dot(Qn),
        c = Jn.dot(Qn);
      if (s <= 0 && c <= 0) return t.copy(r);
      $n.subVectors(e, a);
      var l = Zn.dot($n),
        h = Jn.dot($n);
      if (l >= 0 && h <= l) return t.copy(a);
      var u = s * h - l * c;
      if (u <= 0 && s >= 0 && l <= 0) return n = s / (s - l), t.copy(r).addScaledVector(Zn, n);
      ei.subVectors(e, o);
      var p = Zn.dot(ei),
        d = Jn.dot(ei);
      if (d >= 0 && p <= d) return t.copy(o);
      var f = p * c - s * d;
      if (f <= 0 && c >= 0 && d <= 0) return i = c / (c - d), t.copy(r).addScaledVector(Jn, i);
      var m = l * d - p * h;
      if (m <= 0 && h - l >= 0 && p - d >= 0) return Kn.subVectors(o, a), i = (h - l) / (h - l + (p - d)), t.copy(a).addScaledVector(Kn, i);
      var v = 1 / (m + f + u);
      return n = f * v, i = u * v, t.copy(r).addScaledVector(Zn, n).addScaledVector(Jn, i)
    },
    equals: function(e) {
      return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
    }
  });
  var ni = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074
    },
    ii = {
      h: 0,
      s: 0,
      l: 0
    },
    ri = {
      h: 0,
      s: 0,
      l: 0
    };

  function ai(e, t, n) {
    return void 0 === t && void 0 === n ? this.set(e) : this.setRGB(e, t, n)
  }

  function oi(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + 6 * (t - e) * (2 / 3 - n) : e
  }

  function si(e) {
    return e < .04045 ? .0773993808 * e : Math.pow(.9478672986 * e + .0521327014, 2.4)
  }

  function ci(e) {
    return e < .0031308 ? 12.92 * e : 1.055 * Math.pow(e, .41666) - .055
  }

  function li(e, t, n, i, r, a) {
    this.a = e, this.b = t, this.c = n, this.normal = i && i.isVector3 ? i : new It, this.vertexNormals = Array.isArray(i) ? i : [], this.color = r && r.isColor ? r : new ai, this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = void 0 !== a ? a : 0
  }
  Object.assign(ai.prototype, {
    isColor: !0,
    r: 1,
    g: 1,
    b: 1,
    set: function(e) {
      return e && e.isColor ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e), this
    },
    setScalar: function(e) {
      return this.r = e, this.g = e, this.b = e, this
    },
    setHex: function(e) {
      return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, this
    },
    setRGB: function(e, t, n) {
      return this.r = e, this.g = t, this.b = n, this
    },
    setHSL: function(e, t, n) {
      if (e = Lt.euclideanModulo(e, 1), t = Lt.clamp(t, 0, 1), n = Lt.clamp(n, 0, 1), 0 === t) this.r = this.g = this.b = n;
      else {
        var i = n <= .5 ? n * (1 + t) : n + t - n * t,
          r = 2 * n - i;
        this.r = oi(r, i, e + 1 / 3), this.g = oi(r, i, e), this.b = oi(r, i, e - 1 / 3)
      }
      return this
    },
    setStyle: function(e) {
      function t(t) {
        void 0 !== t && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
      }
      var n;
      if (n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
        var i, r = n[1],
          a = n[2];
        switch (r) {
          case "rgb":
          case "rgba":
            if (i = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(i[1], 10)) / 255, this.g = Math.min(255, parseInt(i[2], 10)) / 255, this.b = Math.min(255, parseInt(i[3], 10)) / 255, t(i[5]), this;
            if (i = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(i[1], 10)) / 100, this.g = Math.min(100, parseInt(i[2], 10)) / 100, this.b = Math.min(100, parseInt(i[3], 10)) / 100, t(i[5]), this;
            break;
          case "hsl":
          case "hsla":
            if (i = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
              var o = parseFloat(i[1]) / 360,
                s = parseInt(i[2], 10) / 100,
                c = parseInt(i[3], 10) / 100;
              return t(i[5]), this.setHSL(o, s, c)
            }
        }
      } else if (n = /^\#([A-Fa-f0-9]+)$/.exec(e)) {
        var l = n[1],
          h = l.length;
        if (3 === h) return this.r = parseInt(l.charAt(0) + l.charAt(0), 16) / 255, this.g = parseInt(l.charAt(1) + l.charAt(1), 16) / 255, this.b = parseInt(l.charAt(2) + l.charAt(2), 16) / 255, this;
        if (6 === h) return this.r = parseInt(l.charAt(0) + l.charAt(1), 16) / 255, this.g = parseInt(l.charAt(2) + l.charAt(3), 16) / 255, this.b = parseInt(l.charAt(4) + l.charAt(5), 16) / 255, this
      }
      return e && e.length > 0 ? this.setColorName(e) : this
    },
    setColorName: function(e) {
      var t = ni[e];
      return void 0 !== t ? this.setHex(t) : console.warn("THREE.Color: Unknown color " + e), this
    },
    clone: function() {
      return new this.constructor(this.r, this.g, this.b)
    },
    copy: function(e) {
      return this.r = e.r, this.g = e.g, this.b = e.b, this
    },
    copyGammaToLinear: function(e, t) {
      return void 0 === t && (t = 2), this.r = Math.pow(e.r, t), this.g = Math.pow(e.g, t), this.b = Math.pow(e.b, t), this
    },
    copyLinearToGamma: function(e, t) {
      void 0 === t && (t = 2);
      var n = t > 0 ? 1 / t : 1;
      return this.r = Math.pow(e.r, n), this.g = Math.pow(e.g, n), this.b = Math.pow(e.b, n), this
    },
    convertGammaToLinear: function(e) {
      return this.copyGammaToLinear(this, e), this
    },
    convertLinearToGamma: function(e) {
      return this.copyLinearToGamma(this, e), this
    },
    copySRGBToLinear: function(e) {
      return this.r = si(e.r), this.g = si(e.g), this.b = si(e.b), this
    },
    copyLinearToSRGB: function(e) {
      return this.r = ci(e.r), this.g = ci(e.g), this.b = ci(e.b), this
    },
    convertSRGBToLinear: function() {
      return this.copySRGBToLinear(this), this
    },
    convertLinearToSRGB: function() {
      return this.copyLinearToSRGB(this), this
    },
    getHex: function() {
      return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
    },
    getHexString: function() {
      return ("000000" + this.getHex().toString(16)).slice(-6)
    },
    getHSL: function(e) {
      void 0 === e && (console.warn("THREE.Color: .getHSL() target is now required"), e = {
        h: 0,
        s: 0,
        l: 0
      });
      var t, n, i = this.r,
        r = this.g,
        a = this.b,
        o = Math.max(i, r, a),
        s = Math.min(i, r, a),
        c = (s + o) / 2;
      if (s === o) t = 0, n = 0;
      else {
        var l = o - s;
        switch (n = c <= .5 ? l / (o + s) : l / (2 - o - s), o) {
          case i:
            t = (r - a) / l + (r < a ? 6 : 0);
            break;
          case r:
            t = (a - i) / l + 2;
            break;
          case a:
            t = (i - r) / l + 4
        }
        t /= 6
      }
      return e.h = t, e.s = n, e.l = c, e
    },
    getStyle: function() {
      return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
    },
    offsetHSL: function(e, t, n) {
      return this.getHSL(ii), ii.h += e, ii.s += t, ii.l += n, this.setHSL(ii.h, ii.s, ii.l), this
    },
    add: function(e) {
      return this.r += e.r, this.g += e.g, this.b += e.b, this
    },
    addColors: function(e, t) {
      return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
    },
    addScalar: function(e) {
      return this.r += e, this.g += e, this.b += e, this
    },
    sub: function(e) {
      return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this
    },
    multiply: function(e) {
      return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
    },
    multiplyScalar: function(e) {
      return this.r *= e, this.g *= e, this.b *= e, this
    },
    lerp: function(e, t) {
      return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
    },
    lerpHSL: function(e, t) {
      this.getHSL(ii), e.getHSL(ri);
      var n = Lt.lerp(ii.h, ri.h, t),
        i = Lt.lerp(ii.s, ri.s, t),
        r = Lt.lerp(ii.l, ri.l, t);
      return this.setHSL(n, i, r), this
    },
    equals: function(e) {
      return e.r === this.r && e.g === this.g && e.b === this.b
    },
    fromArray: function(e, t) {
      return void 0 === t && (t = 0), this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this
    },
    toArray: function(e, t) {
      return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e
    },
    toJSON: function() {
      return this.getHex()
    }
  }), ai.NAMES = ni, Object.assign(li.prototype, {
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(e) {
      this.a = e.a, this.b = e.b, this.c = e.c, this.normal.copy(e.normal), this.color.copy(e.color), this.materialIndex = e.materialIndex;
      for (var t = 0, n = e.vertexNormals.length; t < n; t++) this.vertexNormals[t] = e.vertexNormals[t].clone();
      for (t = 0, n = e.vertexColors.length; t < n; t++) this.vertexColors[t] = e.vertexColors[t].clone();
      return this
    }
  });
  var hi = 0;

  function ui() {
    Object.defineProperty(this, "id", {
      value: hi++
    }), this.uuid = Lt.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.blending = v, this.side = l, this.flatShading = !1, this.vertexTangents = !1, this.vertexColors = p, this.opacity = 1, this.transparent = !1, this.blendSrc = P, this.blendDst = C, this.blendEquation = w, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = G, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Mt, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = _t, this.stencilZFail = _t, this.stencilZPass = _t, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.needsUpdate = !0
  }

  function pi(e) {
    ui.call(this), this.type = "MeshBasicMaterial", this.color = new ai(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = W, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.setValues(e)
  }

  function di(e, t, n) {
    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.name = "", this.array = e, this.itemSize = t, this.count = void 0 !== e ? e.length / t : 0, this.normalized = !0 === n, this.usage = St, this.updateRange = {
      offset: 0,
      count: -1
    }, this.version = 0
  }

  function fi(e, t, n) {
    di.call(this, new Int8Array(e), t, n)
  }

  function mi(e, t, n) {
    di.call(this, new Uint8Array(e), t, n)
  }

  function vi(e, t, n) {
    di.call(this, new Uint8ClampedArray(e), t, n)
  }

  function gi(e, t, n) {
    di.call(this, new Int16Array(e), t, n)
  }

  function yi(e, t, n) {
    di.call(this, new Uint16Array(e), t, n)
  }

  function xi(e, t, n) {
    di.call(this, new Int32Array(e), t, n)
  }

  function bi(e, t, n) {
    di.call(this, new Uint32Array(e), t, n)
  }

  function wi(e, t, n) {
    di.call(this, new Float32Array(e), t, n)
  }

  function _i(e, t, n) {
    di.call(this, new Float64Array(e), t, n)
  }

  function Mi() {
    this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
  }

  function Si(e) {
    if (0 === e.length) return -1 / 0;
    for (var t = e[0], n = 1, i = e.length; n < i; ++n) e[n] > t && (t = e[n]);
    return t
  }
  ui.prototype = Object.assign(Object.create(Tt.prototype), {
    constructor: ui,
    isMaterial: !0,
    onBeforeCompile: function() {},
    setValues: function(e) {
      if (void 0 !== e)
        for (var t in e) {
          var n = e[t];
          if (void 0 !== n)
            if ("shading" !== t) {
              var i = this[t];
              void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n : console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.")
            } else console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === n;
          else console.warn("THREE.Material: '" + t + "' parameter is undefined.")
        }
    },
    toJSON: function(e) {
      var t = void 0 === e || "string" == typeof e;
      t && (e = {
        textures: {},
        images: {}
      });
      var n = {
        metadata: {
          version: 4.5,
          type: "Material",
          generator: "Material.toJSON"
        }
      };

      function i(e) {
        var t = [];
        for (var n in e) {
          var i = e[n];
          delete i.metadata, t.push(i)
        }
        return t
      }
      if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, n.reflectivity = this.reflectivity, n.refractionRatio = this.refractionRatio, void 0 !== this.combine && (n.combine = this.combine), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), void 0 !== this.size && (n.size = this.size), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== v && (n.blending = this.blending), !0 === this.flatShading && (n.flatShading = this.flatShading), this.side !== l && (n.side = this.side), this.vertexColors !== p && (n.vertexColors = this.vertexColors), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (n.morphTargets = !0), !0 === this.morphNormals && (n.morphNormals = !0), !0 === this.skinning && (n.skinning = !0), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), t) {
        var r = i(e.textures),
          a = i(e.images);
        r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a)
      }
      return n
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(e) {
      this.name = e.name, this.fog = e.fog, this.blending = e.blending, this.side = e.side, this.flatShading = e.flatShading, this.vertexTangents = e.vertexTangents, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
      var t = e.clippingPlanes,
        n = null;
      if (null !== t) {
        var i = t.length;
        n = new Array(i);
        for (var r = 0; r !== i; ++r) n[r] = t[r].clone()
      }
      return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this
    },
    dispose: function() {
      this.dispatchEvent({
        type: "dispose"
      })
    }
  }), pi.prototype = Object.create(ui.prototype), pi.prototype.constructor = pi, pi.prototype.isMeshBasicMaterial = !0, pi.prototype.copy = function(e) {
    return ui.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this
  }, Object.defineProperty(di.prototype, "needsUpdate", {
    set: function(e) {
      !0 === e && this.version++
    }
  }), Object.assign(di.prototype, {
    isBufferAttribute: !0,
    onUploadCallback: function() {},
    setUsage: function(e) {
      return this.usage = e, this
    },
    copy: function(e) {
      return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this
    },
    copyAt: function(e, t, n) {
      e *= this.itemSize, n *= t.itemSize;
      for (var i = 0, r = this.itemSize; i < r; i++) this.array[e + i] = t.array[n + i];
      return this
    },
    copyArray: function(e) {
      return this.array.set(e), this
    },
    copyColorsArray: function(e) {
      for (var t = this.array, n = 0, i = 0, r = e.length; i < r; i++) {
        var a = e[i];
        void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), a = new ai), t[n++] = a.r, t[n++] = a.g, t[n++] = a.b
      }
      return this
    },
    copyVector2sArray: function(e) {
      for (var t = this.array, n = 0, i = 0, r = e.length; i < r; i++) {
        var a = e[i];
        void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), a = new Rt), t[n++] = a.x, t[n++] = a.y
      }
      return this
    },
    copyVector3sArray: function(e) {
      for (var t = this.array, n = 0, i = 0, r = e.length; i < r; i++) {
        var a = e[i];
        void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), a = new It), t[n++] = a.x, t[n++] = a.y, t[n++] = a.z
      }
      return this
    },
    copyVector4sArray: function(e) {
      for (var t = this.array, n = 0, i = 0, r = e.length; i < r; i++) {
        var a = e[i];
        void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), a = new Gt), t[n++] = a.x, t[n++] = a.y, t[n++] = a.z, t[n++] = a.w
      }
      return this
    },
    set: function(e, t) {
      return void 0 === t && (t = 0), this.array.set(e, t), this
    },
    getX: function(e) {
      return this.array[e * this.itemSize]
    },
    setX: function(e, t) {
      return this.array[e * this.itemSize] = t, this
    },
    getY: function(e) {
      return this.array[e * this.itemSize + 1]
    },
    setY: function(e, t) {
      return this.array[e * this.itemSize + 1] = t, this
    },
    getZ: function(e) {
      return this.array[e * this.itemSize + 2]
    },
    setZ: function(e, t) {
      return this.array[e * this.itemSize + 2] = t, this
    },
    getW: function(e) {
      return this.array[e * this.itemSize + 3]
    },
    setW: function(e, t) {
      return this.array[e * this.itemSize + 3] = t, this
    },
    setXY: function(e, t, n) {
      return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this
    },
    setXYZ: function(e, t, n, i) {
      return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this
    },
    setXYZW: function(e, t, n, i, r) {
      return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this
    },
    onUpload: function(e) {
      return this.onUploadCallback = e, this
    },
    clone: function() {
      return new this.constructor(this.array, this.itemSize).copy(this)
    },
    toJSON: function() {
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.prototype.slice.call(this.array),
        normalized: this.normalized
      }
    }
  }), fi.prototype = Object.create(di.prototype), fi.prototype.constructor = fi, mi.prototype = Object.create(di.prototype), mi.prototype.constructor = mi, vi.prototype = Object.create(di.prototype), vi.prototype.constructor = vi, gi.prototype = Object.create(di.prototype), gi.prototype.constructor = gi, yi.prototype = Object.create(di.prototype), yi.prototype.constructor = yi, xi.prototype = Object.create(di.prototype), xi.prototype.constructor = xi, bi.prototype = Object.create(di.prototype), bi.prototype.constructor = bi, wi.prototype = Object.create(di.prototype), wi.prototype.constructor = wi, _i.prototype = Object.create(di.prototype), _i.prototype.constructor = _i, Object.assign(Mi.prototype, {
    computeGroups: function(e) {
      for (var t, n = [], i = void 0, r = e.faces, a = 0; a < r.length; a++) {
        var o = r[a];
        o.materialIndex !== i && (i = o.materialIndex, void 0 !== t && (t.count = 3 * a - t.start, n.push(t)), t = {
          start: 3 * a,
          materialIndex: i
        })
      }
      void 0 !== t && (t.count = 3 * a - t.start, n.push(t)), this.groups = n
    },
    fromGeometry: function(e) {
      var t, n = e.faces,
        i = e.vertices,
        r = e.faceVertexUvs,
        a = r[0] && r[0].length > 0,
        o = r[1] && r[1].length > 0,
        s = e.morphTargets,
        c = s.length;
      if (c > 0) {
        t = [];
        for (var l = 0; l < c; l++) t[l] = {
          name: s[l].name,
          data: []
        };
        this.morphTargets.position = t
      }
      var h, u = e.morphNormals,
        p = u.length;
      if (p > 0) {
        h = [];
        for (l = 0; l < p; l++) h[l] = {
          name: u[l].name,
          data: []
        };
        this.morphTargets.normal = h
      }
      var d = e.skinIndices,
        f = e.skinWeights,
        m = d.length === i.length,
        v = f.length === i.length;
      i.length > 0 && 0 === n.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported.");
      for (l = 0; l < n.length; l++) {
        var g = n[l];
        this.vertices.push(i[g.a], i[g.b], i[g.c]);
        var y = g.vertexNormals;
        if (3 === y.length) this.normals.push(y[0], y[1], y[2]);
        else {
          var x = g.normal;
          this.normals.push(x, x, x)
        }
        var b, w = g.vertexColors;
        if (3 === w.length) this.colors.push(w[0], w[1], w[2]);
        else {
          var _ = g.color;
          this.colors.push(_, _, _)
        }
        if (!0 === a) void 0 !== (b = r[0][l]) ? this.uvs.push(b[0], b[1], b[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", l), this.uvs.push(new Rt, new Rt, new Rt));
        if (!0 === o) void 0 !== (b = r[1][l]) ? this.uvs2.push(b[0], b[1], b[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", l), this.uvs2.push(new Rt, new Rt, new Rt));
        for (var M = 0; M < c; M++) {
          var S = s[M].vertices;
          t[M].data.push(S[g.a], S[g.b], S[g.c])
        }
        for (M = 0; M < p; M++) {
          var T = u[M].vertexNormals[l];
          h[M].data.push(T.a, T.b, T.c)
        }
        m && this.skinIndices.push(d[g.a], d[g.b], d[g.c]), v && this.skinWeights.push(f[g.a], f[g.b], f[g.c])
      }
      return this.computeGroups(e), this.verticesNeedUpdate = e.verticesNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), this
    }
  });
  var Ti = 1,
    Ei = new Jt,
    Ai = new mn,
    Li = new It,
    Ri = new Rn,
    Pi = new Rn,
    Ci = new It;

  function Oi() {
    Object.defineProperty(this, "id", {
      value: Ti += 2
    }), this.uuid = Lt.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
      start: 0,
      count: 1 / 0
    }, this.userData = {}
  }
  Oi.prototype = Object.assign(Object.create(Tt.prototype), {
    constructor: Oi,
    isBufferGeometry: !0,
    getIndex: function() {
      return this.index
    },
    setIndex: function(e) {
      Array.isArray(e) ? this.index = new(Si(e) > 65535 ? bi : yi)(e, 1) : this.index = e
    },
    getAttribute: function(e) {
      return this.attributes[e]
    },
    setAttribute: function(e, t) {
      return this.attributes[e] = t, this
    },
    deleteAttribute: function(e) {
      return delete this.attributes[e], this
    },
    addGroup: function(e, t, n) {
      this.groups.push({
        start: e,
        count: t,
        materialIndex: void 0 !== n ? n : 0
      })
    },
    clearGroups: function() {
      this.groups = []
    },
    setDrawRange: function(e, t) {
      this.drawRange.start = e, this.drawRange.count = t
    },
    applyMatrix: function(e) {
      var t = this.attributes.position;
      void 0 !== t && (e.applyToBufferAttribute(t), t.needsUpdate = !0);
      var n = this.attributes.normal;
      void 0 !== n && ((new zt).getNormalMatrix(e).applyToBufferAttribute(n), n.needsUpdate = !0);
      var i = this.attributes.tangent;
      void 0 !== i && ((new zt).getNormalMatrix(e).applyToBufferAttribute(i), i.needsUpdate = !0);
      return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
    },
    rotateX: function(e) {
      return Ei.makeRotationX(e), this.applyMatrix(Ei), this
    },
    rotateY: function(e) {
      return Ei.makeRotationY(e), this.applyMatrix(Ei), this
    },
    rotateZ: function(e) {
      return Ei.makeRotationZ(e), this.applyMatrix(Ei), this
    },
    translate: function(e, t, n) {
      return Ei.makeTranslation(e, t, n), this.applyMatrix(Ei), this
    },
    scale: function(e, t, n) {
      return Ei.makeScale(e, t, n), this.applyMatrix(Ei), this
    },
    lookAt: function(e) {
      return Ai.lookAt(e), Ai.updateMatrix(), this.applyMatrix(Ai.matrix), this
    },
    center: function() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(Li).negate(), this.translate(Li.x, Li.y, Li.z), this
    },
    setFromObject: function(e) {
      var t = e.geometry;
      if (e.isPoints || e.isLine) {
        var n = new wi(3 * t.vertices.length, 3),
          i = new wi(3 * t.colors.length, 3);
        if (this.setAttribute("position", n.copyVector3sArray(t.vertices)), this.setAttribute("color", i.copyColorsArray(t.colors)), t.lineDistances && t.lineDistances.length === t.vertices.length) {
          var r = new wi(t.lineDistances.length, 1);
          this.setAttribute("lineDistance", r.copyArray(t.lineDistances))
        }
        null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone())
      } else e.isMesh && t && t.isGeometry && this.fromGeometry(t);
      return this
    },
    setFromPoints: function(e) {
      for (var t = [], n = 0, i = e.length; n < i; n++) {
        var r = e[n];
        t.push(r.x, r.y, r.z || 0)
      }
      return this.setAttribute("position", new wi(t, 3)), this
    },
    updateFromObject: function(e) {
      var t, n = e.geometry;
      if (e.isMesh) {
        var i = n.__directGeometry;
        if (!0 === n.elementsNeedUpdate && (i = void 0, n.elementsNeedUpdate = !1), void 0 === i) return this.fromGeometry(n);
        i.verticesNeedUpdate = n.verticesNeedUpdate, i.normalsNeedUpdate = n.normalsNeedUpdate, i.colorsNeedUpdate = n.colorsNeedUpdate, i.uvsNeedUpdate = n.uvsNeedUpdate, i.groupsNeedUpdate = n.groupsNeedUpdate, n.verticesNeedUpdate = !1, n.normalsNeedUpdate = !1, n.colorsNeedUpdate = !1, n.uvsNeedUpdate = !1, n.groupsNeedUpdate = !1, n = i
      }
      return !0 === n.verticesNeedUpdate && (void 0 !== (t = this.attributes.position) && (t.copyVector3sArray(n.vertices), t.needsUpdate = !0), n.verticesNeedUpdate = !1), !0 === n.normalsNeedUpdate && (void 0 !== (t = this.attributes.normal) && (t.copyVector3sArray(n.normals), t.needsUpdate = !0), n.normalsNeedUpdate = !1), !0 === n.colorsNeedUpdate && (void 0 !== (t = this.attributes.color) && (t.copyColorsArray(n.colors), t.needsUpdate = !0), n.colorsNeedUpdate = !1), n.uvsNeedUpdate && (void 0 !== (t = this.attributes.uv) && (t.copyVector2sArray(n.uvs), t.needsUpdate = !0), n.uvsNeedUpdate = !1), n.lineDistancesNeedUpdate && (void 0 !== (t = this.attributes.lineDistance) && (t.copyArray(n.lineDistances), t.needsUpdate = !0), n.lineDistancesNeedUpdate = !1), n.groupsNeedUpdate && (n.computeGroups(e.geometry), this.groups = n.groups, n.groupsNeedUpdate = !1), this
    },
    fromGeometry: function(e) {
      return e.__directGeometry = (new Mi).fromGeometry(e), this.fromDirectGeometry(e.__directGeometry)
    },
    fromDirectGeometry: function(e) {
      var t = new Float32Array(3 * e.vertices.length);
      if (this.setAttribute("position", new di(t, 3).copyVector3sArray(e.vertices)), e.normals.length > 0) {
        var n = new Float32Array(3 * e.normals.length);
        this.setAttribute("normal", new di(n, 3).copyVector3sArray(e.normals))
      }
      if (e.colors.length > 0) {
        var i = new Float32Array(3 * e.colors.length);
        this.setAttribute("color", new di(i, 3).copyColorsArray(e.colors))
      }
      if (e.uvs.length > 0) {
        var r = new Float32Array(2 * e.uvs.length);
        this.setAttribute("uv", new di(r, 2).copyVector2sArray(e.uvs))
      }
      if (e.uvs2.length > 0) {
        var a = new Float32Array(2 * e.uvs2.length);
        this.setAttribute("uv2", new di(a, 2).copyVector2sArray(e.uvs2))
      }
      for (var o in this.groups = e.groups, e.morphTargets) {
        for (var s = [], c = e.morphTargets[o], l = 0, h = c.length; l < h; l++) {
          var u = c[l],
            p = new wi(3 * u.data.length, 3);
          p.name = u.name, s.push(p.copyVector3sArray(u.data))
        }
        this.morphAttributes[o] = s
      }
      if (e.skinIndices.length > 0) {
        var d = new wi(4 * e.skinIndices.length, 4);
        this.setAttribute("skinIndex", d.copyVector4sArray(e.skinIndices))
      }
      if (e.skinWeights.length > 0) {
        var f = new wi(4 * e.skinWeights.length, 4);
        this.setAttribute("skinWeight", f.copyVector4sArray(e.skinWeights))
      }
      return null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), this
    },
    computeBoundingBox: function() {
      null === this.boundingBox && (this.boundingBox = new Rn);
      var e = this.attributes.position,
        t = this.morphAttributes.position;
      if (void 0 !== e) {
        if (this.boundingBox.setFromBufferAttribute(e), t)
          for (var n = 0, i = t.length; n < i; n++) {
            var r = t[n];
            Ri.setFromBufferAttribute(r), this.boundingBox.expandByPoint(Ri.min), this.boundingBox.expandByPoint(Ri.max)
          }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
    },
    computeBoundingSphere: function() {
      null === this.boundingSphere && (this.boundingSphere = new On);
      var e = this.attributes.position,
        t = this.morphAttributes.position;
      if (e) {
        var n = this.boundingSphere.center;
        if (Ri.setFromBufferAttribute(e), t)
          for (var i = 0, r = t.length; i < r; i++) {
            var a = t[i];
            Pi.setFromBufferAttribute(a), Ri.expandByPoint(Pi.min), Ri.expandByPoint(Pi.max)
          }
        Ri.getCenter(n);
        var o = 0;
        for (i = 0, r = e.count; i < r; i++) Ci.fromBufferAttribute(e, i), o = Math.max(o, n.distanceToSquared(Ci));
        if (t)
          for (i = 0, r = t.length; i < r; i++)
            for (var s = 0, c = (a = t[i]).count; s < c; s++) Ci.fromBufferAttribute(a, s), o = Math.max(o, n.distanceToSquared(Ci));
        this.boundingSphere.radius = Math.sqrt(o), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
      }
    },
    computeFaceNormals: function() {},
    computeVertexNormals: function() {
      var e = this.index,
        t = this.attributes;
      if (t.position) {
        var n = t.position.array;
        if (void 0 === t.normal) this.setAttribute("normal", new di(new Float32Array(n.length), 3));
        else
          for (var i = t.normal.array, r = 0, a = i.length; r < a; r++) i[r] = 0;
        var o, s, c, l = t.normal.array,
          h = new It,
          u = new It,
          p = new It,
          d = new It,
          f = new It;
        if (e) {
          var m = e.array;
          for (r = 0, a = e.count; r < a; r += 3) o = 3 * m[r + 0], s = 3 * m[r + 1], c = 3 * m[r + 2], h.fromArray(n, o), u.fromArray(n, s), p.fromArray(n, c), d.subVectors(p, u), f.subVectors(h, u), d.cross(f), l[o] += d.x, l[o + 1] += d.y, l[o + 2] += d.z, l[s] += d.x, l[s + 1] += d.y, l[s + 2] += d.z, l[c] += d.x, l[c + 1] += d.y, l[c + 2] += d.z
        } else
          for (r = 0, a = n.length; r < a; r += 9) h.fromArray(n, r), u.fromArray(n, r + 3), p.fromArray(n, r + 6), d.subVectors(p, u), f.subVectors(h, u), d.cross(f), l[r] = d.x, l[r + 1] = d.y, l[r + 2] = d.z, l[r + 3] = d.x, l[r + 4] = d.y, l[r + 5] = d.z, l[r + 6] = d.x, l[r + 7] = d.y, l[r + 8] = d.z;
        this.normalizeNormals(), t.normal.needsUpdate = !0
      }
    },
    merge: function(e, t) {
      if (e && e.isBufferGeometry) {
        void 0 === t && (t = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
        var n = this.attributes;
        for (var i in n)
          if (void 0 !== e.attributes[i])
            for (var r = n[i].array, a = e.attributes[i], o = a.array, s = a.itemSize * t, c = Math.min(o.length, r.length - s), l = 0, h = s; l < c; l++, h++) r[h] = o[l];
        return this
      }
      console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e)
    },
    normalizeNormals: function() {
      for (var e = this.attributes.normal, t = 0, n = e.count; t < n; t++) Ci.x = e.getX(t), Ci.y = e.getY(t), Ci.z = e.getZ(t), Ci.normalize(), e.setXYZ(t, Ci.x, Ci.y, Ci.z)
    },
    toNonIndexed: function() {
      function e(e, t) {
        for (var n = e.array, i = e.itemSize, r = new n.constructor(t.length * i), a = 0, o = 0, s = 0, c = t.length; s < c; s++) {
          a = t[s] * i;
          for (var l = 0; l < i; l++) r[o++] = n[a++]
        }
        return new di(r, i)
      }
      if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
      var t = new Oi,
        n = this.index.array,
        i = this.attributes;
      for (var r in i) {
        var a = e(i[r], n);
        t.setAttribute(r, a)
      }
      var o = this.morphAttributes;
      for (r in o) {
        for (var s = [], c = o[r], l = 0, h = c.length; l < h; l++) {
          a = e(c[l], n);
          s.push(a)
        }
        t.morphAttributes[r] = s
      }
      for (var u = this.groups, p = (l = 0, u.length); l < p; l++) {
        var d = u[l];
        t.addGroup(d.start, d.count, d.materialIndex)
      }
      return t
    },
    toJSON: function() {
      var e = {
        metadata: {
          version: 4.5,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON"
        }
      };
      if (e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), void 0 !== this.parameters) {
        var t = this.parameters;
        for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
        return e
      }
      e.data = {
        attributes: {}
      };
      var i = this.index;
      null !== i && (e.data.index = {
        type: i.array.constructor.name,
        array: Array.prototype.slice.call(i.array)
      });
      var r = this.attributes;
      for (var n in r) {
        var a = (p = r[n]).toJSON();
        "" !== p.name && (a.name = p.name), e.data.attributes[n] = a
      }
      var o = {},
        s = !1;
      for (var n in this.morphAttributes) {
        for (var c = this.morphAttributes[n], l = [], h = 0, u = c.length; h < u; h++) {
          var p;
          a = (p = c[h]).toJSON();
          "" !== p.name && (a.name = p.name), l.push(a)
        }
        l.length > 0 && (o[n] = l, s = !0)
      }
      s && (e.data.morphAttributes = o);
      var d = this.groups;
      d.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(d)));
      var f = this.boundingSphere;
      return null !== f && (e.data.boundingSphere = {
        center: f.center.toArray(),
        radius: f.radius
      }), e
    },
    clone: function() {
      return (new Oi).copy(this)
    },
    copy: function(e) {
      var t, n, i;
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = e.name;
      var r = e.index;
      null !== r && this.setIndex(r.clone());
      var a = e.attributes;
      for (t in a) {
        var o = a[t];
        this.setAttribute(t, o.clone())
      }
      var s = e.morphAttributes;
      for (t in s) {
        var c = [],
          l = s[t];
        for (n = 0, i = l.length; n < i; n++) c.push(l[n].clone());
        this.morphAttributes[t] = c
      }
      var h = e.groups;
      for (n = 0, i = h.length; n < i; n++) {
        var u = h[n];
        this.addGroup(u.start, u.count, u.materialIndex)
      }
      var p = e.boundingBox;
      null !== p && (this.boundingBox = p.clone());
      var d = e.boundingSphere;
      return null !== d && (this.boundingSphere = d.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this
    },
    dispose: function() {
      this.dispatchEvent({
        type: "dispose"
      })
    }
  });
  var Ii = new Jt,
    Ni = new Gn,
    Di = new On,
    zi = new It,
    Ui = new It,
    Fi = new It,
    Bi = new It,
    Gi = new It,
    Hi = new It,
    Vi = new It,
    ki = new It,
    ji = new It,
    Wi = new Rt,
    qi = new Rt,
    Xi = new Rt,
    Yi = new It,
    Zi = new It;

  function Ji(e, t) {
    mn.call(this), this.type = "Mesh", this.geometry = void 0 !== e ? e : new Oi, this.material = void 0 !== t ? t : new pi({
      color: 16777215 * Math.random()
    }), this.drawMode = st, this.updateMorphTargets()
  }

  function Ki(e, t, n, i, r, a, o, s) {
    if (null === (t.side === h ? i.intersectTriangle(o, a, r, !0, s) : i.intersectTriangle(r, a, o, t.side !== u, s))) return null;
    Zi.copy(s), Zi.applyMatrix4(e.matrixWorld);
    var c = n.ray.origin.distanceTo(Zi);
    return c < n.near || c > n.far ? null : {
      distance: c,
      point: Zi.clone(),
      object: e
    }
  }

  function Qi(e, t, n, i, r, a, o, s, c, l, h) {
    zi.fromBufferAttribute(r, c), Ui.fromBufferAttribute(r, l), Fi.fromBufferAttribute(r, h);
    var u = e.morphTargetInfluences;
    if (t.morphTargets && a && u) {
      Vi.set(0, 0, 0), ki.set(0, 0, 0), ji.set(0, 0, 0);
      for (var p = 0, d = a.length; p < d; p++) {
        var f = u[p],
          m = a[p];
        0 !== f && (Bi.fromBufferAttribute(m, c), Gi.fromBufferAttribute(m, l), Hi.fromBufferAttribute(m, h), Vi.addScaledVector(Bi.sub(zi), f), ki.addScaledVector(Gi.sub(Ui), f), ji.addScaledVector(Hi.sub(Fi), f))
      }
      zi.add(Vi), Ui.add(ki), Fi.add(ji)
    }
    var v = Ki(e, t, n, i, zi, Ui, Fi, Yi);
    if (v) {
      o && (Wi.fromBufferAttribute(o, c), qi.fromBufferAttribute(o, l), Xi.fromBufferAttribute(o, h), v.uv = ti.getUV(Yi, zi, Ui, Fi, Wi, qi, Xi, new Rt)), s && (Wi.fromBufferAttribute(s, c), qi.fromBufferAttribute(s, l), Xi.fromBufferAttribute(s, h), v.uv2 = ti.getUV(Yi, zi, Ui, Fi, Wi, qi, Xi, new Rt));
      var g = new li(c, l, h);
      ti.getNormal(zi, Ui, Fi, g.normal), v.face = g
    }
    return v
  }
  Ji.prototype = Object.assign(Object.create(mn.prototype), {
    constructor: Ji,
    isMesh: !0,
    setDrawMode: function(e) {
      this.drawMode = e
    },
    copy: function(e) {
      return mn.prototype.copy.call(this, e), this.drawMode = e.drawMode, void 0 !== e.morphTargetInfluences && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), void 0 !== e.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this
    },
    updateMorphTargets: function() {
      var e, t, n, i = this.geometry;
      if (i.isBufferGeometry) {
        var r = i.morphAttributes,
          a = Object.keys(r);
        if (a.length > 0) {
          var o = r[a[0]];
          if (void 0 !== o)
            for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, e = 0, t = o.length; e < t; e++) n = o[e].name || String(e), this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e
        }
      } else {
        var s = i.morphTargets;
        void 0 !== s && s.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
      }
    },
    raycast: function(e, t) {
      var n, i = this.geometry,
        r = this.material,
        a = this.matrixWorld;
      if (void 0 !== r && (null === i.boundingSphere && i.computeBoundingSphere(), Di.copy(i.boundingSphere), Di.applyMatrix4(a), !1 !== e.ray.intersectsSphere(Di) && (Ii.getInverse(a), Ni.copy(e.ray).applyMatrix4(Ii), null === i.boundingBox || !1 !== Ni.intersectsBox(i.boundingBox))))
        if (this.drawMode === st) {
          if (i.isBufferGeometry) {
            var o, s, c, l, h, u, p, d, f, m = i.index,
              v = i.attributes.position,
              g = i.morphAttributes.position,
              y = i.attributes.uv,
              x = i.attributes.uv2,
              b = i.groups,
              w = i.drawRange;
            if (null !== m)
              if (Array.isArray(r))
                for (l = 0, u = b.length; l < u; l++)
                  for (f = r[(d = b[l]).materialIndex], h = Math.max(d.start, w.start), p = Math.min(d.start + d.count, w.start + w.count); h < p; h += 3) o = m.getX(h), s = m.getX(h + 1), c = m.getX(h + 2), (n = Qi(this, f, e, Ni, v, g, y, x, o, s, c)) && (n.faceIndex = Math.floor(h / 3), n.face.materialIndex = d.materialIndex, t.push(n));
              else
                for (l = Math.max(0, w.start), u = Math.min(m.count, w.start + w.count); l < u; l += 3) o = m.getX(l), s = m.getX(l + 1), c = m.getX(l + 2), (n = Qi(this, r, e, Ni, v, g, y, x, o, s, c)) && (n.faceIndex = Math.floor(l / 3), t.push(n));
            else if (void 0 !== v)
              if (Array.isArray(r))
                for (l = 0, u = b.length; l < u; l++)
                  for (f = r[(d = b[l]).materialIndex], h = Math.max(d.start, w.start), p = Math.min(d.start + d.count, w.start + w.count); h < p; h += 3)(n = Qi(this, f, e, Ni, v, g, y, x, o = h, s = h + 1, c = h + 2)) && (n.faceIndex = Math.floor(h / 3), n.face.materialIndex = d.materialIndex, t.push(n));
              else
                for (l = Math.max(0, w.start), u = Math.min(v.count, w.start + w.count); l < u; l += 3)(n = Qi(this, r, e, Ni, v, g, y, x, o = l, s = l + 1, c = l + 2)) && (n.faceIndex = Math.floor(l / 3), t.push(n))
          } else if (i.isGeometry) {
            var _, M, S, T, E = Array.isArray(r),
              A = i.vertices,
              L = i.faces,
              R = i.faceVertexUvs[0];
            R.length > 0 && (T = R);
            for (var P = 0, C = L.length; P < C; P++) {
              var O = L[P],
                I = E ? r[O.materialIndex] : r;
              if (void 0 !== I && (_ = A[O.a], M = A[O.b], S = A[O.c], n = Ki(this, I, e, Ni, _, M, S, Yi))) {
                if (T && T[P]) {
                  var N = T[P];
                  Wi.copy(N[0]), qi.copy(N[1]), Xi.copy(N[2]), n.uv = ti.getUV(Yi, _, M, S, Wi, qi, Xi, new Rt)
                }
                n.face = O, n.faceIndex = P, t.push(n)
              }
            }
          }
        } else console.warn("THREE.Mesh: TriangleStripDrawMode and TriangleFanDrawMode are not supported by .raycast().")
    },
    clone: function() {
      return new this.constructor(this.geometry, this.material).copy(this)
    }
  });
  var $i = 0,
    er = new Jt,
    tr = new mn,
    nr = new It;

  function ir() {
    Object.defineProperty(this, "id", {
      value: $i += 2
    }), this.uuid = Lt.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
      []
    ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
  }
  ir.prototype = Object.assign(Object.create(Tt.prototype), {
    constructor: ir,
    isGeometry: !0,
    applyMatrix: function(e) {
      for (var t = (new zt).getNormalMatrix(e), n = 0, i = this.vertices.length; n < i; n++) {
        this.vertices[n].applyMatrix4(e)
      }
      for (n = 0, i = this.faces.length; n < i; n++) {
        var r = this.faces[n];
        r.normal.applyMatrix3(t).normalize();
        for (var a = 0, o = r.vertexNormals.length; a < o; a++) r.vertexNormals[a].applyMatrix3(t).normalize()
      }
      return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
    },
    rotateX: function(e) {
      return er.makeRotationX(e), this.applyMatrix(er), this
    },
    rotateY: function(e) {
      return er.makeRotationY(e), this.applyMatrix(er), this
    },
    rotateZ: function(e) {
      return er.makeRotationZ(e), this.applyMatrix(er), this
    },
    translate: function(e, t, n) {
      return er.makeTranslation(e, t, n), this.applyMatrix(er), this
    },
    scale: function(e, t, n) {
      return er.makeScale(e, t, n), this.applyMatrix(er), this
    },
    lookAt: function(e) {
      return tr.lookAt(e), tr.updateMatrix(), this.applyMatrix(tr.matrix), this
    },
    fromBufferGeometry: function(e) {
      var t = this,
        n = null !== e.index ? e.index.array : void 0,
        i = e.attributes;
      if (void 0 === i.position) return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."), this;
      var r = i.position.array,
        a = void 0 !== i.normal ? i.normal.array : void 0,
        o = void 0 !== i.color ? i.color.array : void 0,
        s = void 0 !== i.uv ? i.uv.array : void 0,
        c = void 0 !== i.uv2 ? i.uv2.array : void 0;
      void 0 !== c && (this.faceVertexUvs[1] = []);
      for (var l = 0; l < r.length; l += 3) t.vertices.push((new It).fromArray(r, l)), void 0 !== o && t.colors.push((new ai).fromArray(o, l));

      function h(e, n, i, r) {
        var l = void 0 === o ? [] : [t.colors[e].clone(), t.colors[n].clone(), t.colors[i].clone()],
          h = new li(e, n, i, void 0 === a ? [] : [(new It).fromArray(a, 3 * e), (new It).fromArray(a, 3 * n), (new It).fromArray(a, 3 * i)], l, r);
        t.faces.push(h), void 0 !== s && t.faceVertexUvs[0].push([(new Rt).fromArray(s, 2 * e), (new Rt).fromArray(s, 2 * n), (new Rt).fromArray(s, 2 * i)]), void 0 !== c && t.faceVertexUvs[1].push([(new Rt).fromArray(c, 2 * e), (new Rt).fromArray(c, 2 * n), (new Rt).fromArray(c, 2 * i)])
      }
      var u = e.groups;
      if (u.length > 0)
        for (l = 0; l < u.length; l++)
          for (var p = u[l], d = p.start, f = d, m = d + p.count; f < m; f += 3) void 0 !== n ? h(n[f], n[f + 1], n[f + 2], p.materialIndex) : h(f, f + 1, f + 2, p.materialIndex);
      else if (void 0 !== n)
        for (l = 0; l < n.length; l += 3) h(n[l], n[l + 1], n[l + 2]);
      else
        for (l = 0; l < r.length / 3; l += 3) h(l, l + 1, l + 2);
      return this.computeFaceNormals(), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), this
    },
    center: function() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(nr).negate(), this.translate(nr.x, nr.y, nr.z), this
    },
    normalize: function() {
      this.computeBoundingSphere();
      var e = this.boundingSphere.center,
        t = this.boundingSphere.radius,
        n = 0 === t ? 1 : 1 / t,
        i = new Jt;
      return i.set(n, 0, 0, -n * e.x, 0, n, 0, -n * e.y, 0, 0, n, -n * e.z, 0, 0, 0, 1), this.applyMatrix(i), this
    },
    computeFaceNormals: function() {
      for (var e = new It, t = new It, n = 0, i = this.faces.length; n < i; n++) {
        var r = this.faces[n],
          a = this.vertices[r.a],
          o = this.vertices[r.b],
          s = this.vertices[r.c];
        e.subVectors(s, o), t.subVectors(a, o), e.cross(t), e.normalize(), r.normal.copy(e)
      }
    },
    computeVertexNormals: function(e) {
      var t, n, i, r, a, o;
      for (void 0 === e && (e = !0), o = new Array(this.vertices.length), t = 0, n = this.vertices.length; t < n; t++) o[t] = new It;
      if (e) {
        var s, c, l, h = new It,
          u = new It;
        for (i = 0, r = this.faces.length; i < r; i++) a = this.faces[i], s = this.vertices[a.a], c = this.vertices[a.b], l = this.vertices[a.c], h.subVectors(l, c), u.subVectors(s, c), h.cross(u), o[a.a].add(h), o[a.b].add(h), o[a.c].add(h)
      } else
        for (this.computeFaceNormals(), i = 0, r = this.faces.length; i < r; i++) o[(a = this.faces[i]).a].add(a.normal), o[a.b].add(a.normal), o[a.c].add(a.normal);
      for (t = 0, n = this.vertices.length; t < n; t++) o[t].normalize();
      for (i = 0, r = this.faces.length; i < r; i++) {
        var p = (a = this.faces[i]).vertexNormals;
        3 === p.length ? (p[0].copy(o[a.a]), p[1].copy(o[a.b]), p[2].copy(o[a.c])) : (p[0] = o[a.a].clone(), p[1] = o[a.b].clone(), p[2] = o[a.c].clone())
      }
      this.faces.length > 0 && (this.normalsNeedUpdate = !0)
    },
    computeFlatVertexNormals: function() {
      var e, t, n;
      for (this.computeFaceNormals(), e = 0, t = this.faces.length; e < t; e++) {
        var i = (n = this.faces[e]).vertexNormals;
        3 === i.length ? (i[0].copy(n.normal), i[1].copy(n.normal), i[2].copy(n.normal)) : (i[0] = n.normal.clone(), i[1] = n.normal.clone(), i[2] = n.normal.clone())
      }
      this.faces.length > 0 && (this.normalsNeedUpdate = !0)
    },
    computeMorphNormals: function() {
      var e, t, n, i, r;
      for (n = 0, i = this.faces.length; n < i; n++)
        for ((r = this.faces[n]).__originalFaceNormal ? r.__originalFaceNormal.copy(r.normal) : r.__originalFaceNormal = r.normal.clone(), r.__originalVertexNormals || (r.__originalVertexNormals = []), e = 0, t = r.vertexNormals.length; e < t; e++) r.__originalVertexNormals[e] ? r.__originalVertexNormals[e].copy(r.vertexNormals[e]) : r.__originalVertexNormals[e] = r.vertexNormals[e].clone();
      var a = new ir;
      for (a.faces = this.faces, e = 0, t = this.morphTargets.length; e < t; e++) {
        if (!this.morphNormals[e]) {
          this.morphNormals[e] = {}, this.morphNormals[e].faceNormals = [], this.morphNormals[e].vertexNormals = [];
          var o = this.morphNormals[e].faceNormals,
            s = this.morphNormals[e].vertexNormals;
          for (n = 0, i = this.faces.length; n < i; n++) c = new It, l = {
            a: new It,
            b: new It,
            c: new It
          }, o.push(c), s.push(l)
        }
        var c, l, h = this.morphNormals[e];
        for (a.vertices = this.morphTargets[e].vertices, a.computeFaceNormals(), a.computeVertexNormals(), n = 0, i = this.faces.length; n < i; n++) r = this.faces[n], c = h.faceNormals[n], l = h.vertexNormals[n], c.copy(r.normal), l.a.copy(r.vertexNormals[0]), l.b.copy(r.vertexNormals[1]), l.c.copy(r.vertexNormals[2])
      }
      for (n = 0, i = this.faces.length; n < i; n++)(r = this.faces[n]).normal = r.__originalFaceNormal, r.vertexNormals = r.__originalVertexNormals
    },
    computeBoundingBox: function() {
      null === this.boundingBox && (this.boundingBox = new Rn), this.boundingBox.setFromPoints(this.vertices)
    },
    computeBoundingSphere: function() {
      null === this.boundingSphere && (this.boundingSphere = new On), this.boundingSphere.setFromPoints(this.vertices)
    },
    merge: function(e, t, n) {
      if (e && e.isGeometry) {
        var i, r = this.vertices.length,
          a = this.vertices,
          o = e.vertices,
          s = this.faces,
          c = e.faces,
          l = this.colors,
          h = e.colors;
        void 0 === n && (n = 0), void 0 !== t && (i = (new zt).getNormalMatrix(t));
        for (var u = 0, p = o.length; u < p; u++) {
          var d = o[u].clone();
          void 0 !== t && d.applyMatrix4(t), a.push(d)
        }
        for (u = 0, p = h.length; u < p; u++) l.push(h[u].clone());
        for (u = 0, p = c.length; u < p; u++) {
          var f, m, v, g = c[u],
            y = g.vertexNormals,
            x = g.vertexColors;
          (f = new li(g.a + r, g.b + r, g.c + r)).normal.copy(g.normal), void 0 !== i && f.normal.applyMatrix3(i).normalize();
          for (var b = 0, w = y.length; b < w; b++) m = y[b].clone(), void 0 !== i && m.applyMatrix3(i).normalize(), f.vertexNormals.push(m);
          f.color.copy(g.color);
          for (b = 0, w = x.length; b < w; b++) v = x[b], f.vertexColors.push(v.clone());
          f.materialIndex = g.materialIndex + n, s.push(f)
        }
        for (u = 0, p = e.faceVertexUvs.length; u < p; u++) {
          var _ = e.faceVertexUvs[u];
          void 0 === this.faceVertexUvs[u] && (this.faceVertexUvs[u] = []);
          for (b = 0, w = _.length; b < w; b++) {
            for (var M = _[b], S = [], T = 0, E = M.length; T < E; T++) S.push(M[T].clone());
            this.faceVertexUvs[u].push(S)
          }
        }
      } else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e)
    },
    mergeMesh: function(e) {
      e && e.isMesh ? (e.matrixAutoUpdate && e.updateMatrix(), this.merge(e.geometry, e.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e)
    },
    mergeVertices: function() {
      var e, t, n, i, r, a, o, s, c = {},
        l = [],
        h = [],
        u = Math.pow(10, 4);
      for (n = 0, i = this.vertices.length; n < i; n++) e = this.vertices[n], void 0 === c[t = Math.round(e.x * u) + "_" + Math.round(e.y * u) + "_" + Math.round(e.z * u)] ? (c[t] = n, l.push(this.vertices[n]), h[n] = l.length - 1) : h[n] = h[c[t]];
      var p = [];
      for (n = 0, i = this.faces.length; n < i; n++) {
        (r = this.faces[n]).a = h[r.a], r.b = h[r.b], r.c = h[r.c], a = [r.a, r.b, r.c];
        for (var d = 0; d < 3; d++)
          if (a[d] === a[(d + 1) % 3]) {
            p.push(n);
            break
          }
      }
      for (n = p.length - 1; n >= 0; n--) {
        var f = p[n];
        for (this.faces.splice(f, 1), o = 0, s = this.faceVertexUvs.length; o < s; o++) this.faceVertexUvs[o].splice(f, 1)
      }
      var m = this.vertices.length - l.length;
      return this.vertices = l, m
    },
    setFromPoints: function(e) {
      this.vertices = [];
      for (var t = 0, n = e.length; t < n; t++) {
        var i = e[t];
        this.vertices.push(new It(i.x, i.y, i.z || 0))
      }
      return this
    },
    sortFacesByMaterialIndex: function() {
      for (var e = this.faces, t = e.length, n = 0; n < t; n++) e[n]._id = n;
      e.sort((function(e, t) {
        return e.materialIndex - t.materialIndex
      }));
      var i, r, a = this.faceVertexUvs[0],
        o = this.faceVertexUvs[1];
      a && a.length === t && (i = []), o && o.length === t && (r = []);
      for (n = 0; n < t; n++) {
        var s = e[n]._id;
        i && i.push(a[s]), r && r.push(o[s])
      }
      i && (this.faceVertexUvs[0] = i), r && (this.faceVertexUvs[1] = r)
    },
    toJSON: function() {
      var e = {
        metadata: {
          version: 4.5,
          type: "Geometry",
          generator: "Geometry.toJSON"
        }
      };
      if (e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), void 0 !== this.parameters) {
        var t = this.parameters;
        for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
        return e
      }
      for (var i = [], r = 0; r < this.vertices.length; r++) {
        var a = this.vertices[r];
        i.push(a.x, a.y, a.z)
      }
      var o = [],
        s = [],
        c = {},
        l = [],
        h = {},
        u = [],
        p = {};
      for (r = 0; r < this.faces.length; r++) {
        var d = this.faces[r],
          f = void 0 !== this.faceVertexUvs[0][r],
          m = d.normal.length() > 0,
          v = d.vertexNormals.length > 0,
          g = 1 !== d.color.r || 1 !== d.color.g || 1 !== d.color.b,
          y = d.vertexColors.length > 0,
          x = 0;
        if (x = M(x, 0, 0), x = M(x, 1, !0), x = M(x, 2, !1), x = M(x, 3, f), x = M(x, 4, m), x = M(x, 5, v), x = M(x, 6, g), x = M(x, 7, y), o.push(x), o.push(d.a, d.b, d.c), o.push(d.materialIndex), f) {
          var b = this.faceVertexUvs[0][r];
          o.push(E(b[0]), E(b[1]), E(b[2]))
        }
        if (m && o.push(S(d.normal)), v) {
          var w = d.vertexNormals;
          o.push(S(w[0]), S(w[1]), S(w[2]))
        }
        if (g && o.push(T(d.color)), y) {
          var _ = d.vertexColors;
          o.push(T(_[0]), T(_[1]), T(_[2]))
        }
      }

      function M(e, t, n) {
        return n ? e | 1 << t : e & ~(1 << t)
      }

      function S(e) {
        var t = e.x.toString() + e.y.toString() + e.z.toString();
        return void 0 !== c[t] ? c[t] : (c[t] = s.length / 3, s.push(e.x, e.y, e.z), c[t])
      }

      function T(e) {
        var t = e.r.toString() + e.g.toString() + e.b.toString();
        return void 0 !== h[t] ? h[t] : (h[t] = l.length, l.push(e.getHex()), h[t])
      }

      function E(e) {
        var t = e.x.toString() + e.y.toString();
        return void 0 !== p[t] ? p[t] : (p[t] = u.length / 2, u.push(e.x, e.y), p[t])
      }
      return e.data = {}, e.data.vertices = i, e.data.normals = s, l.length > 0 && (e.data.colors = l), u.length > 0 && (e.data.uvs = [u]), e.data.faces = o, e
    },
    clone: function() {
      return (new ir).copy(this)
    },
    copy: function(e) {
      var t, n, i, r, a, o;
      this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
        []
      ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = e.name;
      var s = e.vertices;
      for (t = 0, n = s.length; t < n; t++) this.vertices.push(s[t].clone());
      var c = e.colors;
      for (t = 0, n = c.length; t < n; t++) this.colors.push(c[t].clone());
      var l = e.faces;
      for (t = 0, n = l.length; t < n; t++) this.faces.push(l[t].clone());
      for (t = 0, n = e.faceVertexUvs.length; t < n; t++) {
        var h = e.faceVertexUvs[t];
        for (void 0 === this.faceVertexUvs[t] && (this.faceVertexUvs[t] = []), i = 0, r = h.length; i < r; i++) {
          var u = h[i],
            p = [];
          for (a = 0, o = u.length; a < o; a++) {
            var d = u[a];
            p.push(d.clone())
          }
          this.faceVertexUvs[t].push(p)
        }
      }
      var f = e.morphTargets;
      for (t = 0, n = f.length; t < n; t++) {
        var m = {};
        if (m.name = f[t].name, void 0 !== f[t].vertices)
          for (m.vertices = [], i = 0, r = f[t].vertices.length; i < r; i++) m.vertices.push(f[t].vertices[i].clone());
        if (void 0 !== f[t].normals)
          for (m.normals = [], i = 0, r = f[t].normals.length; i < r; i++) m.normals.push(f[t].normals[i].clone());
        this.morphTargets.push(m)
      }
      var v = e.morphNormals;
      for (t = 0, n = v.length; t < n; t++) {
        var g = {};
        if (void 0 !== v[t].vertexNormals)
          for (g.vertexNormals = [], i = 0, r = v[t].vertexNormals.length; i < r; i++) {
            var y = v[t].vertexNormals[i],
              x = {};
            x.a = y.a.clone(), x.b = y.b.clone(), x.c = y.c.clone(), g.vertexNormals.push(x)
          }
        if (void 0 !== v[t].faceNormals)
          for (g.faceNormals = [], i = 0, r = v[t].faceNormals.length; i < r; i++) g.faceNormals.push(v[t].faceNormals[i].clone());
        this.morphNormals.push(g)
      }
      var b = e.skinWeights;
      for (t = 0, n = b.length; t < n; t++) this.skinWeights.push(b[t].clone());
      var w = e.skinIndices;
      for (t = 0, n = w.length; t < n; t++) this.skinIndices.push(w[t].clone());
      var _ = e.lineDistances;
      for (t = 0, n = _.length; t < n; t++) this.lineDistances.push(_[t]);
      var M = e.boundingBox;
      null !== M && (this.boundingBox = M.clone());
      var S = e.boundingSphere;
      return null !== S && (this.boundingSphere = S.clone()), this.elementsNeedUpdate = e.elementsNeedUpdate, this.verticesNeedUpdate = e.verticesNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.lineDistancesNeedUpdate = e.lineDistancesNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, this
    },
    dispose: function() {
      this.dispatchEvent({
        type: "dispose"
      })
    }
  });
  class rr extends Oi {
    constructor(e, t, n, i, r, a) {
      super(), this.type = "BoxBufferGeometry", this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: a
      };
      var o = this;
      e = e || 1, t = t || 1, n = n || 1, i = Math.floor(i) || 1, r = Math.floor(r) || 1, a = Math.floor(a) || 1;
      var s = [],
        c = [],
        l = [],
        h = [],
        u = 0,
        p = 0;

      function d(e, t, n, i, r, a, d, f, m, v, g) {
        var y, x, b = a / m,
          w = d / v,
          _ = a / 2,
          M = d / 2,
          S = f / 2,
          T = m + 1,
          E = v + 1,
          A = 0,
          L = 0,
          R = new It;
        for (x = 0; x < E; x++) {
          var P = x * w - M;
          for (y = 0; y < T; y++) {
            var C = y * b - _;
            R[e] = C * i, R[t] = P * r, R[n] = S, c.push(R.x, R.y, R.z), R[e] = 0, R[t] = 0, R[n] = f > 0 ? 1 : -1, l.push(R.x, R.y, R.z), h.push(y / m), h.push(1 - x / v), A += 1
          }
        }
        for (x = 0; x < v; x++)
          for (y = 0; y < m; y++) {
            var O = u + y + T * x,
              I = u + y + T * (x + 1),
              N = u + (y + 1) + T * (x + 1),
              D = u + (y + 1) + T * x;
            s.push(O, I, D), s.push(I, N, D), L += 6
          }
        o.addGroup(p, L, g), p += L, u += A
      }
      d("z", "y", "x", -1, -1, n, t, e, a, r, 0), d("z", "y", "x", 1, -1, n, t, -e, a, r, 1), d("x", "z", "y", 1, 1, e, n, t, i, a, 2), d("x", "z", "y", 1, -1, e, n, -t, i, a, 3), d("x", "y", "z", 1, -1, e, t, n, i, r, 4), d("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(s), this.setAttribute("position", new wi(c, 3)), this.setAttribute("normal", new wi(l, 3)), this.setAttribute("uv", new wi(h, 2))
    }
  }

  function ar(e) {
    var t = {};
    for (var n in e)
      for (var i in t[n] = {}, e[n]) {
        var r = e[n][i];
        r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? t[n][i] = r.clone() : Array.isArray(r) ? t[n][i] = r.slice() : t[n][i] = r
      }
    return t
  }

  function or(e) {
    for (var t = {}, n = 0; n < e.length; n++) {
      var i = ar(e[n]);
      for (var r in i) t[r] = i[r]
    }
    return t
  }
  var sr = {
      clone: ar,
      merge: or
    },
    cr = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
    lr = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";

  function hr(e) {
    ui.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = cr, this.fragmentShader = lr, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
      derivatives: !1,
      fragDepth: !1,
      drawBuffers: !1,
      shaderTextureLOD: !1
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e))
  }

  function ur() {
    mn.call(this), this.type = "Camera", this.matrixWorldInverse = new Jt, this.projectionMatrix = new Jt, this.projectionMatrixInverse = new Jt
  }

  function pr(e, t, n, i) {
    ur.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== e ? e : 50, this.zoom = 1, this.near = void 0 !== n ? n : .1, this.far = void 0 !== i ? i : 2e3, this.focus = 10, this.aspect = void 0 !== t ? t : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
  }
  hr.prototype = Object.create(ui.prototype), hr.prototype.constructor = hr, hr.prototype.isShaderMaterial = !0, hr.prototype.copy = function(e) {
    return ui.prototype.copy.call(this, e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ar(e.uniforms), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.extensions = e.extensions, this
  }, hr.prototype.toJSON = function(e) {
    var t = ui.prototype.toJSON.call(this, e);
    for (var n in t.uniforms = {}, this.uniforms) {
      var i = this.uniforms[n].value;
      i && i.isTexture ? t.uniforms[n] = {
        type: "t",
        value: i.toJSON(e).uuid
      } : i && i.isColor ? t.uniforms[n] = {
        type: "c",
        value: i.getHex()
      } : i && i.isVector2 ? t.uniforms[n] = {
        type: "v2",
        value: i.toArray()
      } : i && i.isVector3 ? t.uniforms[n] = {
        type: "v3",
        value: i.toArray()
      } : i && i.isVector4 ? t.uniforms[n] = {
        type: "v4",
        value: i.toArray()
      } : i && i.isMatrix3 ? t.uniforms[n] = {
        type: "m3",
        value: i.toArray()
      } : i && i.isMatrix4 ? t.uniforms[n] = {
        type: "m4",
        value: i.toArray()
      } : t.uniforms[n] = {
        value: i
      }
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
    var r = {};
    for (var a in this.extensions) !0 === this.extensions[a] && (r[a] = !0);
    return Object.keys(r).length > 0 && (t.extensions = r), t
  }, ur.prototype = Object.assign(Object.create(mn.prototype), {
    constructor: ur,
    isCamera: !0,
    copy: function(e, t) {
      return mn.prototype.copy.call(this, e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this
    },
    getWorldDirection: function(e) {
      void 0 === e && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), e = new It), this.updateMatrixWorld(!0);
      var t = this.matrixWorld.elements;
      return e.set(-t[8], -t[9], -t[10]).normalize()
    },
    updateMatrixWorld: function(e) {
      mn.prototype.updateMatrixWorld.call(this, e), this.matrixWorldInverse.getInverse(this.matrixWorld)
    },
    clone: function() {
      return (new this.constructor).copy(this)
    }
  }), pr.prototype = Object.assign(Object.create(ur.prototype), {
    constructor: pr,
    isPerspectiveCamera: !0,
    copy: function(e, t) {
      return ur.prototype.copy.call(this, e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = null === e.view ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this
    },
    setFocalLength: function(e) {
      var t = .5 * this.getFilmHeight() / e;
      this.fov = 2 * Lt.RAD2DEG * Math.atan(t), this.updateProjectionMatrix()
    },
    getFocalLength: function() {
      var e = Math.tan(.5 * Lt.DEG2RAD * this.fov);
      return .5 * this.getFilmHeight() / e
    },
    getEffectiveFOV: function() {
      return 2 * Lt.RAD2DEG * Math.atan(Math.tan(.5 * Lt.DEG2RAD * this.fov) / this.zoom)
    },
    getFilmWidth: function() {
      return this.filmGauge * Math.min(this.aspect, 1)
    },
    getFilmHeight: function() {
      return this.filmGauge / Math.max(this.aspect, 1)
    },
    setViewOffset: function(e, t, n, i, r, a) {
      this.aspect = e / t, null === this.view && (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
    },
    clearViewOffset: function() {
      null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
    },
    updateProjectionMatrix: function() {
      var e = this.near,
        t = e * Math.tan(.5 * Lt.DEG2RAD * this.fov) / this.zoom,
        n = 2 * t,
        i = this.aspect * n,
        r = -.5 * i,
        a = this.view;
      if (null !== this.view && this.view.enabled) {
        var o = a.fullWidth,
          s = a.fullHeight;
        r += a.offsetX * i / o, t -= a.offsetY * n / s, i *= a.width / o, n *= a.height / s
      }
      var c = this.filmOffset;
      0 !== c && (r += e * c / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
    },
    toJSON: function(e) {
      var t = mn.prototype.toJSON.call(this, e);
      return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, null !== this.view && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t
    }
  });
  var dr = 90,
    fr = 1;

  function mr(e, t, n, i) {
    mn.call(this), this.type = "CubeCamera";
    var r = new pr(dr, fr, e, t);
    r.up.set(0, -1, 0), r.lookAt(new It(1, 0, 0)), this.add(r);
    var a = new pr(dr, fr, e, t);
    a.up.set(0, -1, 0), a.lookAt(new It(-1, 0, 0)), this.add(a);
    var o = new pr(dr, fr, e, t);
    o.up.set(0, 0, 1), o.lookAt(new It(0, 1, 0)), this.add(o);
    var s = new pr(dr, fr, e, t);
    s.up.set(0, 0, -1), s.lookAt(new It(0, -1, 0)), this.add(s);
    var c = new pr(dr, fr, e, t);
    c.up.set(0, -1, 0), c.lookAt(new It(0, 0, 1)), this.add(c);
    var l = new pr(dr, fr, e, t);
    l.up.set(0, -1, 0), l.lookAt(new It(0, 0, -1)), this.add(l), i = i || {
      format: Re,
      magFilter: de,
      minFilter: de
    }, this.renderTarget = new vr(n, n, i), this.renderTarget.texture.name = "CubeCamera", this.update = function(e, t) {
      null === this.parent && this.updateMatrixWorld();
      var n = e.getRenderTarget(),
        i = this.renderTarget,
        h = i.texture.generateMipmaps;
      i.texture.generateMipmaps = !1, e.setRenderTarget(i, 0), e.render(t, r), e.setRenderTarget(i, 1), e.render(t, a), e.setRenderTarget(i, 2), e.render(t, o), e.setRenderTarget(i, 3), e.render(t, s), e.setRenderTarget(i, 4), e.render(t, c), i.texture.generateMipmaps = h, e.setRenderTarget(i, 5), e.render(t, l), e.setRenderTarget(n)
    }, this.clear = function(e, t, n, i) {
      for (var r = e.getRenderTarget(), a = this.renderTarget, o = 0; o < 6; o++) e.setRenderTarget(a, o), e.clear(t, n, i);
      e.setRenderTarget(r)
    }
  }

  function vr(e, t, n) {
    Ht.call(this, e, t, n)
  }

  function gr(e, t, n, i, r, a, o, s, c, l, h, u) {
    Bt.call(this, null, a, o, s, c, l, i, r, h, u), this.image = {
      data: e || null,
      width: t || 1,
      height: n || 1
    }, this.magFilter = void 0 !== c ? c : he, this.minFilter = void 0 !== l ? l : he, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0
  }
  mr.prototype = Object.create(mn.prototype), mr.prototype.constructor = mr, vr.prototype = Object.create(Ht.prototype), vr.prototype.constructor = vr, vr.prototype.isWebGLRenderTargetCube = !0, vr.prototype.fromEquirectangularTexture = function(e, t) {
    this.texture.type = t.type, this.texture.format = t.format, this.texture.encoding = t.encoding;
    var n = new vn,
      i = {
        uniforms: {
          tEquirect: {
            value: null
          }
        },
        vertexShader: ["varying vec3 vWorldDirection;", "vec3 transformDirection( in vec3 dir, in mat4 matrix ) {", "\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );", "}", "void main() {", "\tvWorldDirection = transformDirection( position, modelMatrix );", "\t#include <begin_vertex>", "\t#include <project_vertex>", "}"].join("\n"),
        fragmentShader: ["uniform sampler2D tEquirect;", "varying vec3 vWorldDirection;", "#define RECIPROCAL_PI 0.31830988618", "#define RECIPROCAL_PI2 0.15915494", "void main() {", "\tvec3 direction = normalize( vWorldDirection );", "\tvec2 sampleUV;", "\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;", "\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;", "\tgl_FragColor = texture2D( tEquirect, sampleUV );", "}"].join("\n")
      },
      r = new hr({
        type: "CubemapFromEquirect",
        uniforms: ar(i.uniforms),
        vertexShader: i.vertexShader,
        fragmentShader: i.fragmentShader,
        side: h,
        blending: m
      });
    r.uniforms.tEquirect.value = t;
    var a = new Ji(new rr(5, 5, 5), r);
    n.add(a);
    var o = new mr(1, 10, 1);
    return o.renderTarget = this, o.renderTarget.texture.name = "CubeCameraTexture", o.update(e, n), a.geometry.dispose(), a.material.dispose(), this
  }, gr.prototype = Object.create(Bt.prototype), gr.prototype.constructor = gr, gr.prototype.isDataTexture = !0;
  var yr = new On,
    xr = new It;

  function br(e, t, n, i, r, a) {
    this.planes = [void 0 !== e ? e : new jn, void 0 !== t ? t : new jn, void 0 !== n ? n : new jn, void 0 !== i ? i : new jn, void 0 !== r ? r : new jn, void 0 !== a ? a : new jn]
  }
  Object.assign(br.prototype, {
    set: function(e, t, n, i, r, a) {
      var o = this.planes;
      return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(r), o[5].copy(a), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(e) {
      for (var t = this.planes, n = 0; n < 6; n++) t[n].copy(e.planes[n]);
      return this
    },
    setFromMatrix: function(e) {
      var t = this.planes,
        n = e.elements,
        i = n[0],
        r = n[1],
        a = n[2],
        o = n[3],
        s = n[4],
        c = n[5],
        l = n[6],
        h = n[7],
        u = n[8],
        p = n[9],
        d = n[10],
        f = n[11],
        m = n[12],
        v = n[13],
        g = n[14],
        y = n[15];
      return t[0].setComponents(o - i, h - s, f - u, y - m).normalize(), t[1].setComponents(o + i, h + s, f + u, y + m).normalize(), t[2].setComponents(o + r, h + c, f + p, y + v).normalize(), t[3].setComponents(o - r, h - c, f - p, y - v).normalize(), t[4].setComponents(o - a, h - l, f - d, y - g).normalize(), t[5].setComponents(o + a, h + l, f + d, y + g).normalize(), this
    },
    intersectsObject: function(e) {
      var t = e.geometry;
      return null === t.boundingSphere && t.computeBoundingSphere(), yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(yr)
    },
    intersectsSprite: function(e) {
      return yr.center.set(0, 0, 0), yr.radius = .7071067811865476, yr.applyMatrix4(e.matrixWorld), this.intersectsSphere(yr)
    },
    intersectsSphere: function(e) {
      for (var t = this.planes, n = e.center, i = -e.radius, r = 0; r < 6; r++) {
        if (t[r].distanceToPoint(n) < i) return !1
      }
      return !0
    },
    intersectsBox: function(e) {
      for (var t = this.planes, n = 0; n < 6; n++) {
        var i = t[n];
        if (xr.x = i.normal.x > 0 ? e.max.x : e.min.x, xr.y = i.normal.y > 0 ? e.max.y : e.min.y, xr.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(xr) < 0) return !1
      }
      return !0
    },
    containsPoint: function(e) {
      for (var t = this.planes, n = 0; n < 6; n++)
        if (t[n].distanceToPoint(e) < 0) return !1;
      return !0
    }
  });
  var wr = {
      alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
      alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
      alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
      aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
      aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
      begin_vertex: "vec3 transformed = vec3( position );",
      beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
      bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha  = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
      bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
      clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
      clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
      clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif",
      clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif",
      color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
      color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
      color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
      color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
      common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n  return m[ 2 ][ 3 ] == - 1.0;\n}",
      cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif",
      defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\ttransformedNormal = mat3( instanceMatrix ) * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = normalMatrix * objectTangent;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
      displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
      displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
      emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
      emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
      encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
      encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
      envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\t\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t}  else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
      envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
      envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
      envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
      envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t  vec3 reflectVec = reflect( -viewDir, normal );\n\t\t  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, roughness );\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
      envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) { \n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
      fog_vertex: "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif",
      fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
      fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
      fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
      gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif",
      lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif",
      lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
      lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif",
      lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
      lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
      lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
      lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = saturate( clearcoat );\tmaterial.clearcoatRoughness = clamp( clearcoatRoughness, 0.04, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
      lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
      lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( pointLight.shadow, directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( spotLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( directionalLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
      lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
      lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
      logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
      logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
      logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
      logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
      map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
      map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
      map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
      map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
      metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
      metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
      morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif",
      morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
      morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
      normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
      normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\t#ifdef USE_TANGENT\n\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, normalScale, normalMap );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
      normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec2 normalScale, in sampler2D normalMap ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy *= normalScale;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tbool frontFacing = dot( cross( S, T ), N ) > 0.0;\n\t\t\tmapN.xy *= ( float( frontFacing ) * 2.0 - 1.0 );\n\t\t#else\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",
      clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
      clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 vTBN = mat3( tangent, bitangent, clearcoatNormal );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = clearcoatNormalScale * mapN.xy;\n\t\tclearcoatNormal = normalize( vTBN * mapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatNormalScale, clearcoatNormalMap );\n\t#endif\n#endif",
      clearcoat_normalmap_pars_fragment: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
      packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 encodeHalfRGBA ( vec2 v ) {\n\tvec4 encoded = vec4( 0.0 );\n\tconst vec2 offset = vec2( 1.0 / 255.0, 0.0 );\n\tencoded.xy = vec2( v.x, fract( v.x * 255.0 ) );\n\tencoded.xy = encoded.xy - ( encoded.yy * offset );\n\tencoded.zw = vec2( v.y, fract( v.y * 255.0 ) );\n\tencoded.zw = encoded.zw - ( encoded.ww * offset );\n\treturn encoded;\n}\nvec2 decodeHalfRGBA( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
      premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
      project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
      dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
      dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
      roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
      roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
      shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn decodeHalfRGBA( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = ( floor( uv * size - 0.5 ) + 0.5 ) * texelSize;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
      shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
      shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif",
      shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= all( bvec2( directionalLight.shadow, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= all( bvec2( spotLight.shadow, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= all( bvec2( pointLight.shadow, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}",
      skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
      skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
      skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
      skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
      specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
      specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
      tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
      tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",
      uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
      uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
      uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
      uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
      uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
      uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
      worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
      background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
      background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
      cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
      cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
      depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}",
      depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}",
      distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
      distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
      equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
      equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
      linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
      linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
      meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
      meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
      meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
      meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
      meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSPARENCY\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSPARENCY\n\tuniform float transparency;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSPARENCY\n\t\tdiffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
      normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
      points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
      points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
      shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}",
      shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
      sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
    },
    _r = {
      common: {
        diffuse: {
          value: new ai(15658734)
        },
        opacity: {
          value: 1
        },
        map: {
          value: null
        },
        uvTransform: {
          value: new zt
        },
        alphaMap: {
          value: null
        }
      },
      specularmap: {
        specularMap: {
          value: null
        }
      },
      envmap: {
        envMap: {
          value: null
        },
        flipEnvMap: {
          value: -1
        },
        reflectivity: {
          value: 1
        },
        refractionRatio: {
          value: .98
        },
        maxMipLevel: {
          value: 0
        }
      },
      aomap: {
        aoMap: {
          value: null
        },
        aoMapIntensity: {
          value: 1
        }
      },
      lightmap: {
        lightMap: {
          value: null
        },
        lightMapIntensity: {
          value: 1
        }
      },
      emissivemap: {
        emissiveMap: {
          value: null
        }
      },
      bumpmap: {
        bumpMap: {
          value: null
        },
        bumpScale: {
          value: 1
        }
      },
      normalmap: {
        normalMap: {
          value: null
        },
        normalScale: {
          value: new Rt(1, 1)
        }
      },
      displacementmap: {
        displacementMap: {
          value: null
        },
        displacementScale: {
          value: 1
        },
        displacementBias: {
          value: 0
        }
      },
      roughnessmap: {
        roughnessMap: {
          value: null
        }
      },
      metalnessmap: {
        metalnessMap: {
          value: null
        }
      },
      gradientmap: {
        gradientMap: {
          value: null
        }
      },
      fog: {
        fogDensity: {
          value: 25e-5
        },
        fogNear: {
          value: 1
        },
        fogFar: {
          value: 2e3
        },
        fogColor: {
          value: new ai(16777215)
        }
      },
      lights: {
        ambientLightColor: {
          value: []
        },
        lightProbe: {
          value: []
        },
        directionalLights: {
          value: [],
          properties: {
            direction: {},
            color: {},
            shadow: {},
            shadowBias: {},
            shadowRadius: {},
            shadowMapSize: {}
          }
        },
        directionalShadowMap: {
          value: []
        },
        directionalShadowMatrix: {
          value: []
        },
        spotLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            direction: {},
            distance: {},
            coneCos: {},
            penumbraCos: {},
            decay: {},
            shadow: {},
            shadowBias: {},
            shadowRadius: {},
            shadowMapSize: {}
          }
        },
        spotShadowMap: {
          value: []
        },
        spotShadowMatrix: {
          value: []
        },
        pointLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            decay: {},
            distance: {},
            shadow: {},
            shadowBias: {},
            shadowRadius: {},
            shadowMapSize: {},
            shadowCameraNear: {},
            shadowCameraFar: {}
          }
        },
        pointShadowMap: {
          value: []
        },
        pointShadowMatrix: {
          value: []
        },
        hemisphereLights: {
          value: [],
          properties: {
            direction: {},
            skyColor: {},
            groundColor: {}
          }
        },
        rectAreaLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            width: {},
            height: {}
          }
        }
      },
      points: {
        diffuse: {
          value: new ai(15658734)
        },
        opacity: {
          value: 1
        },
        size: {
          value: 1
        },
        scale: {
          value: 1
        },
        map: {
          value: null
        },
        alphaMap: {
          value: null
        },
        uvTransform: {
          value: new zt
        }
      },
      sprite: {
        diffuse: {
          value: new ai(15658734)
        },
        opacity: {
          value: 1
        },
        center: {
          value: new Rt(.5, .5)
        },
        rotation: {
          value: 0
        },
        map: {
          value: null
        },
        alphaMap: {
          value: null
        },
        uvTransform: {
          value: new zt
        }
      }
    },
    Mr = {
      basic: {
        uniforms: or([_r.common, _r.specularmap, _r.envmap, _r.aomap, _r.lightmap, _r.fog]),
        vertexShader: wr.meshbasic_vert,
        fragmentShader: wr.meshbasic_frag
      },
      lambert: {
        uniforms: or([_r.common, _r.specularmap, _r.envmap, _r.aomap, _r.lightmap, _r.emissivemap, _r.fog, _r.lights, {
          emissive: {
            value: new ai(0)
          }
        }]),
        vertexShader: wr.meshlambert_vert,
        fragmentShader: wr.meshlambert_frag
      },
      phong: {
        uniforms: or([_r.common, _r.specularmap, _r.envmap, _r.aomap, _r.lightmap, _r.emissivemap, _r.bumpmap, _r.normalmap, _r.displacementmap, _r.gradientmap, _r.fog, _r.lights, {
          emissive: {
            value: new ai(0)
          },
          specular: {
            value: new ai(1118481)
          },
          shininess: {
            value: 30
          }
        }]),
        vertexShader: wr.meshphong_vert,
        fragmentShader: wr.meshphong_frag
      },
      standard: {
        uniforms: or([_r.common, _r.envmap, _r.aomap, _r.lightmap, _r.emissivemap, _r.bumpmap, _r.normalmap, _r.displacementmap, _r.roughnessmap, _r.metalnessmap, _r.fog, _r.lights, {
          emissive: {
            value: new ai(0)
          },
          roughness: {
            value: .5
          },
          metalness: {
            value: .5
          },
          envMapIntensity: {
            value: 1
          }
        }]),
        vertexShader: wr.meshphysical_vert,
        fragmentShader: wr.meshphysical_frag
      },
      matcap: {
        uniforms: or([_r.common, _r.bumpmap, _r.normalmap, _r.displacementmap, _r.fog, {
          matcap: {
            value: null
          }
        }]),
        vertexShader: wr.meshmatcap_vert,
        fragmentShader: wr.meshmatcap_frag
      },
      points: {
        uniforms: or([_r.points, _r.fog]),
        vertexShader: wr.points_vert,
        fragmentShader: wr.points_frag
      },
      dashed: {
        uniforms: or([_r.common, _r.fog, {
          scale: {
            value: 1
          },
          dashSize: {
            value: 1
          },
          totalSize: {
            value: 2
          }
        }]),
        vertexShader: wr.linedashed_vert,
        fragmentShader: wr.linedashed_frag
      },
      depth: {
        uniforms: or([_r.common, _r.displacementmap]),
        vertexShader: wr.depth_vert,
        fragmentShader: wr.depth_frag
      },
      normal: {
        uniforms: or([_r.common, _r.bumpmap, _r.normalmap, _r.displacementmap, {
          opacity: {
            value: 1
          }
        }]),
        vertexShader: wr.normal_vert,
        fragmentShader: wr.normal_frag
      },
      sprite: {
        uniforms: or([_r.sprite, _r.fog]),
        vertexShader: wr.sprite_vert,
        fragmentShader: wr.sprite_frag
      },
      background: {
        uniforms: {
          uvTransform: {
            value: new zt
          },
          t2D: {
            value: null
          }
        },
        vertexShader: wr.background_vert,
        fragmentShader: wr.background_frag
      },
      cube: {
        uniforms: {
          tCube: {
            value: null
          },
          tFlip: {
            value: -1
          },
          opacity: {
            value: 1
          }
        },
        vertexShader: wr.cube_vert,
        fragmentShader: wr.cube_frag
      },
      equirect: {
        uniforms: {
          tEquirect: {
            value: null
          }
        },
        vertexShader: wr.equirect_vert,
        fragmentShader: wr.equirect_frag
      },
      distanceRGBA: {
        uniforms: or([_r.common, _r.displacementmap, {
          referencePosition: {
            value: new It
          },
          nearDistance: {
            value: 1
          },
          farDistance: {
            value: 1e3
          }
        }]),
        vertexShader: wr.distanceRGBA_vert,
        fragmentShader: wr.distanceRGBA_frag
      },
      shadow: {
        uniforms: or([_r.lights, _r.fog, {
          color: {
            value: new ai(0)
          },
          opacity: {
            value: 1
          }
        }]),
        vertexShader: wr.shadow_vert,
        fragmentShader: wr.shadow_frag
      }
    };

  function Sr() {
    var e = null,
      t = !1,
      n = null;

    function i(r, a) {
      !1 !== t && (n(r, a), e.requestAnimationFrame(i))
    }
    return {
      start: function() {
        !0 !== t && null !== n && (e.requestAnimationFrame(i), t = !0)
      },
      stop: function() {
        t = !1
      },
      setAnimationLoop: function(e) {
        n = e
      },
      setContext: function(t) {
        e = t
      }
    }
  }

  function Tr(e) {
    var t = new WeakMap;
    return {
      get: function(e) {
        return e.isInterleavedBufferAttribute && (e = e.data), t.get(e)
      },
      remove: function(n) {
        n.isInterleavedBufferAttribute && (n = n.data);
        var i = t.get(n);
        i && (e.deleteBuffer(i.buffer), t.delete(n))
      },
      update: function(n, i) {
        n.isInterleavedBufferAttribute && (n = n.data);
        var r = t.get(n);
        void 0 === r ? t.set(n, function(t, n) {
          var i = t.array,
            r = t.usage,
            a = e.createBuffer();
          e.bindBuffer(n, a), e.bufferData(n, i, r), t.onUploadCallback();
          var o = 5126;
          return i instanceof Float32Array ? o = 5126 : i instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : i instanceof Uint16Array ? o = 5123 : i instanceof Int16Array ? o = 5122 : i instanceof Uint32Array ? o = 5125 : i instanceof Int32Array ? o = 5124 : i instanceof Int8Array ? o = 5120 : i instanceof Uint8Array && (o = 5121), {
            buffer: a,
            type: o,
            bytesPerElement: i.BYTES_PER_ELEMENT,
            version: t.version
          }
        }(n, i)) : r.version < n.version && (! function(t, n, i) {
          var r = n.array,
            a = n.updateRange;
          e.bindBuffer(i, t), -1 === a.count ? e.bufferSubData(i, 0, r) : (e.bufferSubData(i, a.offset * r.BYTES_PER_ELEMENT, r.subarray(a.offset, a.offset + a.count)), a.count = -1)
        }(r.buffer, n, i), r.version = n.version)
      }
    }
  }

  function Er(e, t, n, i) {
    ir.call(this), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    }, this.fromBufferGeometry(new Ar(e, t, n, i)), this.mergeVertices()
  }

  function Ar(e, t, n, i) {
    Oi.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    var r, a, o = (e = e || 1) / 2,
      s = (t = t || 1) / 2,
      c = Math.floor(n) || 1,
      l = Math.floor(i) || 1,
      h = c + 1,
      u = l + 1,
      p = e / c,
      d = t / l,
      f = [],
      m = [],
      v = [],
      g = [];
    for (a = 0; a < u; a++) {
      var y = a * d - s;
      for (r = 0; r < h; r++) {
        var x = r * p - o;
        m.push(x, -y, 0), v.push(0, 0, 1), g.push(r / c), g.push(1 - a / l)
      }
    }
    for (a = 0; a < l; a++)
      for (r = 0; r < c; r++) {
        var b = r + h * a,
          w = r + h * (a + 1),
          _ = r + 1 + h * (a + 1),
          M = r + 1 + h * a;
        f.push(b, w, M), f.push(w, _, M)
      }
    this.setIndex(f), this.setAttribute("position", new wi(m, 3)), this.setAttribute("normal", new wi(v, 3)), this.setAttribute("uv", new wi(g, 2))
  }

  function Lr(e, t, n, i) {
    var r, a, o = new ai(0),
      s = 0,
      c = null,
      u = 0;

    function p(e, n) {
      t.buffers.color.setClear(e.r, e.g, e.b, n, i)
    }
    return {
      getClearColor: function() {
        return o
      },
      setClearColor: function(e, t) {
        o.set(e), p(o, s = void 0 !== t ? t : 1)
      },
      getClearAlpha: function() {
        return s
      },
      setClearAlpha: function(e) {
        p(o, s = e)
      },
      render: function(t, i, d, f) {
        var m = i.background,
          v = e.vr,
          g = v.getSession && v.getSession();
        if (g && "additive" === g.environmentBlendMode && (m = null), null === m ? (p(o, s), c = null, u = 0) : m && m.isColor && (p(m, 1), f = !0, c = null, u = 0), (e.autoClear || f) && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), m && (m.isCubeTexture || m.isWebGLRenderTargetCube)) {
          void 0 === a && ((a = new Ji(new rr(1, 1, 1), new hr({
            type: "BackgroundCubeMaterial",
            uniforms: ar(Mr.cube.uniforms),
            vertexShader: Mr.cube.vertexShader,
            fragmentShader: Mr.cube.fragmentShader,
            side: h,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
          }))).geometry.deleteAttribute("normal"), a.geometry.deleteAttribute("uv"), a.onBeforeRender = function(e, t, n) {
            this.matrixWorld.copyPosition(n.matrixWorld)
          }, Object.defineProperty(a.material, "map", {
            get: function() {
              return this.uniforms.tCube.value
            }
          }), n.update(a));
          var y = m.isWebGLRenderTargetCube ? m.texture : m;
          a.material.uniforms.tCube.value = y, a.material.uniforms.tFlip.value = m.isWebGLRenderTargetCube ? 1 : -1, c === m && u === y.version || (a.material.needsUpdate = !0, c = m, u = y.version), t.unshift(a, a.geometry, a.material, 0, 0, null)
        } else m && m.isTexture && (void 0 === r && ((r = new Ji(new Ar(2, 2), new hr({
          type: "BackgroundMaterial",
          uniforms: ar(Mr.background.uniforms),
          vertexShader: Mr.background.vertexShader,
          fragmentShader: Mr.background.fragmentShader,
          side: l,
          depthTest: !1,
          depthWrite: !1,
          fog: !1
        }))).geometry.deleteAttribute("normal"), Object.defineProperty(r.material, "map", {
          get: function() {
            return this.uniforms.t2D.value
          }
        }), n.update(r)), r.material.uniforms.t2D.value = m, !0 === m.matrixAutoUpdate && m.updateMatrix(), r.material.uniforms.uvTransform.value.copy(m.matrix), c === m && u === m.version || (r.material.needsUpdate = !0, c = m, u = m.version), t.unshift(r, r.geometry, r.material, 0, 0, null))
      }
    }
  }

  function Rr(e, t, n, i) {
    var r, a = i.isWebGL2;
    this.setMode = function(e) {
      r = e
    }, this.render = function(t, i) {
      e.drawArrays(r, t, i), n.update(i, r)
    }, this.renderInstances = function(i, o, s, c) {
      if (0 !== c) {
        var l, h;
        if (a) l = e, h = "drawArraysInstanced";
        else if (h = "drawArraysInstancedANGLE", null === (l = t.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        l[h](r, o, s, c), n.update(s, r, c)
      }
    }
  }

  function Pr(e, t, n) {
    var i;

    function r(t) {
      if ("highp" === t) {
        if (e.getShaderPrecisionFormat(35633, 36338).precision > 0 && e.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
        t = "mediump"
      }
      return "mediump" === t && e.getShaderPrecisionFormat(35633, 36337).precision > 0 && e.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
    }
    var a = "undefined" != typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && e instanceof WebGL2ComputeRenderingContext,
      o = void 0 !== n.precision ? n.precision : "highp",
      s = r(o);
    s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."), o = s);
    var c = !0 === n.logarithmicDepthBuffer,
      l = e.getParameter(34930),
      h = e.getParameter(35660),
      u = e.getParameter(3379),
      p = e.getParameter(34076),
      d = e.getParameter(34921),
      f = e.getParameter(36347),
      m = e.getParameter(36348),
      v = e.getParameter(36349),
      g = h > 0,
      y = a || !!t.get("OES_texture_float");
    return {
      isWebGL2: a,
      getMaxAnisotropy: function() {
        if (void 0 !== i) return i;
        var n = t.get("EXT_texture_filter_anisotropic");
        return i = null !== n ? e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
      },
      getMaxPrecision: r,
      precision: o,
      logarithmicDepthBuffer: c,
      maxTextures: l,
      maxVertexTextures: h,
      maxTextureSize: u,
      maxCubemapSize: p,
      maxAttributes: d,
      maxVertexUniforms: f,
      maxVaryings: m,
      maxFragmentUniforms: v,
      vertexTextures: g,
      floatFragmentTextures: y,
      floatVertexTextures: g && y,
      maxSamples: a ? e.getParameter(36183) : 0
    }
  }

  function Cr() {
    var e = this,
      t = null,
      n = 0,
      i = !1,
      r = !1,
      a = new jn,
      o = new zt,
      s = {
        value: null,
        needsUpdate: !1
      };

    function c() {
      s.value !== t && (s.value = t, s.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0
    }

    function l(t, n, i, r) {
      var c = null !== t ? t.length : 0,
        l = null;
      if (0 !== c) {
        if (l = s.value, !0 !== r || null === l) {
          var h = i + 4 * c,
            u = n.matrixWorldInverse;
          o.getNormalMatrix(u), (null === l || l.length < h) && (l = new Float32Array(h));
          for (var p = 0, d = i; p !== c; ++p, d += 4) a.copy(t[p]).applyMatrix4(u, o), a.normal.toArray(l, d), l[d + 3] = a.constant
        }
        s.value = l, s.needsUpdate = !0
      }
      return e.numPlanes = c, l
    }
    this.uniform = s, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e, r, a) {
      var o = 0 !== e.length || r || 0 !== n || i;
      return i = r, t = l(e, a, 0), n = e.length, o
    }, this.beginShadows = function() {
      r = !0, l(null)
    }, this.endShadows = function() {
      r = !1, c()
    }, this.setState = function(e, a, o, h, u, p) {
      if (!i || null === e || 0 === e.length || r && !o) r ? l(null) : c();
      else {
        var d = r ? 0 : n,
          f = 4 * d,
          m = u.clippingState || null;
        s.value = m, m = l(e, h, f, p);
        for (var v = 0; v !== f; ++v) m[v] = t[v];
        u.clippingState = m, this.numIntersection = a ? this.numPlanes : 0, this.numPlanes += d
      }
    }
  }

  function Or(e) {
    var t = {};
    return {
      get: function(n) {
        if (void 0 !== t[n]) return t[n];
        var i;
        switch (n) {
          case "WEBGL_depth_texture":
            i = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
            break;
          case "EXT_texture_filter_anisotropic":
            i = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
          case "WEBGL_compressed_texture_s3tc":
            i = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
          case "WEBGL_compressed_texture_pvrtc":
            i = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
          default:
            i = e.getExtension(n)
        }
        return null === i && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), t[n] = i, i
      }
    }
  }

  function Ir(e, t, n) {
    var i = new WeakMap,
      r = new WeakMap;

    function a(e) {
      var o = e.target,
        s = i.get(o);
      for (var c in null !== s.index && t.remove(s.index), s.attributes) t.remove(s.attributes[c]);
      o.removeEventListener("dispose", a), i.delete(o);
      var l = r.get(s);
      l && (t.remove(l), r.delete(s)), n.memory.geometries--
    }

    function o(e) {
      var n = [],
        i = e.index,
        a = e.attributes.position,
        o = 0;
      if (null !== i) {
        var s = i.array;
        o = i.version;
        for (var c = 0, l = s.length; c < l; c += 3) {
          var h = s[c + 0],
            u = s[c + 1],
            p = s[c + 2];
          n.push(h, u, u, p, p, h)
        }
      } else {
        s = a.array;
        o = a.version;
        for (c = 0, l = s.length / 3 - 1; c < l; c += 3) {
          h = c + 0, u = c + 1, p = c + 2;
          n.push(h, u, u, p, p, h)
        }
      }
      var d = new(Si(n) > 65535 ? bi : yi)(n, 1);
      d.version = o, t.update(d, 34963);
      var f = r.get(e);
      f && t.remove(f), r.set(e, d)
    }
    return {
      get: function(e, t) {
        var r = i.get(t);
        return r || (t.addEventListener("dispose", a), t.isBufferGeometry ? r = t : t.isGeometry && (void 0 === t._bufferGeometry && (t._bufferGeometry = (new Oi).setFromObject(e)), r = t._bufferGeometry), i.set(t, r), n.memory.geometries++, r)
      },
      update: function(e) {
        var n = e.index,
          i = e.attributes;
        for (var r in null !== n && t.update(n, 34963), i) t.update(i[r], 34962);
        var a = e.morphAttributes;
        for (var r in a)
          for (var o = a[r], s = 0, c = o.length; s < c; s++) t.update(o[s], 34962)
      },
      getWireframeAttribute: function(e) {
        var t = r.get(e);
        if (t) {
          var n = e.index;
          null !== n && t.version < n.version && o(e)
        } else o(e);
        return r.get(e)
      }
    }
  }

  function Nr(e, t, n, i) {
    var r, a, o, s = i.isWebGL2;
    this.setMode = function(e) {
      r = e
    }, this.setIndex = function(e) {
      a = e.type, o = e.bytesPerElement
    }, this.render = function(t, i) {
      e.drawElements(r, i, a, t * o), n.update(i, r)
    }, this.renderInstances = function(i, c, l, h) {
      if (0 !== h) {
        var u, p;
        if (s) u = e, p = "drawElementsInstanced";
        else if (p = "drawElementsInstancedANGLE", null === (u = t.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        u[p](r, l, a, c * o, h), n.update(l, r, h)
      }
    }
  }

  function Dr(e) {
    var t = {
      frame: 0,
      calls: 0,
      triangles: 0,
      points: 0,
      lines: 0
    };
    return {
      memory: {
        geometries: 0,
        textures: 0
      },
      render: t,
      programs: null,
      autoReset: !0,
      reset: function() {
        t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0
      },
      update: function(e, n, i) {
        switch (i = i || 1, t.calls++, n) {
          case 4:
            t.triangles += i * (e / 3);
            break;
          case 5:
          case 6:
            t.triangles += i * (e - 2);
            break;
          case 1:
            t.lines += i * (e / 2);
            break;
          case 3:
            t.lines += i * (e - 1);
            break;
          case 2:
            t.lines += i * e;
            break;
          case 0:
            t.points += i * e;
            break;
          default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", n)
        }
      }
    }
  }

  function zr(e, t) {
    return Math.abs(t[1]) - Math.abs(e[1])
  }

  function Ur(e) {
    var t = {},
      n = new Float32Array(8);
    return {
      update: function(i, r, a, o) {
        var s = i.morphTargetInfluences,
          c = s.length,
          l = t[r.id];
        if (void 0 === l) {
          l = [];
          for (var h = 0; h < c; h++) l[h] = [h, 0];
          t[r.id] = l
        }
        var u = a.morphTargets && r.morphAttributes.position,
          p = a.morphNormals && r.morphAttributes.normal;
        for (h = 0; h < c; h++) {
          0 !== (d = l[h])[1] && (u && r.deleteAttribute("morphTarget" + h), p && r.deleteAttribute("morphNormal" + h))
        }
        for (h = 0; h < c; h++) {
          (d = l[h])[0] = h, d[1] = s[h]
        }
        for (l.sort(zr), h = 0; h < 8; h++) {
          var d;
          if (d = l[h]) {
            var f = d[0],
              m = d[1];
            if (m) {
              u && r.setAttribute("morphTarget" + h, u[f]), p && r.setAttribute("morphNormal" + h, p[f]), n[h] = m;
              continue
            }
          }
          n[h] = 0
        }
        o.getUniforms().setValue(e, "morphTargetInfluences", n)
      }
    }
  }

  function Fr(e, t, n, i) {
    var r = {};
    return {
      update: function(e) {
        var a = i.render.frame,
          o = e.geometry,
          s = t.get(e, o);
        return r[s.id] !== a && (o.isGeometry && s.updateFromObject(e), t.update(s), r[s.id] = a), e.isInstancedMesh && n.update(e.instanceMatrix, 34962), s
      },
      dispose: function() {
        r = {}
      }
    }
  }

  function Br(e, t, n, i, r, a, o, s, c, l) {
    e = void 0 !== e ? e : [], t = void 0 !== t ? t : ee, o = void 0 !== o ? o : Re, Bt.call(this, e, t, n, i, r, a, o, s, c, l), this.flipY = !1
  }

  function Gr(e, t, n, i) {
    Bt.call(this, null), this.image = {
      data: e || null,
      width: t || 1,
      height: n || 1,
      depth: i || 1
    }, this.magFilter = he, this.minFilter = he, this.wrapR = ce, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0
  }

  function Hr(e, t, n, i) {
    Bt.call(this, null), this.image = {
      data: e || null,
      width: t || 1,
      height: n || 1,
      depth: i || 1
    }, this.magFilter = he, this.minFilter = he, this.wrapR = ce, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0
  }
  Mr.physical = {
    uniforms: or([Mr.standard.uniforms, {
      transparency: {
        value: 0
      },
      clearcoat: {
        value: 0
      },
      clearcoatRoughness: {
        value: 0
      },
      sheen: {
        value: new ai(0)
      },
      clearcoatNormalScale: {
        value: new Rt(1, 1)
      },
      clearcoatNormalMap: {
        value: null
      }
    }]),
    vertexShader: wr.meshphysical_vert,
    fragmentShader: wr.meshphysical_frag
  }, Er.prototype = Object.create(ir.prototype), Er.prototype.constructor = Er, Ar.prototype = Object.create(Oi.prototype), Ar.prototype.constructor = Ar, Br.prototype = Object.create(Bt.prototype), Br.prototype.constructor = Br, Br.prototype.isCubeTexture = !0, Object.defineProperty(Br.prototype, "images", {
    get: function() {
      return this.image
    },
    set: function(e) {
      this.image = e
    }
  }), Gr.prototype = Object.create(Bt.prototype), Gr.prototype.constructor = Gr, Gr.prototype.isDataTexture2DArray = !0, Hr.prototype = Object.create(Bt.prototype), Hr.prototype.constructor = Hr, Hr.prototype.isDataTexture3D = !0;
  var Vr = new Bt,
    kr = new Gr,
    jr = new Hr,
    Wr = new Br,
    qr = [],
    Xr = [],
    Yr = new Float32Array(16),
    Zr = new Float32Array(9),
    Jr = new Float32Array(4);

  function Kr(e, t, n) {
    var i = e[0];
    if (i <= 0 || i > 0) return e;
    var r = t * n,
      a = qr[r];
    if (void 0 === a && (a = new Float32Array(r), qr[r] = a), 0 !== t) {
      i.toArray(a, 0);
      for (var o = 1, s = 0; o !== t; ++o) s += n, e[o].toArray(a, s)
    }
    return a
  }

  function Qr(e, t) {
    if (e.length !== t.length) return !1;
    for (var n = 0, i = e.length; n < i; n++)
      if (e[n] !== t[n]) return !1;
    return !0
  }

  function $r(e, t) {
    for (var n = 0, i = t.length; n < i; n++) e[n] = t[n]
  }

  function ea(e, t) {
    var n = Xr[t];
    void 0 === n && (n = new Int32Array(t), Xr[t] = n);
    for (var i = 0; i !== t; ++i) n[i] = e.allocateTextureUnit();
    return n
  }

  function ta(e, t) {
    var n = this.cache;
    n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t)
  }

  function na(e, t) {
    var n = this.cache;
    if (void 0 !== t.x) n[0] === t.x && n[1] === t.y || (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
    else {
      if (Qr(n, t)) return;
      e.uniform2fv(this.addr, t), $r(n, t)
    }
  }

  function ia(e, t) {
    var n = this.cache;
    if (void 0 !== t.x) n[0] === t.x && n[1] === t.y && n[2] === t.z || (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
    else if (void 0 !== t.r) n[0] === t.r && n[1] === t.g && n[2] === t.b || (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
    else {
      if (Qr(n, t)) return;
      e.uniform3fv(this.addr, t), $r(n, t)
    }
  }

  function ra(e, t) {
    var n = this.cache;
    if (void 0 !== t.x) n[0] === t.x && n[1] === t.y && n[2] === t.z && n[3] === t.w || (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
    else {
      if (Qr(n, t)) return;
      e.uniform4fv(this.addr, t), $r(n, t)
    }
  }

  function aa(e, t) {
    var n = this.cache,
      i = t.elements;
    if (void 0 === i) {
      if (Qr(n, t)) return;
      e.uniformMatrix2fv(this.addr, !1, t), $r(n, t)
    } else {
      if (Qr(n, i)) return;
      Jr.set(i), e.uniformMatrix2fv(this.addr, !1, Jr), $r(n, i)
    }
  }

  function oa(e, t) {
    var n = this.cache,
      i = t.elements;
    if (void 0 === i) {
      if (Qr(n, t)) return;
      e.uniformMatrix3fv(this.addr, !1, t), $r(n, t)
    } else {
      if (Qr(n, i)) return;
      Zr.set(i), e.uniformMatrix3fv(this.addr, !1, Zr), $r(n, i)
    }
  }

  function sa(e, t) {
    var n = this.cache,
      i = t.elements;
    if (void 0 === i) {
      if (Qr(n, t)) return;
      e.uniformMatrix4fv(this.addr, !1, t), $r(n, t)
    } else {
      if (Qr(n, i)) return;
      Yr.set(i), e.uniformMatrix4fv(this.addr, !1, Yr), $r(n, i)
    }
  }

  function ca(e, t, n) {
    var i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.safeSetTexture2D(t || Vr, r)
  }

  function la(e, t, n) {
    var i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(t || kr, r)
  }

  function ha(e, t, n) {
    var i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(t || jr, r)
  }

  function ua(e, t, n) {
    var i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.safeSetTextureCube(t || Wr, r)
  }

  function pa(e, t) {
    var n = this.cache;
    n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t)
  }

  function da(e, t) {
    var n = this.cache;
    Qr(n, t) || (e.uniform2iv(this.addr, t), $r(n, t))
  }

  function fa(e, t) {
    var n = this.cache;
    Qr(n, t) || (e.uniform3iv(this.addr, t), $r(n, t))
  }

  function ma(e, t) {
    var n = this.cache;
    Qr(n, t) || (e.uniform4iv(this.addr, t), $r(n, t))
  }

  function va(e, t) {
    e.uniform1fv(this.addr, t)
  }

  function ga(e, t) {
    e.uniform1iv(this.addr, t)
  }

  function ya(e, t) {
    e.uniform2iv(this.addr, t)
  }

  function xa(e, t) {
    e.uniform3iv(this.addr, t)
  }

  function ba(e, t) {
    e.uniform4iv(this.addr, t)
  }

  function wa(e, t) {
    var n = Kr(t, this.size, 2);
    e.uniform2fv(this.addr, n)
  }

  function _a(e, t) {
    var n = Kr(t, this.size, 3);
    e.uniform3fv(this.addr, n)
  }

  function Ma(e, t) {
    var n = Kr(t, this.size, 4);
    e.uniform4fv(this.addr, n)
  }

  function Sa(e, t) {
    var n = Kr(t, this.size, 4);
    e.uniformMatrix2fv(this.addr, !1, n)
  }

  function Ta(e, t) {
    var n = Kr(t, this.size, 9);
    e.uniformMatrix3fv(this.addr, !1, n)
  }

  function Ea(e, t) {
    var n = Kr(t, this.size, 16);
    e.uniformMatrix4fv(this.addr, !1, n)
  }

  function Aa(e, t, n) {
    var i = t.length,
      r = ea(n, i);
    e.uniform1iv(this.addr, r);
    for (var a = 0; a !== i; ++a) n.safeSetTexture2D(t[a] || Vr, r[a])
  }

  function La(e, t, n) {
    var i = t.length,
      r = ea(n, i);
    e.uniform1iv(this.addr, r);
    for (var a = 0; a !== i; ++a) n.safeSetTextureCube(t[a] || Wr, r[a])
  }

  function Ra(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = function(e) {
      switch (e) {
        case 5126:
          return ta;
        case 35664:
          return na;
        case 35665:
          return ia;
        case 35666:
          return ra;
        case 35674:
          return aa;
        case 35675:
          return oa;
        case 35676:
          return sa;
        case 35678:
        case 36198:
          return ca;
        case 35679:
          return ha;
        case 35680:
          return ua;
        case 36289:
          return la;
        case 5124:
        case 35670:
          return pa;
        case 35667:
        case 35671:
          return da;
        case 35668:
        case 35672:
          return fa;
        case 35669:
        case 35673:
          return ma
      }
    }(t.type)
  }

  function Pa(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = function(e) {
      switch (e) {
        case 5126:
          return va;
        case 35664:
          return wa;
        case 35665:
          return _a;
        case 35666:
          return Ma;
        case 35674:
          return Sa;
        case 35675:
          return Ta;
        case 35676:
          return Ea;
        case 35678:
          return Aa;
        case 35680:
          return La;
        case 5124:
        case 35670:
          return ga;
        case 35667:
        case 35671:
          return ya;
        case 35668:
        case 35672:
          return xa;
        case 35669:
        case 35673:
          return ba
      }
    }(t.type)
  }

  function Ca(e) {
    this.id = e, this.seq = [], this.map = {}
  }
  Pa.prototype.updateCache = function(e) {
    var t = this.cache;
    e instanceof Float32Array && t.length !== e.length && (this.cache = new Float32Array(e.length)), $r(t, e)
  }, Ca.prototype.setValue = function(e, t, n) {
    for (var i = this.seq, r = 0, a = i.length; r !== a; ++r) {
      var o = i[r];
      o.setValue(e, t[o.id], n)
    }
  };
  var Oa = /([\w\d_]+)(\])?(\[|\.)?/g;

  function Ia(e, t) {
    e.seq.push(t), e.map[t.id] = t
  }

  function Na(e, t, n) {
    var i = e.name,
      r = i.length;
    for (Oa.lastIndex = 0;;) {
      var a = Oa.exec(i),
        o = Oa.lastIndex,
        s = a[1],
        c = "]" === a[2],
        l = a[3];
      if (c && (s |= 0), void 0 === l || "[" === l && o + 2 === r) {
        Ia(n, void 0 === l ? new Ra(s, e, t) : new Pa(s, e, t));
        break
      }
      var h = n.map[s];
      void 0 === h && Ia(n, h = new Ca(s)), n = h
    }
  }

  function Da(e, t) {
    this.seq = [], this.map = {};
    for (var n = e.getProgramParameter(t, 35718), i = 0; i < n; ++i) {
      var r = e.getActiveUniform(t, i);
      Na(r, e.getUniformLocation(t, r.name), this)
    }
  }

  function za(e, t, n) {
    var i = e.createShader(t);
    return e.shaderSource(i, n), e.compileShader(i), i
  }
  Da.prototype.setValue = function(e, t, n, i) {
    var r = this.map[t];
    void 0 !== r && r.setValue(e, n, i)
  }, Da.prototype.setOptional = function(e, t, n) {
    var i = t[n];
    void 0 !== i && this.setValue(e, n, i)
  }, Da.upload = function(e, t, n, i) {
    for (var r = 0, a = t.length; r !== a; ++r) {
      var o = t[r],
        s = n[o.id];
      !1 !== s.needsUpdate && o.setValue(e, s.value, i)
    }
  }, Da.seqWithValue = function(e, t) {
    for (var n = [], i = 0, r = e.length; i !== r; ++i) {
      var a = e[i];
      a.id in t && n.push(a)
    }
    return n
  };
  var Ua = 0;

  function Fa(e) {
    switch (e) {
      case ht:
        return ["Linear", "( value )"];
      case ut:
        return ["sRGB", "( value )"];
      case dt:
        return ["RGBE", "( value )"];
      case mt:
        return ["RGBM", "( value, 7.0 )"];
      case vt:
        return ["RGBM", "( value, 16.0 )"];
      case gt:
        return ["RGBD", "( value, 256.0 )"];
      case pt:
        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
      case ft:
        return ["LogLuv", "( value )"];
      default:
        throw new Error("unsupported encoding: " + e)
    }
  }

  function Ba(e, t, n) {
    var i = e.getShaderParameter(t, 35713),
      r = e.getShaderInfoLog(t).trim();
    return i && "" === r ? "" : "THREE.WebGLShader: gl.getShaderInfoLog() " + n + "\n" + r + function(e) {
      for (var t = e.split("\n"), n = 0; n < t.length; n++) t[n] = n + 1 + ": " + t[n];
      return t.join("\n")
    }(e.getShaderSource(t))
  }

  function Ga(e, t) {
    var n = Fa(t);
    return "vec4 " + e + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
  }

  function Ha(e, t) {
    var n;
    switch (t) {
      case Z:
        n = "Linear";
        break;
      case J:
        n = "Reinhard";
        break;
      case K:
        n = "Uncharted2";
        break;
      case Q:
        n = "OptimizedCineon";
        break;
      case $:
        n = "ACESFilmic";
        break;
      default:
        throw new Error("unsupported toneMapping: " + t)
    }
    return "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
  }

  function Va(e) {
    return "" !== e
  }

  function ka(e, t) {
    return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows)
  }

  function ja(e, t) {
    return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection)
  }
  var Wa = /^[ \t]*#include +<([\w\d./]+)>/gm;

  function qa(e) {
    return e.replace(Wa, Xa)
  }

  function Xa(e, t) {
    var n = wr[t];
    if (void 0 === n) throw new Error("Can not resolve #include <" + t + ">");
    return qa(n)
  }
  var Ya = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;

  function Za(e) {
    return e.replace(Ya, Ja)
  }

  function Ja(e, t, n, i) {
    for (var r = "", a = parseInt(t); a < parseInt(n); a++) r += i.replace(/\[ i \]/g, "[ " + a + " ]").replace(/UNROLLED_LOOP_INDEX/g, a);
    return r
  }

  function Ka(e) {
    var t = "precision " + e.precision + " float;\nprecision " + e.precision + " int;";
    return "highp" === e.precision ? t += "\n#define HIGH_PRECISION" : "mediump" === e.precision ? t += "\n#define MEDIUM_PRECISION" : "lowp" === e.precision && (t += "\n#define LOW_PRECISION"), t
  }

  function Qa(e, t, n, i, r, a) {
    var l, h, u, p, d, f = e.getContext(),
      m = i.defines,
      v = r.vertexShader,
      g = r.fragmentShader,
      y = function(e) {
        var t = "SHADOWMAP_TYPE_BASIC";
        return e.shadowMapType === o ? t = "SHADOWMAP_TYPE_PCF" : e.shadowMapType === s ? t = "SHADOWMAP_TYPE_PCF_SOFT" : e.shadowMapType === c && (t = "SHADOWMAP_TYPE_VSM"), t
      }(a),
      x = function(e) {
        var t = "ENVMAP_TYPE_CUBE";
        if (e.envMap) switch (e.envMapMode) {
          case ee:
          case te:
            t = "ENVMAP_TYPE_CUBE";
            break;
          case ae:
          case oe:
            t = "ENVMAP_TYPE_CUBE_UV";
            break;
          case ne:
          case ie:
            t = "ENVMAP_TYPE_EQUIREC";
            break;
          case re:
            t = "ENVMAP_TYPE_SPHERE"
        }
        return t
      }(a),
      b = function(e) {
        var t = "ENVMAP_MODE_REFLECTION";
        if (e.envMap) switch (e.envMapMode) {
          case te:
          case ie:
            t = "ENVMAP_MODE_REFRACTION"
        }
        return t
      }(a),
      w = function(e) {
        var t = "ENVMAP_BLENDING_MULTIPLY";
        if (e.envMap) switch (e.combine) {
          case W:
            t = "ENVMAP_BLENDING_MULTIPLY";
            break;
          case q:
            t = "ENVMAP_BLENDING_MIX";
            break;
          case X:
            t = "ENVMAP_BLENDING_ADD"
        }
        return t
      }(a),
      _ = e.gammaFactor > 0 ? e.gammaFactor : 1,
      M = a.isWebGL2 ? "" : function(e, t, n) {
        return [(e = e || {}).derivatives || t.envMapCubeUV || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (e.fragDepth || t.logarithmicDepthBuffer) && n.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", e.drawBuffers && n.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (e.shaderTextureLOD || t.envMap) && n.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Va).join("\n")
      }(i.extensions, a, t),
      S = function(e) {
        var t = [];
        for (var n in e) {
          var i = e[n];
          !1 !== i && t.push("#define " + n + " " + i)
        }
        return t.join("\n")
      }(m),
      T = f.createProgram(),
      E = a.numMultiviewViews;
    if (i.isRawShaderMaterial ? ((l = [S].filter(Va).join("\n")).length > 0 && (l += "\n"), (h = [M, S].filter(Va).join("\n")).length > 0 && (h += "\n")) : (l = [Ka(a), "#define SHADER_NAME " + r.name, S, a.instancing ? "#define USE_INSTANCING" : "", a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + _, "#define MAX_BONES " + a.maxBones, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp2 ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + b : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.normalMap && a.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", a.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", a.displacementMap && a.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexTangents ? "#define USE_TANGENT" : "", a.vertexColors ? "#define USE_COLOR" : "", a.vertexUvs ? "#define USE_UV" : "", a.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.skinning ? "#define USE_SKINNING" : "", a.useVertexTexture ? "#define BONE_TEXTURE" : "", a.morphTargets ? "#define USE_MORPHTARGETS" : "", a.morphNormals && !1 === a.flatShading ? "#define USE_MORPHNORMALS" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + y : "", a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (a.isWebGL2 || t.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", " attribute mat4 instanceMatrix;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Va).join("\n"), h = [M, Ka(a), "#define SHADER_NAME " + r.name, S, a.alphaTest ? "#define ALPHATEST " + a.alphaTest + (a.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + _, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp2 ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.matcap ? "#define USE_MATCAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + x : "", a.envMap ? "#define " + b : "", a.envMap ? "#define " + w : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.normalMap && a.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", a.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.sheen ? "#define USE_SHEEN" : "", a.vertexTangents ? "#define USE_TANGENT" : "", a.vertexColors ? "#define USE_COLOR" : "", a.vertexUvs ? "#define USE_UV" : "", a.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", a.gradientMap ? "#define USE_GRADIENTMAP" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + y : "", a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", a.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (a.isWebGL2 || t.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", (i.extensions && i.extensions.shaderTextureLOD || a.envMap) && (a.isWebGL2 || t.get("EXT_shader_texture_lod")) ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", a.toneMapping !== Y ? "#define TONE_MAPPING" : "", a.toneMapping !== Y ? wr.tonemapping_pars_fragment : "", a.toneMapping !== Y ? Ha("toneMapping", a.toneMapping) : "", a.dithering ? "#define DITHERING" : "", a.outputEncoding || a.mapEncoding || a.matcapEncoding || a.envMapEncoding || a.emissiveMapEncoding ? wr.encodings_pars_fragment : "", a.mapEncoding ? Ga("mapTexelToLinear", a.mapEncoding) : "", a.matcapEncoding ? Ga("matcapTexelToLinear", a.matcapEncoding) : "", a.envMapEncoding ? Ga("envMapTexelToLinear", a.envMapEncoding) : "", a.emissiveMapEncoding ? Ga("emissiveMapTexelToLinear", a.emissiveMapEncoding) : "", a.outputEncoding ? (u = "linearToOutputTexel", p = a.outputEncoding, d = Fa(p), "vec4 " + u + "( vec4 value ) { return LinearTo" + d[0] + d[1] + "; }") : "", a.depthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "", "\n"].filter(Va).join("\n")), v = ja(v = ka(v = qa(v), a), a), g = ja(g = ka(g = qa(g), a), a), v = Za(v), g = Za(g), a.isWebGL2 && !i.isRawShaderMaterial) {
      var A = !1,
        L = /^\s*#version\s+300\s+es\s*\n/;
      i.isShaderMaterial && null !== v.match(L) && null !== g.match(L) && (A = !0, v = v.replace(L, ""), g = g.replace(L, "")), l = ["#version 300 es\n", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + l, h = ["#version 300 es\n", "#define varying in", A ? "" : "out highp vec4 pc_fragColor;", A ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + h, E > 0 && (l = (l = l.replace("#version 300 es\n", ["#version 300 es\n", "#extension GL_OVR_multiview2 : require", "layout(num_views = " + E + ") in;", "#define VIEW_ID gl_ViewID_OVR"].join("\n"))).replace(["uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;"].join("\n"), ["uniform mat4 modelViewMatrices[" + E + "];", "uniform mat4 projectionMatrices[" + E + "];", "uniform mat4 viewMatrices[" + E + "];", "uniform mat3 normalMatrices[" + E + "];", "#define modelViewMatrix modelViewMatrices[VIEW_ID]", "#define projectionMatrix projectionMatrices[VIEW_ID]", "#define viewMatrix viewMatrices[VIEW_ID]", "#define normalMatrix normalMatrices[VIEW_ID]"].join("\n")), h = (h = h.replace("#version 300 es\n", ["#version 300 es\n", "#extension GL_OVR_multiview2 : require", "#define VIEW_ID gl_ViewID_OVR"].join("\n"))).replace("uniform mat4 viewMatrix;", ["uniform mat4 viewMatrices[" + E + "];", "#define viewMatrix viewMatrices[VIEW_ID]"].join("\n")))
    }
    var R, P, C = h + g,
      O = za(f, 35633, l + v),
      I = za(f, 35632, C);
    if (f.attachShader(T, O), f.attachShader(T, I), void 0 !== i.index0AttributeName ? f.bindAttribLocation(T, 0, i.index0AttributeName) : !0 === a.morphTargets && f.bindAttribLocation(T, 0, "position"), f.linkProgram(T), e.debug.checkShaderErrors) {
      var N = f.getProgramInfoLog(T).trim(),
        D = f.getShaderInfoLog(O).trim(),
        z = f.getShaderInfoLog(I).trim(),
        U = !0,
        F = !0;
      if (!1 === f.getProgramParameter(T, 35714)) {
        U = !1;
        var B = Ba(f, O, "vertex"),
          G = Ba(f, I, "fragment");
        console.error("THREE.WebGLProgram: shader error: ", f.getError(), "35715", f.getProgramParameter(T, 35715), "gl.getProgramInfoLog", N, B, G)
      } else "" !== N ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", N) : "" !== D && "" !== z || (F = !1);
      F && (this.diagnostics = {
        runnable: U,
        material: i,
        programLog: N,
        vertexShader: {
          log: D,
          prefix: l
        },
        fragmentShader: {
          log: z,
          prefix: h
        }
      })
    }
    return f.deleteShader(O), f.deleteShader(I), this.getUniforms = function() {
      return void 0 === R && (R = new Da(f, T)), R
    }, this.getAttributes = function() {
      return void 0 === P && (P = function(e, t) {
        for (var n = {}, i = e.getProgramParameter(t, 35721), r = 0; r < i; r++) {
          var a = e.getActiveAttrib(t, r).name;
          n[a] = e.getAttribLocation(t, a)
        }
        return n
      }(f, T)), P
    }, this.destroy = function() {
      f.deleteProgram(T), this.program = void 0
    }, this.name = r.name, this.id = Ua++, this.cacheKey = n, this.usedTimes = 1, this.program = T, this.vertexShader = O, this.fragmentShader = I, this.numMultiviewViews = E, this
  }

  function $a(e, t, n) {
    var i = [],
      r = n.isWebGL2,
      a = n.logarithmicDepthBuffer,
      o = n.floatVertexTextures,
      s = n.precision,
      c = n.maxVertexUniforms,
      l = n.vertexTextures,
      p = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distanceRGBA",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "phong",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite"
      },
      d = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "numMultiviewViews", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen"];

    function f(e, t) {
      var n;
      return e ? e.isTexture ? n = e.encoding : e.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), n = e.texture.encoding) : n = ht, n === ht && t && (n = pt), n
    }
    this.getParameters = function(t, i, d, m, v, g, y) {
      var x = p[t.type],
        b = y.isSkinnedMesh ? function(e) {
          var t = e.skeleton.bones;
          if (o) return 1024;
          var n = c,
            i = Math.floor((n - 20) / 4),
            r = Math.min(i, t.length);
          return r < t.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + t.length + " bones. This GPU supports " + r + "."), 0) : r
        }(y) : 0;
      null !== t.precision && (s = n.getMaxPrecision(t.precision)) !== t.precision && console.warn("THREE.WebGLProgram.getParameters:", t.precision, "not supported, using", s, "instead.");
      var w = e.getRenderTarget(),
        _ = w && w.isWebGLMultiviewRenderTarget ? w.numViews : 0;
      return {
        isWebGL2: r,
        shaderID: x,
        precision: s,
        instancing: !0 === y.isInstancedMesh,
        supportsVertexTextures: l,
        numMultiviewViews: _,
        outputEncoding: f(w ? w.texture : null, e.gammaOutput),
        map: !!t.map,
        mapEncoding: f(t.map, e.gammaInput),
        matcap: !!t.matcap,
        matcapEncoding: f(t.matcap, e.gammaInput),
        envMap: !!t.envMap,
        envMapMode: t.envMap && t.envMap.mapping,
        envMapEncoding: f(t.envMap, e.gammaInput),
        envMapCubeUV: !!t.envMap && (t.envMap.mapping === ae || t.envMap.mapping === oe),
        lightMap: !!t.lightMap,
        aoMap: !!t.aoMap,
        emissiveMap: !!t.emissiveMap,
        emissiveMapEncoding: f(t.emissiveMap, e.gammaInput),
        bumpMap: !!t.bumpMap,
        normalMap: !!t.normalMap,
        objectSpaceNormalMap: t.normalMapType === wt,
        tangentSpaceNormalMap: t.normalMapType === bt,
        clearcoatNormalMap: !!t.clearcoatNormalMap,
        displacementMap: !!t.displacementMap,
        roughnessMap: !!t.roughnessMap,
        metalnessMap: !!t.metalnessMap,
        specularMap: !!t.specularMap,
        alphaMap: !!t.alphaMap,
        gradientMap: !!t.gradientMap,
        sheen: !!t.sheen,
        combine: t.combine,
        vertexTangents: t.normalMap && t.vertexTangents,
        vertexColors: t.vertexColors,
        vertexUvs: !!(t.map || t.bumpMap || t.normalMap || t.specularMap || t.alphaMap || t.emissiveMap || t.roughnessMap || t.metalnessMap || t.clearcoatNormalMap || t.displacementMap),
        uvsVertexOnly: !(t.map || t.bumpMap || t.normalMap || t.specularMap || t.alphaMap || t.emissiveMap || t.roughnessMap || t.metalnessMap || t.clearcoatNormalMap || !t.displacementMap),
        fog: !!m,
        useFog: t.fog,
        fogExp2: m && m.isFogExp2,
        flatShading: t.flatShading,
        sizeAttenuation: t.sizeAttenuation,
        logarithmicDepthBuffer: a,
        skinning: t.skinning && b > 0,
        maxBones: b,
        useVertexTexture: o,
        morphTargets: t.morphTargets,
        morphNormals: t.morphNormals,
        maxMorphTargets: e.maxMorphTargets,
        maxMorphNormals: e.maxMorphNormals,
        numDirLights: i.directional.length,
        numPointLights: i.point.length,
        numSpotLights: i.spot.length,
        numRectAreaLights: i.rectArea.length,
        numHemiLights: i.hemi.length,
        numDirLightShadows: i.directionalShadowMap.length,
        numPointLightShadows: i.pointShadowMap.length,
        numSpotLightShadows: i.spotShadowMap.length,
        numClippingPlanes: v,
        numClipIntersection: g,
        dithering: t.dithering,
        shadowMapEnabled: e.shadowMap.enabled && d.length > 0,
        shadowMapType: e.shadowMap.type,
        toneMapping: t.toneMapped ? e.toneMapping : Y,
        physicallyCorrectLights: e.physicallyCorrectLights,
        premultipliedAlpha: t.premultipliedAlpha,
        alphaTest: t.alphaTest,
        doubleSided: t.side === u,
        flipSided: t.side === h,
        depthPacking: void 0 !== t.depthPacking && t.depthPacking
      }
    }, this.getProgramCacheKey = function(t, n) {
      var i = [];
      if (n.shaderID ? i.push(n.shaderID) : (i.push(t.fragmentShader), i.push(t.vertexShader)), void 0 !== t.defines)
        for (var r in t.defines) i.push(r), i.push(t.defines[r]);
      for (var a = 0; a < d.length; a++) i.push(n[d[a]]);
      return i.push(t.onBeforeCompile.toString()), i.push(e.gammaOutput), i.push(e.gammaFactor), i.join()
    }, this.acquireProgram = function(n, r, a, o) {
      for (var s, c = 0, l = i.length; c < l; c++) {
        var h = i[c];
        if (h.cacheKey === o) {
          ++(s = h).usedTimes;
          break
        }
      }
      return void 0 === s && (s = new Qa(e, t, o, n, r, a), i.push(s)), s
    }, this.releaseProgram = function(e) {
      if (0 == --e.usedTimes) {
        var t = i.indexOf(e);
        i[t] = i[i.length - 1], i.pop(), e.destroy()
      }
    }, this.programs = i
  }

  function eo() {
    var e = new WeakMap;
    return {
      get: function(t) {
        var n = e.get(t);
        return void 0 === n && (n = {}, e.set(t, n)), n
      },
      remove: function(t) {
        e.delete(t)
      },
      update: function(t, n, i) {
        e.get(t)[n] = i
      },
      dispose: function() {
        e = new WeakMap
      }
    }
  }

  function to(e, t) {
    return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.program !== t.program ? e.program.id - t.program.id : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
  }

  function no(e, t) {
    return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
  }

  function io() {
    var e = [],
      t = 0,
      n = [],
      i = [],
      r = {
        id: -1
      };

    function a(n, i, a, o, s, c) {
      var l = e[t];
      return void 0 === l ? (l = {
        id: n.id,
        object: n,
        geometry: i,
        material: a,
        program: a.program || r,
        groupOrder: o,
        renderOrder: n.renderOrder,
        z: s,
        group: c
      }, e[t] = l) : (l.id = n.id, l.object = n, l.geometry = i, l.material = a, l.program = a.program || r, l.groupOrder = o, l.renderOrder = n.renderOrder, l.z = s, l.group = c), t++, l
    }
    return {
      opaque: n,
      transparent: i,
      init: function() {
        t = 0, n.length = 0, i.length = 0
      },
      push: function(e, t, r, o, s, c) {
        var l = a(e, t, r, o, s, c);
        (!0 === r.transparent ? i : n).push(l)
      },
      unshift: function(e, t, r, o, s, c) {
        var l = a(e, t, r, o, s, c);
        (!0 === r.transparent ? i : n).unshift(l)
      },
      sort: function() {
        n.length > 1 && n.sort(to), i.length > 1 && i.sort(no)
      }
    }
  }

  function ro() {
    var e = new WeakMap;

    function t(n) {
      var i = n.target;
      i.removeEventListener("dispose", t), e.delete(i)
    }
    return {
      get: function(n, i) {
        var r, a = e.get(n);
        return void 0 === a ? (r = new io, e.set(n, new WeakMap), e.get(n).set(i, r), n.addEventListener("dispose", t)) : void 0 === (r = a.get(i)) && (r = new io, a.set(i, r)), r
      },
      dispose: function() {
        e = new WeakMap
      }
    }
  }

  function ao() {
    var e = {};
    return {
      get: function(t) {
        if (void 0 !== e[t.id]) return e[t.id];
        var n;
        switch (t.type) {
          case "DirectionalLight":
            n = {
              direction: new It,
              color: new ai,
              shadow: !1,
              shadowBias: 0,
              shadowRadius: 1,
              shadowMapSize: new Rt
            };
            break;
          case "SpotLight":
            n = {
              position: new It,
              direction: new It,
              color: new ai,
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0,
              shadow: !1,
              shadowBias: 0,
              shadowRadius: 1,
              shadowMapSize: new Rt
            };
            break;
          case "PointLight":
            n = {
              position: new It,
              color: new ai,
              distance: 0,
              decay: 0,
              shadow: !1,
              shadowBias: 0,
              shadowRadius: 1,
              shadowMapSize: new Rt,
              shadowCameraNear: 1,
              shadowCameraFar: 1e3
            };
            break;
          case "HemisphereLight":
            n = {
              direction: new It,
              skyColor: new ai,
              groundColor: new ai
            };
            break;
          case "RectAreaLight":
            n = {
              color: new ai,
              position: new It,
              halfWidth: new It,
              halfHeight: new It
            }
        }
        return e[t.id] = n, n
      }
    }
  }
  var oo = 0;

  function so(e, t) {
    return (t.castShadow ? 1 : 0) - (e.castShadow ? 1 : 0)
  }

  function co() {
    for (var e = new ao, t = {
        version: 0,
        hash: {
          directionalLength: -1,
          pointLength: -1,
          spotLength: -1,
          rectAreaLength: -1,
          hemiLength: -1,
          numDirectionalShadows: -1,
          numPointShadows: -1,
          numSpotShadows: -1
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotShadowMap: [],
        spotShadowMatrix: [],
        rectArea: [],
        point: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1
      }, n = 0; n < 9; n++) t.probe.push(new It);
    var i = new It,
      r = new Jt,
      a = new Jt;
    return {
      setup: function(n, o, s) {
        for (var c = 0, l = 0, h = 0, u = 0; u < 9; u++) t.probe[u].set(0, 0, 0);
        var p = 0,
          d = 0,
          f = 0,
          m = 0,
          v = 0,
          g = 0,
          y = 0,
          x = 0,
          b = s.matrixWorldInverse;
        n.sort(so), u = 0;
        for (var w = n.length; u < w; u++) {
          var _ = n[u],
            M = _.color,
            S = _.intensity,
            T = _.distance,
            E = _.shadow && _.shadow.map ? _.shadow.map.texture : null;
          if (_.isAmbientLight) c += M.r * S, l += M.g * S, h += M.b * S;
          else if (_.isLightProbe)
            for (var A = 0; A < 9; A++) t.probe[A].addScaledVector(_.sh.coefficients[A], S);
          else if (_.isDirectionalLight) {
            if ((R = e.get(_)).color.copy(_.color).multiplyScalar(_.intensity), R.direction.setFromMatrixPosition(_.matrixWorld), i.setFromMatrixPosition(_.target.matrixWorld), R.direction.sub(i), R.direction.transformDirection(b), R.shadow = _.castShadow, _.castShadow) {
              var L = _.shadow;
              R.shadowBias = L.bias, R.shadowRadius = L.radius, R.shadowMapSize = L.mapSize, t.directionalShadowMap[p] = E, t.directionalShadowMatrix[p] = _.shadow.matrix, g++
            }
            t.directional[p] = R, p++
          } else if (_.isSpotLight) {
            if ((R = e.get(_)).position.setFromMatrixPosition(_.matrixWorld), R.position.applyMatrix4(b), R.color.copy(M).multiplyScalar(S), R.distance = T, R.direction.setFromMatrixPosition(_.matrixWorld), i.setFromMatrixPosition(_.target.matrixWorld), R.direction.sub(i), R.direction.transformDirection(b), R.coneCos = Math.cos(_.angle), R.penumbraCos = Math.cos(_.angle * (1 - _.penumbra)), R.decay = _.decay, R.shadow = _.castShadow, _.castShadow) {
              L = _.shadow;
              R.shadowBias = L.bias, R.shadowRadius = L.radius, R.shadowMapSize = L.mapSize, t.spotShadowMap[f] = E, t.spotShadowMatrix[f] = _.shadow.matrix, x++
            }
            t.spot[f] = R, f++
          } else if (_.isRectAreaLight) {
            (R = e.get(_)).color.copy(M).multiplyScalar(S), R.position.setFromMatrixPosition(_.matrixWorld), R.position.applyMatrix4(b), a.identity(), r.copy(_.matrixWorld), r.premultiply(b), a.extractRotation(r), R.halfWidth.set(.5 * _.width, 0, 0), R.halfHeight.set(0, .5 * _.height, 0), R.halfWidth.applyMatrix4(a), R.halfHeight.applyMatrix4(a), t.rectArea[m] = R, m++
          } else if (_.isPointLight) {
            if ((R = e.get(_)).position.setFromMatrixPosition(_.matrixWorld), R.position.applyMatrix4(b), R.color.copy(_.color).multiplyScalar(_.intensity), R.distance = _.distance, R.decay = _.decay, R.shadow = _.castShadow, _.castShadow) {
              L = _.shadow;
              R.shadowBias = L.bias, R.shadowRadius = L.radius, R.shadowMapSize = L.mapSize, R.shadowCameraNear = L.camera.near, R.shadowCameraFar = L.camera.far, t.pointShadowMap[d] = E, t.pointShadowMatrix[d] = _.shadow.matrix, y++
            }
            t.point[d] = R, d++
          } else if (_.isHemisphereLight) {
            var R;
            (R = e.get(_)).direction.setFromMatrixPosition(_.matrixWorld), R.direction.transformDirection(b), R.direction.normalize(), R.skyColor.copy(_.color).multiplyScalar(S), R.groundColor.copy(_.groundColor).multiplyScalar(S), t.hemi[v] = R, v++
          }
        }
        t.ambient[0] = c, t.ambient[1] = l, t.ambient[2] = h;
        var P = t.hash;
        P.directionalLength === p && P.pointLength === d && P.spotLength === f && P.rectAreaLength === m && P.hemiLength === v && P.numDirectionalShadows === g && P.numPointShadows === y && P.numSpotShadows === x || (t.directional.length = p, t.spot.length = f, t.rectArea.length = m, t.point.length = d, t.hemi.length = v, t.directionalShadowMap.length = g, t.pointShadowMap.length = y, t.spotShadowMap.length = x, t.directionalShadowMatrix.length = g, t.pointShadowMatrix.length = y, t.spotShadowMatrix.length = x, P.directionalLength = p, P.pointLength = d, P.spotLength = f, P.rectAreaLength = m, P.hemiLength = v, P.numDirectionalShadows = g, P.numPointShadows = y, P.numSpotShadows = x, t.version = oo++)
      },
      state: t
    }
  }

  function lo() {
    var e = new co,
      t = [],
      n = [];
    return {
      init: function() {
        t.length = 0, n.length = 0
      },
      state: {
        lightsArray: t,
        shadowsArray: n,
        lights: e
      },
      setupLights: function(i) {
        e.setup(t, n, i)
      },
      pushLight: function(e) {
        t.push(e)
      },
      pushShadow: function(e) {
        n.push(e)
      }
    }
  }

  function ho() {
    var e = new WeakMap;

    function t(n) {
      var i = n.target;
      i.removeEventListener("dispose", t), e.delete(i)
    }
    return {
      get: function(n, i) {
        var r;
        return !1 === e.has(n) ? (r = new lo, e.set(n, new WeakMap), e.get(n).set(i, r), n.addEventListener("dispose", t)) : !1 === e.get(n).has(i) ? (r = new lo, e.get(n).set(i, r)) : r = e.get(n).get(i), r
      },
      dispose: function() {
        e = new WeakMap
      }
    }
  }

  function uo(e) {
    ui.call(this), this.type = "MeshDepthMaterial", this.depthPacking = yt, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(e)
  }

  function po(e) {
    ui.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new It, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(e)
  }
  uo.prototype = Object.create(ui.prototype), uo.prototype.constructor = uo, uo.prototype.isMeshDepthMaterial = !0, uo.prototype.copy = function(e) {
    return ui.prototype.copy.call(this, e), this.depthPacking = e.depthPacking, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
  }, po.prototype = Object.create(ui.prototype), po.prototype.constructor = po, po.prototype.isMeshDistanceMaterial = !0, po.prototype.copy = function(e) {
    return ui.prototype.copy.call(this, e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this
  };
  var fo = "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n  float mean = 0.0;\n  float squared_mean = 0.0;\n  \n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );\n  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n    #ifdef HORIZONAL_PASS\n      vec2 distribution = decodeHalfRGBA ( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n      mean += distribution.x;\n      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n    #else\n      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );\n      mean += depth;\n      squared_mean += depth * depth;\n    #endif\n  }\n  mean = mean * HALF_SAMPLE_RATE;\n  squared_mean = squared_mean * HALF_SAMPLE_RATE;\n  float std_dev = pow( squared_mean - mean * mean, 0.5 );\n  gl_FragColor = encodeHalfRGBA( vec2( mean, std_dev ) );\n}",
    mo = "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}";

  function vo(e, t, n) {
    var i = new br,
      r = new Rt,
      a = new Rt,
      s = new Gt,
      p = [],
      d = [],
      f = {},
      v = {
        0: h,
        1: l,
        2: u
      },
      g = new hr({
        defines: {
          SAMPLE_RATE: .25,
          HALF_SAMPLE_RATE: 1 / 8
        },
        uniforms: {
          shadow_pass: {
            value: null
          },
          resolution: {
            value: new Rt
          },
          radius: {
            value: 4
          }
        },
        vertexShader: mo,
        fragmentShader: fo
      }),
      y = g.clone();
    y.defines.HORIZONAL_PASS = 1;
    var x = new Oi;
    x.setAttribute("position", new di(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
    var b = new Ji(x, g),
      w = this;

    function _(n, i) {
      var r = t.update(b);
      g.uniforms.shadow_pass.value = n.map.texture, g.uniforms.resolution.value = n.mapSize, g.uniforms.radius.value = n.radius, e.setRenderTarget(n.mapPass), e.clear(), e.renderBufferDirect(i, null, r, g, b, null), y.uniforms.shadow_pass.value = n.mapPass.texture, y.uniforms.resolution.value = n.mapSize, y.uniforms.radius.value = n.radius, e.setRenderTarget(n.map), e.clear(), e.renderBufferDirect(i, null, r, y, b, null)
    }

    function M(e, t, n) {
      var i = e << 0 | t << 1 | n << 2,
        r = p[i];
      return void 0 === r && (r = new uo({
        depthPacking: xt,
        morphTargets: e,
        skinning: t
      }), p[i] = r), r
    }

    function S(e, t, n) {
      var i = e << 0 | t << 1 | n << 2,
        r = d[i];
      return void 0 === r && (r = new po({
        morphTargets: e,
        skinning: t
      }), d[i] = r), r
    }

    function T(t, n, i, r, a, o) {
      var s = t.geometry,
        l = null,
        h = M,
        u = t.customDepthMaterial;
      if (!0 === i.isPointLight && (h = S, u = t.customDistanceMaterial), void 0 === u) {
        var p = !1;
        !0 === n.morphTargets && (!0 === s.isBufferGeometry ? p = s.morphAttributes && s.morphAttributes.position && s.morphAttributes.position.length > 0 : !0 === s.isGeometry && (p = s.morphTargets && s.morphTargets.length > 0));
        var d = !1;
        !0 === t.isSkinnedMesh && (!0 === n.skinning ? d = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", t)), l = h(p, d, !0 === t.isInstancedMesh)
      } else l = u;
      if (e.localClippingEnabled && !0 === n.clipShadows && 0 !== n.clippingPlanes.length) {
        var m = l.uuid,
          g = n.uuid,
          y = f[m];
        void 0 === y && (y = {}, f[m] = y);
        var x = y[g];
        void 0 === x && (x = l.clone(), y[g] = x), l = x
      }
      return l.visible = n.visible, l.wireframe = n.wireframe, l.side = o === c ? null !== n.shadowSide ? n.shadowSide : n.side : null !== n.shadowSide ? n.shadowSide : v[n.side], l.clipShadows = n.clipShadows, l.clippingPlanes = n.clippingPlanes, l.clipIntersection = n.clipIntersection, l.wireframeLinewidth = n.wireframeLinewidth, l.linewidth = n.linewidth, !0 === i.isPointLight && !0 === l.isMeshDistanceMaterial && (l.referencePosition.setFromMatrixPosition(i.matrixWorld), l.nearDistance = r, l.farDistance = a), l
    }

    function E(n, r, a, o, s) {
      if (!1 !== n.visible) {
        if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && s === c) && (!n.frustumCulled || i.intersectsObject(n))) {
          n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
          var l = t.update(n),
            h = n.material;
          if (Array.isArray(h))
            for (var u = l.groups, p = 0, d = u.length; p < d; p++) {
              var f = u[p],
                m = h[f.materialIndex];
              if (m && m.visible) {
                var v = T(n, m, o, a.near, a.far, s);
                e.renderBufferDirect(a, null, l, v, n, f)
              }
            } else if (h.visible) {
              v = T(n, h, o, a.near, a.far, s);
              e.renderBufferDirect(a, null, l, v, n, null)
            }
        }
        for (var g = n.children, y = 0, x = g.length; y < x; y++) E(g[y], r, a, o, s)
      }
    }
    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = o, this.render = function(t, o, l) {
      if (!1 !== w.enabled && (!1 !== w.autoUpdate || !1 !== w.needsUpdate) && 0 !== t.length) {
        var h = e.getRenderTarget(),
          u = e.getActiveCubeFace(),
          p = e.getActiveMipmapLevel(),
          d = e.state;
        d.setBlending(m), d.buffers.color.setClear(1, 1, 1, 1), d.buffers.depth.setTest(!0), d.setScissorTest(!1);
        for (var f = 0, v = t.length; f < v; f++) {
          var g = t[f],
            y = g.shadow;
          if (void 0 !== y) {
            r.copy(y.mapSize);
            var x = y.getFrameExtents();
            if (r.multiply(x), a.copy(y.mapSize), (r.x > n || r.y > n) && (console.warn("THREE.WebGLShadowMap:", g, "has shadow exceeding max texture size, reducing"), r.x > n && (a.x = Math.floor(n / x.x), r.x = a.x * x.x, y.mapSize.x = a.x), r.y > n && (a.y = Math.floor(n / x.y), r.y = a.y * x.y, y.mapSize.y = a.y)), null === y.map && !y.isPointLightShadow && this.type === c) {
              var b = {
                minFilter: de,
                magFilter: de,
                format: Pe
              };
              y.map = new Ht(r.x, r.y, b), y.map.texture.name = g.name + ".shadowMap", y.mapPass = new Ht(r.x, r.y, b), y.camera.updateProjectionMatrix()
            }
            if (null === y.map) {
              b = {
                minFilter: he,
                magFilter: he,
                format: Pe
              };
              y.map = new Ht(r.x, r.y, b), y.map.texture.name = g.name + ".shadowMap", y.camera.updateProjectionMatrix()
            }
            e.setRenderTarget(y.map), e.clear();
            for (var M = y.getViewportCount(), S = 0; S < M; S++) {
              var T = y.getViewport(S);
              s.set(a.x * T.x, a.y * T.y, a.x * T.z, a.y * T.w), d.viewport(s), y.updateMatrices(g, S), i = y.getFrustum(), E(o, l, y.camera, g, this.type)
            }
            y.isPointLightShadow || this.type !== c || _(y, l)
          } else console.warn("THREE.WebGLShadowMap:", g, "has no shadow.")
        }
        w.needsUpdate = !1, e.setRenderTarget(h, u, p)
      }
    }
  }

  function go(e, t, n) {
    var o = n.isWebGL2;
    var s = new function() {
        var t = !1,
          n = new Gt,
          i = null,
          r = new Gt(0, 0, 0, 0);
        return {
          setMask: function(n) {
            i === n || t || (e.colorMask(n, n, n, n), i = n)
          },
          setLocked: function(e) {
            t = e
          },
          setClear: function(t, i, a, o, s) {
            !0 === s && (t *= o, i *= o, a *= o), n.set(t, i, a, o), !1 === r.equals(n) && (e.clearColor(t, i, a, o), r.copy(n))
          },
          reset: function() {
            t = !1, i = null, r.set(-1, 0, 0, 0)
          }
        }
      },
      c = new function() {
        var t = !1,
          n = null,
          i = null,
          r = null;
        return {
          setTest: function(e) {
            e ? xe(2929) : be(2929)
          },
          setMask: function(i) {
            n === i || t || (e.depthMask(i), n = i)
          },
          setFunc: function(t) {
            if (i !== t) {
              if (t) switch (t) {
                case U:
                  e.depthFunc(512);
                  break;
                case F:
                  e.depthFunc(519);
                  break;
                case B:
                  e.depthFunc(513);
                  break;
                case G:
                  e.depthFunc(515);
                  break;
                case H:
                  e.depthFunc(514);
                  break;
                case V:
                  e.depthFunc(518);
                  break;
                case k:
                  e.depthFunc(516);
                  break;
                case j:
                  e.depthFunc(517);
                  break;
                default:
                  e.depthFunc(515)
              } else e.depthFunc(515);
              i = t
            }
          },
          setLocked: function(e) {
            t = e
          },
          setClear: function(t) {
            r !== t && (e.clearDepth(t), r = t)
          },
          reset: function() {
            t = !1, n = null, i = null, r = null
          }
        }
      },
      l = new function() {
        var t = !1,
          n = null,
          i = null,
          r = null,
          a = null,
          o = null,
          s = null,
          c = null,
          l = null;
        return {
          setTest: function(e) {
            t || (e ? xe(2960) : be(2960))
          },
          setMask: function(i) {
            n === i || t || (e.stencilMask(i), n = i)
          },
          setFunc: function(t, n, o) {
            i === t && r === n && a === o || (e.stencilFunc(t, n, o), i = t, r = n, a = o)
          },
          setOp: function(t, n, i) {
            o === t && s === n && c === i || (e.stencilOp(t, n, i), o = t, s = n, c = i)
          },
          setLocked: function(e) {
            t = e
          },
          setClear: function(t) {
            l !== t && (e.clearStencil(t), l = t)
          },
          reset: function() {
            t = !1, n = null, i = null, r = null, a = null, o = null, s = null, c = null, l = null
          }
        }
      },
      p = e.getParameter(34921),
      d = new Uint8Array(p),
      f = new Uint8Array(p),
      W = new Uint8Array(p),
      q = {},
      X = null,
      Y = null,
      Z = null,
      J = null,
      K = null,
      Q = null,
      $ = null,
      ee = null,
      te = null,
      ne = !1,
      ie = null,
      re = null,
      ae = null,
      oe = null,
      se = null,
      ce = e.getParameter(35661),
      le = !1,
      he = 0,
      ue = e.getParameter(7938); - 1 !== ue.indexOf("WebGL") ? (he = parseFloat(/^WebGL\ ([0-9])/.exec(ue)[1]), le = he >= 1) : -1 !== ue.indexOf("OpenGL ES") && (he = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(ue)[1]), le = he >= 2);
    var pe = null,
      de = {},
      fe = new Gt,
      me = new Gt;

    function ve(t, n, i) {
      var r = new Uint8Array(4),
        a = e.createTexture();
      e.bindTexture(t, a), e.texParameteri(t, 10241, 9728), e.texParameteri(t, 10240, 9728);
      for (var o = 0; o < i; o++) e.texImage2D(n + o, 0, 6408, 1, 1, 0, 6408, 5121, r);
      return a
    }
    var ge = {};

    function ye(n, i) {
      (d[n] = 1, 0 === f[n] && (e.enableVertexAttribArray(n), f[n] = 1), W[n] !== i) && ((o ? e : t.get("ANGLE_instanced_arrays"))[o ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, i), W[n] = i)
    }

    function xe(t) {
      !0 !== q[t] && (e.enable(t), q[t] = !0)
    }

    function be(t) {
      !1 !== q[t] && (e.disable(t), q[t] = !1)
    }
    ge[3553] = ve(3553, 3553, 1), ge[34067] = ve(34067, 34069, 6), s.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), xe(2929), c.setFunc(G), Te(!1), Ee(r), xe(2884), Se(m);
    var we = {
      [w]: 32774,
      [_]: 32778,
      [M]: 32779
    };
    if (o) we[S] = 32775, we[T] = 32776;
    else {
      var _e = t.get("EXT_blend_minmax");
      null !== _e && (we[S] = _e.MIN_EXT, we[T] = _e.MIN_EXT)
    }
    var Me = {
      [E]: 0,
      [A]: 1,
      [L]: 768,
      [P]: 770,
      [z]: 776,
      [N]: 774,
      [O]: 772,
      [R]: 769,
      [C]: 771,
      [D]: 775,
      [I]: 773
    };

    function Se(t, n, i, r, a, o, s, c) {
      if (t !== m) {
        if (Y || (xe(3042), Y = !0), t === b) a = a || n, o = o || i, s = s || r, n === J && a === $ || (e.blendEquationSeparate(we[n], we[a]), J = n, $ = a), i === K && r === Q && o === ee && s === te || (e.blendFuncSeparate(Me[i], Me[r], Me[o], Me[s]), K = i, Q = r, ee = o, te = s), Z = t, ne = null;
        else if (t !== Z || c !== ne) {
          if (J === w && $ === w || (e.blendEquation(32774), J = w, $ = w), c) switch (t) {
            case v:
              e.blendFuncSeparate(1, 771, 1, 771);
              break;
            case g:
              e.blendFunc(1, 1);
              break;
            case y:
              e.blendFuncSeparate(0, 0, 769, 771);
              break;
            case x:
              e.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", t)
          } else switch (t) {
            case v:
              e.blendFuncSeparate(770, 771, 1, 771);
              break;
            case g:
              e.blendFunc(770, 1);
              break;
            case y:
              e.blendFunc(0, 769);
              break;
            case x:
              e.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", t)
          }
          K = null, Q = null, ee = null, te = null, Z = t, ne = c
        }
      } else Y && (be(3042), Y = !1)
    }

    function Te(t) {
      ie !== t && (t ? e.frontFace(2304) : e.frontFace(2305), ie = t)
    }

    function Ee(t) {
      t !== i ? (xe(2884), t !== re && (t === r ? e.cullFace(1029) : t === a ? e.cullFace(1028) : e.cullFace(1032))) : be(2884), re = t
    }

    function Ae(t, n, i) {
      t ? (xe(32823), oe === n && se === i || (e.polygonOffset(n, i), oe = n, se = i)) : be(32823)
    }

    function Le(t) {
      void 0 === t && (t = 33984 + ce - 1), pe !== t && (e.activeTexture(t), pe = t)
    }
    return {
      buffers: {
        color: s,
        depth: c,
        stencil: l
      },
      initAttributes: function() {
        for (var e = 0, t = d.length; e < t; e++) d[e] = 0
      },
      enableAttribute: function(e) {
        ye(e, 0)
      },
      enableAttributeAndDivisor: ye,
      disableUnusedAttributes: function() {
        for (var t = 0, n = f.length; t !== n; ++t) f[t] !== d[t] && (e.disableVertexAttribArray(t), f[t] = 0)
      },
      enable: xe,
      disable: be,
      useProgram: function(t) {
        return X !== t && (e.useProgram(t), X = t, !0)
      },
      setBlending: Se,
      setMaterial: function(e, t) {
        e.side === u ? be(2884) : xe(2884);
        var n = e.side === h;
        t && (n = !n), Te(n), e.blending === v && !1 === e.transparent ? Se(m) : Se(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha), c.setFunc(e.depthFunc), c.setTest(e.depthTest), c.setMask(e.depthWrite), s.setMask(e.colorWrite);
        var i = e.stencilWrite;
        l.setTest(i), i && (l.setMask(e.stencilWriteMask), l.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask), l.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)), Ae(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
      },
      setFlipSided: Te,
      setCullFace: Ee,
      setLineWidth: function(t) {
        t !== ae && (le && e.lineWidth(t), ae = t)
      },
      setPolygonOffset: Ae,
      setScissorTest: function(e) {
        e ? xe(3089) : be(3089)
      },
      activeTexture: Le,
      bindTexture: function(t, n) {
        null === pe && Le();
        var i = de[pe];
        void 0 === i && (i = {
          type: void 0,
          texture: void 0
        }, de[pe] = i), i.type === t && i.texture === n || (e.bindTexture(t, n || ge[t]), i.type = t, i.texture = n)
      },
      unbindTexture: function() {
        var t = de[pe];
        void 0 !== t && void 0 !== t.type && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0)
      },
      compressedTexImage2D: function() {
        try {
          e.compressedTexImage2D.apply(e, arguments)
        } catch (e) {
          console.error("THREE.WebGLState:", e)
        }
      },
      texImage2D: function() {
        try {
          e.texImage2D.apply(e, arguments)
        } catch (e) {
          console.error("THREE.WebGLState:", e)
        }
      },
      texImage3D: function() {
        try {
          e.texImage3D.apply(e, arguments)
        } catch (e) {
          console.error("THREE.WebGLState:", e)
        }
      },
      scissor: function(t) {
        !1 === fe.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), fe.copy(t))
      },
      viewport: function(t) {
        !1 === me.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), me.copy(t))
      },
      reset: function() {
        for (var t = 0; t < f.length; t++) 1 === f[t] && (e.disableVertexAttribArray(t), f[t] = 0);
        q = {}, pe = null, de = {}, X = null, Z = null, ie = null, re = null, s.reset(), c.reset(), l.reset()
      }
    }
  }

  function yo(e, t, n, i, r, a, o) {
    var s, c = r.isWebGL2,
      l = r.maxTextures,
      h = r.maxCubemapSize,
      u = r.maxTextureSize,
      p = r.maxSamples,
      d = new WeakMap,
      f = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");

    function m(e, t) {
      return f ? new OffscreenCanvas(e, t) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
    }

    function v(e, t, n, i) {
      var r = 1;
      if ((e.width > i || e.height > i) && (r = i / Math.max(e.width, e.height)), r < 1 || !0 === t) {
        if ("undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap) {
          var a = t ? Lt.floorPowerOfTwo : Math.floor,
            o = a(r * e.width),
            c = a(r * e.height);
          void 0 === s && (s = m(o, c));
          var l = n ? m(o, c) : s;
          return l.width = o, l.height = c, l.getContext("2d").drawImage(e, 0, 0, o, c), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + e.width + "x" + e.height + ") to (" + o + "x" + c + ")."), l
        }
        return "data" in e && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + e.width + "x" + e.height + ")."), e
      }
      return e
    }

    function g(e) {
      return Lt.isPowerOfTwo(e.width) && Lt.isPowerOfTwo(e.height)
    }

    function y(e, t) {
      return e.generateMipmaps && t && e.minFilter !== he && e.minFilter !== de
    }

    function x(t, n, r, a) {
      e.generateMipmap(t), i.get(n).__maxMipLevel = Math.log(Math.max(r, a)) * Math.LOG2E
    }

    function b(e, n) {
      if (!1 === c) return e;
      var i = e;
      return 6403 === e && (5126 === n && (i = 33326), 5131 === n && (i = 33325), 5121 === n && (i = 33321)), 6407 === e && (5126 === n && (i = 34837), 5131 === n && (i = 34843), 5121 === n && (i = 32849)), 6408 === e && (5126 === n && (i = 34836), 5131 === n && (i = 34842), 5121 === n && (i = 32856)), 33325 === i || 33326 === i || 34842 === i || 34836 === i ? t.get("EXT_color_buffer_float") : 34843 !== i && 34837 !== i || console.warn("THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead."), i
    }

    function w(e) {
      return e === he || e === ue || e === pe ? 9728 : 9729
    }

    function _(t) {
      var n = t.target;
      n.removeEventListener("dispose", _),
        function(t) {
          var n = i.get(t);
          if (void 0 === n.__webglInit) return;
          e.deleteTexture(n.__webglTexture), i.remove(t)
        }(n), n.isVideoTexture && d.delete(n), o.memory.textures--
    }

    function M(t) {
      var n = t.target;
      n.removeEventListener("dispose", M),
        function(t) {
          var n = i.get(t),
            r = i.get(t.texture);
          if (!t) return;
          void 0 !== r.__webglTexture && e.deleteTexture(r.__webglTexture);
          t.depthTexture && t.depthTexture.dispose();
          if (t.isWebGLRenderTargetCube)
            for (var a = 0; a < 6; a++) e.deleteFramebuffer(n.__webglFramebuffer[a]), n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer[a]);
          else e.deleteFramebuffer(n.__webglFramebuffer), n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer);
          if (t.isWebGLMultiviewRenderTarget) {
            e.deleteTexture(n.__webglColorTexture), e.deleteTexture(n.__webglDepthStencilTexture), o.memory.textures -= 2;
            a = 0;
            for (var s = n.__webglViewFramebuffers.length; a < s; a++) e.deleteFramebuffer(n.__webglViewFramebuffers[a])
          }
          i.remove(t.texture), i.remove(t)
        }(n), o.memory.textures--
    }
    var S = 0;

    function T(e, t) {
      var r = i.get(e);
      if (e.isVideoTexture && function(e) {
          var t = o.render.frame;
          d.get(e) !== t && (d.set(e, t), e.update())
        }(e), e.version > 0 && r.__version !== e.version) {
        var a = e.image;
        if (void 0 === a) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
        else {
          if (!1 !== a.complete) return void O(r, e, t);
          console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
        }
      }
      n.activeTexture(33984 + t), n.bindTexture(3553, r.__webglTexture)
    }

    function E(t, r) {
      if (6 === t.image.length) {
        var o = i.get(t);
        if (t.version > 0 && o.__version !== t.version) {
          C(o, t), n.activeTexture(33984 + r), n.bindTexture(34067, o.__webglTexture), e.pixelStorei(37440, t.flipY);
          for (var s = t && t.isCompressedTexture, l = t.image[0] && t.image[0].isDataTexture, u = [], p = 0; p < 6; p++) u[p] = s || l ? l ? t.image[p].image : t.image[p] : v(t.image[p], !1, !0, h);
          var d, f = u[0],
            m = g(f) || c,
            w = a.convert(t.format),
            _ = a.convert(t.type),
            M = b(w, _);
          if (P(34067, t, m), s) {
            for (p = 0; p < 6; p++) {
              d = u[p].mipmaps;
              for (var S = 0; S < d.length; S++) {
                var T = d[S];
                t.format !== Pe && t.format !== Re ? null !== w ? n.compressedTexImage2D(34069 + p, S, M, T.width, T.height, 0, T.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + p, S, M, T.width, T.height, 0, w, _, T.data)
              }
            }
            o.__maxMipLevel = d.length - 1
          } else {
            d = t.mipmaps;
            for (p = 0; p < 6; p++)
              if (l) {
                n.texImage2D(34069 + p, 0, M, u[p].width, u[p].height, 0, w, _, u[p].data);
                for (S = 0; S < d.length; S++) {
                  var E = (T = d[S]).image[p].image;
                  n.texImage2D(34069 + p, S + 1, M, E.width, E.height, 0, w, _, E.data)
                }
              } else {
                n.texImage2D(34069 + p, 0, M, w, _, u[p]);
                for (S = 0; S < d.length; S++) {
                  T = d[S];
                  n.texImage2D(34069 + p, S + 1, M, w, _, T.image[p])
                }
              } o.__maxMipLevel = d.length
          }
          y(t, m) && x(34067, t, f.width, f.height), o.__version = t.version, t.onUpdate && t.onUpdate(t)
        } else n.activeTexture(33984 + r), n.bindTexture(34067, o.__webglTexture)
      }
    }

    function A(e, t) {
      n.activeTexture(33984 + t), n.bindTexture(34067, i.get(e).__webglTexture)
    }
    var L = {
        [se]: 10497,
        [ce]: 33071,
        [le]: 33648
      },
      R = {
        [he]: 9728,
        [ue]: 9984,
        [pe]: 9986,
        [de]: 9729,
        [fe]: 9985,
        [me]: 9987
      };

    function P(n, a, o) {
      o ? (e.texParameteri(n, 10242, L[a.wrapS]), e.texParameteri(n, 10243, L[a.wrapT]), 32879 !== n && 35866 !== n || e.texParameteri(n, 32882, L[a.wrapR]), e.texParameteri(n, 10240, R[a.magFilter]), e.texParameteri(n, 10241, R[a.minFilter])) : (e.texParameteri(n, 10242, 33071), e.texParameteri(n, 10243, 33071), 32879 !== n && 35866 !== n || e.texParameteri(n, 32882, 33071), a.wrapS === ce && a.wrapT === ce || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), e.texParameteri(n, 10240, w(a.magFilter)), e.texParameteri(n, 10241, w(a.minFilter)), a.minFilter !== he && a.minFilter !== de && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));
      var s = t.get("EXT_texture_filter_anisotropic");
      if (s) {
        if (a.type === _e && null === t.get("OES_texture_float_linear")) return;
        if (a.type === Me && null === (c || t.get("OES_texture_half_float_linear"))) return;
        (a.anisotropy > 1 || i.get(a).__currentAnisotropy) && (e.texParameterf(n, s.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, r.getMaxAnisotropy())), i.get(a).__currentAnisotropy = a.anisotropy)
      }
    }

    function C(t, n) {
      void 0 === t.__webglInit && (t.__webglInit = !0, n.addEventListener("dispose", _), t.__webglTexture = e.createTexture(), o.memory.textures++)
    }

    function O(t, i, r) {
      var o = 3553;
      i.isDataTexture2DArray && (o = 35866), i.isDataTexture3D && (o = 32879), C(t, i), n.activeTexture(33984 + r), n.bindTexture(o, t.__webglTexture), e.pixelStorei(37440, i.flipY), e.pixelStorei(37441, i.premultiplyAlpha), e.pixelStorei(3317, i.unpackAlignment);
      var s = function(e) {
          return !c && (e.wrapS !== ce || e.wrapT !== ce || e.minFilter !== he && e.minFilter !== de)
        }(i) && !1 === g(i.image),
        l = v(i.image, s, !1, u),
        h = g(l) || c,
        p = a.convert(i.format),
        d = a.convert(i.type),
        f = b(p, d);
      P(o, i, h);
      var m, w = i.mipmaps;
      if (i.isDepthTexture) {
        if (f = 6402, i.type === _e) {
          if (!1 === c) throw new Error("Float Depth Texture only supported in WebGL2.0");
          f = 36012
        } else c && (f = 33189);
        i.format === Ie && 6402 === f && i.type !== xe && i.type !== we && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = xe, d = a.convert(i.type)), i.format === Ne && (f = 34041, i.type !== Ae && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = Ae, d = a.convert(i.type))), n.texImage2D(3553, 0, f, l.width, l.height, 0, p, d, null)
      } else if (i.isDataTexture)
        if (w.length > 0 && h) {
          for (var _ = 0, M = w.length; _ < M; _++) m = w[_], n.texImage2D(3553, _, f, m.width, m.height, 0, p, d, m.data);
          i.generateMipmaps = !1, t.__maxMipLevel = w.length - 1
        } else n.texImage2D(3553, 0, f, l.width, l.height, 0, p, d, l.data), t.__maxMipLevel = 0;
      else if (i.isCompressedTexture) {
        for (_ = 0, M = w.length; _ < M; _++) m = w[_], i.format !== Pe && i.format !== Re ? null !== p ? n.compressedTexImage2D(3553, _, f, m.width, m.height, 0, m.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(3553, _, f, m.width, m.height, 0, p, d, m.data);
        t.__maxMipLevel = w.length - 1
      } else if (i.isDataTexture2DArray) n.texImage3D(35866, 0, f, l.width, l.height, l.depth, 0, p, d, l.data), t.__maxMipLevel = 0;
      else if (i.isDataTexture3D) n.texImage3D(32879, 0, f, l.width, l.height, l.depth, 0, p, d, l.data), t.__maxMipLevel = 0;
      else if (w.length > 0 && h) {
        for (_ = 0, M = w.length; _ < M; _++) m = w[_], n.texImage2D(3553, _, f, p, d, m);
        i.generateMipmaps = !1, t.__maxMipLevel = w.length - 1
      } else n.texImage2D(3553, 0, f, p, d, l), t.__maxMipLevel = 0;
      y(i, h) && x(3553, i, l.width, l.height), t.__version = i.version, i.onUpdate && i.onUpdate(i)
    }

    function I(t, r, o, s) {
      var c = a.convert(r.texture.format),
        l = a.convert(r.texture.type),
        h = b(c, l);
      n.texImage2D(s, 0, h, r.width, r.height, 0, c, l, null), e.bindFramebuffer(36160, t), e.framebufferTexture2D(36160, o, s, i.get(r.texture).__webglTexture, 0), e.bindFramebuffer(36160, null)
    }

    function N(t, n, i) {
      if (e.bindRenderbuffer(36161, t), n.depthBuffer && !n.stencilBuffer) {
        if (i) {
          var r = z(n);
          e.renderbufferStorageMultisample(36161, r, 33189, n.width, n.height)
        } else e.renderbufferStorage(36161, 33189, n.width, n.height);
        e.framebufferRenderbuffer(36160, 36096, 36161, t)
      } else if (n.depthBuffer && n.stencilBuffer) {
        if (i) {
          r = z(n);
          e.renderbufferStorageMultisample(36161, r, 35056, n.width, n.height)
        } else e.renderbufferStorage(36161, 34041, n.width, n.height);
        e.framebufferRenderbuffer(36160, 33306, 36161, t)
      } else {
        var o = b(a.convert(n.texture.format), a.convert(n.texture.type));
        if (i) {
          r = z(n);
          e.renderbufferStorageMultisample(36161, r, o, n.width, n.height)
        } else e.renderbufferStorage(36161, o, n.width, n.height)
      }
      e.bindRenderbuffer(36161, null)
    }

    function D(t) {
      var n = i.get(t),
        r = !0 === t.isWebGLRenderTargetCube;
      if (t.depthTexture) {
        if (r) throw new Error("target.depthTexture not supported in Cube render targets");
        ! function(t, n) {
          if (n && n.isWebGLRenderTargetCube) throw new Error("Depth Texture with cube render targets is not supported");
          if (e.bindFramebuffer(36160, t), !n.depthTexture || !n.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
          i.get(n.depthTexture).__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height || (n.depthTexture.image.width = n.width, n.depthTexture.image.height = n.height, n.depthTexture.needsUpdate = !0), T(n.depthTexture, 0);
          var r = i.get(n.depthTexture).__webglTexture;
          if (n.depthTexture.format === Ie) e.framebufferTexture2D(36160, 36096, 3553, r, 0);
          else {
            if (n.depthTexture.format !== Ne) throw new Error("Unknown depthTexture format");
            e.framebufferTexture2D(36160, 33306, 3553, r, 0)
          }
        }(n.__webglFramebuffer, t)
      } else if (r) {
        n.__webglDepthbuffer = [];
        for (var a = 0; a < 6; a++) e.bindFramebuffer(36160, n.__webglFramebuffer[a]), n.__webglDepthbuffer[a] = e.createRenderbuffer(), N(n.__webglDepthbuffer[a], t)
      } else e.bindFramebuffer(36160, n.__webglFramebuffer), n.__webglDepthbuffer = e.createRenderbuffer(), N(n.__webglDepthbuffer, t);
      e.bindFramebuffer(36160, null)
    }

    function z(e) {
      return c && e.isWebGLMultisampleRenderTarget ? Math.min(p, e.samples) : 0
    }
    var U = !1,
      F = !1;
    this.allocateTextureUnit = function() {
      var e = S;
      return e >= l && console.warn("THREE.WebGLTextures: Trying to use " + e + " texture units while this GPU supports only " + l), S += 1, e
    }, this.resetTextureUnits = function() {
      S = 0
    }, this.setTexture2D = T, this.setTexture2DArray = function(e, t) {
      var r = i.get(e);
      e.version > 0 && r.__version !== e.version ? O(r, e, t) : (n.activeTexture(33984 + t), n.bindTexture(35866, r.__webglTexture))
    }, this.setTexture3D = function(e, t) {
      var r = i.get(e);
      e.version > 0 && r.__version !== e.version ? O(r, e, t) : (n.activeTexture(33984 + t), n.bindTexture(32879, r.__webglTexture))
    }, this.setTextureCube = E, this.setTextureCubeDynamic = A, this.setupRenderTarget = function(r) {
      var s = i.get(r),
        l = i.get(r.texture);
      r.addEventListener("dispose", M), l.__webglTexture = e.createTexture(), o.memory.textures++;
      var h = !0 === r.isWebGLRenderTargetCube,
        u = !0 === r.isWebGLMultisampleRenderTarget,
        p = !0 === r.isWebGLMultiviewRenderTarget,
        d = g(r) || c;
      if (h) {
        s.__webglFramebuffer = [];
        for (var f = 0; f < 6; f++) s.__webglFramebuffer[f] = e.createFramebuffer()
      } else if (s.__webglFramebuffer = e.createFramebuffer(), u)
        if (c) {
          s.__webglMultisampledFramebuffer = e.createFramebuffer(), s.__webglColorRenderbuffer = e.createRenderbuffer(), e.bindRenderbuffer(36161, s.__webglColorRenderbuffer);
          var m = b(a.convert(r.texture.format), a.convert(r.texture.type)),
            v = z(r);
          e.renderbufferStorageMultisample(36161, v, m, r.width, r.height), e.bindFramebuffer(36160, s.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(36160, 36064, 36161, s.__webglColorRenderbuffer), e.bindRenderbuffer(36161, null), r.depthBuffer && (s.__webglDepthRenderbuffer = e.createRenderbuffer(), N(s.__webglDepthRenderbuffer, r, !0)), e.bindFramebuffer(36160, null)
        } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
      else if (p) {
        var w = r.width,
          _ = r.height,
          S = r.numViews;
        e.bindFramebuffer(36160, s.__webglFramebuffer);
        var T = t.get("OVR_multiview2");
        o.memory.textures += 2;
        var E = e.createTexture();
        e.bindTexture(35866, E), e.texParameteri(35866, 10240, 9728), e.texParameteri(35866, 10241, 9728), e.texImage3D(35866, 0, 32856, w, _, S, 0, 6408, 5121, null), T.framebufferTextureMultiviewOVR(36160, 36064, E, 0, 0, S);
        var A = e.createTexture();
        e.bindTexture(35866, A), e.texParameteri(35866, 10240, 9728), e.texParameteri(35866, 10241, 9728), e.texImage3D(35866, 0, 35056, w, _, S, 0, 34041, 34042, null), T.framebufferTextureMultiviewOVR(36160, 33306, A, 0, 0, S);
        var L = new Array(S);
        for (f = 0; f < S; ++f) L[f] = e.createFramebuffer(), e.bindFramebuffer(36160, L[f]), e.framebufferTextureLayer(36160, 36064, E, 0, f);
        s.__webglColorTexture = E, s.__webglDepthStencilTexture = A, s.__webglViewFramebuffers = L, e.bindFramebuffer(36160, null), e.bindTexture(35866, null)
      }
      if (h) {
        n.bindTexture(34067, l.__webglTexture), P(34067, r.texture, d);
        for (f = 0; f < 6; f++) I(s.__webglFramebuffer[f], r, 36064, 34069 + f);
        y(r.texture, d) && x(34067, r.texture, r.width, r.height), n.bindTexture(34067, null)
      } else p || (n.bindTexture(3553, l.__webglTexture), P(3553, r.texture, d), I(s.__webglFramebuffer, r, 36064, 3553), y(r.texture, d) && x(3553, r.texture, r.width, r.height), n.bindTexture(3553, null));
      r.depthBuffer && D(r)
    }, this.updateRenderTargetMipmap = function(e) {
      var t = e.texture;
      if (y(t, g(e) || c)) {
        var r = e.isWebGLRenderTargetCube ? 34067 : 3553,
          a = i.get(t).__webglTexture;
        n.bindTexture(r, a), x(r, t, e.width, e.height), n.bindTexture(r, null)
      }
    }, this.updateMultisampleRenderTarget = function(t) {
      if (t.isWebGLMultisampleRenderTarget)
        if (c) {
          var n = i.get(t);
          e.bindFramebuffer(36008, n.__webglMultisampledFramebuffer), e.bindFramebuffer(36009, n.__webglFramebuffer);
          var r = t.width,
            a = t.height,
            o = 16384;
          t.depthBuffer && (o |= 256), t.stencilBuffer && (o |= 1024), e.blitFramebuffer(0, 0, r, a, 0, 0, r, a, o, 9728)
        } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
    }, this.safeSetTexture2D = function(e, t) {
      e && e.isWebGLRenderTarget && (!1 === U && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), U = !0), e = e.texture), T(e, t)
    }, this.safeSetTextureCube = function(e, t) {
      e && e.isWebGLRenderTargetCube && (!1 === F && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), F = !0), e = e.texture), e && e.isCubeTexture || Array.isArray(e.image) && 6 === e.image.length ? E(e, t) : A(e, t)
    }
  }

  function xo(e, t, n) {
    var i = n.isWebGL2;
    return {
      convert: function(e) {
        var n;
        if (e === ve) return 5121;
        if (e === Se) return 32819;
        if (e === Te) return 32820;
        if (e === Ee) return 33635;
        if (e === ge) return 5120;
        if (e === ye) return 5122;
        if (e === xe) return 5123;
        if (e === be) return 5124;
        if (e === we) return 5125;
        if (e === _e) return 5126;
        if (e === Me) return i ? 5131 : null !== (n = t.get("OES_texture_half_float")) ? n.HALF_FLOAT_OES : null;
        if (e === Le) return 6406;
        if (e === Re) return 6407;
        if (e === Pe) return 6408;
        if (e === Ce) return 6409;
        if (e === Oe) return 6410;
        if (e === Ie) return 6402;
        if (e === Ne) return 34041;
        if (e === De) return 6403;
        if (e === ze || e === Ue || e === Fe || e === Be) {
          if (null === (n = t.get("WEBGL_compressed_texture_s3tc"))) return null;
          if (e === ze) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (e === Ue) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (e === Fe) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (e === Be) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT
        }
        if (e === Ge || e === He || e === Ve || e === ke) {
          if (null === (n = t.get("WEBGL_compressed_texture_pvrtc"))) return null;
          if (e === Ge) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if (e === He) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if (e === Ve) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if (e === ke) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
        }
        return e === je ? null !== (n = t.get("WEBGL_compressed_texture_etc1")) ? n.COMPRESSED_RGB_ETC1_WEBGL : null : e === We || e === qe || e === Xe || e === Ye || e === Ze || e === Je || e === Ke || e === Qe || e === $e || e === et || e === tt || e === nt || e === it || e === rt ? null !== (n = t.get("WEBGL_compressed_texture_astc")) ? e : null : e === Ae ? i ? 34042 : null !== (n = t.get("WEBGL_depth_texture")) ? n.UNSIGNED_INT_24_8_WEBGL : null : void 0
      }
    }
  }

  function bo(e, t, n, i) {
    Ht.call(this, e, t, i), this.depthBuffer = !1, this.stencilBuffer = !1, this.numViews = n
  }

  function wo(e, t) {
    var n, i, r, a, o, s, c, l = 2,
      h = e.extensions,
      u = e.properties,
      p = 0;

    function d(e) {
      return e.isArrayCamera ? e.cameras : (o[0] = e, o)
    }
    this.isAvailable = function() {
      if (void 0 === c) {
        var e = h.get("OVR_multiview2");
        if (c = null !== e && !1 === t.getContextAttributes().antialias) {
          p = t.getParameter(e.MAX_VIEWS_OVR), n = new bo(0, 0, l), s = new Rt, a = [], r = [], o = [];
          for (var i = 0; i < p; i++) a[i] = new Jt, r[i] = new zt
        }
      }
      return c
    }, this.attachCamera = function(t) {
      !1 !== function(e) {
        if (void 0 === e.isArrayCamera) return !0;
        var t = e.cameras;
        if (t.length > p) return !1;
        for (var n = 1, i = t.length; n < i; n++)
          if (t[0].viewport.z !== t[n].viewport.z || t[0].viewport.w !== t[n].viewport.w) return !1;
        return !0
      }(t) && (i = e.getRenderTarget(), function(t) {
        if (i ? s.set(i.width, i.height) : e.getDrawingBufferSize(s), t.isArrayCamera) {
          var r = t.cameras[0].viewport;
          n.setSize(r.z, r.w), n.setNumViews(t.cameras.length)
        } else n.setSize(s.x, s.y), n.setNumViews(l)
      }(t), e.setRenderTarget(n))
    }, this.detachCamera = function(r) {
      n === e.getRenderTarget() && (e.setRenderTarget(i), function(e) {
        var i = n,
          r = i.numViews,
          a = u.get(i).__webglViewFramebuffers,
          o = i.width,
          c = i.height;
        if (e.isArrayCamera)
          for (var l = 0; l < r; l++) {
            var h = e.cameras[l].viewport,
              p = h.x,
              d = h.y,
              f = p + h.z,
              m = d + h.w;
            t.bindFramebuffer(36008, a[l]), t.blitFramebuffer(0, 0, o, c, p, d, f, m, 16384, 9728)
          } else t.bindFramebuffer(36008, a[0]), t.blitFramebuffer(0, 0, o, c, 0, 0, s.x, s.y, 16384, 9728)
      }(r))
    }, this.updateCameraProjectionMatricesUniform = function(e, n) {
      for (var i = d(e), r = 0; r < i.length; r++) a[r].copy(i[r].projectionMatrix);
      n.setValue(t, "projectionMatrices", a)
    }, this.updateCameraViewMatricesUniform = function(e, n) {
      for (var i = d(e), r = 0; r < i.length; r++) a[r].copy(i[r].matrixWorldInverse);
      n.setValue(t, "viewMatrices", a)
    }, this.updateObjectMatricesUniforms = function(e, n, i) {
      for (var o = d(n), s = 0; s < o.length; s++) a[s].multiplyMatrices(o[s].matrixWorldInverse, e.matrixWorld), r[s].getNormalMatrix(a[s]);
      i.setValue(t, "modelViewMatrices", a), i.setValue(t, "normalMatrices", r)
    }
  }

  function _o() {
    mn.call(this), this.type = "Group"
  }

  function Mo(e) {
    pr.call(this), this.cameras = e || []
  }
  bo.prototype = Object.assign(Object.create(Ht.prototype), {
    constructor: bo,
    isWebGLMultiviewRenderTarget: !0,
    copy: function(e) {
      return Ht.prototype.copy.call(this, e), this.numViews = e.numViews, this
    },
    setNumViews: function(e) {
      return this.numViews !== e && (this.numViews = e, this.dispose()), this
    }
  }), _o.prototype = Object.assign(Object.create(mn.prototype), {
    constructor: _o,
    isGroup: !0
  }), Mo.prototype = Object.assign(Object.create(pr.prototype), {
    constructor: Mo,
    isArrayCamera: !0
  });
  var So, To = new It,
    Eo = new It;

  function Ao(e, t, n) {
    To.setFromMatrixPosition(t.matrixWorld), Eo.setFromMatrixPosition(n.matrixWorld);
    var i = To.distanceTo(Eo),
      r = t.projectionMatrix.elements,
      a = n.projectionMatrix.elements,
      o = r[14] / (r[10] - 1),
      s = r[14] / (r[10] + 1),
      c = (r[9] + 1) / r[5],
      l = (r[9] - 1) / r[5],
      h = (r[8] - 1) / r[0],
      u = (a[8] + 1) / a[0],
      p = o * h,
      d = o * u,
      f = i / (-h + u),
      m = f * -h;
    t.matrixWorld.decompose(e.position, e.quaternion, e.scale), e.translateX(m), e.translateZ(f), e.matrixWorld.compose(e.position, e.quaternion, e.scale), e.matrixWorldInverse.getInverse(e.matrixWorld);
    var v = o + f,
      g = s + f,
      y = p - m,
      x = d + (i - m),
      b = c * s / g * v,
      w = l * s / g * v;
    e.projectionMatrix.makePerspective(y, x, b, w, v, g)
  }

  function Lo(e) {
    var t, n, i = this,
      r = null,
      a = null,
      o = null,
      s = [],
      c = new Jt,
      l = new Jt,
      h = 1,
      u = "local-floor";
    "undefined" != typeof window && "VRFrameData" in window && (a = new window.VRFrameData, window.addEventListener("vrdisplaypresentchange", w, !1));
    var p = new Jt,
      d = new Pt,
      f = new It,
      m = new pr;
    m.viewport = new Gt, m.layers.enable(1);
    var v = new pr;
    v.viewport = new Gt, v.layers.enable(2);
    var g = new Mo([m, v]);

    function y() {
      return null !== r && !0 === r.isPresenting
    }
    g.layers.enable(1), g.layers.enable(2);
    var x, b = new Rt;

    function w() {
      if (y()) {
        var a = r.getEyeParameters("left");
        t = 2 * a.renderWidth * h, n = a.renderHeight * h, x = e.getPixelRatio(), e.getSize(b), e.setDrawingBufferSize(t, n, 1), m.viewport.set(0, 0, t / 2, n), v.viewport.set(t / 2, 0, t / 2, n), T.start(), i.dispatchEvent({
          type: "sessionstart"
        })
      } else i.enabled && e.setDrawingBufferSize(b.width, b.height, x), T.stop(), i.dispatchEvent({
        type: "sessionend"
      })
    }
    var _ = [];

    function M(e) {
      for (var t = navigator.getGamepads && navigator.getGamepads(), n = 0, i = t.length; n < i; n++) {
        var r = t[n];
        if (r && ("Daydream Controller" === r.id || "Gear VR Controller" === r.id || "Oculus Go Controller" === r.id || "OpenVR Gamepad" === r.id || r.id.startsWith("Oculus Touch") || r.id.startsWith("HTC Vive Focus") || r.id.startsWith("Spatial Controller"))) {
          var a = r.hand;
          if (0 === e && ("" === a || "right" === a)) return r;
          if (1 === e && "left" === a) return r
        }
      }
    }

    function S(e, i) {
      null !== i && 4 === i.length && e.set(i[0] * t, i[1] * n, i[2] * t, i[3] * n)
    }
    this.enabled = !1, this.getController = function(e) {
      var t = s[e];
      return void 0 === t && ((t = new _o).matrixAutoUpdate = !1, t.visible = !1, s[e] = t), t
    }, this.getDevice = function() {
      return r
    }, this.setDevice = function(e) {
      void 0 !== e && (r = e), T.setContext(e)
    }, this.setFramebufferScaleFactor = function(e) {
      h = e
    }, this.setReferenceSpaceType = function(e) {
      u = e
    }, this.setPoseTarget = function(e) {
      void 0 !== e && (o = e)
    }, this.getCamera = function(e) {
      var t = "local-floor" === u ? 1.6 : 0;
      if (!1 === y()) return e.position.set(0, t, 0), e.rotation.set(0, 0, 0), e;
      if (r.depthNear = e.near, r.depthFar = e.far, r.getFrameData(a), "local-floor" === u) {
        var n = r.stageParameters;
        n ? c.fromArray(n.sittingToStandingTransform) : c.makeTranslation(0, t, 0)
      }
      var i = a.pose,
        h = null !== o ? o : e;
      h.matrix.copy(c), h.matrix.decompose(h.position, h.quaternion, h.scale), null !== i.orientation && (d.fromArray(i.orientation), h.quaternion.multiply(d)), null !== i.position && (d.setFromRotationMatrix(c), f.fromArray(i.position), f.applyQuaternion(d), h.position.add(f)), h.updateMatrixWorld(), m.near = e.near, v.near = e.near, m.far = e.far, v.far = e.far, m.matrixWorldInverse.fromArray(a.leftViewMatrix), v.matrixWorldInverse.fromArray(a.rightViewMatrix), l.getInverse(c), "local-floor" === u && (m.matrixWorldInverse.multiply(l), v.matrixWorldInverse.multiply(l));
      var x = h.parent;
      null !== x && (p.getInverse(x.matrixWorld), m.matrixWorldInverse.multiply(p), v.matrixWorldInverse.multiply(p)), m.matrixWorld.getInverse(m.matrixWorldInverse), v.matrixWorld.getInverse(v.matrixWorldInverse), m.projectionMatrix.fromArray(a.leftProjectionMatrix), v.projectionMatrix.fromArray(a.rightProjectionMatrix), Ao(g, m, v);
      var b = r.getLayers();
      if (b.length) {
        var w = b[0];
        S(m.viewport, w.leftBounds), S(v.viewport, w.rightBounds)
      }
      return function() {
        for (var e = 0; e < s.length; e++) {
          var t = s[e],
            n = M(e);
          if (void 0 !== n && void 0 !== n.pose) {
            if (null === n.pose) return;
            var i = n.pose;
            !1 === i.hasPosition && t.position.set(.2, -.6, -.05), null !== i.position && t.position.fromArray(i.position), null !== i.orientation && t.quaternion.fromArray(i.orientation), t.matrix.compose(t.position, t.quaternion, t.scale), t.matrix.premultiply(c), t.matrix.decompose(t.position, t.quaternion, t.scale), t.matrixWorldNeedsUpdate = !0, t.visible = !0;
            var r = "Daydream Controller" === n.id ? 0 : 1;
            void 0 === _[e] && (_[e] = !1), _[e] !== n.buttons[r].pressed && (_[e] = n.buttons[r].pressed, !0 === _[e] ? t.dispatchEvent({
              type: "selectstart"
            }) : (t.dispatchEvent({
              type: "selectend"
            }), t.dispatchEvent({
              type: "select"
            })))
          } else t.visible = !1
        }
      }(), g
    }, this.getStandingMatrix = function() {
      return c
    }, this.isPresenting = y;
    var T = new Sr;
    this.setAnimationLoop = function(e) {
      T.setAnimationLoop(e), y() && T.start()
    }, this.submitFrame = function() {
      y() && r.submitFrame()
    }, this.dispose = function() {
      "undefined" != typeof window && window.removeEventListener("vrdisplaypresentchange", w)
    }, this.setFrameOfReferenceType = function() {
      console.warn("THREE.WebVRManager: setFrameOfReferenceType() has been deprecated.")
    }
  }

  function Ro(e, t) {
    var n = this,
      i = null,
      r = null,
      a = "local-floor",
      o = null,
      s = [],
      c = [];

    function l() {
      return null !== i && null !== r
    }
    var h = new pr;
    h.layers.enable(1), h.viewport = new Gt;
    var u = new pr;
    u.layers.enable(2), u.viewport = new Gt;
    var p = new Mo([h, u]);

    function d(e) {
      for (var t = 0; t < s.length; t++) c[t] === e.inputSource && s[t].dispatchEvent({
        type: e.type
      })
    }

    function f() {
      e.setFramebuffer(null), e.setRenderTarget(e.getRenderTarget()), b.stop(), n.dispatchEvent({
        type: "sessionend"
      })
    }

    function m(e) {
      r = e, b.setContext(i), b.start(), n.dispatchEvent({
        type: "sessionstart"
      })
    }

    function v() {
      for (var e = 0; e < s.length; e++) c[e] = g(e)
    }

    function g(e) {
      for (var t = i.inputSources, n = 0; n < t.length; n++) {
        var r = t[n],
          a = r.handedness;
        if (0 === e && ("none" === a || "right" === a)) return r;
        if (1 === e && "left" === a) return r
      }
    }

    function y(e, t) {
      null === t ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.getInverse(e.matrixWorld)
    }
    p.layers.enable(1), p.layers.enable(2), this.enabled = !1, this.getController = function(e) {
      var t = s[e];
      return void 0 === t && ((t = new _o).matrixAutoUpdate = !1, t.visible = !1, s[e] = t), t
    }, this.setFramebufferScaleFactor = function() {}, this.setReferenceSpaceType = function(e) {
      a = e
    }, this.getSession = function() {
      return i
    }, this.setSession = function(e) {
      null !== (i = e) && (i.addEventListener("select", d), i.addEventListener("selectstart", d), i.addEventListener("selectend", d), i.addEventListener("end", f), i.updateRenderState({
        baseLayer: new XRWebGLLayer(i, t)
      }), i.requestReferenceSpace(a).then(m), i.addEventListener("inputsourceschange", v), v())
    }, this.getCamera = function(e) {
      if (l()) {
        var t = e.parent,
          n = p.cameras;
        y(p, t);
        for (var i = 0; i < n.length; i++) y(n[i], t);
        e.matrixWorld.copy(p.matrixWorld);
        for (var r = e.children, a = (i = 0, r.length); i < a; i++) r[i].updateMatrixWorld(!0);
        return Ao(p, h, u), p
      }
      return e
    }, this.isPresenting = l;
    var x = null;
    var b = new Sr;
    b.setAnimationLoop((function(t, n) {
      if (null !== (o = n.getViewerPose(r))) {
        var a = o.views,
          l = i.renderState.baseLayer;
        e.setFramebuffer(l.framebuffer);
        for (var h = 0; h < a.length; h++) {
          var u = a[h],
            d = l.getViewport(u),
            f = u.transform.inverse.matrix,
            m = p.cameras[h];
          m.matrix.fromArray(f).getInverse(m.matrix), m.projectionMatrix.fromArray(u.projectionMatrix), m.viewport.set(d.x, d.y, d.width, d.height), 0 === h && p.matrix.copy(m.matrix)
        }
      }
      for (h = 0; h < s.length; h++) {
        var v = s[h],
          g = c[h];
        if (g) {
          var y = n.getPose(g.targetRaySpace, r);
          if (null !== y) {
            v.matrix.fromArray(y.transform.matrix), v.matrix.decompose(v.position, v.rotation, v.scale), v.visible = !0;
            continue
          }
        }
        v.visible = !1
      }
      x && x(t)
    })), this.setAnimationLoop = function(e) {
      x = e
    }, this.dispose = function() {}, this.getStandingMatrix = function() {
      return console.warn("THREE.WebXRManager: getStandingMatrix() is no longer needed."), new Jt
    }, this.getDevice = function() {
      console.warn("THREE.WebXRManager: getDevice() has been deprecated.")
    }, this.setDevice = function() {
      console.warn("THREE.WebXRManager: setDevice() has been deprecated.")
    }, this.setFrameOfReferenceType = function() {
      console.warn("THREE.WebXRManager: setFrameOfReferenceType() has been deprecated.")
    }, this.submitFrame = function() {}
  }

  function Po(e) {
    var t = void 0 !== (e = e || {}).canvas ? e.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
      n = void 0 !== e.context ? e.context : null,
      i = void 0 !== e.alpha && e.alpha,
      r = void 0 === e.depth || e.depth,
      a = void 0 === e.stencil || e.stencil,
      o = void 0 !== e.antialias && e.antialias,
      s = void 0 === e.premultipliedAlpha || e.premultipliedAlpha,
      c = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer,
      l = void 0 !== e.powerPreference ? e.powerPreference : "default",
      u = void 0 !== e.failIfMajorPerformanceCaveat && e.failIfMajorPerformanceCaveat,
      p = null,
      d = null;
    this.domElement = t, this.debug = {
      checkShaderErrors: !0
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = Z, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
    var f, m, v, g, y, x, b, w, _, M, S, T, E, A, L, R, P, C, O = this,
      I = !1,
      N = null,
      D = 0,
      z = 0,
      U = null,
      F = null,
      B = -1,
      G = {
        geometry: null,
        program: null,
        wireframe: !1
      },
      H = null,
      V = null,
      k = new Gt,
      j = new Gt,
      W = null,
      q = t.width,
      X = t.height,
      Y = 1,
      J = new Gt(0, 0, q, X),
      K = new Gt(0, 0, q, X),
      Q = !1,
      $ = new br,
      ee = new Cr,
      te = !1,
      ne = !1,
      ie = new Jt,
      re = new It;

    function ae() {
      return null === U ? Y : 1
    }
    try {
      var oe = {
        alpha: i,
        depth: r,
        stencil: a,
        antialias: o,
        premultipliedAlpha: s,
        preserveDrawingBuffer: c,
        powerPreference: l,
        failIfMajorPerformanceCaveat: u,
        xrCompatible: !0
      };
      if (t.addEventListener("webglcontextlost", ue, !1), t.addEventListener("webglcontextrestored", pe, !1), null === (f = n || t.getContext("webgl", oe) || t.getContext("experimental-webgl", oe))) throw null !== t.getContext("webgl") ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      void 0 === f.getShaderPrecisionFormat && (f.getShaderPrecisionFormat = function() {
        return {
          rangeMin: 1,
          rangeMax: 1,
          precision: 1
        }
      })
    } catch (e) {
      throw console.error("THREE.WebGLRenderer: " + e.message), e
    }

    function se() {
      m = new Or(f), !1 === (v = new Pr(f, m, e)).isWebGL2 && (m.get("WEBGL_depth_texture"), m.get("OES_texture_float"), m.get("OES_texture_half_float"), m.get("OES_texture_half_float_linear"), m.get("OES_standard_derivatives"), m.get("OES_element_index_uint"), m.get("ANGLE_instanced_arrays")), m.get("OES_texture_float_linear"), C = new xo(f, m, v), (g = new go(f, m, v)).scissor(j.copy(K).multiplyScalar(Y).floor()), g.viewport(k.copy(J).multiplyScalar(Y).floor()), y = new Dr(f), x = new eo, b = new yo(f, m, g, x, v, C, y), w = new Tr(f), _ = new Ir(f, w, y), M = new Fr(f, _, w, y), L = new Ur(f), S = new $a(O, m, v), T = new ro, E = new ho, A = new Lr(O, g, M, s), R = new Rr(f, m, y, v), P = new Nr(f, m, y, v), y.programs = S.programs, O.capabilities = v, O.extensions = m, O.properties = x, O.renderLists = T, O.state = g, O.info = y
    }
    se();
    var ce = "undefined" != typeof navigator && "xr" in navigator && "isSessionSupported" in navigator.xr ? new Ro(O, f) : new Lo(O);
    this.vr = ce;
    var le = new wo(O, f),
      he = new vo(O, M, v.maxTextureSize);

    function ue(e) {
      e.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), I = !0
    }

    function pe() {
      console.log("THREE.WebGLRenderer: Context Restored."), I = !1, se()
    }

    function de(e) {
      var t = e.target;
      t.removeEventListener("dispose", de),
        function(e) {
          fe(e), x.remove(e)
        }(t)
    }

    function fe(e) {
      var t = x.get(e).program;
      e.program = void 0, void 0 !== t && S.releaseProgram(t)
    }
    this.shadowMap = he, this.getContext = function() {
      return f
    }, this.getContextAttributes = function() {
      return f.getContextAttributes()
    }, this.forceContextLoss = function() {
      var e = m.get("WEBGL_lose_context");
      e && e.loseContext()
    }, this.forceContextRestore = function() {
      var e = m.get("WEBGL_lose_context");
      e && e.restoreContext()
    }, this.getPixelRatio = function() {
      return Y
    }, this.setPixelRatio = function(e) {
      void 0 !== e && (Y = e, this.setSize(q, X, !1))
    }, this.getSize = function(e) {
      return void 0 === e && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), e = new Rt), e.set(q, X)
    }, this.setSize = function(e, n, i) {
      ce.isPresenting() ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (q = e, X = n, t.width = Math.floor(e * Y), t.height = Math.floor(n * Y), !1 !== i && (t.style.width = e + "px", t.style.height = n + "px"), this.setViewport(0, 0, e, n))
    }, this.getDrawingBufferSize = function(e) {
      return void 0 === e && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), e = new Rt), e.set(q * Y, X * Y).floor()
    }, this.setDrawingBufferSize = function(e, n, i) {
      q = e, X = n, Y = i, t.width = Math.floor(e * i), t.height = Math.floor(n * i), this.setViewport(0, 0, e, n)
    }, this.getCurrentViewport = function(e) {
      return void 0 === e && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), e = new Gt), e.copy(k)
    }, this.getViewport = function(e) {
      return e.copy(J)
    }, this.setViewport = function(e, t, n, i) {
      e.isVector4 ? J.set(e.x, e.y, e.z, e.w) : J.set(e, t, n, i), g.viewport(k.copy(J).multiplyScalar(Y).floor())
    }, this.getScissor = function(e) {
      return e.copy(K)
    }, this.setScissor = function(e, t, n, i) {
      e.isVector4 ? K.set(e.x, e.y, e.z, e.w) : K.set(e, t, n, i), g.scissor(j.copy(K).multiplyScalar(Y).floor())
    }, this.getScissorTest = function() {
      return Q
    }, this.setScissorTest = function(e) {
      g.setScissorTest(Q = e)
    }, this.getClearColor = function() {
      return A.getClearColor()
    }, this.setClearColor = function() {
      A.setClearColor.apply(A, arguments)
    }, this.getClearAlpha = function() {
      return A.getClearAlpha()
    }, this.setClearAlpha = function() {
      A.setClearAlpha.apply(A, arguments)
    }, this.clear = function(e, t, n) {
      var i = 0;
      (void 0 === e || e) && (i |= 16384), (void 0 === t || t) && (i |= 256), (void 0 === n || n) && (i |= 1024), f.clear(i)
    }, this.clearColor = function() {
      this.clear(!0, !1, !1)
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1)
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0)
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", ue, !1), t.removeEventListener("webglcontextrestored", pe, !1), T.dispose(), E.dispose(), x.dispose(), M.dispose(), ce.dispose(), ge.stop()
    }, this.renderBufferImmediate = function(e, t) {
      g.initAttributes();
      var n = x.get(e);
      e.hasPositions && !n.position && (n.position = f.createBuffer()), e.hasNormals && !n.normal && (n.normal = f.createBuffer()), e.hasUvs && !n.uv && (n.uv = f.createBuffer()), e.hasColors && !n.color && (n.color = f.createBuffer());
      var i = t.getAttributes();
      e.hasPositions && (f.bindBuffer(34962, n.position), f.bufferData(34962, e.positionArray, 35048), g.enableAttribute(i.position), f.vertexAttribPointer(i.position, 3, 5126, !1, 0, 0)), e.hasNormals && (f.bindBuffer(34962, n.normal), f.bufferData(34962, e.normalArray, 35048), g.enableAttribute(i.normal), f.vertexAttribPointer(i.normal, 3, 5126, !1, 0, 0)), e.hasUvs && (f.bindBuffer(34962, n.uv), f.bufferData(34962, e.uvArray, 35048), g.enableAttribute(i.uv), f.vertexAttribPointer(i.uv, 2, 5126, !1, 0, 0)), e.hasColors && (f.bindBuffer(34962, n.color), f.bufferData(34962, e.colorArray, 35048), g.enableAttribute(i.color), f.vertexAttribPointer(i.color, 3, 5126, !1, 0, 0)), g.disableUnusedAttributes(), f.drawArrays(4, 0, e.count), e.count = 0
    }, this.renderBufferDirect = function(e, t, n, i, r, a) {
      var o = r.isMesh && r.matrixWorld.determinant() < 0;
      g.setMaterial(i, o);
      var s = Se(e, t, i, r),
        c = !1;
      G.geometry === n.id && G.program === s.id && G.wireframe === (!0 === i.wireframe) || (G.geometry = n.id, G.program = s.id, G.wireframe = !0 === i.wireframe, c = !0), r.morphTargetInfluences && (L.update(r, n, i, s), c = !0);
      var l, h = n.index,
        u = n.attributes.position,
        p = 1;
      !0 === i.wireframe && (h = _.getWireframeAttribute(n), p = 2);
      var d = R;
      null !== h && (l = w.get(h), (d = P).setIndex(l)), c && (! function(e, t, n, i) {
        if (!1 === v.isWebGL2 && (e.isInstancedMesh || t.isInstancedBufferGeometry) && null === m.get("ANGLE_instanced_arrays")) return;
        g.initAttributes();
        var r = t.attributes,
          a = i.getAttributes(),
          o = n.defaultAttributeValues;
        for (var s in a) {
          var c = a[s];
          if (c >= 0) {
            var l = r[s];
            if (void 0 !== l) {
              var h = l.normalized,
                u = l.itemSize;
              if (void 0 === (M = w.get(l))) continue;
              var p = M.buffer,
                d = M.type,
                y = M.bytesPerElement;
              if (l.isInterleavedBufferAttribute) {
                var x = l.data,
                  b = x.stride,
                  _ = l.offset;
                x && x.isInstancedInterleavedBuffer ? (g.enableAttributeAndDivisor(c, x.meshPerAttribute), void 0 === t.maxInstancedCount && (t.maxInstancedCount = x.meshPerAttribute * x.count)) : g.enableAttribute(c), f.bindBuffer(34962, p), f.vertexAttribPointer(c, u, d, h, b * y, _ * y)
              } else l.isInstancedBufferAttribute ? (g.enableAttributeAndDivisor(c, l.meshPerAttribute), void 0 === t.maxInstancedCount && (t.maxInstancedCount = l.meshPerAttribute * l.count)) : g.enableAttribute(c), f.bindBuffer(34962, p), f.vertexAttribPointer(c, u, d, h, 0, 0)
            } else if ("instanceMatrix" === s) {
              var M;
              if (void 0 === (M = w.get(e.instanceMatrix))) continue;
              p = M.buffer, d = M.type;
              g.enableAttributeAndDivisor(c + 0, 1), g.enableAttributeAndDivisor(c + 1, 1), g.enableAttributeAndDivisor(c + 2, 1), g.enableAttributeAndDivisor(c + 3, 1), f.bindBuffer(34962, p), f.vertexAttribPointer(c + 0, 4, d, !1, 64, 0), f.vertexAttribPointer(c + 1, 4, d, !1, 64, 16), f.vertexAttribPointer(c + 2, 4, d, !1, 64, 32), f.vertexAttribPointer(c + 3, 4, d, !1, 64, 48)
            } else if (void 0 !== o) {
              var S = o[s];
              if (void 0 !== S) switch (S.length) {
                case 2:
                  f.vertexAttrib2fv(c, S);
                  break;
                case 3:
                  f.vertexAttrib3fv(c, S);
                  break;
                case 4:
                  f.vertexAttrib4fv(c, S);
                  break;
                default:
                  f.vertexAttrib1fv(c, S)
              }
            }
          }
        }
        g.disableUnusedAttributes()
      }(r, n, i, s), null !== h && f.bindBuffer(34963, l.buffer));
      var y = 1 / 0;
      null !== h ? y = h.count : void 0 !== u && (y = u.count);
      var x = n.drawRange.start * p,
        b = n.drawRange.count * p,
        M = null !== a ? a.start * p : 0,
        S = null !== a ? a.count * p : 1 / 0,
        T = Math.max(x, M),
        E = Math.min(y, x + b, M + S) - 1,
        A = Math.max(0, E - T + 1);
      if (0 !== A) {
        if (r.isMesh)
          if (!0 === i.wireframe) g.setLineWidth(i.wireframeLinewidth * ae()), d.setMode(1);
          else switch (r.drawMode) {
            case st:
              d.setMode(4);
              break;
            case ct:
              d.setMode(5);
              break;
            case lt:
              d.setMode(6)
          } else if (r.isLine) {
            var C = i.linewidth;
            void 0 === C && (C = 1), g.setLineWidth(C * ae()), r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3)
          } else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
        r.isInstancedMesh ? d.renderInstances(n, T, A, r.count) : n.isInstancedBufferGeometry ? d.renderInstances(n, T, A, n.maxInstancedCount) : d.render(T, A)
      }
    }, this.compile = function(e, t) {
      (d = E.get(e, t)).init(), e.traverse((function(e) {
        e.isLight && (d.pushLight(e), e.castShadow && d.pushShadow(e))
      })), d.setupLights(t), e.traverse((function(t) {
        if (t.material)
          if (Array.isArray(t.material))
            for (var n = 0; n < t.material.length; n++) we(t.material[n], e.fog, t);
          else we(t.material, e.fog, t)
      }))
    };
    var me = null;
    var ge = new Sr;

    function ye(e, t, n, i) {
      if (!1 !== e.visible) {
        if (e.layers.test(t.layers))
          if (e.isGroup) n = e.renderOrder;
          else if (e.isLOD) !0 === e.autoUpdate && e.update(t);
        else if (e.isLight) d.pushLight(e), e.castShadow && d.pushShadow(e);
        else if (e.isSprite) {
          if (!e.frustumCulled || $.intersectsSprite(e)) {
            i && re.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ie);
            var r = M.update(e);
            (a = e.material).visible && p.push(e, r, a, n, re.z, null)
          }
        } else if (e.isImmediateRenderObject) i && re.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ie), p.push(e, null, e.material, n, re.z, null);
        else if ((e.isMesh || e.isLine || e.isPoints) && (e.isSkinnedMesh && e.skeleton.frame !== y.render.frame && (e.skeleton.update(), e.skeleton.frame = y.render.frame), !e.frustumCulled || $.intersectsObject(e))) {
          i && re.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ie);
          r = M.update(e);
          var a = e.material;
          if (Array.isArray(a))
            for (var o = r.groups, s = 0, c = o.length; s < c; s++) {
              var l = o[s],
                h = a[l.materialIndex];
              h && h.visible && p.push(e, r, h, n, re.z, l)
            } else a.visible && p.push(e, r, a, n, re.z, null)
        }
        var u = e.children;
        for (s = 0, c = u.length; s < c; s++) ye(u[s], t, n, i)
      }
    }

    function xe(e, t, n, i) {
      for (var r = 0, a = e.length; r < a; r++) {
        var o = e[r],
          s = o.object,
          c = o.geometry,
          l = void 0 === i ? o.material : i,
          h = o.group;
        if (n.isArrayCamera)
          if (V = n, ce.enabled && le.isAvailable()) be(s, t, n, c, l, h);
          else
            for (var u = n.cameras, p = 0, f = u.length; p < f; p++) {
              var m = u[p];
              s.layers.test(m.layers) && (g.viewport(k.copy(m.viewport)), d.setupLights(m), be(s, t, m, c, l, h))
            } else V = null, be(s, t, n, c, l, h)
      }
    }

    function be(e, t, n, i, r, a) {
      if (e.onBeforeRender(O, t, n, i, r, a), d = E.get(t, V || n), e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), e.isImmediateRenderObject) {
        g.setMaterial(r);
        var o = Se(n, t.fog, r, e);
        G.geometry = null, G.program = null, G.wireframe = !1,
          function(e, t) {
            e.render((function(e) {
              O.renderBufferImmediate(e, t)
            }))
          }(e, o)
      } else O.renderBufferDirect(n, t.fog, i, r, e, a);
      e.onAfterRender(O, t, n, i, r, a), d = E.get(t, V || n)
    }

    function we(e, t, n) {
      var i = x.get(e),
        r = d.state.lights,
        a = d.state.shadowsArray,
        o = r.state.version,
        s = S.getParameters(e, r.state, a, t, ee.numPlanes, ee.numIntersection, n),
        c = S.getProgramCacheKey(e, s),
        l = i.program,
        h = !0;
      if (void 0 === l) e.addEventListener("dispose", de);
      else if (l.cacheKey !== c) fe(e);
      else if (i.lightsStateVersion !== o) i.lightsStateVersion = o, h = !1;
      else {
        if (void 0 !== s.shaderID) return;
        h = !1
      }
      if (h) {
        if (s.shaderID) {
          var u = Mr[s.shaderID];
          i.shader = {
            name: e.type,
            uniforms: ar(u.uniforms),
            vertexShader: u.vertexShader,
            fragmentShader: u.fragmentShader
          }
        } else i.shader = {
          name: e.type,
          uniforms: e.uniforms,
          vertexShader: e.vertexShader,
          fragmentShader: e.fragmentShader
        };
        e.onBeforeCompile(i.shader, O), c = S.getProgramCacheKey(e, s), l = S.acquireProgram(e, i.shader, s, c), i.program = l, e.program = l
      }
      var p = l.getAttributes();
      if (e.morphTargets) {
        e.numSupportedMorphTargets = 0;
        for (var f = 0; f < O.maxMorphTargets; f++) p["morphTarget" + f] >= 0 && e.numSupportedMorphTargets++
      }
      if (e.morphNormals) {
        e.numSupportedMorphNormals = 0;
        for (f = 0; f < O.maxMorphNormals; f++) p["morphNormal" + f] >= 0 && e.numSupportedMorphNormals++
      }
      var m = i.shader.uniforms;
      (e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping || (i.numClippingPlanes = ee.numPlanes, i.numIntersection = ee.numIntersection, m.clippingPlanes = ee.uniform), i.fog = t, i.needsLights = function(e) {
        return e.isMeshLambertMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && !0 === e.lights
      }(e), i.lightsStateVersion = o, i.needsLights && (m.ambientLightColor.value = r.state.ambient, m.lightProbe.value = r.state.probe, m.directionalLights.value = r.state.directional, m.spotLights.value = r.state.spot, m.rectAreaLights.value = r.state.rectArea, m.pointLights.value = r.state.point, m.hemisphereLights.value = r.state.hemi, m.directionalShadowMap.value = r.state.directionalShadowMap, m.directionalShadowMatrix.value = r.state.directionalShadowMatrix, m.spotShadowMap.value = r.state.spotShadowMap, m.spotShadowMatrix.value = r.state.spotShadowMatrix, m.pointShadowMap.value = r.state.pointShadowMap, m.pointShadowMatrix.value = r.state.pointShadowMatrix);
      var v = i.program.getUniforms(),
        g = Da.seqWithValue(v.seq, m);
      i.uniformsList = g
    }

    function Se(e, t, n, i) {
      b.resetTextureUnits();
      var r = x.get(n),
        a = d.state.lights;
      if (te && (ne || e !== H)) {
        var o = e === H && n.id === B;
        ee.setState(n.clippingPlanes, n.clipIntersection, n.clipShadows, e, r, o)
      }!1 === n.needsUpdate && (void 0 === r.program ? n.needsUpdate = !0 : n.fog && r.fog !== t ? n.needsUpdate = !0 : r.needsLights && r.lightsStateVersion !== a.state.version ? n.needsUpdate = !0 : void 0 === r.numClippingPlanes || r.numClippingPlanes === ee.numPlanes && r.numIntersection === ee.numIntersection || (n.needsUpdate = !0)), n.needsUpdate && (we(n, t, i), n.needsUpdate = !1);
      var s, c, l = !1,
        u = !1,
        p = !1,
        m = r.program,
        y = m.getUniforms(),
        w = r.shader.uniforms;
      if (g.useProgram(m.program) && (l = !0, u = !0, p = !0), n.id !== B && (B = n.id, u = !0), l || H !== e) {
        if (m.numMultiviewViews > 0 ? le.updateCameraProjectionMatricesUniform(e, y) : y.setValue(f, "projectionMatrix", e.projectionMatrix), v.logarithmicDepthBuffer && y.setValue(f, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), H !== e && (H = e, u = !0, p = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshStandardMaterial || n.envMap) {
          var _ = y.map.cameraPosition;
          void 0 !== _ && _.setValue(f, re.setFromMatrixPosition(e.matrixWorld))
        }(n.isMeshPhongMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && y.setValue(f, "isOrthographic", !0 === e.isOrthographicCamera), (n.isMeshPhongMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.skinning) && (m.numMultiviewViews > 0 ? le.updateCameraViewMatricesUniform(e, y) : y.setValue(f, "viewMatrix", e.matrixWorldInverse))
      }
      if (n.skinning) {
        y.setOptional(f, i, "bindMatrix"), y.setOptional(f, i, "bindMatrixInverse");
        var M = i.skeleton;
        if (M) {
          var S = M.bones;
          if (v.floatVertexTextures) {
            if (void 0 === M.boneTexture) {
              var T = Math.sqrt(4 * S.length);
              T = Lt.ceilPowerOfTwo(T), T = Math.max(T, 4);
              var E = new Float32Array(T * T * 4);
              E.set(M.boneMatrices);
              var A = new gr(E, T, T, Pe, _e);
              M.boneMatrices = E, M.boneTexture = A, M.boneTextureSize = T
            }
            y.setValue(f, "boneTexture", M.boneTexture, b), y.setValue(f, "boneTextureSize", M.boneTextureSize)
          } else y.setOptional(f, M, "boneMatrices")
        }
      }
      return (u || r.receiveShadow !== i.receiveShadow) && (r.receiveShadow = i.receiveShadow, y.setValue(f, "receiveShadow", i.receiveShadow)), u && (y.setValue(f, "toneMappingExposure", O.toneMappingExposure), y.setValue(f, "toneMappingWhitePoint", O.toneMappingWhitePoint), r.needsLights && (c = p, (s = w).ambientLightColor.needsUpdate = c, s.lightProbe.needsUpdate = c, s.directionalLights.needsUpdate = c, s.pointLights.needsUpdate = c, s.spotLights.needsUpdate = c, s.rectAreaLights.needsUpdate = c, s.hemisphereLights.needsUpdate = c), t && n.fog && function(e, t) {
        e.fogColor.value.copy(t.color), t.isFog ? (e.fogNear.value = t.near, e.fogFar.value = t.far) : t.isFogExp2 && (e.fogDensity.value = t.density)
      }(w, t), n.isMeshBasicMaterial ? Te(w, n) : n.isMeshLambertMaterial ? (Te(w, n), function(e, t) {
        t.emissiveMap && (e.emissiveMap.value = t.emissiveMap)
      }(w, n)) : n.isMeshPhongMaterial ? (Te(w, n), n.isMeshToonMaterial ? function(e, t) {
        Ee(e, t), t.gradientMap && (e.gradientMap.value = t.gradientMap)
      }(w, n) : Ee(w, n)) : n.isMeshStandardMaterial ? (Te(w, n), n.isMeshPhysicalMaterial ? function(e, t) {
        Ae(e, t), e.reflectivity.value = t.reflectivity, e.clearcoat.value = t.clearcoat, e.clearcoatRoughness.value = t.clearcoatRoughness, t.sheen && e.sheen.value.copy(t.sheen);
        t.clearcoatNormalMap && (e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale), e.clearcoatNormalMap.value = t.clearcoatNormalMap, t.side === h && e.clearcoatNormalScale.value.negate());
        e.transparency.value = t.transparency
      }(w, n) : Ae(w, n)) : n.isMeshMatcapMaterial ? (Te(w, n), function(e, t) {
        t.matcap && (e.matcap.value = t.matcap);
        t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale, t.side === h && (e.bumpScale.value *= -1));
        t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale), t.side === h && e.normalScale.value.negate());
        t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias)
      }(w, n)) : n.isMeshDepthMaterial ? (Te(w, n), function(e, t) {
        t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias)
      }(w, n)) : n.isMeshDistanceMaterial ? (Te(w, n), function(e, t) {
        t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias);
        e.referencePosition.value.copy(t.referencePosition), e.nearDistance.value = t.nearDistance, e.farDistance.value = t.farDistance
      }(w, n)) : n.isMeshNormalMaterial ? (Te(w, n), function(e, t) {
        t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale, t.side === h && (e.bumpScale.value *= -1));
        t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale), t.side === h && e.normalScale.value.negate());
        t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias)
      }(w, n)) : n.isLineBasicMaterial ? (function(e, t) {
        e.diffuse.value.copy(t.color), e.opacity.value = t.opacity
      }(w, n), n.isLineDashedMaterial && function(e, t) {
        e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale
      }(w, n)) : n.isPointsMaterial ? function(e, t) {
        e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.size.value = t.size * Y, e.scale.value = .5 * X, t.map && (e.map.value = t.map);
        t.alphaMap && (e.alphaMap.value = t.alphaMap);
        var n;
        t.map ? n = t.map : t.alphaMap && (n = t.alphaMap);
        void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), e.uvTransform.value.copy(n.matrix))
      }(w, n) : n.isSpriteMaterial ? function(e, t) {
        e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.rotation.value = t.rotation, t.map && (e.map.value = t.map);
        t.alphaMap && (e.alphaMap.value = t.alphaMap);
        var n;
        t.map ? n = t.map : t.alphaMap && (n = t.alphaMap);
        void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), e.uvTransform.value.copy(n.matrix))
      }(w, n) : n.isShadowMaterial && (w.color.value.copy(n.color), w.opacity.value = n.opacity), void 0 !== w.ltc_1 && (w.ltc_1.value = _r.LTC_1), void 0 !== w.ltc_2 && (w.ltc_2.value = _r.LTC_2), Da.upload(f, r.uniformsList, w, b), n.isShaderMaterial && (n.uniformsNeedUpdate = !1)), n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (Da.upload(f, r.uniformsList, w, b), n.uniformsNeedUpdate = !1), n.isSpriteMaterial && y.setValue(f, "center", i.center), m.numMultiviewViews > 0 ? le.updateObjectMatricesUniforms(i, e, y) : (y.setValue(f, "modelViewMatrix", i.modelViewMatrix), y.setValue(f, "normalMatrix", i.normalMatrix)), y.setValue(f, "modelMatrix", i.matrixWorld), m
    }

    function Te(e, t) {
      var n;
      e.opacity.value = t.opacity, t.color && e.diffuse.value.copy(t.color), t.emissive && e.emissive.value.copy(t.emissive).multiplyScalar(t.emissiveIntensity), t.map && (e.map.value = t.map), t.alphaMap && (e.alphaMap.value = t.alphaMap), t.specularMap && (e.specularMap.value = t.specularMap), t.envMap && (e.envMap.value = t.envMap, e.flipEnvMap.value = t.envMap.isCubeTexture ? -1 : 1, e.reflectivity.value = t.reflectivity, e.refractionRatio.value = t.refractionRatio, e.maxMipLevel.value = x.get(t.envMap).__maxMipLevel), t.lightMap && (e.lightMap.value = t.lightMap, e.lightMapIntensity.value = t.lightMapIntensity), t.aoMap && (e.aoMap.value = t.aoMap, e.aoMapIntensity.value = t.aoMapIntensity), t.map ? n = t.map : t.specularMap ? n = t.specularMap : t.displacementMap ? n = t.displacementMap : t.normalMap ? n = t.normalMap : t.bumpMap ? n = t.bumpMap : t.roughnessMap ? n = t.roughnessMap : t.metalnessMap ? n = t.metalnessMap : t.alphaMap ? n = t.alphaMap : t.emissiveMap && (n = t.emissiveMap), void 0 !== n && (n.isWebGLRenderTarget && (n = n.texture), !0 === n.matrixAutoUpdate && n.updateMatrix(), e.uvTransform.value.copy(n.matrix))
    }

    function Ee(e, t) {
      e.specular.value.copy(t.specular), e.shininess.value = Math.max(t.shininess, 1e-4), t.emissiveMap && (e.emissiveMap.value = t.emissiveMap), t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale, t.side === h && (e.bumpScale.value *= -1)), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale), t.side === h && e.normalScale.value.negate()), t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias)
    }

    function Ae(e, t) {
      e.roughness.value = t.roughness, e.metalness.value = t.metalness, t.roughnessMap && (e.roughnessMap.value = t.roughnessMap), t.metalnessMap && (e.metalnessMap.value = t.metalnessMap), t.emissiveMap && (e.emissiveMap.value = t.emissiveMap), t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale, t.side === h && (e.bumpScale.value *= -1)), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale), t.side === h && e.normalScale.value.negate()), t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)
    }
    ge.setAnimationLoop((function(e) {
      ce.isPresenting() || me && me(e)
    })), "undefined" != typeof window && ge.setContext(window), this.setAnimationLoop = function(e) {
      me = e, ce.setAnimationLoop(e), ge.start()
    }, this.render = function(e, t) {
      var n, i;
      if (void 0 !== arguments[2] && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."), n = arguments[2]), void 0 !== arguments[3] && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."), i = arguments[3]), t && t.isCamera) {
        if (!I) {
          G.geometry = null, G.program = null, G.wireframe = !1, B = -1, H = null, !0 === e.autoUpdate && e.updateMatrixWorld(), null === t.parent && t.updateMatrixWorld(), ce.enabled && (t = ce.getCamera(t)), (d = E.get(e, t)).init(), e.onBeforeRender(O, e, t, n || U), ie.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), $.setFromMatrix(ie), ne = this.localClippingEnabled, te = ee.init(this.clippingPlanes, ne, t), (p = T.get(e, t)).init(), ye(e, t, 0, O.sortObjects), !0 === O.sortObjects && p.sort(), te && ee.beginShadows();
          var r = d.state.shadowsArray;
          he.render(r, e, t), d.setupLights(t), te && ee.endShadows(), this.info.autoReset && this.info.reset(), void 0 !== n && this.setRenderTarget(n), ce.enabled && le.isAvailable() && le.attachCamera(t), A.render(p, e, t, i);
          var a = p.opaque,
            o = p.transparent;
          if (e.overrideMaterial) {
            var s = e.overrideMaterial;
            a.length && xe(a, e, t, s), o.length && xe(o, e, t, s)
          } else a.length && xe(a, e, t), o.length && xe(o, e, t);
          e.onAfterRender(O, e, t), null !== U && (b.updateRenderTargetMipmap(U), b.updateMultisampleRenderTarget(U)), g.buffers.depth.setTest(!0), g.buffers.depth.setMask(!0), g.buffers.color.setMask(!0), g.setPolygonOffset(!1), ce.enabled && (le.isAvailable() && le.detachCamera(t), ce.submitFrame()), p = null, d = null
        }
      } else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
    }, this.setFramebuffer = function(e) {
      N !== e && null === U && f.bindFramebuffer(36160, e), N = e
    }, this.getActiveCubeFace = function() {
      return D
    }, this.getActiveMipmapLevel = function() {
      return z
    }, this.getRenderTarget = function() {
      return U
    }, this.setRenderTarget = function(e, t, n) {
      U = e, D = t, z = n, e && void 0 === x.get(e).__webglFramebuffer && b.setupRenderTarget(e);
      var i = N,
        r = !1;
      if (e) {
        var a = x.get(e).__webglFramebuffer;
        e.isWebGLRenderTargetCube ? (i = a[t || 0], r = !0) : i = e.isWebGLMultisampleRenderTarget ? x.get(e).__webglMultisampledFramebuffer : a, k.copy(e.viewport), j.copy(e.scissor), W = e.scissorTest
      } else k.copy(J).multiplyScalar(Y).floor(), j.copy(K).multiplyScalar(Y).floor(), W = Q;
      if (F !== i && (f.bindFramebuffer(36160, i), F = i), g.viewport(k), g.scissor(j), g.setScissorTest(W), r) {
        var o = x.get(e.texture);
        f.framebufferTexture2D(36160, 36064, 34069 + (t || 0), o.__webglTexture, n || 0)
      }
    }, this.readRenderTargetPixels = function(e, t, n, i, r, a, o) {
      if (e && e.isWebGLRenderTarget) {
        var s = x.get(e).__webglFramebuffer;
        if (e.isWebGLRenderTargetCube && void 0 !== o && (s = s[o]), s) {
          var c = !1;
          s !== F && (f.bindFramebuffer(36160, s), c = !0);
          try {
            var l = e.texture,
              h = l.format,
              u = l.type;
            if (h !== Pe && C.convert(h) !== f.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            if (!(u === ve || C.convert(u) === f.getParameter(35738) || u === _e && (v.isWebGL2 || m.get("OES_texture_float") || m.get("WEBGL_color_buffer_float")) || u === Me && (v.isWebGL2 ? m.get("EXT_color_buffer_float") : m.get("EXT_color_buffer_half_float")))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            36053 === f.checkFramebufferStatus(36160) ? t >= 0 && t <= e.width - i && n >= 0 && n <= e.height - r && f.readPixels(t, n, i, r, C.convert(h), C.convert(u), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
          } finally {
            c && f.bindFramebuffer(36160, F)
          }
        }
      } else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
    }, this.copyFramebufferToTexture = function(e, t, n) {
      void 0 === n && (n = 0);
      var i = Math.pow(2, -n),
        r = Math.floor(t.image.width * i),
        a = Math.floor(t.image.height * i),
        o = C.convert(t.format);
      b.setTexture2D(t, 0), f.copyTexImage2D(3553, n, o, e.x, e.y, r, a, 0), g.unbindTexture()
    }, this.copyTextureToTexture = function(e, t, n, i) {
      var r = t.image.width,
        a = t.image.height,
        o = C.convert(n.format),
        s = C.convert(n.type);
      b.setTexture2D(n, 0), t.isDataTexture ? f.texSubImage2D(3553, i || 0, e.x, e.y, r, a, o, s, t.image.data) : f.texSubImage2D(3553, i || 0, e.x, e.y, o, s, t.image), g.unbindTexture()
    }, this.initTexture = function(e) {
      b.setTexture2D(e, 0), g.unbindTexture()
    }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
      detail: this
    }))
  }

  function Co(e, t) {
    this.name = "", this.color = new ai(e), this.density = void 0 !== t ? t : 25e-5
  }

  function Oo(e, t, n) {
    this.name = "", this.color = new ai(e), this.near = void 0 !== t ? t : 1, this.far = void 0 !== n ? n : 1e3
  }

  function Io(e, t) {
    this.array = e, this.stride = t, this.count = void 0 !== e ? e.length / t : 0, this.usage = St, this.updateRange = {
      offset: 0,
      count: -1
    }, this.version = 0
  }

  function No(e, t, n, i) {
    this.data = e, this.itemSize = t, this.offset = n, this.normalized = !0 === i
  }

  function Do(e) {
    ui.call(this), this.type = "SpriteMaterial", this.color = new ai(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(e)
  }
  Object.assign(Lo.prototype, Tt.prototype), Object.assign(Ro.prototype, Tt.prototype), Object.assign(Co.prototype, {
    isFogExp2: !0,
    clone: function() {
      return new Co(this.color, this.density)
    },
    toJSON: function() {
      return {
        type: "FogExp2",
        color: this.color.getHex(),
        density: this.density
      }
    }
  }), Object.assign(Oo.prototype, {
    isFog: !0,
    clone: function() {
      return new Oo(this.color, this.near, this.far)
    },
    toJSON: function() {
      return {
        type: "Fog",
        color: this.color.getHex(),
        near: this.near,
        far: this.far
      }
    }
  }), Object.defineProperty(Io.prototype, "needsUpdate", {
    set: function(e) {
      !0 === e && this.version++
    }
  }), Object.assign(Io.prototype, {
    isInterleavedBuffer: !0,
    onUploadCallback: function() {},
    setUsage: function(e) {
      return this.usage = e, this
    },
    copy: function(e) {
      return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this
    },
    copyAt: function(e, t, n) {
      e *= this.stride, n *= t.stride;
      for (var i = 0, r = this.stride; i < r; i++) this.array[e + i] = t.array[n + i];
      return this
    },
    set: function(e, t) {
      return void 0 === t && (t = 0), this.array.set(e, t), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    onUpload: function(e) {
      return this.onUploadCallback = e, this
    }
  }), Object.defineProperties(No.prototype, {
    count: {
      get: function() {
        return this.data.count
      }
    },
    array: {
      get: function() {
        return this.data.array
      }
    }
  }), Object.assign(No.prototype, {
    isInterleavedBufferAttribute: !0,
    setX: function(e, t) {
      return this.data.array[e * this.data.stride + this.offset] = t, this
    },
    setY: function(e, t) {
      return this.data.array[e * this.data.stride + this.offset + 1] = t, this
    },
    setZ: function(e, t) {
      return this.data.array[e * this.data.stride + this.offset + 2] = t, this
    },
    setW: function(e, t) {
      return this.data.array[e * this.data.stride + this.offset + 3] = t, this
    },
    getX: function(e) {
      return this.data.array[e * this.data.stride + this.offset]
    },
    getY: function(e) {
      return this.data.array[e * this.data.stride + this.offset + 1]
    },
    getZ: function(e) {
      return this.data.array[e * this.data.stride + this.offset + 2]
    },
    getW: function(e) {
      return this.data.array[e * this.data.stride + this.offset + 3]
    },
    setXY: function(e, t, n) {
      return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this
    },
    setXYZ: function(e, t, n, i) {
      return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this
    },
    setXYZW: function(e, t, n, i, r) {
      return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this
    }
  }), Do.prototype = Object.create(ui.prototype), Do.prototype.constructor = Do, Do.prototype.isSpriteMaterial = !0, Do.prototype.copy = function(e) {
    return ui.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this
  };
  var zo = new It,
    Uo = new It,
    Fo = new It,
    Bo = new Rt,
    Go = new Rt,
    Ho = new Jt,
    Vo = new It,
    ko = new It,
    jo = new It,
    Wo = new Rt,
    qo = new Rt,
    Xo = new Rt;

  function Yo(e) {
    if (mn.call(this), this.type = "Sprite", void 0 === So) {
      So = new Oi;
      var t = new Io(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), 5);
      So.setIndex([0, 1, 2, 0, 2, 3]), So.setAttribute("position", new No(t, 3, 0, !1)), So.setAttribute("uv", new No(t, 2, 3, !1))
    }
    this.geometry = So, this.material = void 0 !== e ? e : new Do, this.center = new Rt(.5, .5)
  }

  function Zo(e, t, n, i, r, a) {
    Bo.subVectors(e, n).addScalar(.5).multiply(i), void 0 !== r ? (Go.x = a * Bo.x - r * Bo.y, Go.y = r * Bo.x + a * Bo.y) : Go.copy(Bo), e.copy(t), e.x += Go.x, e.y += Go.y, e.applyMatrix4(Ho)
  }
  Yo.prototype = Object.assign(Object.create(mn.prototype), {
    constructor: Yo,
    isSprite: !0,
    raycast: function(e, t) {
      null === e.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Uo.setFromMatrixScale(this.matrixWorld), Ho.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), Fo.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && Uo.multiplyScalar(-Fo.z);
      var n, i, r = this.material.rotation;
      0 !== r && (i = Math.cos(r), n = Math.sin(r));
      var a = this.center;
      Zo(Vo.set(-.5, -.5, 0), Fo, a, Uo, n, i), Zo(ko.set(.5, -.5, 0), Fo, a, Uo, n, i), Zo(jo.set(.5, .5, 0), Fo, a, Uo, n, i), Wo.set(0, 0), qo.set(1, 0), Xo.set(1, 1);
      var o = e.ray.intersectTriangle(Vo, ko, jo, !1, zo);
      if (null !== o || (Zo(ko.set(-.5, .5, 0), Fo, a, Uo, n, i), qo.set(0, 1), null !== (o = e.ray.intersectTriangle(Vo, jo, ko, !1, zo)))) {
        var s = e.ray.origin.distanceTo(zo);
        s < e.near || s > e.far || t.push({
          distance: s,
          point: zo.clone(),
          uv: ti.getUV(zo, Vo, ko, jo, Wo, qo, Xo, new Rt),
          face: null,
          object: this
        })
      }
    },
    clone: function() {
      return new this.constructor(this.material).copy(this)
    },
    copy: function(e) {
      return mn.prototype.copy.call(this, e), void 0 !== e.center && this.center.copy(e.center), this
    }
  });
  var Jo = new It,
    Ko = new It;

  function Qo() {
    mn.call(this), this.type = "LOD", Object.defineProperties(this, {
      levels: {
        enumerable: !0,
        value: []
      }
    }), this.autoUpdate = !0
  }

  function $o(e, t) {
    e && e.isGeometry && console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."), Ji.call(this, e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Jt, this.bindMatrixInverse = new Jt
  }
  Qo.prototype = Object.assign(Object.create(mn.prototype), {
    constructor: Qo,
    isLOD: !0,
    copy: function(e) {
      mn.prototype.copy.call(this, e, !1);
      for (var t = e.levels, n = 0, i = t.length; n < i; n++) {
        var r = t[n];
        this.addLevel(r.object.clone(), r.distance)
      }
      return this
    },
    addLevel: function(e, t) {
      void 0 === t && (t = 0), t = Math.abs(t);
      for (var n = this.levels, i = 0; i < n.length && !(t < n[i].distance); i++);
      return n.splice(i, 0, {
        distance: t,
        object: e
      }), this.add(e), this
    },
    getObjectForDistance: function(e) {
      for (var t = this.levels, n = 1, i = t.length; n < i && !(e < t[n].distance); n++);
      return t[n - 1].object
    },
    raycast: function(e, t) {
      Jo.setFromMatrixPosition(this.matrixWorld);
      var n = e.ray.origin.distanceTo(Jo);
      this.getObjectForDistance(n).raycast(e, t)
    },
    update: function(e) {
      var t = this.levels;
      if (t.length > 1) {
        Jo.setFromMatrixPosition(e.matrixWorld), Ko.setFromMatrixPosition(this.matrixWorld);
        var n = Jo.distanceTo(Ko);
        t[0].object.visible = !0;
        for (var i = 1, r = t.length; i < r && n >= t[i].distance; i++) t[i - 1].object.visible = !1, t[i].object.visible = !0;
        for (; i < r; i++) t[i].object.visible = !1
      }
    },
    toJSON: function(e) {
      var t = mn.prototype.toJSON.call(this, e);
      t.object.levels = [];
      for (var n = this.levels, i = 0, r = n.length; i < r; i++) {
        var a = n[i];
        t.object.levels.push({
          object: a.object.uuid,
          distance: a.distance
        })
      }
      return t
    }
  }), $o.prototype = Object.assign(Object.create(Ji.prototype), {
    constructor: $o,
    isSkinnedMesh: !0,
    bind: function(e, t) {
      this.skeleton = e, void 0 === t && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.getInverse(t)
    },
    pose: function() {
      this.skeleton.pose()
    },
    normalizeSkinWeights: function() {
      for (var e = new Gt, t = this.geometry.attributes.skinWeight, n = 0, i = t.count; n < i; n++) {
        e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.w = t.getW(n);
        var r = 1 / e.manhattanLength();
        r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w)
      }
    },
    updateMatrixWorld: function(e) {
      Ji.prototype.updateMatrixWorld.call(this, e), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
    },
    clone: function() {
      return new this.constructor(this.geometry, this.material).copy(this)
    }
  });
  var es = new Jt,
    ts = new Jt;

  function ns(e, t) {
    if (e = e || [], this.bones = e.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length), this.frame = -1, void 0 === t) this.calculateInverses();
    else if (this.bones.length === t.length) this.boneInverses = t.slice(0);
    else {
      console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [];
      for (var n = 0, i = this.bones.length; n < i; n++) this.boneInverses.push(new Jt)
    }
  }

  function is() {
    mn.call(this), this.type = "Bone"
  }

  function rs(e, t, n) {
    Ji.call(this, e, t), this.instanceMatrix = new di(new Float32Array(16 * n), 16), this.count = n
  }

  function as(e) {
    ui.call(this), this.type = "LineBasicMaterial", this.color = new ai(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.setValues(e)
  }
  Object.assign(ns.prototype, {
    calculateInverses: function() {
      this.boneInverses = [];
      for (var e = 0, t = this.bones.length; e < t; e++) {
        var n = new Jt;
        this.bones[e] && n.getInverse(this.bones[e].matrixWorld), this.boneInverses.push(n)
      }
    },
    pose: function() {
      var e, t, n;
      for (t = 0, n = this.bones.length; t < n; t++)(e = this.bones[t]) && e.matrixWorld.getInverse(this.boneInverses[t]);
      for (t = 0, n = this.bones.length; t < n; t++)(e = this.bones[t]) && (e.parent && e.parent.isBone ? (e.matrix.getInverse(e.parent.matrixWorld), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale))
    },
    update: function() {
      for (var e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture, r = 0, a = e.length; r < a; r++) {
        var o = e[r] ? e[r].matrixWorld : ts;
        es.multiplyMatrices(o, t[r]), es.toArray(n, 16 * r)
      }
      void 0 !== i && (i.needsUpdate = !0)
    },
    clone: function() {
      return new ns(this.bones, this.boneInverses)
    },
    getBoneByName: function(e) {
      for (var t = 0, n = this.bones.length; t < n; t++) {
        var i = this.bones[t];
        if (i.name === e) return i
      }
    }
  }), is.prototype = Object.assign(Object.create(mn.prototype), {
    constructor: is,
    isBone: !0
  }), rs.prototype = Object.assign(Object.create(Ji.prototype), {
    constructor: rs,
    isInstancedMesh: !0,
    raycast: function() {},
    setMatrixAt: function(e, t) {
      t.toArray(this.instanceMatrix.array, 16 * e)
    },
    updateMorphTargets: function() {}
  }), as.prototype = Object.create(ui.prototype), as.prototype.constructor = as, as.prototype.isLineBasicMaterial = !0, as.prototype.copy = function(e) {
    return ui.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this
  };
  var os = new It,
    ss = new It,
    cs = new Jt,
    ls = new Gn,
    hs = new On;

  function us(e, t, n) {
    1 === n && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."), mn.call(this), this.type = "Line", this.geometry = void 0 !== e ? e : new Oi, this.material = void 0 !== t ? t : new as({
      color: 16777215 * Math.random()
    })
  }
  us.prototype = Object.assign(Object.create(mn.prototype), {
    constructor: us,
    isLine: !0,
    computeLineDistances: function() {
      var e = this.geometry;
      if (e.isBufferGeometry)
        if (null === e.index) {
          for (var t = e.attributes.position, n = [0], i = 1, r = t.count; i < r; i++) os.fromBufferAttribute(t, i - 1), ss.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += os.distanceTo(ss);
          e.setAttribute("lineDistance", new wi(n, 1))
        } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      else if (e.isGeometry) {
        var a = e.vertices;
        (n = e.lineDistances)[0] = 0;
        for (i = 1, r = a.length; i < r; i++) n[i] = n[i - 1], n[i] += a[i - 1].distanceTo(a[i])
      }
      return this
    },
    raycast: function(e, t) {
      var n = e.linePrecision,
        i = this.geometry,
        r = this.matrixWorld;
      if (null === i.boundingSphere && i.computeBoundingSphere(), hs.copy(i.boundingSphere), hs.applyMatrix4(r), hs.radius += n, !1 !== e.ray.intersectsSphere(hs)) {
        cs.getInverse(r), ls.copy(e.ray).applyMatrix4(cs);
        var a = n / ((this.scale.x + this.scale.y + this.scale.z) / 3),
          o = a * a,
          s = new It,
          c = new It,
          l = new It,
          h = new It,
          u = this && this.isLineSegments ? 2 : 1;
        if (i.isBufferGeometry) {
          var p = i.index,
            d = i.attributes.position.array;
          if (null !== p)
            for (var f = p.array, m = 0, v = f.length - 1; m < v; m += u) {
              var g = f[m],
                y = f[m + 1];
              if (s.fromArray(d, 3 * g), c.fromArray(d, 3 * y), !(ls.distanceSqToSegment(s, c, h, l) > o)) h.applyMatrix4(this.matrixWorld), (w = e.ray.origin.distanceTo(h)) < e.near || w > e.far || t.push({
                distance: w,
                point: l.clone().applyMatrix4(this.matrixWorld),
                index: m,
                face: null,
                faceIndex: null,
                object: this
              })
            } else
              for (m = 0, v = d.length / 3 - 1; m < v; m += u) {
                if (s.fromArray(d, 3 * m), c.fromArray(d, 3 * m + 3), !(ls.distanceSqToSegment(s, c, h, l) > o)) h.applyMatrix4(this.matrixWorld), (w = e.ray.origin.distanceTo(h)) < e.near || w > e.far || t.push({
                  distance: w,
                  point: l.clone().applyMatrix4(this.matrixWorld),
                  index: m,
                  face: null,
                  faceIndex: null,
                  object: this
                })
              }
        } else if (i.isGeometry) {
          var x = i.vertices,
            b = x.length;
          for (m = 0; m < b - 1; m += u) {
            var w;
            if (!(ls.distanceSqToSegment(x[m], x[m + 1], h, l) > o)) h.applyMatrix4(this.matrixWorld), (w = e.ray.origin.distanceTo(h)) < e.near || w > e.far || t.push({
              distance: w,
              point: l.clone().applyMatrix4(this.matrixWorld),
              index: m,
              face: null,
              faceIndex: null,
              object: this
            })
          }
        }
      }
    },
    clone: function() {
      return new this.constructor(this.geometry, this.material).copy(this)
    }
  });
  var ps = new It,
    ds = new It;

  function fs(e, t) {
    us.call(this, e, t), this.type = "LineSegments"
  }

  function ms(e, t) {
    us.call(this, e, t), this.type = "LineLoop"
  }

  function vs(e) {
    ui.call(this), this.type = "PointsMaterial", this.color = new ai(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.setValues(e)
  }
  fs.prototype = Object.assign(Object.create(us.prototype), {
    constructor: fs,
    isLineSegments: !0,
    computeLineDistances: function() {
      var e = this.geometry;
      if (e.isBufferGeometry)
        if (null === e.index) {
          for (var t = e.attributes.position, n = [], i = 0, r = t.count; i < r; i += 2) ps.fromBufferAttribute(t, i), ds.fromBufferAttribute(t, i + 1), n[i] = 0 === i ? 0 : n[i - 1], n[i + 1] = n[i] + ps.distanceTo(ds);
          e.setAttribute("lineDistance", new wi(n, 1))
        } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      else if (e.isGeometry) {
        var a = e.vertices;
        for (n = e.lineDistances, i = 0, r = a.length; i < r; i += 2) ps.copy(a[i]), ds.copy(a[i + 1]), n[i] = 0 === i ? 0 : n[i - 1], n[i + 1] = n[i] + ps.distanceTo(ds)
      }
      return this
    }
  }), ms.prototype = Object.assign(Object.create(us.prototype), {
    constructor: ms,
    isLineLoop: !0
  }), vs.prototype = Object.create(ui.prototype), vs.prototype.constructor = vs, vs.prototype.isPointsMaterial = !0, vs.prototype.copy = function(e) {
    return ui.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.morphTargets = e.morphTargets, this
  };
  var gs = new Jt,
    ys = new Gn,
    xs = new On,
    bs = new It;

  function ws(e, t) {
    mn.call(this), this.type = "Points", this.geometry = void 0 !== e ? e : new Oi, this.material = void 0 !== t ? t : new vs({
      color: 16777215 * Math.random()
    }), this.updateMorphTargets()
  }

  function _s(e, t, n, i, r, a, o) {
    var s = ys.distanceSqToPoint(e);
    if (s < n) {
      var c = new It;
      ys.closestPointToPoint(e, c), c.applyMatrix4(i);
      var l = r.ray.origin.distanceTo(c);
      if (l < r.near || l > r.far) return;
      a.push({
        distance: l,
        distanceToRay: Math.sqrt(s),
        point: c,
        index: t,
        face: null,
        object: o
      })
    }
  }

  function Ms(e, t, n, i, r, a, o, s, c) {
    Bt.call(this, e, t, n, i, r, a, o, s, c), this.format = void 0 !== o ? o : Re, this.minFilter = void 0 !== a ? a : de, this.magFilter = void 0 !== r ? r : de, this.generateMipmaps = !1
  }

  function Ss(e, t, n, i, r, a, o, s, c, l, h, u) {
    Bt.call(this, null, a, o, s, c, l, i, r, h, u), this.image = {
      width: t,
      height: n
    }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1
  }

  function Ts(e, t, n, i, r, a, o, s, c) {
    Bt.call(this, e, t, n, i, r, a, o, s, c), this.needsUpdate = !0
  }

  function Es(e, t, n, i, r, a, o, s, c, l) {
    if ((l = void 0 !== l ? l : Ie) !== Ie && l !== Ne) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    void 0 === n && l === Ie && (n = xe), void 0 === n && l === Ne && (n = Ae), Bt.call(this, null, i, r, a, o, s, l, n, c), this.image = {
      width: e,
      height: t
    }, this.magFilter = void 0 !== o ? o : he, this.minFilter = void 0 !== s ? s : he, this.flipY = !1, this.generateMipmaps = !1
  }

  function As(e) {
    Oi.call(this), this.type = "WireframeGeometry";
    var t, n, i, r, a, o, s, c, l, h, u = [],
      p = [0, 0],
      d = {},
      f = ["a", "b", "c"];
    if (e && e.isGeometry) {
      var m = e.faces;
      for (t = 0, i = m.length; t < i; t++) {
        var v = m[t];
        for (n = 0; n < 3; n++) s = v[f[n]], c = v[f[(n + 1) % 3]], p[0] = Math.min(s, c), p[1] = Math.max(s, c), void 0 === d[l = p[0] + "," + p[1]] && (d[l] = {
          index1: p[0],
          index2: p[1]
        })
      }
      for (l in d) o = d[l], h = e.vertices[o.index1], u.push(h.x, h.y, h.z), h = e.vertices[o.index2], u.push(h.x, h.y, h.z)
    } else if (e && e.isBufferGeometry) {
      var g, y, x, b, w, _, M;
      if (h = new It, null !== e.index) {
        for (g = e.attributes.position, y = e.index, 0 === (x = e.groups).length && (x = [{
            start: 0,
            count: y.count,
            materialIndex: 0
          }]), r = 0, a = x.length; r < a; ++r)
          for (t = w = (b = x[r]).start, i = w + b.count; t < i; t += 3)
            for (n = 0; n < 3; n++) s = y.getX(t + n), c = y.getX(t + (n + 1) % 3), p[0] = Math.min(s, c), p[1] = Math.max(s, c), void 0 === d[l = p[0] + "," + p[1]] && (d[l] = {
              index1: p[0],
              index2: p[1]
            });
        for (l in d) o = d[l], h.fromBufferAttribute(g, o.index1), u.push(h.x, h.y, h.z), h.fromBufferAttribute(g, o.index2), u.push(h.x, h.y, h.z)
      } else
        for (t = 0, i = (g = e.attributes.position).count / 3; t < i; t++)
          for (n = 0; n < 3; n++) _ = 3 * t + n, h.fromBufferAttribute(g, _), u.push(h.x, h.y, h.z), M = 3 * t + (n + 1) % 3, h.fromBufferAttribute(g, M), u.push(h.x, h.y, h.z)
    }
    this.setAttribute("position", new wi(u, 3))
  }

  function Ls(e, t, n) {
    ir.call(this), this.type = "ParametricGeometry", this.parameters = {
      func: e,
      slices: t,
      stacks: n
    }, this.fromBufferGeometry(new Rs(e, t, n)), this.mergeVertices()
  }

  function Rs(e, t, n) {
    Oi.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
      func: e,
      slices: t,
      stacks: n
    };
    var i, r, a = [],
      o = [],
      s = [],
      c = [],
      l = new It,
      h = new It,
      u = new It,
      p = new It,
      d = new It;
    e.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
    var f = t + 1;
    for (i = 0; i <= n; i++) {
      var m = i / n;
      for (r = 0; r <= t; r++) {
        var v = r / t;
        e(v, m, h), o.push(h.x, h.y, h.z), v - 1e-5 >= 0 ? (e(v - 1e-5, m, u), p.subVectors(h, u)) : (e(v + 1e-5, m, u), p.subVectors(u, h)), m - 1e-5 >= 0 ? (e(v, m - 1e-5, u), d.subVectors(h, u)) : (e(v, m + 1e-5, u), d.subVectors(u, h)), l.crossVectors(p, d).normalize(), s.push(l.x, l.y, l.z), c.push(v, m)
      }
    }
    for (i = 0; i < n; i++)
      for (r = 0; r < t; r++) {
        var g = i * f + r,
          y = i * f + r + 1,
          x = (i + 1) * f + r + 1,
          b = (i + 1) * f + r;
        a.push(g, y, b), a.push(y, x, b)
      }
    this.setIndex(a), this.setAttribute("position", new wi(o, 3)), this.setAttribute("normal", new wi(s, 3)), this.setAttribute("uv", new wi(c, 2))
  }

  function Ps(e, t, n, i) {
    ir.call(this), this.type = "PolyhedronGeometry", this.parameters = {
      vertices: e,
      indices: t,
      radius: n,
      detail: i
    }, this.fromBufferGeometry(new Cs(e, t, n, i)), this.mergeVertices()
  }

  function Cs(e, t, n, i) {
    Oi.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
      vertices: e,
      indices: t,
      radius: n,
      detail: i
    }, n = n || 1;
    var r = [],
      a = [];

    function o(e, t, n, i) {
      var r, a, o = Math.pow(2, i),
        c = [];
      for (r = 0; r <= o; r++) {
        c[r] = [];
        var l = e.clone().lerp(n, r / o),
          h = t.clone().lerp(n, r / o),
          u = o - r;
        for (a = 0; a <= u; a++) c[r][a] = 0 === a && r === o ? l : l.clone().lerp(h, a / u)
      }
      for (r = 0; r < o; r++)
        for (a = 0; a < 2 * (o - r) - 1; a++) {
          var p = Math.floor(a / 2);
          a % 2 == 0 ? (s(c[r][p + 1]), s(c[r + 1][p]), s(c[r][p])) : (s(c[r][p + 1]), s(c[r + 1][p + 1]), s(c[r + 1][p]))
        }
    }

    function s(e) {
      r.push(e.x, e.y, e.z)
    }

    function c(t, n) {
      var i = 3 * t;
      n.x = e[i + 0], n.y = e[i + 1], n.z = e[i + 2]
    }

    function l(e, t, n, i) {
      i < 0 && 1 === e.x && (a[t] = e.x - 1), 0 === n.x && 0 === n.z && (a[t] = i / 2 / Math.PI + .5)
    }

    function h(e) {
      return Math.atan2(e.z, -e.x)
    }! function(e) {
      for (var n = new It, i = new It, r = new It, a = 0; a < t.length; a += 3) c(t[a + 0], n), c(t[a + 1], i), c(t[a + 2], r), o(n, i, r, e)
    }(i = i || 0),
    function(e) {
      for (var t = new It, n = 0; n < r.length; n += 3) t.x = r[n + 0], t.y = r[n + 1], t.z = r[n + 2], t.normalize().multiplyScalar(e), r[n + 0] = t.x, r[n + 1] = t.y, r[n + 2] = t.z
    }(n),
    function() {
      for (var e = new It, t = 0; t < r.length; t += 3) {
        e.x = r[t + 0], e.y = r[t + 1], e.z = r[t + 2];
        var n = h(e) / 2 / Math.PI + .5,
          i = (o = e, Math.atan2(-o.y, Math.sqrt(o.x * o.x + o.z * o.z)) / Math.PI + .5);
        a.push(n, 1 - i)
      }
      var o;
      (function() {
        for (var e = new It, t = new It, n = new It, i = new It, o = new Rt, s = new Rt, c = new Rt, u = 0, p = 0; u < r.length; u += 9, p += 6) {
          e.set(r[u + 0], r[u + 1], r[u + 2]), t.set(r[u + 3], r[u + 4], r[u + 5]), n.set(r[u + 6], r[u + 7], r[u + 8]), o.set(a[p + 0], a[p + 1]), s.set(a[p + 2], a[p + 3]), c.set(a[p + 4], a[p + 5]), i.copy(e).add(t).add(n).divideScalar(3);
          var d = h(i);
          l(o, p + 0, e, d), l(s, p + 2, t, d), l(c, p + 4, n, d)
        }
      })(),
      function() {
        for (var e = 0; e < a.length; e += 6) {
          var t = a[e + 0],
            n = a[e + 2],
            i = a[e + 4],
            r = Math.max(t, n, i),
            o = Math.min(t, n, i);
          r > .9 && o < .1 && (t < .2 && (a[e + 0] += 1), n < .2 && (a[e + 2] += 1), i < .2 && (a[e + 4] += 1))
        }
      }()
    }(), this.setAttribute("position", new wi(r, 3)), this.setAttribute("normal", new wi(r.slice(), 3)), this.setAttribute("uv", new wi(a, 2)), 0 === i ? this.computeVertexNormals() : this.normalizeNormals()
  }

  function Os(e, t) {
    ir.call(this), this.type = "TetrahedronGeometry", this.parameters = {
      radius: e,
      detail: t
    }, this.fromBufferGeometry(new Is(e, t)), this.mergeVertices()
  }

  function Is(e, t) {
    Cs.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], e, t), this.type = "TetrahedronBufferGeometry", this.parameters = {
      radius: e,
      detail: t
    }
  }

  function Ns(e, t) {
    ir.call(this), this.type = "OctahedronGeometry", this.parameters = {
      radius: e,
      detail: t
    }, this.fromBufferGeometry(new Ds(e, t)), this.mergeVertices()
  }

  function Ds(e, t) {
    Cs.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], e, t), this.type = "OctahedronBufferGeometry", this.parameters = {
      radius: e,
      detail: t
    }
  }

  function zs(e, t) {
    ir.call(this), this.type = "IcosahedronGeometry", this.parameters = {
      radius: e,
      detail: t
    }, this.fromBufferGeometry(new Us(e, t)), this.mergeVertices()
  }

  function Us(e, t) {
    var n = (1 + Math.sqrt(5)) / 2,
      i = [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1];
    Cs.call(this, i, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], e, t), this.type = "IcosahedronBufferGeometry", this.parameters = {
      radius: e,
      detail: t
    }
  }

  function Fs(e, t) {
    ir.call(this), this.type = "DodecahedronGeometry", this.parameters = {
      radius: e,
      detail: t
    }, this.fromBufferGeometry(new Bs(e, t)), this.mergeVertices()
  }

  function Bs(e, t) {
    var n = (1 + Math.sqrt(5)) / 2,
      i = 1 / n,
      r = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, 0, -n, 0, -i, n, 0, -i, -n, 0, i, n, 0, i];
    Cs.call(this, r, [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], e, t), this.type = "DodecahedronBufferGeometry", this.parameters = {
      radius: e,
      detail: t
    }
  }

  function Gs(e, t, n, i, r, a) {
    ir.call(this), this.type = "TubeGeometry", this.parameters = {
      path: e,
      tubularSegments: t,
      radius: n,
      radialSegments: i,
      closed: r
    }, void 0 !== a && console.warn("THREE.TubeGeometry: taper has been removed.");
    var o = new Hs(e, t, n, i, r);
    this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals, this.fromBufferGeometry(o), this.mergeVertices()
  }

  function Hs(e, t, n, i, r) {
    Oi.call(this), this.type = "TubeBufferGeometry", this.parameters = {
      path: e,
      tubularSegments: t,
      radius: n,
      radialSegments: i,
      closed: r
    }, t = t || 64, n = n || 1, i = i || 8, r = r || !1;
    var a = e.computeFrenetFrames(t, r);
    this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
    var o, s, c = new It,
      l = new It,
      h = new Rt,
      u = new It,
      p = [],
      d = [],
      f = [],
      m = [];

    function v(r) {
      u = e.getPointAt(r / t, u);
      var o = a.normals[r],
        h = a.binormals[r];
      for (s = 0; s <= i; s++) {
        var f = s / i * Math.PI * 2,
          m = Math.sin(f),
          v = -Math.cos(f);
        l.x = v * o.x + m * h.x, l.y = v * o.y + m * h.y, l.z = v * o.z + m * h.z, l.normalize(), d.push(l.x, l.y, l.z), c.x = u.x + n * l.x, c.y = u.y + n * l.y, c.z = u.z + n * l.z, p.push(c.x, c.y, c.z)
      }
    }! function() {
      for (o = 0; o < t; o++) v(o);
      v(!1 === r ? t : 0),
        function() {
          for (o = 0; o <= t; o++)
            for (s = 0; s <= i; s++) h.x = o / t, h.y = s / i, f.push(h.x, h.y)
        }(),
        function() {
          for (s = 1; s <= t; s++)
            for (o = 1; o <= i; o++) {
              var e = (i + 1) * (s - 1) + (o - 1),
                n = (i + 1) * s + (o - 1),
                r = (i + 1) * s + o,
                a = (i + 1) * (s - 1) + o;
              m.push(e, n, a), m.push(n, r, a)
            }
        }()
    }(), this.setIndex(m), this.setAttribute("position", new wi(p, 3)), this.setAttribute("normal", new wi(d, 3)), this.setAttribute("uv", new wi(f, 2))
  }

  function Vs(e, t, n, i, r, a, o) {
    ir.call(this), this.type = "TorusKnotGeometry", this.parameters = {
      radius: e,
      tube: t,
      tubularSegments: n,
      radialSegments: i,
      p: r,
      q: a
    }, void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new ks(e, t, n, i, r, a)), this.mergeVertices()
  }

  function ks(e, t, n, i, r, a) {
    Oi.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
      radius: e,
      tube: t,
      tubularSegments: n,
      radialSegments: i,
      p: r,
      q: a
    }, e = e || 1, t = t || .4, n = Math.floor(n) || 64, i = Math.floor(i) || 8, r = r || 2, a = a || 3;
    var o, s, c = [],
      l = [],
      h = [],
      u = [],
      p = new It,
      d = new It,
      f = new It,
      m = new It,
      v = new It,
      g = new It,
      y = new It;
    for (o = 0; o <= n; ++o) {
      var x = o / n * r * Math.PI * 2;
      for (A(x, r, a, e, f), A(x + .01, r, a, e, m), g.subVectors(m, f), y.addVectors(m, f), v.crossVectors(g, y), y.crossVectors(v, g), v.normalize(), y.normalize(), s = 0; s <= i; ++s) {
        var b = s / i * Math.PI * 2,
          w = -t * Math.cos(b),
          _ = t * Math.sin(b);
        p.x = f.x + (w * y.x + _ * v.x), p.y = f.y + (w * y.y + _ * v.y), p.z = f.z + (w * y.z + _ * v.z), l.push(p.x, p.y, p.z), d.subVectors(p, f).normalize(), h.push(d.x, d.y, d.z), u.push(o / n), u.push(s / i)
      }
    }
    for (s = 1; s <= n; s++)
      for (o = 1; o <= i; o++) {
        var M = (i + 1) * (s - 1) + (o - 1),
          S = (i + 1) * s + (o - 1),
          T = (i + 1) * s + o,
          E = (i + 1) * (s - 1) + o;
        c.push(M, S, E), c.push(S, T, E)
      }

    function A(e, t, n, i, r) {
      var a = Math.cos(e),
        o = Math.sin(e),
        s = n / t * e,
        c = Math.cos(s);
      r.x = i * (2 + c) * .5 * a, r.y = i * (2 + c) * o * .5, r.z = i * Math.sin(s) * .5
    }
    this.setIndex(c), this.setAttribute("position", new wi(l, 3)), this.setAttribute("normal", new wi(h, 3)), this.setAttribute("uv", new wi(u, 2))
  }

  function js(e, t, n, i, r) {
    ir.call(this), this.type = "TorusGeometry", this.parameters = {
      radius: e,
      tube: t,
      radialSegments: n,
      tubularSegments: i,
      arc: r
    }, this.fromBufferGeometry(new Ws(e, t, n, i, r)), this.mergeVertices()
  }

  function Ws(e, t, n, i, r) {
    Oi.call(this), this.type = "TorusBufferGeometry", this.parameters = {
      radius: e,
      tube: t,
      radialSegments: n,
      tubularSegments: i,
      arc: r
    }, e = e || 1, t = t || .4, n = Math.floor(n) || 8, i = Math.floor(i) || 6, r = r || 2 * Math.PI;
    var a, o, s = [],
      c = [],
      l = [],
      h = [],
      u = new It,
      p = new It,
      d = new It;
    for (a = 0; a <= n; a++)
      for (o = 0; o <= i; o++) {
        var f = o / i * r,
          m = a / n * Math.PI * 2;
        p.x = (e + t * Math.cos(m)) * Math.cos(f), p.y = (e + t * Math.cos(m)) * Math.sin(f), p.z = t * Math.sin(m), c.push(p.x, p.y, p.z), u.x = e * Math.cos(f), u.y = e * Math.sin(f), d.subVectors(p, u).normalize(), l.push(d.x, d.y, d.z), h.push(o / i), h.push(a / n)
      }
    for (a = 1; a <= n; a++)
      for (o = 1; o <= i; o++) {
        var v = (i + 1) * a + o - 1,
          g = (i + 1) * (a - 1) + o - 1,
          y = (i + 1) * (a - 1) + o,
          x = (i + 1) * a + o;
        s.push(v, g, x), s.push(g, y, x)
      }
    this.setIndex(s), this.setAttribute("position", new wi(c, 3)), this.setAttribute("normal", new wi(l, 3)), this.setAttribute("uv", new wi(h, 2))
  }
  ws.prototype = Object.assign(Object.create(mn.prototype), {
    constructor: ws,
    isPoints: !0,
    raycast: function(e, t) {
      var n = this.geometry,
        i = this.matrixWorld,
        r = e.params.Points.threshold;
      if (null === n.boundingSphere && n.computeBoundingSphere(), xs.copy(n.boundingSphere), xs.applyMatrix4(i), xs.radius += r, !1 !== e.ray.intersectsSphere(xs)) {
        gs.getInverse(i), ys.copy(e.ray).applyMatrix4(gs);
        var a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
          o = a * a;
        if (n.isBufferGeometry) {
          var s = n.index,
            c = n.attributes.position.array;
          if (null !== s)
            for (var l = s.array, h = 0, u = l.length; h < u; h++) {
              var p = l[h];
              bs.fromArray(c, 3 * p), _s(bs, p, o, i, e, t, this)
            } else {
              h = 0;
              for (var d = c.length / 3; h < d; h++) bs.fromArray(c, 3 * h), _s(bs, h, o, i, e, t, this)
            }
        } else {
          var f = n.vertices;
          for (h = 0, d = f.length; h < d; h++) _s(f[h], h, o, i, e, t, this)
        }
      }
    },
    updateMorphTargets: function() {
      var e, t, n, i = this.geometry;
      if (i.isBufferGeometry) {
        var r = i.morphAttributes,
          a = Object.keys(r);
        if (a.length > 0) {
          var o = r[a[0]];
          if (void 0 !== o)
            for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, e = 0, t = o.length; e < t; e++) n = o[e].name || String(e), this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e
        }
      } else {
        var s = i.morphTargets;
        void 0 !== s && s.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
      }
    },
    clone: function() {
      return new this.constructor(this.geometry, this.material).copy(this)
    }
  }), Ms.prototype = Object.assign(Object.create(Bt.prototype), {
    constructor: Ms,
    isVideoTexture: !0,
    update: function() {
      var e = this.image;
      e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
    }
  }), Ss.prototype = Object.create(Bt.prototype), Ss.prototype.constructor = Ss, Ss.prototype.isCompressedTexture = !0, Ts.prototype = Object.create(Bt.prototype), Ts.prototype.constructor = Ts, Ts.prototype.isCanvasTexture = !0, Es.prototype = Object.create(Bt.prototype), Es.prototype.constructor = Es, Es.prototype.isDepthTexture = !0, As.prototype = Object.create(Oi.prototype), As.prototype.constructor = As, Ls.prototype = Object.create(ir.prototype), Ls.prototype.constructor = Ls, Rs.prototype = Object.create(Oi.prototype), Rs.prototype.constructor = Rs, Ps.prototype = Object.create(ir.prototype), Ps.prototype.constructor = Ps, Cs.prototype = Object.create(Oi.prototype), Cs.prototype.constructor = Cs, Os.prototype = Object.create(ir.prototype), Os.prototype.constructor = Os, Is.prototype = Object.create(Cs.prototype), Is.prototype.constructor = Is, Ns.prototype = Object.create(ir.prototype), Ns.prototype.constructor = Ns, Ds.prototype = Object.create(Cs.prototype), Ds.prototype.constructor = Ds, zs.prototype = Object.create(ir.prototype), zs.prototype.constructor = zs, Us.prototype = Object.create(Cs.prototype), Us.prototype.constructor = Us, Fs.prototype = Object.create(ir.prototype), Fs.prototype.constructor = Fs, Bs.prototype = Object.create(Cs.prototype), Bs.prototype.constructor = Bs, Gs.prototype = Object.create(ir.prototype), Gs.prototype.constructor = Gs, Hs.prototype = Object.create(Oi.prototype), Hs.prototype.constructor = Hs, Hs.prototype.toJSON = function() {
    var e = Oi.prototype.toJSON.call(this);
    return e.path = this.parameters.path.toJSON(), e
  }, Vs.prototype = Object.create(ir.prototype), Vs.prototype.constructor = Vs, ks.prototype = Object.create(Oi.prototype), ks.prototype.constructor = ks, js.prototype = Object.create(ir.prototype), js.prototype.constructor = js, Ws.prototype = Object.create(Oi.prototype), Ws.prototype.constructor = Ws;
  var qs = function(e, t, n) {
    n = n || 2;
    var i, r, a, o, s, c, l, h = t && t.length,
      u = h ? t[0] * n : e.length,
      p = Xs(e, 0, u, n, !0),
      d = [];
    if (!p || p.next === p.prev) return d;
    if (h && (p = function(e, t, n, i) {
        var r, a, o, s, c, l = [];
        for (r = 0, a = t.length; r < a; r++) o = t[r] * i, s = r < a - 1 ? t[r + 1] * i : e.length, (c = Xs(e, o, s, i, !1)) === c.next && (c.steiner = !0), l.push(ic(c));
        for (l.sort(ec), r = 0; r < l.length; r++) tc(l[r], n), n = Ys(n, n.next);
        return n
      }(e, t, p, n)), e.length > 80 * n) {
      i = a = e[0], r = o = e[1];
      for (var f = n; f < u; f += n)(s = e[f]) < i && (i = s), (c = e[f + 1]) < r && (r = c), s > a && (a = s), c > o && (o = c);
      l = 0 !== (l = Math.max(a - i, o - r)) ? 1 / l : 0
    }
    return Zs(p, d, n, i, r, l), d
  };

  function Xs(e, t, n, i, r) {
    var a, o;
    if (r === function(e, t, n, i) {
        for (var r = 0, a = t, o = n - i; a < n; a += i) r += (e[o] - e[a]) * (e[a + 1] + e[o + 1]), o = a;
        return r
      }(e, t, n, i) > 0)
      for (a = t; a < n; a += i) o = uc(a, e[a], e[a + 1], o);
    else
      for (a = n - i; a >= t; a -= i) o = uc(a, e[a], e[a + 1], o);
    return o && sc(o, o.next) && (pc(o), o = o.next), o
  }

  function Ys(e, t) {
    if (!e) return e;
    t || (t = e);
    var n, i = e;
    do {
      if (n = !1, i.steiner || !sc(i, i.next) && 0 !== oc(i.prev, i, i.next)) i = i.next;
      else {
        if (pc(i), (i = t = i.prev) === i.next) break;
        n = !0
      }
    } while (n || i !== t);
    return t
  }

  function Zs(e, t, n, i, r, a, o) {
    if (e) {
      !o && a && function(e, t, n, i) {
        var r = e;
        do {
          null === r.z && (r.z = nc(r.x, r.y, t, n, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
        } while (r !== e);
        r.prevZ.nextZ = null, r.prevZ = null,
          function(e) {
            var t, n, i, r, a, o, s, c, l = 1;
            do {
              for (n = e, e = null, a = null, o = 0; n;) {
                for (o++, i = n, s = 0, t = 0; t < l && (s++, i = i.nextZ); t++);
                for (c = l; s > 0 || c > 0 && i;) 0 !== s && (0 === c || !i || n.z <= i.z) ? (r = n, n = n.nextZ, s--) : (r = i, i = i.nextZ, c--), a ? a.nextZ = r : e = r, r.prevZ = a, a = r;
                n = i
              }
              a.nextZ = null, l *= 2
            } while (o > 1)
          }(r)
      }(e, i, r, a);
      for (var s, c, l = e; e.prev !== e.next;)
        if (s = e.prev, c = e.next, a ? Ks(e, i, r, a) : Js(e)) t.push(s.i / n), t.push(e.i / n), t.push(c.i / n), pc(e), e = c.next, l = c.next;
        else if ((e = c) === l) {
        o ? 1 === o ? Zs(e = Qs(e, t, n), t, n, i, r, a, 2) : 2 === o && $s(e, t, n, i, r, a) : Zs(Ys(e), t, n, i, r, a, 1);
        break
      }
    }
  }

  function Js(e) {
    var t = e.prev,
      n = e,
      i = e.next;
    if (oc(t, n, i) >= 0) return !1;
    for (var r = e.next.next; r !== e.prev;) {
      if (rc(t.x, t.y, n.x, n.y, i.x, i.y, r.x, r.y) && oc(r.prev, r, r.next) >= 0) return !1;
      r = r.next
    }
    return !0
  }

  function Ks(e, t, n, i) {
    var r = e.prev,
      a = e,
      o = e.next;
    if (oc(r, a, o) >= 0) return !1;
    for (var s = r.x < a.x ? r.x < o.x ? r.x : o.x : a.x < o.x ? a.x : o.x, c = r.y < a.y ? r.y < o.y ? r.y : o.y : a.y < o.y ? a.y : o.y, l = r.x > a.x ? r.x > o.x ? r.x : o.x : a.x > o.x ? a.x : o.x, h = r.y > a.y ? r.y > o.y ? r.y : o.y : a.y > o.y ? a.y : o.y, u = nc(s, c, t, n, i), p = nc(l, h, t, n, i), d = e.prevZ, f = e.nextZ; d && d.z >= u && f && f.z <= p;) {
      if (d !== e.prev && d !== e.next && rc(r.x, r.y, a.x, a.y, o.x, o.y, d.x, d.y) && oc(d.prev, d, d.next) >= 0) return !1;
      if (d = d.prevZ, f !== e.prev && f !== e.next && rc(r.x, r.y, a.x, a.y, o.x, o.y, f.x, f.y) && oc(f.prev, f, f.next) >= 0) return !1;
      f = f.nextZ
    }
    for (; d && d.z >= u;) {
      if (d !== e.prev && d !== e.next && rc(r.x, r.y, a.x, a.y, o.x, o.y, d.x, d.y) && oc(d.prev, d, d.next) >= 0) return !1;
      d = d.prevZ
    }
    for (; f && f.z <= p;) {
      if (f !== e.prev && f !== e.next && rc(r.x, r.y, a.x, a.y, o.x, o.y, f.x, f.y) && oc(f.prev, f, f.next) >= 0) return !1;
      f = f.nextZ
    }
    return !0
  }

  function Qs(e, t, n) {
    var i = e;
    do {
      var r = i.prev,
        a = i.next.next;
      !sc(r, a) && cc(r, i, i.next, a) && lc(r, a) && lc(a, r) && (t.push(r.i / n), t.push(i.i / n), t.push(a.i / n), pc(i), pc(i.next), i = e = a), i = i.next
    } while (i !== e);
    return i
  }

  function $s(e, t, n, i, r, a) {
    var o = e;
    do {
      for (var s = o.next.next; s !== o.prev;) {
        if (o.i !== s.i && ac(o, s)) {
          var c = hc(o, s);
          return o = Ys(o, o.next), c = Ys(c, c.next), Zs(o, t, n, i, r, a), void Zs(c, t, n, i, r, a)
        }
        s = s.next
      }
      o = o.next
    } while (o !== e)
  }

  function ec(e, t) {
    return e.x - t.x
  }

  function tc(e, t) {
    if (t = function(e, t) {
        var n, i = t,
          r = e.x,
          a = e.y,
          o = -1 / 0;
        do {
          if (a <= i.y && a >= i.next.y && i.next.y !== i.y) {
            var s = i.x + (a - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
            if (s <= r && s > o) {
              if (o = s, s === r) {
                if (a === i.y) return i;
                if (a === i.next.y) return i.next
              }
              n = i.x < i.next.x ? i : i.next
            }
          }
          i = i.next
        } while (i !== t);
        if (!n) return null;
        if (r === o) return n.prev;
        var c, l = n,
          h = n.x,
          u = n.y,
          p = 1 / 0;
        i = n.next;
        for (; i !== l;) r >= i.x && i.x >= h && r !== i.x && rc(a < u ? r : o, a, h, u, a < u ? o : r, a, i.x, i.y) && ((c = Math.abs(a - i.y) / (r - i.x)) < p || c === p && i.x > n.x) && lc(i, e) && (n = i, p = c), i = i.next;
        return n
      }(e, t)) {
      var n = hc(t, e);
      Ys(n, n.next)
    }
  }

  function nc(e, t, n, i, r) {
    return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1
  }

  function ic(e) {
    var t = e,
      n = e;
    do {
      (t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next
    } while (t !== e);
    return n
  }

  function rc(e, t, n, i, r, a, o, s) {
    return (r - o) * (t - s) - (e - o) * (a - s) >= 0 && (e - o) * (i - s) - (n - o) * (t - s) >= 0 && (n - o) * (a - s) - (r - o) * (i - s) >= 0
  }

  function ac(e, t) {
    return e.next.i !== t.i && e.prev.i !== t.i && ! function(e, t) {
      var n = e;
      do {
        if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && cc(n, n.next, e, t)) return !0;
        n = n.next
      } while (n !== e);
      return !1
    }(e, t) && lc(e, t) && lc(t, e) && function(e, t) {
      var n = e,
        i = !1,
        r = (e.x + t.x) / 2,
        a = (e.y + t.y) / 2;
      do {
        n.y > a != n.next.y > a && n.next.y !== n.y && r < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next
      } while (n !== e);
      return i
    }(e, t)
  }

  function oc(e, t, n) {
    return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)
  }

  function sc(e, t) {
    return e.x === t.x && e.y === t.y
  }

  function cc(e, t, n, i) {
    return !!(sc(e, n) && sc(t, i) || sc(e, i) && sc(n, t)) || oc(e, t, n) > 0 != oc(e, t, i) > 0 && oc(n, i, e) > 0 != oc(n, i, t) > 0
  }

  function lc(e, t) {
    return oc(e.prev, e, e.next) < 0 ? oc(e, t, e.next) >= 0 && oc(e, e.prev, t) >= 0 : oc(e, t, e.prev) < 0 || oc(e, e.next, t) < 0
  }

  function hc(e, t) {
    var n = new dc(e.i, e.x, e.y),
      i = new dc(t.i, t.x, t.y),
      r = e.next,
      a = t.prev;
    return e.next = t, t.prev = e, n.next = r, r.prev = n, i.next = n, n.prev = i, a.next = i, i.prev = a, i
  }

  function uc(e, t, n, i) {
    var r = new dc(e, t, n);
    return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r
  }

  function pc(e) {
    e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ)
  }

  function dc(e, t, n) {
    this.i = e, this.x = t, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
  }
  var fc = {
    area: function(e) {
      for (var t = e.length, n = 0, i = t - 1, r = 0; r < t; i = r++) n += e[i].x * e[r].y - e[r].x * e[i].y;
      return .5 * n
    },
    isClockWise: function(e) {
      return fc.area(e) < 0
    },
    triangulateShape: function(e, t) {
      var n = [],
        i = [],
        r = [];
      mc(e), vc(n, e);
      var a = e.length;
      t.forEach(mc);
      for (var o = 0; o < t.length; o++) i.push(a), a += t[o].length, vc(n, t[o]);
      var s = qs(n, i);
      for (o = 0; o < s.length; o += 3) r.push(s.slice(o, o + 3));
      return r
    }
  };

  function mc(e) {
    var t = e.length;
    t > 2 && e[t - 1].equals(e[0]) && e.pop()
  }

  function vc(e, t) {
    for (var n = 0; n < t.length; n++) e.push(t[n].x), e.push(t[n].y)
  }

  function gc(e, t) {
    ir.call(this), this.type = "ExtrudeGeometry", this.parameters = {
      shapes: e,
      options: t
    }, this.fromBufferGeometry(new yc(e, t)), this.mergeVertices()
  }

  function yc(e, t) {
    Oi.call(this), this.type = "ExtrudeBufferGeometry", this.parameters = {
      shapes: e,
      options: t
    }, e = Array.isArray(e) ? e : [e];
    for (var n = this, i = [], r = [], a = 0, o = e.length; a < o; a++) {
      s(e[a])
    }

    function s(e) {
      var a = [],
        o = void 0 !== t.curveSegments ? t.curveSegments : 12,
        s = void 0 !== t.steps ? t.steps : 1,
        c = void 0 !== t.depth ? t.depth : 100,
        l = void 0 === t.bevelEnabled || t.bevelEnabled,
        h = void 0 !== t.bevelThickness ? t.bevelThickness : 6,
        u = void 0 !== t.bevelSize ? t.bevelSize : h - 2,
        p = void 0 !== t.bevelOffset ? t.bevelOffset : 0,
        d = void 0 !== t.bevelSegments ? t.bevelSegments : 3,
        f = t.extrudePath,
        m = void 0 !== t.UVGenerator ? t.UVGenerator : xc;
      void 0 !== t.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), c = t.amount);
      var v, g, y, x, b, w, _, M, S = !1;
      f && (v = f.getSpacedPoints(s), S = !0, l = !1, g = f.computeFrenetFrames(s, !1), y = new It, x = new It, b = new It), l || (d = 0, h = 0, u = 0, p = 0);
      var T = e.extractPoints(o),
        E = T.shape,
        A = T.holes;
      if (!fc.isClockWise(E))
        for (E = E.reverse(), _ = 0, M = A.length; _ < M; _++) w = A[_], fc.isClockWise(w) && (A[_] = w.reverse());
      var L = fc.triangulateShape(E, A),
        R = E;
      for (_ = 0, M = A.length; _ < M; _++) w = A[_], E = E.concat(w);

      function P(e, t, n) {
        return t || console.error("THREE.ExtrudeGeometry: vec does not exist"), t.clone().multiplyScalar(n).add(e)
      }
      var C, O, I, N, D, z, U = E.length,
        F = L.length;

      function B(e, t, n) {
        var i, r, a, o = e.x - t.x,
          s = e.y - t.y,
          c = n.x - e.x,
          l = n.y - e.y,
          h = o * o + s * s,
          u = o * l - s * c;
        if (Math.abs(u) > Number.EPSILON) {
          var p = Math.sqrt(h),
            d = Math.sqrt(c * c + l * l),
            f = t.x - s / p,
            m = t.y + o / p,
            v = ((n.x - l / d - f) * l - (n.y + c / d - m) * c) / (o * l - s * c),
            g = (i = f + o * v - e.x) * i + (r = m + s * v - e.y) * r;
          if (g <= 2) return new Rt(i, r);
          a = Math.sqrt(g / 2)
        } else {
          var y = !1;
          o > Number.EPSILON ? c > Number.EPSILON && (y = !0) : o < -Number.EPSILON ? c < -Number.EPSILON && (y = !0) : Math.sign(s) === Math.sign(l) && (y = !0), y ? (i = -s, r = o, a = Math.sqrt(h)) : (i = o, r = s, a = Math.sqrt(h / 2))
        }
        return new Rt(i / a, r / a)
      }
      for (var G = [], H = 0, V = R.length, k = V - 1, j = H + 1; H < V; H++, k++, j++) k === V && (k = 0), j === V && (j = 0), G[H] = B(R[H], R[k], R[j]);
      var W, q, X = [],
        Y = G.concat();
      for (_ = 0, M = A.length; _ < M; _++) {
        for (w = A[_], W = [], H = 0, k = (V = w.length) - 1, j = H + 1; H < V; H++, k++, j++) k === V && (k = 0), j === V && (j = 0), W[H] = B(w[H], w[k], w[j]);
        X.push(W), Y = Y.concat(W)
      }
      for (C = 0; C < d; C++) {
        for (I = C / d, N = h * Math.cos(I * Math.PI / 2), O = u * Math.sin(I * Math.PI / 2) + p, H = 0, V = R.length; H < V; H++) J((D = P(R[H], G[H], O)).x, D.y, -N);
        for (_ = 0, M = A.length; _ < M; _++)
          for (w = A[_], W = X[_], H = 0, V = w.length; H < V; H++) J((D = P(w[H], W[H], O)).x, D.y, -N)
      }
      for (O = u + p, H = 0; H < U; H++) D = l ? P(E[H], Y[H], O) : E[H], S ? (x.copy(g.normals[0]).multiplyScalar(D.x), y.copy(g.binormals[0]).multiplyScalar(D.y), b.copy(v[0]).add(x).add(y), J(b.x, b.y, b.z)) : J(D.x, D.y, 0);
      for (q = 1; q <= s; q++)
        for (H = 0; H < U; H++) D = l ? P(E[H], Y[H], O) : E[H], S ? (x.copy(g.normals[q]).multiplyScalar(D.x), y.copy(g.binormals[q]).multiplyScalar(D.y), b.copy(v[q]).add(x).add(y), J(b.x, b.y, b.z)) : J(D.x, D.y, c / s * q);
      for (C = d - 1; C >= 0; C--) {
        for (I = C / d, N = h * Math.cos(I * Math.PI / 2), O = u * Math.sin(I * Math.PI / 2) + p, H = 0, V = R.length; H < V; H++) J((D = P(R[H], G[H], O)).x, D.y, c + N);
        for (_ = 0, M = A.length; _ < M; _++)
          for (w = A[_], W = X[_], H = 0, V = w.length; H < V; H++) D = P(w[H], W[H], O), S ? J(D.x, D.y + v[s - 1].y, v[s - 1].x + N) : J(D.x, D.y, c + N)
      }

      function Z(e, t) {
        var n, i;
        for (H = e.length; --H >= 0;) {
          n = H, (i = H - 1) < 0 && (i = e.length - 1);
          var r = 0,
            a = s + 2 * d;
          for (r = 0; r < a; r++) {
            var o = U * r,
              c = U * (r + 1);
            Q(t + n + o, t + i + o, t + i + c, t + n + c)
          }
        }
      }

      function J(e, t, n) {
        a.push(e), a.push(t), a.push(n)
      }

      function K(e, t, r) {
        $(e), $(t), $(r);
        var a = i.length / 3,
          o = m.generateTopUV(n, i, a - 3, a - 2, a - 1);
        ee(o[0]), ee(o[1]), ee(o[2])
      }

      function Q(e, t, r, a) {
        $(e), $(t), $(a), $(t), $(r), $(a);
        var o = i.length / 3,
          s = m.generateSideWallUV(n, i, o - 6, o - 3, o - 2, o - 1);
        ee(s[0]), ee(s[1]), ee(s[3]), ee(s[1]), ee(s[2]), ee(s[3])
      }

      function $(e) {
        i.push(a[3 * e + 0]), i.push(a[3 * e + 1]), i.push(a[3 * e + 2])
      }

      function ee(e) {
        r.push(e.x), r.push(e.y)
      }! function() {
        var e = i.length / 3;
        if (l) {
          var t = 0,
            r = U * t;
          for (H = 0; H < F; H++) K((z = L[H])[2] + r, z[1] + r, z[0] + r);
          for (r = U * (t = s + 2 * d), H = 0; H < F; H++) K((z = L[H])[0] + r, z[1] + r, z[2] + r)
        } else {
          for (H = 0; H < F; H++) K((z = L[H])[2], z[1], z[0]);
          for (H = 0; H < F; H++) K((z = L[H])[0] + U * s, z[1] + U * s, z[2] + U * s)
        }
        n.addGroup(e, i.length / 3 - e, 0)
      }(),
      function() {
        var e = i.length / 3,
          t = 0;
        for (Z(R, t), t += R.length, _ = 0, M = A.length; _ < M; _++) Z(w = A[_], t), t += w.length;
        n.addGroup(e, i.length / 3 - e, 1)
      }()
    }
    this.setAttribute("position", new wi(i, 3)), this.setAttribute("uv", new wi(r, 2)), this.computeVertexNormals()
  }
  gc.prototype = Object.create(ir.prototype), gc.prototype.constructor = gc, gc.prototype.toJSON = function() {
    var e = ir.prototype.toJSON.call(this);
    return bc(this.parameters.shapes, this.parameters.options, e)
  }, yc.prototype = Object.create(Oi.prototype), yc.prototype.constructor = yc, yc.prototype.toJSON = function() {
    var e = Oi.prototype.toJSON.call(this);
    return bc(this.parameters.shapes, this.parameters.options, e)
  };
  var xc = {
    generateTopUV: function(e, t, n, i, r) {
      var a = t[3 * n],
        o = t[3 * n + 1],
        s = t[3 * i],
        c = t[3 * i + 1],
        l = t[3 * r],
        h = t[3 * r + 1];
      return [new Rt(a, o), new Rt(s, c), new Rt(l, h)]
    },
    generateSideWallUV: function(e, t, n, i, r, a) {
      var o = t[3 * n],
        s = t[3 * n + 1],
        c = t[3 * n + 2],
        l = t[3 * i],
        h = t[3 * i + 1],
        u = t[3 * i + 2],
        p = t[3 * r],
        d = t[3 * r + 1],
        f = t[3 * r + 2],
        m = t[3 * a],
        v = t[3 * a + 1],
        g = t[3 * a + 2];
      return Math.abs(s - h) < .01 ? [new Rt(o, 1 - c), new Rt(l, 1 - u), new Rt(p, 1 - f), new Rt(m, 1 - g)] : [new Rt(s, 1 - c), new Rt(h, 1 - u), new Rt(d, 1 - f), new Rt(v, 1 - g)]
    }
  };

  function bc(e, t, n) {
    if (n.shapes = [], Array.isArray(e))
      for (var i = 0, r = e.length; i < r; i++) {
        var a = e[i];
        n.shapes.push(a.uuid)
      } else n.shapes.push(e.uuid);
    return void 0 !== t.extrudePath && (n.options.extrudePath = t.extrudePath.toJSON()), n
  }

  function wc(e, t) {
    ir.call(this), this.type = "TextGeometry", this.parameters = {
      text: e,
      parameters: t
    }, this.fromBufferGeometry(new _c(e, t)), this.mergeVertices()
  }

  function _c(e, t) {
    var n = (t = t || {}).font;
    if (!n || !n.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new ir;
    var i = n.generateShapes(e, t.size);
    t.depth = void 0 !== t.height ? t.height : 50, void 0 === t.bevelThickness && (t.bevelThickness = 10), void 0 === t.bevelSize && (t.bevelSize = 8), void 0 === t.bevelEnabled && (t.bevelEnabled = !1), yc.call(this, i, t), this.type = "TextBufferGeometry"
  }

  function Mc(e, t, n, i, r, a, o) {
    ir.call(this), this.type = "SphereGeometry", this.parameters = {
      radius: e,
      widthSegments: t,
      heightSegments: n,
      phiStart: i,
      phiLength: r,
      thetaStart: a,
      thetaLength: o
    }, this.fromBufferGeometry(new Sc(e, t, n, i, r, a, o)), this.mergeVertices()
  }

  function Sc(e, t, n, i, r, a, o) {
    Oi.call(this), this.type = "SphereBufferGeometry", this.parameters = {
      radius: e,
      widthSegments: t,
      heightSegments: n,
      phiStart: i,
      phiLength: r,
      thetaStart: a,
      thetaLength: o
    }, e = e || 1, t = Math.max(3, Math.floor(t) || 8), n = Math.max(2, Math.floor(n) || 6), i = void 0 !== i ? i : 0, r = void 0 !== r ? r : 2 * Math.PI, a = void 0 !== a ? a : 0, o = void 0 !== o ? o : Math.PI;
    var s, c, l = Math.min(a + o, Math.PI),
      h = 0,
      u = [],
      p = new It,
      d = new It,
      f = [],
      m = [],
      v = [],
      g = [];
    for (c = 0; c <= n; c++) {
      var y = [],
        x = c / n,
        b = 0;
      for (0 == c && 0 == a ? b = .5 / t : c == n && l == Math.PI && (b = -.5 / t), s = 0; s <= t; s++) {
        var w = s / t;
        p.x = -e * Math.cos(i + w * r) * Math.sin(a + x * o), p.y = e * Math.cos(a + x * o), p.z = e * Math.sin(i + w * r) * Math.sin(a + x * o), m.push(p.x, p.y, p.z), d.copy(p).normalize(), v.push(d.x, d.y, d.z), g.push(w + b, 1 - x), y.push(h++)
      }
      u.push(y)
    }
    for (c = 0; c < n; c++)
      for (s = 0; s < t; s++) {
        var _ = u[c][s + 1],
          M = u[c][s],
          S = u[c + 1][s],
          T = u[c + 1][s + 1];
        (0 !== c || a > 0) && f.push(_, M, T), (c !== n - 1 || l < Math.PI) && f.push(M, S, T)
      }
    this.setIndex(f), this.setAttribute("position", new wi(m, 3)), this.setAttribute("normal", new wi(v, 3)), this.setAttribute("uv", new wi(g, 2))
  }

  function Tc(e, t, n, i, r, a) {
    ir.call(this), this.type = "RingGeometry", this.parameters = {
      innerRadius: e,
      outerRadius: t,
      thetaSegments: n,
      phiSegments: i,
      thetaStart: r,
      thetaLength: a
    }, this.fromBufferGeometry(new Ec(e, t, n, i, r, a)), this.mergeVertices()
  }

  function Ec(e, t, n, i, r, a) {
    Oi.call(this), this.type = "RingBufferGeometry", this.parameters = {
      innerRadius: e,
      outerRadius: t,
      thetaSegments: n,
      phiSegments: i,
      thetaStart: r,
      thetaLength: a
    }, e = e || .5, t = t || 1, r = void 0 !== r ? r : 0, a = void 0 !== a ? a : 2 * Math.PI, n = void 0 !== n ? Math.max(3, n) : 8;
    var o, s, c, l = [],
      h = [],
      u = [],
      p = [],
      d = e,
      f = (t - e) / (i = void 0 !== i ? Math.max(1, i) : 1),
      m = new It,
      v = new Rt;
    for (s = 0; s <= i; s++) {
      for (c = 0; c <= n; c++) o = r + c / n * a, m.x = d * Math.cos(o), m.y = d * Math.sin(o), h.push(m.x, m.y, m.z), u.push(0, 0, 1), v.x = (m.x / t + 1) / 2, v.y = (m.y / t + 1) / 2, p.push(v.x, v.y);
      d += f
    }
    for (s = 0; s < i; s++) {
      var g = s * (n + 1);
      for (c = 0; c < n; c++) {
        var y = o = c + g,
          x = o + n + 1,
          b = o + n + 2,
          w = o + 1;
        l.push(y, x, w), l.push(x, b, w)
      }
    }
    this.setIndex(l), this.setAttribute("position", new wi(h, 3)), this.setAttribute("normal", new wi(u, 3)), this.setAttribute("uv", new wi(p, 2))
  }

  function Ac(e, t, n, i) {
    ir.call(this), this.type = "LatheGeometry", this.parameters = {
      points: e,
      segments: t,
      phiStart: n,
      phiLength: i
    }, this.fromBufferGeometry(new Lc(e, t, n, i)), this.mergeVertices()
  }

  function Lc(e, t, n, i) {
    Oi.call(this), this.type = "LatheBufferGeometry", this.parameters = {
      points: e,
      segments: t,
      phiStart: n,
      phiLength: i
    }, t = Math.floor(t) || 12, n = n || 0, i = i || 2 * Math.PI, i = Lt.clamp(i, 0, 2 * Math.PI);
    var r, a, o, s = [],
      c = [],
      l = [],
      h = 1 / t,
      u = new It,
      p = new Rt;
    for (a = 0; a <= t; a++) {
      var d = n + a * h * i,
        f = Math.sin(d),
        m = Math.cos(d);
      for (o = 0; o <= e.length - 1; o++) u.x = e[o].x * f, u.y = e[o].y, u.z = e[o].x * m, c.push(u.x, u.y, u.z), p.x = a / t, p.y = o / (e.length - 1), l.push(p.x, p.y)
    }
    for (a = 0; a < t; a++)
      for (o = 0; o < e.length - 1; o++) {
        var v = r = o + a * e.length,
          g = r + e.length,
          y = r + e.length + 1,
          x = r + 1;
        s.push(v, g, x), s.push(g, y, x)
      }
    if (this.setIndex(s), this.setAttribute("position", new wi(c, 3)), this.setAttribute("uv", new wi(l, 2)), this.computeVertexNormals(), i === 2 * Math.PI) {
      var b = this.attributes.normal.array,
        w = new It,
        _ = new It,
        M = new It;
      for (r = t * e.length * 3, a = 0, o = 0; a < e.length; a++, o += 3) w.x = b[o + 0], w.y = b[o + 1], w.z = b[o + 2], _.x = b[r + o + 0], _.y = b[r + o + 1], _.z = b[r + o + 2], M.addVectors(w, _).normalize(), b[o + 0] = b[r + o + 0] = M.x, b[o + 1] = b[r + o + 1] = M.y, b[o + 2] = b[r + o + 2] = M.z
    }
  }

  function Rc(e, t) {
    ir.call(this), this.type = "ShapeGeometry", "object" == typeof t && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), t = t.curveSegments), this.parameters = {
      shapes: e,
      curveSegments: t
    }, this.fromBufferGeometry(new Pc(e, t)), this.mergeVertices()
  }

  function Pc(e, t) {
    Oi.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
      shapes: e,
      curveSegments: t
    }, t = t || 12;
    var n = [],
      i = [],
      r = [],
      a = [],
      o = 0,
      s = 0;
    if (!1 === Array.isArray(e)) l(e);
    else
      for (var c = 0; c < e.length; c++) l(e[c]), this.addGroup(o, s, c), o += s, s = 0;

    function l(e) {
      var o, c, l, h = i.length / 3,
        u = e.extractPoints(t),
        p = u.shape,
        d = u.holes;
      for (!1 === fc.isClockWise(p) && (p = p.reverse()), o = 0, c = d.length; o < c; o++) l = d[o], !0 === fc.isClockWise(l) && (d[o] = l.reverse());
      var f = fc.triangulateShape(p, d);
      for (o = 0, c = d.length; o < c; o++) l = d[o], p = p.concat(l);
      for (o = 0, c = p.length; o < c; o++) {
        var m = p[o];
        i.push(m.x, m.y, 0), r.push(0, 0, 1), a.push(m.x, m.y)
      }
      for (o = 0, c = f.length; o < c; o++) {
        var v = f[o],
          g = v[0] + h,
          y = v[1] + h,
          x = v[2] + h;
        n.push(g, y, x), s += 3
      }
    }
    this.setIndex(n), this.setAttribute("position", new wi(i, 3)), this.setAttribute("normal", new wi(r, 3)), this.setAttribute("uv", new wi(a, 2))
  }

  function Cc(e, t) {
    if (t.shapes = [], Array.isArray(e))
      for (var n = 0, i = e.length; n < i; n++) {
        var r = e[n];
        t.shapes.push(r.uuid)
      } else t.shapes.push(e.uuid);
    return t
  }

  function Oc(e, t) {
    Oi.call(this), this.type = "EdgesGeometry", this.parameters = {
      thresholdAngle: t
    }, t = void 0 !== t ? t : 1;
    var n, i, r, a, o = [],
      s = Math.cos(Lt.DEG2RAD * t),
      c = [0, 0],
      l = {},
      h = ["a", "b", "c"];
    e.isBufferGeometry ? (a = new ir).fromBufferGeometry(e) : a = e.clone(), a.mergeVertices(), a.computeFaceNormals();
    for (var u = a.vertices, p = a.faces, d = 0, f = p.length; d < f; d++)
      for (var m = p[d], v = 0; v < 3; v++) n = m[h[v]], i = m[h[(v + 1) % 3]], c[0] = Math.min(n, i), c[1] = Math.max(n, i), void 0 === l[r = c[0] + "," + c[1]] ? l[r] = {
        index1: c[0],
        index2: c[1],
        face1: d,
        face2: void 0
      } : l[r].face2 = d;
    for (r in l) {
      var g = l[r];
      if (void 0 === g.face2 || p[g.face1].normal.dot(p[g.face2].normal) <= s) {
        var y = u[g.index1];
        o.push(y.x, y.y, y.z), y = u[g.index2], o.push(y.x, y.y, y.z)
      }
    }
    this.setAttribute("position", new wi(o, 3))
  }

  function Ic(e, t, n, i, r, a, o, s) {
    ir.call(this), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: e,
      radiusBottom: t,
      height: n,
      radialSegments: i,
      heightSegments: r,
      openEnded: a,
      thetaStart: o,
      thetaLength: s
    }, this.fromBufferGeometry(new Nc(e, t, n, i, r, a, o, s)), this.mergeVertices()
  }

  function Nc(e, t, n, i, r, a, o, s) {
    Oi.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
      radiusTop: e,
      radiusBottom: t,
      height: n,
      radialSegments: i,
      heightSegments: r,
      openEnded: a,
      thetaStart: o,
      thetaLength: s
    };
    var c = this;
    e = void 0 !== e ? e : 1, t = void 0 !== t ? t : 1, n = n || 1, i = Math.floor(i) || 8, r = Math.floor(r) || 1, a = void 0 !== a && a, o = void 0 !== o ? o : 0, s = void 0 !== s ? s : 2 * Math.PI;
    var l = [],
      h = [],
      u = [],
      p = [],
      d = 0,
      f = [],
      m = n / 2,
      v = 0;

    function g(n) {
      var r, a, f, g = new Rt,
        y = new It,
        x = 0,
        b = !0 === n ? e : t,
        w = !0 === n ? 1 : -1;
      for (a = d, r = 1; r <= i; r++) h.push(0, m * w, 0), u.push(0, w, 0), p.push(.5, .5), d++;
      for (f = d, r = 0; r <= i; r++) {
        var _ = r / i * s + o,
          M = Math.cos(_),
          S = Math.sin(_);
        y.x = b * S, y.y = m * w, y.z = b * M, h.push(y.x, y.y, y.z), u.push(0, w, 0), g.x = .5 * M + .5, g.y = .5 * S * w + .5, p.push(g.x, g.y), d++
      }
      for (r = 0; r < i; r++) {
        var T = a + r,
          E = f + r;
        !0 === n ? l.push(E, E + 1, T) : l.push(E + 1, E, T), x += 3
      }
      c.addGroup(v, x, !0 === n ? 1 : 2), v += x
    }! function() {
      var a, g, y = new It,
        x = new It,
        b = 0,
        w = (t - e) / n;
      for (g = 0; g <= r; g++) {
        var _ = [],
          M = g / r,
          S = M * (t - e) + e;
        for (a = 0; a <= i; a++) {
          var T = a / i,
            E = T * s + o,
            A = Math.sin(E),
            L = Math.cos(E);
          x.x = S * A, x.y = -M * n + m, x.z = S * L, h.push(x.x, x.y, x.z), y.set(A, w, L).normalize(), u.push(y.x, y.y, y.z), p.push(T, 1 - M), _.push(d++)
        }
        f.push(_)
      }
      for (a = 0; a < i; a++)
        for (g = 0; g < r; g++) {
          var R = f[g][a],
            P = f[g + 1][a],
            C = f[g + 1][a + 1],
            O = f[g][a + 1];
          l.push(R, P, O), l.push(P, C, O), b += 6
        }
      c.addGroup(v, b, 0), v += b
    }(), !1 === a && (e > 0 && g(!0), t > 0 && g(!1)), this.setIndex(l), this.setAttribute("position", new wi(h, 3)), this.setAttribute("normal", new wi(u, 3)), this.setAttribute("uv", new wi(p, 2))
  }

  function Dc(e, t, n, i, r, a, o) {
    Ic.call(this, 0, e, t, n, i, r, a, o), this.type = "ConeGeometry", this.parameters = {
      radius: e,
      height: t,
      radialSegments: n,
      heightSegments: i,
      openEnded: r,
      thetaStart: a,
      thetaLength: o
    }
  }

  function zc(e, t, n, i, r, a, o) {
    Nc.call(this, 0, e, t, n, i, r, a, o), this.type = "ConeBufferGeometry", this.parameters = {
      radius: e,
      height: t,
      radialSegments: n,
      heightSegments: i,
      openEnded: r,
      thetaStart: a,
      thetaLength: o
    }
  }

  function Uc(e, t, n, i) {
    ir.call(this), this.type = "CircleGeometry", this.parameters = {
      radius: e,
      segments: t,
      thetaStart: n,
      thetaLength: i
    }, this.fromBufferGeometry(new Fc(e, t, n, i)), this.mergeVertices()
  }

  function Fc(e, t, n, i) {
    Oi.call(this), this.type = "CircleBufferGeometry", this.parameters = {
      radius: e,
      segments: t,
      thetaStart: n,
      thetaLength: i
    }, e = e || 1, t = void 0 !== t ? Math.max(3, t) : 8, n = void 0 !== n ? n : 0, i = void 0 !== i ? i : 2 * Math.PI;
    var r, a, o = [],
      s = [],
      c = [],
      l = [],
      h = new It,
      u = new Rt;
    for (s.push(0, 0, 0), c.push(0, 0, 1), l.push(.5, .5), a = 0, r = 3; a <= t; a++, r += 3) {
      var p = n + a / t * i;
      h.x = e * Math.cos(p), h.y = e * Math.sin(p), s.push(h.x, h.y, h.z), c.push(0, 0, 1), u.x = (s[r] / e + 1) / 2, u.y = (s[r + 1] / e + 1) / 2, l.push(u.x, u.y)
    }
    for (r = 1; r <= t; r++) o.push(r, r + 1, 0);
    this.setIndex(o), this.setAttribute("position", new wi(s, 3)), this.setAttribute("normal", new wi(c, 3)), this.setAttribute("uv", new wi(l, 2))
  }
  wc.prototype = Object.create(ir.prototype), wc.prototype.constructor = wc, _c.prototype = Object.create(yc.prototype), _c.prototype.constructor = _c, Mc.prototype = Object.create(ir.prototype), Mc.prototype.constructor = Mc, Sc.prototype = Object.create(Oi.prototype), Sc.prototype.constructor = Sc, Tc.prototype = Object.create(ir.prototype), Tc.prototype.constructor = Tc, Ec.prototype = Object.create(Oi.prototype), Ec.prototype.constructor = Ec, Ac.prototype = Object.create(ir.prototype), Ac.prototype.constructor = Ac, Lc.prototype = Object.create(Oi.prototype), Lc.prototype.constructor = Lc, Rc.prototype = Object.create(ir.prototype), Rc.prototype.constructor = Rc, Rc.prototype.toJSON = function() {
    var e = ir.prototype.toJSON.call(this);
    return Cc(this.parameters.shapes, e)
  }, Pc.prototype = Object.create(Oi.prototype), Pc.prototype.constructor = Pc, Pc.prototype.toJSON = function() {
    var e = Oi.prototype.toJSON.call(this);
    return Cc(this.parameters.shapes, e)
  }, Oc.prototype = Object.create(Oi.prototype), Oc.prototype.constructor = Oc, Ic.prototype = Object.create(ir.prototype), Ic.prototype.constructor = Ic, Nc.prototype = Object.create(Oi.prototype), Nc.prototype.constructor = Nc, Dc.prototype = Object.create(Ic.prototype), Dc.prototype.constructor = Dc, zc.prototype = Object.create(Nc.prototype), zc.prototype.constructor = zc, Uc.prototype = Object.create(ir.prototype), Uc.prototype.constructor = Uc, Fc.prototype = Object.create(Oi.prototype), Fc.prototype.constructor = Fc;
  var Bc = Object.freeze({
    __proto__: null,
    WireframeGeometry: As,
    ParametricGeometry: Ls,
    ParametricBufferGeometry: Rs,
    TetrahedronGeometry: Os,
    TetrahedronBufferGeometry: Is,
    OctahedronGeometry: Ns,
    OctahedronBufferGeometry: Ds,
    IcosahedronGeometry: zs,
    IcosahedronBufferGeometry: Us,
    DodecahedronGeometry: Fs,
    DodecahedronBufferGeometry: Bs,
    PolyhedronGeometry: Ps,
    PolyhedronBufferGeometry: Cs,
    TubeGeometry: Gs,
    TubeBufferGeometry: Hs,
    TorusKnotGeometry: Vs,
    TorusKnotBufferGeometry: ks,
    TorusGeometry: js,
    TorusBufferGeometry: Ws,
    TextGeometry: wc,
    TextBufferGeometry: _c,
    SphereGeometry: Mc,
    SphereBufferGeometry: Sc,
    RingGeometry: Tc,
    RingBufferGeometry: Ec,
    PlaneGeometry: Er,
    PlaneBufferGeometry: Ar,
    LatheGeometry: Ac,
    LatheBufferGeometry: Lc,
    ShapeGeometry: Rc,
    ShapeBufferGeometry: Pc,
    ExtrudeGeometry: gc,
    ExtrudeBufferGeometry: yc,
    EdgesGeometry: Oc,
    ConeGeometry: Dc,
    ConeBufferGeometry: zc,
    CylinderGeometry: Ic,
    CylinderBufferGeometry: Nc,
    CircleGeometry: Uc,
    CircleBufferGeometry: Fc,
    BoxGeometry: class extends ir {
      constructor(e, t, n, i, r, a) {
        super(), this.type = "BoxGeometry", this.parameters = {
          width: e,
          height: t,
          depth: n,
          widthSegments: i,
          heightSegments: r,
          depthSegments: a
        }, this.fromBufferGeometry(new rr(e, t, n, i, r, a)), this.mergeVertices()
      }
    },
    BoxBufferGeometry: rr
  });

  function Gc(e) {
    ui.call(this), this.type = "ShadowMaterial", this.color = new ai(0), this.transparent = !0, this.setValues(e)
  }

  function Hc(e) {
    hr.call(this, e), this.type = "RawShaderMaterial"
  }

  function Vc(e) {
    ui.call(this), this.defines = {
      STANDARD: ""
    }, this.type = "MeshStandardMaterial", this.color = new ai(16777215), this.roughness = .5, this.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ai(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = bt, this.normalScale = new Rt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
  }

  function kc(e) {
    Vc.call(this), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearcoat = 0, this.clearcoatRoughness = 0, this.sheen = null, this.clearcoatNormalScale = new Rt(1, 1), this.clearcoatNormalMap = null, this.transparency = 0, this.setValues(e)
  }

  function jc(e) {
    ui.call(this), this.type = "MeshPhongMaterial", this.color = new ai(16777215), this.specular = new ai(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ai(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = bt, this.normalScale = new Rt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = W, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
  }

  function Wc(e) {
    jc.call(this), this.defines = {
      TOON: ""
    }, this.type = "MeshToonMaterial", this.gradientMap = null, this.setValues(e)
  }

  function qc(e) {
    ui.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = bt, this.normalScale = new Rt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
  }

  function Xc(e) {
    ui.call(this), this.type = "MeshLambertMaterial", this.color = new ai(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ai(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = W, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
  }

  function Yc(e) {
    ui.call(this), this.defines = {
      MATCAP: ""
    }, this.type = "MeshMatcapMaterial", this.color = new ai(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = bt, this.normalScale = new Rt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
  }

  function Zc(e) {
    as.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e)
  }
  Gc.prototype = Object.create(ui.prototype), Gc.prototype.constructor = Gc, Gc.prototype.isShadowMaterial = !0, Gc.prototype.copy = function(e) {
    return ui.prototype.copy.call(this, e), this.color.copy(e.color), this
  }, Hc.prototype = Object.create(hr.prototype), Hc.prototype.constructor = Hc, Hc.prototype.isRawShaderMaterial = !0, Vc.prototype = Object.create(ui.prototype), Vc.prototype.constructor = Vc, Vc.prototype.isMeshStandardMaterial = !0, Vc.prototype.copy = function(e) {
    return ui.prototype.copy.call(this, e), this.defines = {
      STANDARD: ""
    }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
  }, kc.prototype = Object.create(Vc.prototype), kc.prototype.constructor = kc, kc.prototype.isMeshPhysicalMaterial = !0, kc.prototype.copy = function(e) {
    return Vc.prototype.copy.call(this, e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.reflectivity = e.reflectivity, this.clearcoat = e.clearcoat, this.clearcoatRoughness = e.clearcoatRoughness, e.sheen ? this.sheen = (this.sheen || new ai).copy(e.sheen) : this.sheen = null, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.transparency = e.transparency, this
  }, jc.prototype = Object.create(ui.prototype), jc.prototype.constructor = jc, jc.prototype.isMeshPhongMaterial = !0, jc.prototype.copy = function(e) {
    return ui.prototype.copy.call(this, e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
  }, Wc.prototype = Object.create(jc.prototype), Wc.prototype.constructor = Wc, Wc.prototype.isMeshToonMaterial = !0, Wc.prototype.copy = function(e) {
    return jc.prototype.copy.call(this, e), this.gradientMap = e.gradientMap, this
  }, qc.prototype = Object.create(ui.prototype), qc.prototype.constructor = qc, qc.prototype.isMeshNormalMaterial = !0, qc.prototype.copy = function(e) {
    return ui.prototype.copy.call(this, e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
  }, Xc.prototype = Object.create(ui.prototype), Xc.prototype.constructor = Xc, Xc.prototype.isMeshLambertMaterial = !0, Xc.prototype.copy = function(e) {
    return ui.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
  }, Yc.prototype = Object.create(ui.prototype), Yc.prototype.constructor = Yc, Yc.prototype.isMeshMatcapMaterial = !0, Yc.prototype.copy = function(e) {
    return ui.prototype.copy.call(this, e), this.defines = {
      MATCAP: ""
    }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
  }, Zc.prototype = Object.create(as.prototype), Zc.prototype.constructor = Zc, Zc.prototype.isLineDashedMaterial = !0, Zc.prototype.copy = function(e) {
    return as.prototype.copy.call(this, e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this
  };
  var Jc = Object.freeze({
      __proto__: null,
      ShadowMaterial: Gc,
      SpriteMaterial: Do,
      RawShaderMaterial: Hc,
      ShaderMaterial: hr,
      PointsMaterial: vs,
      MeshPhysicalMaterial: kc,
      MeshStandardMaterial: Vc,
      MeshPhongMaterial: jc,
      MeshToonMaterial: Wc,
      MeshNormalMaterial: qc,
      MeshLambertMaterial: Xc,
      MeshDepthMaterial: uo,
      MeshDistanceMaterial: po,
      MeshBasicMaterial: pi,
      MeshMatcapMaterial: Yc,
      LineDashedMaterial: Zc,
      LineBasicMaterial: as,
      Material: ui
    }),
    Kc = {
      arraySlice: function(e, t, n) {
        return Kc.isTypedArray(e) ? new e.constructor(e.subarray(t, void 0 !== n ? n : e.length)) : e.slice(t, n)
      },
      convertArray: function(e, t, n) {
        return !e || !n && e.constructor === t ? e : "number" == typeof t.BYTES_PER_ELEMENT ? new t(e) : Array.prototype.slice.call(e)
      },
      isTypedArray: function(e) {
        return ArrayBuffer.isView(e) && !(e instanceof DataView)
      },
      getKeyframeOrder: function(e) {
        for (var t = e.length, n = new Array(t), i = 0; i !== t; ++i) n[i] = i;
        return n.sort((function(t, n) {
          return e[t] - e[n]
        })), n
      },
      sortedArray: function(e, t, n) {
        for (var i = e.length, r = new e.constructor(i), a = 0, o = 0; o !== i; ++a)
          for (var s = n[a] * t, c = 0; c !== t; ++c) r[o++] = e[s + c];
        return r
      },
      flattenJSON: function(e, t, n, i) {
        for (var r = 1, a = e[0]; void 0 !== a && void 0 === a[i];) a = e[r++];
        if (void 0 !== a) {
          var o = a[i];
          if (void 0 !== o)
            if (Array.isArray(o))
              do {
                void 0 !== (o = a[i]) && (t.push(a.time), n.push.apply(n, o)), a = e[r++]
              } while (void 0 !== a);
            else if (void 0 !== o.toArray)
            do {
              void 0 !== (o = a[i]) && (t.push(a.time), o.toArray(n, n.length)), a = e[r++]
            } while (void 0 !== a);
          else
            do {
              void 0 !== (o = a[i]) && (t.push(a.time), n.push(o)), a = e[r++]
            } while (void 0 !== a)
        }
      },
      subclip: function(e, t, n, i, r) {
        r = r || 30;
        var a = e.clone();
        a.name = t;
        for (var o = [], s = 0; s < a.tracks.length; ++s) {
          for (var c = a.tracks[s], l = c.getValueSize(), h = [], u = [], p = 0; p < c.times.length; ++p) {
            var d = c.times[p] * r;
            if (!(d < n || d >= i)) {
              h.push(c.times[p]);
              for (var f = 0; f < l; ++f) u.push(c.values[p * l + f])
            }
          }
          0 !== h.length && (c.times = Kc.convertArray(h, c.times.constructor), c.values = Kc.convertArray(u, c.values.constructor), o.push(c))
        }
        a.tracks = o;
        var m = 1 / 0;
        for (s = 0; s < a.tracks.length; ++s) m > a.tracks[s].times[0] && (m = a.tracks[s].times[0]);
        for (s = 0; s < a.tracks.length; ++s) a.tracks[s].shift(-1 * m);
        return a.resetDuration(), a
      }
    };

  function Qc(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n
  }

  function $c(e, t, n, i) {
    Qc.call(this, e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
  }

  function el(e, t, n, i) {
    Qc.call(this, e, t, n, i)
  }

  function tl(e, t, n, i) {
    Qc.call(this, e, t, n, i)
  }

  function nl(e, t, n, i) {
    if (void 0 === e) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (void 0 === t || 0 === t.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = Kc.convertArray(t, this.TimeBufferType), this.values = Kc.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation)
  }

  function il(e, t, n) {
    nl.call(this, e, t, n)
  }

  function rl(e, t, n, i) {
    nl.call(this, e, t, n, i)
  }

  function al(e, t, n, i) {
    nl.call(this, e, t, n, i)
  }

  function ol(e, t, n, i) {
    Qc.call(this, e, t, n, i)
  }

  function sl(e, t, n, i) {
    nl.call(this, e, t, n, i)
  }

  function cl(e, t, n, i) {
    nl.call(this, e, t, n, i)
  }

  function ll(e, t, n, i) {
    nl.call(this, e, t, n, i)
  }

  function hl(e, t, n) {
    this.name = e, this.tracks = n, this.duration = void 0 !== t ? t : -1, this.uuid = Lt.generateUUID(), this.duration < 0 && this.resetDuration()
  }

  function ul(e) {
    if (void 0 === e.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    var t = function(e) {
      switch (e.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
          return al;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
          return ll;
        case "color":
          return rl;
        case "quaternion":
          return sl;
        case "bool":
        case "boolean":
          return il;
        case "string":
          return cl
      }
      throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + e)
    }(e.type);
    if (void 0 === e.times) {
      var n = [],
        i = [];
      Kc.flattenJSON(e.keys, n, i, "value"), e.times = n, e.values = i
    }
    return void 0 !== t.parse ? t.parse(e) : new t(e.name, e.times, e.values, e.interpolation)
  }
  Object.assign(Qc.prototype, {
      evaluate: function(e) {
        var t = this.parameterPositions,
          n = this._cachedIndex,
          i = t[n],
          r = t[n - 1];
        e: {
          t: {
            var a;n: {
              i: if (!(e < i)) {
                for (var o = n + 2;;) {
                  if (void 0 === i) {
                    if (e < r) break i;
                    return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, e, r)
                  }
                  if (n === o) break;
                  if (r = i, e < (i = t[++n])) break t
                }
                a = t.length;
                break n
              }if (e >= r) break e;
              var s = t[1];e < s && (n = 2, r = s);
              for (o = n - 2;;) {
                if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, e, i);
                if (n === o) break;
                if (i = r, e >= (r = t[--n - 1])) break t
              }
              a = n,
              n = 0
            }
            for (; n < a;) {
              var c = n + a >>> 1;
              e < t[c] ? a = c : n = c + 1
            }
            if (i = t[n], void 0 === (r = t[n - 1])) return this._cachedIndex = 0,
            this.beforeStart_(0, e, i);
            if (void 0 === i) return n = t.length,
            this._cachedIndex = n,
            this.afterEnd_(n - 1, r, e)
          }
          this._cachedIndex = n,
          this.intervalChanged_(n, r, i)
        }
        return this.interpolate_(n, r, e, i)
      },
      settings: null,
      DefaultSettings_: {},
      getSettings_: function() {
        return this.settings || this.DefaultSettings_
      },
      copySampleValue_: function(e) {
        for (var t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i, a = 0; a !== i; ++a) t[a] = n[r + a];
        return t
      },
      interpolate_: function() {
        throw new Error("call to abstract method")
      },
      intervalChanged_: function() {}
    }),
    //!\ DECLARE ALIAS AFTER assign prototype !
    Object.assign(Qc.prototype, {
      beforeStart_: Qc.prototype.copySampleValue_,
      afterEnd_: Qc.prototype.copySampleValue_
    }), $c.prototype = Object.assign(Object.create(Qc.prototype), {
      constructor: $c,
      DefaultSettings_: {
        endingStart: ot,
        endingEnd: ot
      },
      intervalChanged_: function(e, t, n) {
        var i = this.parameterPositions,
          r = e - 2,
          a = e + 1,
          o = i[r],
          s = i[a];
        if (void 0 === o) switch (this.getSettings_().endingStart) {
          case 2401:
            r = e, o = 2 * t - n;
            break;
          case 2402:
            o = t + i[r = i.length - 2] - i[r + 1];
            break;
          default:
            r = e, o = n
        }
        if (void 0 === s) switch (this.getSettings_().endingEnd) {
          case 2401:
            a = e, s = 2 * n - t;
            break;
          case 2402:
            a = 1, s = n + i[1] - i[0];
            break;
          default:
            a = e - 1, s = t
        }
        var c = .5 * (n - t),
          l = this.valueSize;
        this._weightPrev = c / (t - o), this._weightNext = c / (s - n), this._offsetPrev = r * l, this._offsetNext = a * l
      },
      interpolate_: function(e, t, n, i) {
        for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this._offsetPrev, h = this._offsetNext, u = this._weightPrev, p = this._weightNext, d = (n - t) / (i - t), f = d * d, m = f * d, v = -u * m + 2 * u * f - u * d, g = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * d + 1, y = (-1 - p) * m + (1.5 + p) * f + .5 * d, x = p * m - p * f, b = 0; b !== o; ++b) r[b] = v * a[l + b] + g * a[c + b] + y * a[s + b] + x * a[h + b];
        return r
      }
    }), el.prototype = Object.assign(Object.create(Qc.prototype), {
      constructor: el,
      interpolate_: function(e, t, n, i) {
        for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = (n - t) / (i - t), h = 1 - l, u = 0; u !== o; ++u) r[u] = a[c + u] * h + a[s + u] * l;
        return r
      }
    }), tl.prototype = Object.assign(Object.create(Qc.prototype), {
      constructor: tl,
      interpolate_: function(e) {
        return this.copySampleValue_(e - 1)
      }
    }), Object.assign(nl, {
      toJSON: function(e) {
        var t, n = e.constructor;
        if (void 0 !== n.toJSON) t = n.toJSON(e);
        else {
          t = {
            name: e.name,
            times: Kc.convertArray(e.times, Array),
            values: Kc.convertArray(e.values, Array)
          };
          var i = e.getInterpolation();
          i !== e.DefaultInterpolation && (t.interpolation = i)
        }
        return t.type = e.ValueTypeName, t
      }
    }), Object.assign(nl.prototype, {
      constructor: nl,
      TimeBufferType: Float32Array,
      ValueBufferType: Float32Array,
      DefaultInterpolation: 2301,
      InterpolantFactoryMethodDiscrete: function(e) {
        return new tl(this.times, this.values, this.getValueSize(), e)
      },
      InterpolantFactoryMethodLinear: function(e) {
        return new el(this.times, this.values, this.getValueSize(), e)
      },
      InterpolantFactoryMethodSmooth: function(e) {
        return new $c(this.times, this.values, this.getValueSize(), e)
      },
      setInterpolation: function(e) {
        var t;
        switch (e) {
          case 2300:
            t = this.InterpolantFactoryMethodDiscrete;
            break;
          case 2301:
            t = this.InterpolantFactoryMethodLinear;
            break;
          case 2302:
            t = this.InterpolantFactoryMethodSmooth
        }
        if (void 0 === t) {
          var n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
          if (void 0 === this.createInterpolant) {
            if (e === this.DefaultInterpolation) throw new Error(n);
            this.setInterpolation(this.DefaultInterpolation)
          }
          return console.warn("THREE.KeyframeTrack:", n), this
        }
        return this.createInterpolant = t, this
      },
      getInterpolation: function() {
        switch (this.createInterpolant) {
          case this.InterpolantFactoryMethodDiscrete:
            return 2300;
          case this.InterpolantFactoryMethodLinear:
            return 2301;
          case this.InterpolantFactoryMethodSmooth:
            return 2302
        }
      },
      getValueSize: function() {
        return this.values.length / this.times.length
      },
      shift: function(e) {
        if (0 !== e)
          for (var t = this.times, n = 0, i = t.length; n !== i; ++n) t[n] += e;
        return this
      },
      scale: function(e) {
        if (1 !== e)
          for (var t = this.times, n = 0, i = t.length; n !== i; ++n) t[n] *= e;
        return this
      },
      trim: function(e, t) {
        for (var n = this.times, i = n.length, r = 0, a = i - 1; r !== i && n[r] < e;) ++r;
        for (; - 1 !== a && n[a] > t;) --a;
        if (++a, 0 !== r || a !== i) {
          r >= a && (r = (a = Math.max(a, 1)) - 1);
          var o = this.getValueSize();
          this.times = Kc.arraySlice(n, r, a), this.values = Kc.arraySlice(this.values, r * o, a * o)
        }
        return this
      },
      validate: function() {
        var e = !0,
          t = this.getValueSize();
        t - Math.floor(t) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
        var n = this.times,
          i = this.values,
          r = n.length;
        0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
        for (var a = null, o = 0; o !== r; o++) {
          var s = n[o];
          if ("number" == typeof s && isNaN(s)) {
            console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, s), e = !1;
            break
          }
          if (null !== a && a > s) {
            console.error("THREE.KeyframeTrack: Out of order keys.", this, o, s, a), e = !1;
            break
          }
          a = s
        }
        if (void 0 !== i && Kc.isTypedArray(i)) {
          o = 0;
          for (var c = i.length; o !== c; ++o) {
            var l = i[o];
            if (isNaN(l)) {
              console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, l), e = !1;
              break
            }
          }
        }
        return e
      },
      optimize: function() {
        for (var e = this.times, t = this.values, n = this.getValueSize(), i = 2302 === this.getInterpolation(), r = 1, a = e.length - 1, o = 1; o < a; ++o) {
          var s = !1,
            c = e[o];
          if (c !== e[o + 1] && (1 !== o || c !== c[0]))
            if (i) s = !0;
            else
              for (var l = o * n, h = l - n, u = l + n, p = 0; p !== n; ++p) {
                var d = t[l + p];
                if (d !== t[h + p] || d !== t[u + p]) {
                  s = !0;
                  break
                }
              }
          if (s) {
            if (o !== r) {
              e[r] = e[o];
              var f = o * n,
                m = r * n;
              for (p = 0; p !== n; ++p) t[m + p] = t[f + p]
            }++r
          }
        }
        if (a > 0) {
          e[r] = e[a];
          for (f = a * n, m = r * n, p = 0; p !== n; ++p) t[m + p] = t[f + p];
          ++r
        }
        return r !== e.length && (this.times = Kc.arraySlice(e, 0, r), this.values = Kc.arraySlice(t, 0, r * n)), this
      },
      clone: function() {
        var e = Kc.arraySlice(this.times, 0),
          t = Kc.arraySlice(this.values, 0),
          n = new(0, this.constructor)(this.name, e, t);
        return n.createInterpolant = this.createInterpolant, n
      }
    }), il.prototype = Object.assign(Object.create(nl.prototype), {
      constructor: il,
      ValueTypeName: "bool",
      ValueBufferType: Array,
      DefaultInterpolation: 2300,
      InterpolantFactoryMethodLinear: void 0,
      InterpolantFactoryMethodSmooth: void 0
    }), rl.prototype = Object.assign(Object.create(nl.prototype), {
      constructor: rl,
      ValueTypeName: "color"
    }), al.prototype = Object.assign(Object.create(nl.prototype), {
      constructor: al,
      ValueTypeName: "number"
    }), ol.prototype = Object.assign(Object.create(Qc.prototype), {
      constructor: ol,
      interpolate_: function(e, t, n, i) {
        for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = (n - t) / (i - t), l = s + o; s !== l; s += 4) Pt.slerpFlat(r, 0, a, s - o, a, s, c);
        return r
      }
    }), sl.prototype = Object.assign(Object.create(nl.prototype), {
      constructor: sl,
      ValueTypeName: "quaternion",
      DefaultInterpolation: 2301,
      InterpolantFactoryMethodLinear: function(e) {
        return new ol(this.times, this.values, this.getValueSize(), e)
      },
      InterpolantFactoryMethodSmooth: void 0
    }), cl.prototype = Object.assign(Object.create(nl.prototype), {
      constructor: cl,
      ValueTypeName: "string",
      ValueBufferType: Array,
      DefaultInterpolation: 2300,
      InterpolantFactoryMethodLinear: void 0,
      InterpolantFactoryMethodSmooth: void 0
    }), ll.prototype = Object.assign(Object.create(nl.prototype), {
      constructor: ll,
      ValueTypeName: "vector"
    }), Object.assign(hl, {
      parse: function(e) {
        for (var t = [], n = e.tracks, i = 1 / (e.fps || 1), r = 0, a = n.length; r !== a; ++r) t.push(ul(n[r]).scale(i));
        return new hl(e.name, e.duration, t)
      },
      toJSON: function(e) {
        for (var t = [], n = e.tracks, i = {
            name: e.name,
            duration: e.duration,
            tracks: t,
            uuid: e.uuid
          }, r = 0, a = n.length; r !== a; ++r) t.push(nl.toJSON(n[r]));
        return i
      },
      CreateFromMorphTargetSequence: function(e, t, n, i) {
        for (var r = t.length, a = [], o = 0; o < r; o++) {
          var s = [],
            c = [];
          s.push((o + r - 1) % r, o, (o + 1) % r), c.push(0, 1, 0);
          var l = Kc.getKeyframeOrder(s);
          s = Kc.sortedArray(s, 1, l), c = Kc.sortedArray(c, 1, l), i || 0 !== s[0] || (s.push(r), c.push(c[0])), a.push(new al(".morphTargetInfluences[" + t[o].name + "]", s, c).scale(1 / n))
        }
        return new hl(e, -1, a)
      },
      findByName: function(e, t) {
        var n = e;
        if (!Array.isArray(e)) {
          var i = e;
          n = i.geometry && i.geometry.animations || i.animations
        }
        for (var r = 0; r < n.length; r++)
          if (n[r].name === t) return n[r];
        return null
      },
      CreateClipsFromMorphTargetSequences: function(e, t, n) {
        for (var i = {}, r = /^([\w-]*?)([\d]+)$/, a = 0, o = e.length; a < o; a++) {
          var s = e[a],
            c = s.name.match(r);
          if (c && c.length > 1) {
            var l = i[u = c[1]];
            l || (i[u] = l = []), l.push(s)
          }
        }
        var h = [];
        for (var u in i) h.push(hl.CreateFromMorphTargetSequence(u, i[u], t, n));
        return h
      },
      parseAnimation: function(e, t) {
        if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
        for (var n = function(e, t, n, i, r) {
            if (0 !== n.length) {
              var a = [],
                o = [];
              Kc.flattenJSON(n, a, o, i), 0 !== a.length && r.push(new e(t, a, o))
            }
          }, i = [], r = e.name || "default", a = e.length || -1, o = e.fps || 30, s = e.hierarchy || [], c = 0; c < s.length; c++) {
          var l = s[c].keys;
          if (l && 0 !== l.length)
            if (l[0].morphTargets) {
              for (var h = {}, u = 0; u < l.length; u++)
                if (l[u].morphTargets)
                  for (var p = 0; p < l[u].morphTargets.length; p++) h[l[u].morphTargets[p]] = -1;
              for (var d in h) {
                var f = [],
                  m = [];
                for (p = 0; p !== l[u].morphTargets.length; ++p) {
                  var v = l[u];
                  f.push(v.time), m.push(v.morphTarget === d ? 1 : 0)
                }
                i.push(new al(".morphTargetInfluence[" + d + "]", f, m))
              }
              a = h.length * (o || 1)
            } else {
              var g = ".bones[" + t[c].name + "]";
              n(ll, g + ".position", l, "pos", i), n(sl, g + ".quaternion", l, "rot", i), n(ll, g + ".scale", l, "scl", i)
            }
        }
        return 0 === i.length ? null : new hl(r, a, i)
      }
    }), Object.assign(hl.prototype, {
      resetDuration: function() {
        for (var e = 0, t = 0, n = this.tracks.length; t !== n; ++t) {
          var i = this.tracks[t];
          e = Math.max(e, i.times[i.times.length - 1])
        }
        return this.duration = e, this
      },
      trim: function() {
        for (var e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
        return this
      },
      validate: function() {
        for (var e = !0, t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
        return e
      },
      optimize: function() {
        for (var e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
        return this
      },
      clone: function() {
        for (var e = [], t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
        return new hl(this.name, this.duration, e)
      }
    });
  var pl = {
    enabled: !1,
    files: {},
    add: function(e, t) {
      !1 !== this.enabled && (this.files[e] = t)
    },
    get: function(e) {
      if (!1 !== this.enabled) return this.files[e]
    },
    remove: function(e) {
      delete this.files[e]
    },
    clear: function() {
      this.files = {}
    }
  };

  function dl(e, t, n) {
    var i = this,
      r = !1,
      a = 0,
      o = 0,
      s = void 0,
      c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(e) {
      o++, !1 === r && void 0 !== i.onStart && i.onStart(e, a, o), r = !0
    }, this.itemEnd = function(e) {
      a++, void 0 !== i.onProgress && i.onProgress(e, a, o), a === o && (r = !1, void 0 !== i.onLoad && i.onLoad())
    }, this.itemError = function(e) {
      void 0 !== i.onError && i.onError(e)
    }, this.resolveURL = function(e) {
      return s ? s(e) : e
    }, this.setURLModifier = function(e) {
      return s = e, this
    }, this.addHandler = function(e, t) {
      return c.push(e, t), this
    }, this.removeHandler = function(e) {
      var t = c.indexOf(e);
      return -1 !== t && c.splice(t, 2), this
    }, this.getHandler = function(e) {
      for (var t = 0, n = c.length; t < n; t += 2) {
        var i = c[t],
          r = c[t + 1];
        if (i.test(e)) return r
      }
      return null
    }
  }
  var fl = new dl;

  function ml(e) {
    this.manager = void 0 !== e ? e : fl, this.crossOrigin = "anonymous", this.path = "", this.resourcePath = ""
  }
  Object.assign(ml.prototype, {
    load: function() {},
    parse: function() {},
    setCrossOrigin: function(e) {
      return this.crossOrigin = e, this
    },
    setPath: function(e) {
      return this.path = e, this
    },
    setResourcePath: function(e) {
      return this.resourcePath = e, this
    }
  });
  var vl = {};

  function gl(e) {
    ml.call(this, e)
  }

  function yl(e) {
    ml.call(this, e)
  }

  function xl(e) {
    ml.call(this, e)
  }

  function bl(e) {
    ml.call(this, e)
  }

  function wl(e) {
    ml.call(this, e)
  }

  function _l(e) {
    ml.call(this, e)
  }

  function Ml(e) {
    ml.call(this, e)
  }

  function Sl() {
    this.type = "Curve", this.arcLengthDivisions = 200
  }

  function Tl(e, t, n, i, r, a, o, s) {
    Sl.call(this), this.type = "EllipseCurve", this.aX = e || 0, this.aY = t || 0, this.xRadius = n || 1, this.yRadius = i || 1, this.aStartAngle = r || 0, this.aEndAngle = a || 2 * Math.PI, this.aClockwise = o || !1, this.aRotation = s || 0
  }

  function El(e, t, n, i, r, a) {
    Tl.call(this, e, t, n, n, i, r, a), this.type = "ArcCurve"
  }

  function Al() {
    var e = 0,
      t = 0,
      n = 0,
      i = 0;

    function r(r, a, o, s) {
      e = r, t = o, n = -3 * r + 3 * a - 2 * o - s, i = 2 * r - 2 * a + o + s
    }
    return {
      initCatmullRom: function(e, t, n, i, a) {
        r(t, n, a * (n - e), a * (i - t))
      },
      initNonuniformCatmullRom: function(e, t, n, i, a, o, s) {
        var c = (t - e) / a - (n - e) / (a + o) + (n - t) / o,
          l = (n - t) / o - (i - t) / (o + s) + (i - n) / s;
        r(t, n, c *= o, l *= o)
      },
      calc: function(r) {
        var a = r * r;
        return e + t * r + n * a + i * (a * r)
      }
    }
  }
  gl.prototype = Object.assign(Object.create(ml.prototype), {
    constructor: gl,
    load: function(e, t, n, i) {
      void 0 === e && (e = ""), void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
      var r = this,
        a = pl.get(e);
      if (void 0 !== a) return r.manager.itemStart(e), setTimeout((function() {
        t && t(a), r.manager.itemEnd(e)
      }), 0), a;
      if (void 0 === vl[e]) {
        var o = e.match(/^data:(.*?)(;base64)?,(.*)$/);
        if (o) {
          var s = o[1],
            c = !!o[2],
            l = o[3];
          l = decodeURIComponent(l), c && (l = atob(l));
          try {
            var h, u = (this.responseType || "").toLowerCase();
            switch (u) {
              case "arraybuffer":
              case "blob":
                for (var p = new Uint8Array(l.length), d = 0; d < l.length; d++) p[d] = l.charCodeAt(d);
                h = "blob" === u ? new Blob([p.buffer], {
                  type: s
                }) : p.buffer;
                break;
              case "document":
                var f = new DOMParser;
                h = f.parseFromString(l, s);
                break;
              case "json":
                h = JSON.parse(l);
                break;
              default:
                h = l
            }
            setTimeout((function() {
              t && t(h), r.manager.itemEnd(e)
            }), 0)
          } catch (t) {
            setTimeout((function() {
              i && i(t), r.manager.itemError(e), r.manager.itemEnd(e)
            }), 0)
          }
        } else {
          vl[e] = [], vl[e].push({
            onLoad: t,
            onProgress: n,
            onError: i
          });
          var m = new XMLHttpRequest;
          for (var v in m.open("GET", e, !0), m.addEventListener("load", (function(t) {
              var n = this.response,
                i = vl[e];
              if (delete vl[e], 200 === this.status || 0 === this.status) {
                0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), pl.add(e, n);
                for (var a = 0, o = i.length; a < o; a++) {
                  (s = i[a]).onLoad && s.onLoad(n)
                }
                r.manager.itemEnd(e)
              } else {
                for (a = 0, o = i.length; a < o; a++) {
                  var s;
                  (s = i[a]).onError && s.onError(t)
                }
                r.manager.itemError(e), r.manager.itemEnd(e)
              }
            }), !1), m.addEventListener("progress", (function(t) {
              for (var n = vl[e], i = 0, r = n.length; i < r; i++) {
                var a = n[i];
                a.onProgress && a.onProgress(t)
              }
            }), !1), m.addEventListener("error", (function(t) {
              var n = vl[e];
              delete vl[e];
              for (var i = 0, a = n.length; i < a; i++) {
                var o = n[i];
                o.onError && o.onError(t)
              }
              r.manager.itemError(e), r.manager.itemEnd(e)
            }), !1), m.addEventListener("abort", (function(t) {
              var n = vl[e];
              delete vl[e];
              for (var i = 0, a = n.length; i < a; i++) {
                var o = n[i];
                o.onError && o.onError(t)
              }
              r.manager.itemError(e), r.manager.itemEnd(e)
            }), !1), void 0 !== this.responseType && (m.responseType = this.responseType), void 0 !== this.withCredentials && (m.withCredentials = this.withCredentials), m.overrideMimeType && m.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"), this.requestHeader) m.setRequestHeader(v, this.requestHeader[v]);
          m.send(null)
        }
        return r.manager.itemStart(e), m
      }
      vl[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      })
    },
    setResponseType: function(e) {
      return this.responseType = e, this
    },
    setWithCredentials: function(e) {
      return this.withCredentials = e, this
    },
    setMimeType: function(e) {
      return this.mimeType = e, this
    },
    setRequestHeader: function(e) {
      return this.requestHeader = e, this
    }
  }), yl.prototype = Object.assign(Object.create(ml.prototype), {
    constructor: yl,
    load: function(e, t, n, i) {
      var r = this,
        a = new gl(r.manager);
      a.setPath(r.path), a.load(e, (function(e) {
        t(r.parse(JSON.parse(e)))
      }), n, i)
    },
    parse: function(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var i = hl.parse(e[n]);
        t.push(i)
      }
      return t
    }
  }), xl.prototype = Object.assign(Object.create(ml.prototype), {
    constructor: xl,
    load: function(e, t, n, i) {
      var r = this,
        a = [],
        o = new Ss;
      o.image = a;
      var s = new gl(this.manager);

      function c(c) {
        s.load(e[c], (function(e) {
          var n = r.parse(e, !0);
          a[c] = {
            width: n.width,
            height: n.height,
            format: n.format,
            mipmaps: n.mipmaps
          }, 6 === (l += 1) && (1 === n.mipmapCount && (o.minFilter = de), o.format = n.format, o.needsUpdate = !0, t && t(o))
        }), n, i)
      }
      if (s.setPath(this.path), s.setResponseType("arraybuffer"), Array.isArray(e))
        for (var l = 0, h = 0, u = e.length; h < u; ++h) c(h);
      else s.load(e, (function(e) {
        var n = r.parse(e, !0);
        if (n.isCubemap)
          for (var i = n.mipmaps.length / n.mipmapCount, s = 0; s < i; s++) {
            a[s] = {
              mipmaps: []
            };
            for (var c = 0; c < n.mipmapCount; c++) a[s].mipmaps.push(n.mipmaps[s * n.mipmapCount + c]), a[s].format = n.format, a[s].width = n.width, a[s].height = n.height
          } else o.image.width = n.width, o.image.height = n.height, o.mipmaps = n.mipmaps;
        1 === n.mipmapCount && (o.minFilter = de), o.format = n.format, o.needsUpdate = !0, t && t(o)
      }), n, i);
      return o
    }
  }), bl.prototype = Object.assign(Object.create(ml.prototype), {
    constructor: bl,
    load: function(e, t, n, i) {
      var r = this,
        a = new gr,
        o = new gl(this.manager);
      return o.setResponseType("arraybuffer"), o.setPath(this.path), o.load(e, (function(e) {
        var n = r.parse(e);
        n && (void 0 !== n.image ? a.image = n.image : void 0 !== n.data && (a.image.width = n.width, a.image.height = n.height, a.image.data = n.data), a.wrapS = void 0 !== n.wrapS ? n.wrapS : ce, a.wrapT = void 0 !== n.wrapT ? n.wrapT : ce, a.magFilter = void 0 !== n.magFilter ? n.magFilter : de, a.minFilter = void 0 !== n.minFilter ? n.minFilter : de, a.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1, void 0 !== n.format && (a.format = n.format), void 0 !== n.type && (a.type = n.type), void 0 !== n.mipmaps && (a.mipmaps = n.mipmaps, a.minFilter = me), 1 === n.mipmapCount && (a.minFilter = de), a.needsUpdate = !0, t && t(a, n))
      }), n, i), a
    }
  }), wl.prototype = Object.assign(Object.create(ml.prototype), {
    constructor: wl,
    load: function(e, t, n, i) {
      void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
      var r = this,
        a = pl.get(e);
      if (void 0 !== a) return r.manager.itemStart(e), setTimeout((function() {
        t && t(a), r.manager.itemEnd(e)
      }), 0), a;
      var o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

      function s() {
        o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1), pl.add(e, this), t && t(this), r.manager.itemEnd(e)
      }

      function c(t) {
        o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1), i && i(t), r.manager.itemError(e), r.manager.itemEnd(e)
      }
      return o.addEventListener("load", s, !1), o.addEventListener("error", c, !1), "data:" !== e.substr(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(e), o.src = e, o
    }
  }), _l.prototype = Object.assign(Object.create(ml.prototype), {
    constructor: _l,
    load: function(e, t, n, i) {
      var r = new Br,
        a = new wl(this.manager);
      a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
      var o = 0;

      function s(n) {
        a.load(e[n], (function(e) {
          r.images[n] = e, 6 === ++o && (r.needsUpdate = !0, t && t(r))
        }), void 0, i)
      }
      for (var c = 0; c < e.length; ++c) s(c);
      return r
    }
  }), Ml.prototype = Object.assign(Object.create(ml.prototype), {
    constructor: Ml,
    load: function(e, t, n, i) {
      var r = new Bt,
        a = new wl(this.manager);
      return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, (function(n) {
        r.image = n;
        var i = e.search(/\.jpe?g($|\?)/i) > 0 || 0 === e.search(/^data\:image\/jpeg/);
        r.format = i ? Re : Pe, r.needsUpdate = !0, void 0 !== t && t(r)
      }), n, i), r
    }
  }), Object.assign(Sl.prototype, {
    getPoint: function() {
      return console.warn("THREE.Curve: .getPoint() not implemented."), null
    },
    getPointAt: function(e, t) {
      var n = this.getUtoTmapping(e);
      return this.getPoint(n, t)
    },
    getPoints: function(e) {
      void 0 === e && (e = 5);
      for (var t = [], n = 0; n <= e; n++) t.push(this.getPoint(n / e));
      return t
    },
    getSpacedPoints: function(e) {
      void 0 === e && (e = 5);
      for (var t = [], n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
      return t
    },
    getLength: function() {
      var e = this.getLengths();
      return e[e.length - 1]
    },
    getLengths: function(e) {
      if (void 0 === e && (e = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = !1;
      var t, n, i = [],
        r = this.getPoint(0),
        a = 0;
      for (i.push(0), n = 1; n <= e; n++) a += (t = this.getPoint(n / e)).distanceTo(r), i.push(a), r = t;
      return this.cacheArcLengths = i, i
    },
    updateArcLengths: function() {
      this.needsUpdate = !0, this.getLengths()
    },
    getUtoTmapping: function(e, t) {
      var n, i = this.getLengths(),
        r = 0,
        a = i.length;
      n = t || e * i[a - 1];
      for (var o, s = 0, c = a - 1; s <= c;)
        if ((o = i[r = Math.floor(s + (c - s) / 2)] - n) < 0) s = r + 1;
        else {
          if (!(o > 0)) {
            c = r;
            break
          }
          c = r - 1
        } if (i[r = c] === n) return r / (a - 1);
      var l = i[r];
      return (r + (n - l) / (i[r + 1] - l)) / (a - 1)
    },
    getTangent: function(e) {
      var t = e - 1e-4,
        n = e + 1e-4;
      t < 0 && (t = 0), n > 1 && (n = 1);
      var i = this.getPoint(t);
      return this.getPoint(n).clone().sub(i).normalize()
    },
    getTangentAt: function(e) {
      var t = this.getUtoTmapping(e);
      return this.getTangent(t)
    },
    computeFrenetFrames: function(e, t) {
      var n, i, r, a = new It,
        o = [],
        s = [],
        c = [],
        l = new It,
        h = new Jt;
      for (n = 0; n <= e; n++) i = n / e, o[n] = this.getTangentAt(i), o[n].normalize();
      s[0] = new It, c[0] = new It;
      var u = Number.MAX_VALUE,
        p = Math.abs(o[0].x),
        d = Math.abs(o[0].y),
        f = Math.abs(o[0].z);
      for (p <= u && (u = p, a.set(1, 0, 0)), d <= u && (u = d, a.set(0, 1, 0)), f <= u && a.set(0, 0, 1), l.crossVectors(o[0], a).normalize(), s[0].crossVectors(o[0], l), c[0].crossVectors(o[0], s[0]), n = 1; n <= e; n++) s[n] = s[n - 1].clone(), c[n] = c[n - 1].clone(), l.crossVectors(o[n - 1], o[n]), l.length() > Number.EPSILON && (l.normalize(), r = Math.acos(Lt.clamp(o[n - 1].dot(o[n]), -1, 1)), s[n].applyMatrix4(h.makeRotationAxis(l, r))), c[n].crossVectors(o[n], s[n]);
      if (!0 === t)
        for (r = Math.acos(Lt.clamp(s[0].dot(s[e]), -1, 1)), r /= e, o[0].dot(l.crossVectors(s[0], s[e])) > 0 && (r = -r), n = 1; n <= e; n++) s[n].applyMatrix4(h.makeRotationAxis(o[n], r * n)), c[n].crossVectors(o[n], s[n]);
      return {
        tangents: o,
        normals: s,
        binormals: c
      }
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(e) {
      return this.arcLengthDivisions = e.arcLengthDivisions, this
    },
    toJSON: function() {
      var e = {
        metadata: {
          version: 4.5,
          type: "Curve",
          generator: "Curve.toJSON"
        }
      };
      return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e
    },
    fromJSON: function(e) {
      return this.arcLengthDivisions = e.arcLengthDivisions, this
    }
  }), Tl.prototype = Object.create(Sl.prototype), Tl.prototype.constructor = Tl, Tl.prototype.isEllipseCurve = !0, Tl.prototype.getPoint = function(e, t) {
    for (var n = t || new Rt, i = 2 * Math.PI, r = this.aEndAngle - this.aStartAngle, a = Math.abs(r) < Number.EPSILON; r < 0;) r += i;
    for (; r > i;) r -= i;
    r < Number.EPSILON && (r = a ? 0 : i), !0 !== this.aClockwise || a || (r === i ? r = -i : r -= i);
    var o = this.aStartAngle + e * r,
      s = this.aX + this.xRadius * Math.cos(o),
      c = this.aY + this.yRadius * Math.sin(o);
    if (0 !== this.aRotation) {
      var l = Math.cos(this.aRotation),
        h = Math.sin(this.aRotation),
        u = s - this.aX,
        p = c - this.aY;
      s = u * l - p * h + this.aX, c = u * h + p * l + this.aY
    }
    return n.set(s, c)
  }, Tl.prototype.copy = function(e) {
    return Sl.prototype.copy.call(this, e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
  }, Tl.prototype.toJSON = function() {
    var e = Sl.prototype.toJSON.call(this);
    return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e
  }, Tl.prototype.fromJSON = function(e) {
    return Sl.prototype.fromJSON.call(this, e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
  }, El.prototype = Object.create(Tl.prototype), El.prototype.constructor = El, El.prototype.isArcCurve = !0;
  var Ll = new It,
    Rl = new Al,
    Pl = new Al,
    Cl = new Al;

  function Ol(e, t, n, i) {
    Sl.call(this), this.type = "CatmullRomCurve3", this.points = e || [], this.closed = t || !1, this.curveType = n || "centripetal", this.tension = i || .5
  }

  function Il(e, t, n, i, r) {
    var a = .5 * (i - t),
      o = .5 * (r - n),
      s = e * e;
    return (2 * n - 2 * i + a + o) * (e * s) + (-3 * n + 3 * i - 2 * a - o) * s + a * e + n
  }

  function Nl(e, t, n, i) {
    return function(e, t) {
      var n = 1 - e;
      return n * n * t
    }(e, t) + function(e, t) {
      return 2 * (1 - e) * e * t
    }(e, n) + function(e, t) {
      return e * e * t
    }(e, i)
  }

  function Dl(e, t, n, i, r) {
    return function(e, t) {
      var n = 1 - e;
      return n * n * n * t
    }(e, t) + function(e, t) {
      var n = 1 - e;
      return 3 * n * n * e * t
    }(e, n) + function(e, t) {
      return 3 * (1 - e) * e * e * t
    }(e, i) + function(e, t) {
      return e * e * e * t
    }(e, r)
  }

  function zl(e, t, n, i) {
    Sl.call(this), this.type = "CubicBezierCurve", this.v0 = e || new Rt, this.v1 = t || new Rt, this.v2 = n || new Rt, this.v3 = i || new Rt
  }

  function Ul(e, t, n, i) {
    Sl.call(this), this.type = "CubicBezierCurve3", this.v0 = e || new It, this.v1 = t || new It, this.v2 = n || new It, this.v3 = i || new It
  }

  function Fl(e, t) {
    Sl.call(this), this.type = "LineCurve", this.v1 = e || new Rt, this.v2 = t || new Rt
  }

  function Bl(e, t) {
    Sl.call(this), this.type = "LineCurve3", this.v1 = e || new It, this.v2 = t || new It
  }

  function Gl(e, t, n) {
    Sl.call(this), this.type = "QuadraticBezierCurve", this.v0 = e || new Rt, this.v1 = t || new Rt, this.v2 = n || new Rt
  }

  function Hl(e, t, n) {
    Sl.call(this), this.type = "QuadraticBezierCurve3", this.v0 = e || new It, this.v1 = t || new It, this.v2 = n || new It
  }

  function Vl(e) {
    Sl.call(this), this.type = "SplineCurve", this.points = e || []
  }
  Ol.prototype = Object.create(Sl.prototype), Ol.prototype.constructor = Ol, Ol.prototype.isCatmullRomCurve3 = !0, Ol.prototype.getPoint = function(e, t) {
    var n, i, r, a, o = t || new It,
      s = this.points,
      c = s.length,
      l = (c - (this.closed ? 0 : 1)) * e,
      h = Math.floor(l),
      u = l - h;
    if (this.closed ? h += h > 0 ? 0 : (Math.floor(Math.abs(h) / c) + 1) * c : 0 === u && h === c - 1 && (h = c - 2, u = 1), this.closed || h > 0 ? n = s[(h - 1) % c] : (Ll.subVectors(s[0], s[1]).add(s[0]), n = Ll), i = s[h % c], r = s[(h + 1) % c], this.closed || h + 2 < c ? a = s[(h + 2) % c] : (Ll.subVectors(s[c - 1], s[c - 2]).add(s[c - 1]), a = Ll), "centripetal" === this.curveType || "chordal" === this.curveType) {
      var p = "chordal" === this.curveType ? .5 : .25,
        d = Math.pow(n.distanceToSquared(i), p),
        f = Math.pow(i.distanceToSquared(r), p),
        m = Math.pow(r.distanceToSquared(a), p);
      f < 1e-4 && (f = 1), d < 1e-4 && (d = f), m < 1e-4 && (m = f), Rl.initNonuniformCatmullRom(n.x, i.x, r.x, a.x, d, f, m), Pl.initNonuniformCatmullRom(n.y, i.y, r.y, a.y, d, f, m), Cl.initNonuniformCatmullRom(n.z, i.z, r.z, a.z, d, f, m)
    } else "catmullrom" === this.curveType && (Rl.initCatmullRom(n.x, i.x, r.x, a.x, this.tension), Pl.initCatmullRom(n.y, i.y, r.y, a.y, this.tension), Cl.initCatmullRom(n.z, i.z, r.z, a.z, this.tension));
    return o.set(Rl.calc(u), Pl.calc(u), Cl.calc(u)), o
  }, Ol.prototype.copy = function(e) {
    Sl.prototype.copy.call(this, e), this.points = [];
    for (var t = 0, n = e.points.length; t < n; t++) {
      var i = e.points[t];
      this.points.push(i.clone())
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
  }, Ol.prototype.toJSON = function() {
    var e = Sl.prototype.toJSON.call(this);
    e.points = [];
    for (var t = 0, n = this.points.length; t < n; t++) {
      var i = this.points[t];
      e.points.push(i.toArray())
    }
    return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e
  }, Ol.prototype.fromJSON = function(e) {
    Sl.prototype.fromJSON.call(this, e), this.points = [];
    for (var t = 0, n = e.points.length; t < n; t++) {
      var i = e.points[t];
      this.points.push((new It).fromArray(i))
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
  }, zl.prototype = Object.create(Sl.prototype), zl.prototype.constructor = zl, zl.prototype.isCubicBezierCurve = !0, zl.prototype.getPoint = function(e, t) {
    var n = t || new Rt,
      i = this.v0,
      r = this.v1,
      a = this.v2,
      o = this.v3;
    return n.set(Dl(e, i.x, r.x, a.x, o.x), Dl(e, i.y, r.y, a.y, o.y)), n
  }, zl.prototype.copy = function(e) {
    return Sl.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
  }, zl.prototype.toJSON = function() {
    var e = Sl.prototype.toJSON.call(this);
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
  }, zl.prototype.fromJSON = function(e) {
    return Sl.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
  }, Ul.prototype = Object.create(Sl.prototype), Ul.prototype.constructor = Ul, Ul.prototype.isCubicBezierCurve3 = !0, Ul.prototype.getPoint = function(e, t) {
    var n = t || new It,
      i = this.v0,
      r = this.v1,
      a = this.v2,
      o = this.v3;
    return n.set(Dl(e, i.x, r.x, a.x, o.x), Dl(e, i.y, r.y, a.y, o.y), Dl(e, i.z, r.z, a.z, o.z)), n
  }, Ul.prototype.copy = function(e) {
    return Sl.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
  }, Ul.prototype.toJSON = function() {
    var e = Sl.prototype.toJSON.call(this);
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
  }, Ul.prototype.fromJSON = function(e) {
    return Sl.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
  }, Fl.prototype = Object.create(Sl.prototype), Fl.prototype.constructor = Fl, Fl.prototype.isLineCurve = !0, Fl.prototype.getPoint = function(e, t) {
    var n = t || new Rt;
    return 1 === e ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n
  }, Fl.prototype.getPointAt = function(e, t) {
    return this.getPoint(e, t)
  }, Fl.prototype.getTangent = function() {
    return this.v2.clone().sub(this.v1).normalize()
  }, Fl.prototype.copy = function(e) {
    return Sl.prototype.copy.call(this, e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
  }, Fl.prototype.toJSON = function() {
    var e = Sl.prototype.toJSON.call(this);
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
  }, Fl.prototype.fromJSON = function(e) {
    return Sl.prototype.fromJSON.call(this, e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
  }, Bl.prototype = Object.create(Sl.prototype), Bl.prototype.constructor = Bl, Bl.prototype.isLineCurve3 = !0, Bl.prototype.getPoint = function(e, t) {
    var n = t || new It;
    return 1 === e ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n
  }, Bl.prototype.getPointAt = function(e, t) {
    return this.getPoint(e, t)
  }, Bl.prototype.copy = function(e) {
    return Sl.prototype.copy.call(this, e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
  }, Bl.prototype.toJSON = function() {
    var e = Sl.prototype.toJSON.call(this);
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
  }, Bl.prototype.fromJSON = function(e) {
    return Sl.prototype.fromJSON.call(this, e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
  }, Gl.prototype = Object.create(Sl.prototype), Gl.prototype.constructor = Gl, Gl.prototype.isQuadraticBezierCurve = !0, Gl.prototype.getPoint = function(e, t) {
    var n = t || new Rt,
      i = this.v0,
      r = this.v1,
      a = this.v2;
    return n.set(Nl(e, i.x, r.x, a.x), Nl(e, i.y, r.y, a.y)), n
  }, Gl.prototype.copy = function(e) {
    return Sl.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
  }, Gl.prototype.toJSON = function() {
    var e = Sl.prototype.toJSON.call(this);
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
  }, Gl.prototype.fromJSON = function(e) {
    return Sl.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
  }, Hl.prototype = Object.create(Sl.prototype), Hl.prototype.constructor = Hl, Hl.prototype.isQuadraticBezierCurve3 = !0, Hl.prototype.getPoint = function(e, t) {
    var n = t || new It,
      i = this.v0,
      r = this.v1,
      a = this.v2;
    return n.set(Nl(e, i.x, r.x, a.x), Nl(e, i.y, r.y, a.y), Nl(e, i.z, r.z, a.z)), n
  }, Hl.prototype.copy = function(e) {
    return Sl.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
  }, Hl.prototype.toJSON = function() {
    var e = Sl.prototype.toJSON.call(this);
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
  }, Hl.prototype.fromJSON = function(e) {
    return Sl.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
  }, Vl.prototype = Object.create(Sl.prototype), Vl.prototype.constructor = Vl, Vl.prototype.isSplineCurve = !0, Vl.prototype.getPoint = function(e, t) {
    var n = t || new Rt,
      i = this.points,
      r = (i.length - 1) * e,
      a = Math.floor(r),
      o = r - a,
      s = i[0 === a ? a : a - 1],
      c = i[a],
      l = i[a > i.length - 2 ? i.length - 1 : a + 1],
      h = i[a > i.length - 3 ? i.length - 1 : a + 2];
    return n.set(Il(o, s.x, c.x, l.x, h.x), Il(o, s.y, c.y, l.y, h.y)), n
  }, Vl.prototype.copy = function(e) {
    Sl.prototype.copy.call(this, e), this.points = [];
    for (var t = 0, n = e.points.length; t < n; t++) {
      var i = e.points[t];
      this.points.push(i.clone())
    }
    return this
  }, Vl.prototype.toJSON = function() {
    var e = Sl.prototype.toJSON.call(this);
    e.points = [];
    for (var t = 0, n = this.points.length; t < n; t++) {
      var i = this.points[t];
      e.points.push(i.toArray())
    }
    return e
  }, Vl.prototype.fromJSON = function(e) {
    Sl.prototype.fromJSON.call(this, e), this.points = [];
    for (var t = 0, n = e.points.length; t < n; t++) {
      var i = e.points[t];
      this.points.push((new Rt).fromArray(i))
    }
    return this
  };
  var kl = Object.freeze({
    __proto__: null,
    ArcCurve: El,
    CatmullRomCurve3: Ol,
    CubicBezierCurve: zl,
    CubicBezierCurve3: Ul,
    EllipseCurve: Tl,
    LineCurve: Fl,
    LineCurve3: Bl,
    QuadraticBezierCurve: Gl,
    QuadraticBezierCurve3: Hl,
    SplineCurve: Vl
  });

  function jl() {
    Sl.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1
  }

  function Wl(e) {
    jl.call(this), this.type = "Path", this.currentPoint = new Rt, e && this.setFromPoints(e)
  }

  function ql(e) {
    Wl.call(this, e), this.uuid = Lt.generateUUID(), this.type = "Shape", this.holes = []
  }

  function Xl(e, t) {
    mn.call(this), this.type = "Light", this.color = new ai(e), this.intensity = void 0 !== t ? t : 1, this.receiveShadow = void 0
  }

  function Yl(e, t, n) {
    Xl.call(this, e, n), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(mn.DefaultUp), this.updateMatrix(), this.groundColor = new ai(t)
  }

  function Zl(e) {
    this.camera = e, this.bias = 0, this.radius = 1, this.mapSize = new Rt(512, 512), this.map = null, this.mapPass = null, this.matrix = new Jt, this._frustum = new br, this._frameExtents = new Rt(1, 1), this._viewportCount = 1, this._viewports = [new Gt(0, 0, 1, 1)]
  }

  function Jl() {
    Zl.call(this, new pr(50, 1, .5, 500))
  }

  function Kl(e, t, n, i, r, a) {
    Xl.call(this, e, t), this.type = "SpotLight", this.position.copy(mn.DefaultUp), this.updateMatrix(), this.target = new mn, Object.defineProperty(this, "power", {
      get: function() {
        return this.intensity * Math.PI
      },
      set: function(e) {
        this.intensity = e / Math.PI
      }
    }), this.distance = void 0 !== n ? n : 0, this.angle = void 0 !== i ? i : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== a ? a : 1, this.shadow = new Jl
  }

  function Ql() {
    Zl.call(this, new pr(90, 1, .5, 500)), this._frameExtents = new Rt(4, 2), this._viewportCount = 6, this._viewports = [new Gt(2, 1, 1, 1), new Gt(0, 1, 1, 1), new Gt(3, 1, 1, 1), new Gt(1, 1, 1, 1), new Gt(3, 0, 1, 1), new Gt(1, 0, 1, 1)], this._cubeDirections = [new It(1, 0, 0), new It(-1, 0, 0), new It(0, 0, 1), new It(0, 0, -1), new It(0, 1, 0), new It(0, -1, 0)], this._cubeUps = [new It(0, 1, 0), new It(0, 1, 0), new It(0, 1, 0), new It(0, 1, 0), new It(0, 0, 1), new It(0, 0, -1)]
  }

  function $l(e, t, n, i) {
    Xl.call(this, e, t), this.type = "PointLight", Object.defineProperty(this, "power", {
      get: function() {
        return 4 * this.intensity * Math.PI
      },
      set: function(e) {
        this.intensity = e / (4 * Math.PI)
      }
    }), this.distance = void 0 !== n ? n : 0, this.decay = void 0 !== i ? i : 1, this.shadow = new Ql
  }

  function eh(e, t, n, i, r, a) {
    ur.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = void 0 !== e ? e : -1, this.right = void 0 !== t ? t : 1, this.top = void 0 !== n ? n : 1, this.bottom = void 0 !== i ? i : -1, this.near = void 0 !== r ? r : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix()
  }

  function th() {
    Zl.call(this, new eh(-5, 5, 5, -5, .5, 500))
  }

  function nh(e, t) {
    Xl.call(this, e, t), this.type = "DirectionalLight", this.position.copy(mn.DefaultUp), this.updateMatrix(), this.target = new mn, this.shadow = new th
  }

  function ih(e, t) {
    Xl.call(this, e, t), this.type = "AmbientLight", this.castShadow = void 0
  }

  function rh(e, t, n, i) {
    Xl.call(this, e, t), this.type = "RectAreaLight", this.width = void 0 !== n ? n : 10, this.height = void 0 !== i ? i : 10
  }

  function ah(e) {
    ml.call(this, e), this.textures = {}
  }
  jl.prototype = Object.assign(Object.create(Sl.prototype), {
    constructor: jl,
    add: function(e) {
      this.curves.push(e)
    },
    closePath: function() {
      var e = this.curves[0].getPoint(0),
        t = this.curves[this.curves.length - 1].getPoint(1);
      e.equals(t) || this.curves.push(new Fl(t, e))
    },
    getPoint: function(e) {
      for (var t = e * this.getLength(), n = this.getCurveLengths(), i = 0; i < n.length;) {
        if (n[i] >= t) {
          var r = n[i] - t,
            a = this.curves[i],
            o = a.getLength(),
            s = 0 === o ? 0 : 1 - r / o;
          return a.getPointAt(s)
        }
        i++
      }
      return null
    },
    getLength: function() {
      var e = this.getCurveLengths();
      return e[e.length - 1]
    },
    updateArcLengths: function() {
      this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
    },
    getCurveLengths: function() {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
      for (var e = [], t = 0, n = 0, i = this.curves.length; n < i; n++) t += this.curves[n].getLength(), e.push(t);
      return this.cacheLengths = e, e
    },
    getSpacedPoints: function(e) {
      void 0 === e && (e = 40);
      for (var t = [], n = 0; n <= e; n++) t.push(this.getPoint(n / e));
      return this.autoClose && t.push(t[0]), t
    },
    getPoints: function(e) {
      e = e || 12;
      for (var t, n = [], i = 0, r = this.curves; i < r.length; i++)
        for (var a = r[i], o = a && a.isEllipseCurve ? 2 * e : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? e * a.points.length : e, s = a.getPoints(o), c = 0; c < s.length; c++) {
          var l = s[c];
          t && t.equals(l) || (n.push(l), t = l)
        }
      return this.autoClose && n.length > 1 && !n[n.length - 1].equals(n[0]) && n.push(n[0]), n
    },
    copy: function(e) {
      Sl.prototype.copy.call(this, e), this.curves = [];
      for (var t = 0, n = e.curves.length; t < n; t++) {
        var i = e.curves[t];
        this.curves.push(i.clone())
      }
      return this.autoClose = e.autoClose, this
    },
    toJSON: function() {
      var e = Sl.prototype.toJSON.call(this);
      e.autoClose = this.autoClose, e.curves = [];
      for (var t = 0, n = this.curves.length; t < n; t++) {
        var i = this.curves[t];
        e.curves.push(i.toJSON())
      }
      return e
    },
    fromJSON: function(e) {
      Sl.prototype.fromJSON.call(this, e), this.autoClose = e.autoClose, this.curves = [];
      for (var t = 0, n = e.curves.length; t < n; t++) {
        var i = e.curves[t];
        this.curves.push((new kl[i.type]).fromJSON(i))
      }
      return this
    }
  }), Wl.prototype = Object.assign(Object.create(jl.prototype), {
    constructor: Wl,
    setFromPoints: function(e) {
      this.moveTo(e[0].x, e[0].y);
      for (var t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y);
      return this
    },
    moveTo: function(e, t) {
      return this.currentPoint.set(e, t), this
    },
    lineTo: function(e, t) {
      var n = new Fl(this.currentPoint.clone(), new Rt(e, t));
      return this.curves.push(n), this.currentPoint.set(e, t), this
    },
    quadraticCurveTo: function(e, t, n, i) {
      var r = new Gl(this.currentPoint.clone(), new Rt(e, t), new Rt(n, i));
      return this.curves.push(r), this.currentPoint.set(n, i), this
    },
    bezierCurveTo: function(e, t, n, i, r, a) {
      var o = new zl(this.currentPoint.clone(), new Rt(e, t), new Rt(n, i), new Rt(r, a));
      return this.curves.push(o), this.currentPoint.set(r, a), this
    },
    splineThru: function(e) {
      var t = new Vl([this.currentPoint.clone()].concat(e));
      return this.curves.push(t), this.currentPoint.copy(e[e.length - 1]), this
    },
    arc: function(e, t, n, i, r, a) {
      var o = this.currentPoint.x,
        s = this.currentPoint.y;
      return this.absarc(e + o, t + s, n, i, r, a), this
    },
    absarc: function(e, t, n, i, r, a) {
      return this.absellipse(e, t, n, n, i, r, a), this
    },
    ellipse: function(e, t, n, i, r, a, o, s) {
      var c = this.currentPoint.x,
        l = this.currentPoint.y;
      return this.absellipse(e + c, t + l, n, i, r, a, o, s), this
    },
    absellipse: function(e, t, n, i, r, a, o, s) {
      var c = new Tl(e, t, n, i, r, a, o, s);
      if (this.curves.length > 0) {
        var l = c.getPoint(0);
        l.equals(this.currentPoint) || this.lineTo(l.x, l.y)
      }
      this.curves.push(c);
      var h = c.getPoint(1);
      return this.currentPoint.copy(h), this
    },
    copy: function(e) {
      return jl.prototype.copy.call(this, e), this.currentPoint.copy(e.currentPoint), this
    },
    toJSON: function() {
      var e = jl.prototype.toJSON.call(this);
      return e.currentPoint = this.currentPoint.toArray(), e
    },
    fromJSON: function(e) {
      return jl.prototype.fromJSON.call(this, e), this.currentPoint.fromArray(e.currentPoint), this
    }
  }), ql.prototype = Object.assign(Object.create(Wl.prototype), {
    constructor: ql,
    getPointsHoles: function(e) {
      for (var t = [], n = 0, i = this.holes.length; n < i; n++) t[n] = this.holes[n].getPoints(e);
      return t
    },
    extractPoints: function(e) {
      return {
        shape: this.getPoints(e),
        holes: this.getPointsHoles(e)
      }
    },
    copy: function(e) {
      Wl.prototype.copy.call(this, e), this.holes = [];
      for (var t = 0, n = e.holes.length; t < n; t++) {
        var i = e.holes[t];
        this.holes.push(i.clone())
      }
      return this
    },
    toJSON: function() {
      var e = Wl.prototype.toJSON.call(this);
      e.uuid = this.uuid, e.holes = [];
      for (var t = 0, n = this.holes.length; t < n; t++) {
        var i = this.holes[t];
        e.holes.push(i.toJSON())
      }
      return e
    },
    fromJSON: function(e) {
      Wl.prototype.fromJSON.call(this, e), this.uuid = e.uuid, this.holes = [];
      for (var t = 0, n = e.holes.length; t < n; t++) {
        var i = e.holes[t];
        this.holes.push((new Wl).fromJSON(i))
      }
      return this
    }
  }), Xl.prototype = Object.assign(Object.create(mn.prototype), {
    constructor: Xl,
    isLight: !0,
    copy: function(e) {
      return mn.prototype.copy.call(this, e), this.color.copy(e.color), this.intensity = e.intensity, this
    },
    toJSON: function(e) {
      var t = mn.prototype.toJSON.call(this, e);
      return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, void 0 !== this.groundColor && (t.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (t.object.distance = this.distance), void 0 !== this.angle && (t.object.angle = this.angle), void 0 !== this.decay && (t.object.decay = this.decay), void 0 !== this.penumbra && (t.object.penumbra = this.penumbra), void 0 !== this.shadow && (t.object.shadow = this.shadow.toJSON()), t
    }
  }), Yl.prototype = Object.assign(Object.create(Xl.prototype), {
    constructor: Yl,
    isHemisphereLight: !0,
    copy: function(e) {
      return Xl.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this
    }
  }), Object.assign(Zl.prototype, {
    _projScreenMatrix: new Jt,
    _lightPositionWorld: new It,
    _lookTarget: new It,
    getViewportCount: function() {
      return this._viewportCount
    },
    getFrustum: function() {
      return this._frustum
    },
    updateMatrices: function(e) {
      var t = this.camera,
        n = this.matrix,
        i = this._projScreenMatrix,
        r = this._lookTarget,
        a = this._lightPositionWorld;
      a.setFromMatrixPosition(e.matrixWorld), t.position.copy(a), r.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(r), t.updateMatrixWorld(), i.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromMatrix(i), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(t.projectionMatrix), n.multiply(t.matrixWorldInverse)
    },
    getViewport: function(e) {
      return this._viewports[e]
    },
    getFrameExtents: function() {
      return this._frameExtents
    },
    copy: function(e) {
      return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    toJSON: function() {
      var e = {};
      return 0 !== this.bias && (e.bias = this.bias), 1 !== this.radius && (e.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e
    }
  }), Jl.prototype = Object.assign(Object.create(Zl.prototype), {
    constructor: Jl,
    isSpotLightShadow: !0,
    updateMatrices: function(e) {
      var t = this.camera,
        n = 2 * Lt.RAD2DEG * e.angle,
        i = this.mapSize.width / this.mapSize.height,
        r = e.distance || t.far;
      n === t.fov && i === t.aspect && r === t.far || (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), Zl.prototype.updateMatrices.call(this, e)
    }
  }), Kl.prototype = Object.assign(Object.create(Xl.prototype), {
    constructor: Kl,
    isSpotLight: !0,
    copy: function(e) {
      return Xl.prototype.copy.call(this, e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
    }
  }), Ql.prototype = Object.assign(Object.create(Zl.prototype), {
    constructor: Ql,
    isPointLightShadow: !0,
    updateMatrices: function(e, t) {
      void 0 === t && (t = 0);
      var n = this.camera,
        i = this.matrix,
        r = this._lightPositionWorld,
        a = this._lookTarget,
        o = this._projScreenMatrix;
      r.setFromMatrixPosition(e.matrixWorld), n.position.copy(r), a.copy(n.position), a.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(a), n.updateMatrixWorld(), i.makeTranslation(-r.x, -r.y, -r.z), o.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromMatrix(o)
    }
  }), $l.prototype = Object.assign(Object.create(Xl.prototype), {
    constructor: $l,
    isPointLight: !0,
    copy: function(e) {
      return Xl.prototype.copy.call(this, e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this
    }
  }), eh.prototype = Object.assign(Object.create(ur.prototype), {
    constructor: eh,
    isOrthographicCamera: !0,
    copy: function(e, t) {
      return ur.prototype.copy.call(this, e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = null === e.view ? null : Object.assign({}, e.view), this
    },
    setViewOffset: function(e, t, n, i, r, a) {
      null === this.view && (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
    },
    clearViewOffset: function() {
      null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
    },
    updateProjectionMatrix: function() {
      var e = (this.right - this.left) / (2 * this.zoom),
        t = (this.top - this.bottom) / (2 * this.zoom),
        n = (this.right + this.left) / 2,
        i = (this.top + this.bottom) / 2,
        r = n - e,
        a = n + e,
        o = i + t,
        s = i - t;
      if (null !== this.view && this.view.enabled) {
        var c = this.zoom / (this.view.width / this.view.fullWidth),
          l = this.zoom / (this.view.height / this.view.fullHeight),
          h = (this.right - this.left) / this.view.width,
          u = (this.top - this.bottom) / this.view.height;
        a = (r += h * (this.view.offsetX / c)) + h * (this.view.width / c), s = (o -= u * (this.view.offsetY / l)) - u * (this.view.height / l)
      }
      this.projectionMatrix.makeOrthographic(r, a, o, s, this.near, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
    },
    toJSON: function(e) {
      var t = mn.prototype.toJSON.call(this, e);
      return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, null !== this.view && (t.object.view = Object.assign({}, this.view)), t
    }
  }), th.prototype = Object.assign(Object.create(Zl.prototype), {
    constructor: th,
    isDirectionalLightShadow: !0,
    updateMatrices: function(e) {
      Zl.prototype.updateMatrices.call(this, e)
    }
  }), nh.prototype = Object.assign(Object.create(Xl.prototype), {
    constructor: nh,
    isDirectionalLight: !0,
    copy: function(e) {
      return Xl.prototype.copy.call(this, e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
    }
  }), ih.prototype = Object.assign(Object.create(Xl.prototype), {
    constructor: ih,
    isAmbientLight: !0
  }), rh.prototype = Object.assign(Object.create(Xl.prototype), {
    constructor: rh,
    isRectAreaLight: !0,
    copy: function(e) {
      return Xl.prototype.copy.call(this, e), this.width = e.width, this.height = e.height, this
    },
    toJSON: function(e) {
      var t = Xl.prototype.toJSON.call(this, e);
      return t.object.width = this.width, t.object.height = this.height, t
    }
  }), ah.prototype = Object.assign(Object.create(ml.prototype), {
    constructor: ah,
    load: function(e, t, n, i) {
      var r = this,
        a = new gl(r.manager);
      a.setPath(r.path), a.load(e, (function(e) {
        t(r.parse(JSON.parse(e)))
      }), n, i)
    },
    parse: function(e) {
      var t = this.textures;

      function n(e) {
        return void 0 === t[e] && console.warn("THREE.MaterialLoader: Undefined texture", e), t[e]
      }
      var i = new Jc[e.type];
      if (void 0 !== e.uuid && (i.uuid = e.uuid), void 0 !== e.name && (i.name = e.name), void 0 !== e.color && i.color.setHex(e.color), void 0 !== e.roughness && (i.roughness = e.roughness), void 0 !== e.metalness && (i.metalness = e.metalness), void 0 !== e.sheen && (i.sheen = (new ai).setHex(e.sheen)), void 0 !== e.emissive && i.emissive.setHex(e.emissive), void 0 !== e.specular && i.specular.setHex(e.specular), void 0 !== e.shininess && (i.shininess = e.shininess), void 0 !== e.clearcoat && (i.clearcoat = e.clearcoat), void 0 !== e.clearcoatRoughness && (i.clearcoatRoughness = e.clearcoatRoughness), void 0 !== e.vertexColors && (i.vertexColors = e.vertexColors), void 0 !== e.fog && (i.fog = e.fog), void 0 !== e.flatShading && (i.flatShading = e.flatShading), void 0 !== e.blending && (i.blending = e.blending), void 0 !== e.combine && (i.combine = e.combine), void 0 !== e.side && (i.side = e.side), void 0 !== e.opacity && (i.opacity = e.opacity), void 0 !== e.transparent && (i.transparent = e.transparent), void 0 !== e.alphaTest && (i.alphaTest = e.alphaTest), void 0 !== e.depthTest && (i.depthTest = e.depthTest), void 0 !== e.depthWrite && (i.depthWrite = e.depthWrite), void 0 !== e.colorWrite && (i.colorWrite = e.colorWrite), void 0 !== e.stencilWrite && (i.stencilWrite = e.stencilWrite), void 0 !== e.stencilWriteMask && (i.stencilWriteMask = e.stencilWriteMask), void 0 !== e.stencilFunc && (i.stencilFunc = e.stencilFunc), void 0 !== e.stencilRef && (i.stencilRef = e.stencilRef), void 0 !== e.stencilFuncMask && (i.stencilFuncMask = e.stencilFuncMask), void 0 !== e.stencilFail && (i.stencilFail = e.stencilFail), void 0 !== e.stencilZFail && (i.stencilZFail = e.stencilZFail), void 0 !== e.stencilZPass && (i.stencilZPass = e.stencilZPass), void 0 !== e.wireframe && (i.wireframe = e.wireframe), void 0 !== e.wireframeLinewidth && (i.wireframeLinewidth = e.wireframeLinewidth), void 0 !== e.wireframeLinecap && (i.wireframeLinecap = e.wireframeLinecap), void 0 !== e.wireframeLinejoin && (i.wireframeLinejoin = e.wireframeLinejoin), void 0 !== e.rotation && (i.rotation = e.rotation), 1 !== e.linewidth && (i.linewidth = e.linewidth), void 0 !== e.dashSize && (i.dashSize = e.dashSize), void 0 !== e.gapSize && (i.gapSize = e.gapSize), void 0 !== e.scale && (i.scale = e.scale), void 0 !== e.polygonOffset && (i.polygonOffset = e.polygonOffset), void 0 !== e.polygonOffsetFactor && (i.polygonOffsetFactor = e.polygonOffsetFactor), void 0 !== e.polygonOffsetUnits && (i.polygonOffsetUnits = e.polygonOffsetUnits), void 0 !== e.skinning && (i.skinning = e.skinning), void 0 !== e.morphTargets && (i.morphTargets = e.morphTargets), void 0 !== e.morphNormals && (i.morphNormals = e.morphNormals), void 0 !== e.dithering && (i.dithering = e.dithering), void 0 !== e.visible && (i.visible = e.visible), void 0 !== e.toneMapped && (i.toneMapped = e.toneMapped), void 0 !== e.userData && (i.userData = e.userData), void 0 !== e.uniforms)
        for (var r in e.uniforms) {
          var a = e.uniforms[r];
          switch (i.uniforms[r] = {}, a.type) {
            case "t":
              i.uniforms[r].value = n(a.value);
              break;
            case "c":
              i.uniforms[r].value = (new ai).setHex(a.value);
              break;
            case "v2":
              i.uniforms[r].value = (new Rt).fromArray(a.value);
              break;
            case "v3":
              i.uniforms[r].value = (new It).fromArray(a.value);
              break;
            case "v4":
              i.uniforms[r].value = (new Gt).fromArray(a.value);
              break;
            case "m3":
              i.uniforms[r].value = (new zt).fromArray(a.value);
            case "m4":
              i.uniforms[r].value = (new Jt).fromArray(a.value);
              break;
            default:
              i.uniforms[r].value = a.value
          }
        }
      if (void 0 !== e.defines && (i.defines = e.defines), void 0 !== e.vertexShader && (i.vertexShader = e.vertexShader), void 0 !== e.fragmentShader && (i.fragmentShader = e.fragmentShader), void 0 !== e.extensions)
        for (var o in e.extensions) i.extensions[o] = e.extensions[o];
      if (void 0 !== e.shading && (i.flatShading = 1 === e.shading), void 0 !== e.size && (i.size = e.size), void 0 !== e.sizeAttenuation && (i.sizeAttenuation = e.sizeAttenuation), void 0 !== e.map && (i.map = n(e.map)), void 0 !== e.matcap && (i.matcap = n(e.matcap)), void 0 !== e.alphaMap && (i.alphaMap = n(e.alphaMap), i.transparent = !0), void 0 !== e.bumpMap && (i.bumpMap = n(e.bumpMap)), void 0 !== e.bumpScale && (i.bumpScale = e.bumpScale), void 0 !== e.normalMap && (i.normalMap = n(e.normalMap)), void 0 !== e.normalMapType && (i.normalMapType = e.normalMapType), void 0 !== e.normalScale) {
        var s = e.normalScale;
        !1 === Array.isArray(s) && (s = [s, s]), i.normalScale = (new Rt).fromArray(s)
      }
      return void 0 !== e.displacementMap && (i.displacementMap = n(e.displacementMap)), void 0 !== e.displacementScale && (i.displacementScale = e.displacementScale), void 0 !== e.displacementBias && (i.displacementBias = e.displacementBias), void 0 !== e.roughnessMap && (i.roughnessMap = n(e.roughnessMap)), void 0 !== e.metalnessMap && (i.metalnessMap = n(e.metalnessMap)), void 0 !== e.emissiveMap && (i.emissiveMap = n(e.emissiveMap)), void 0 !== e.emissiveIntensity && (i.emissiveIntensity = e.emissiveIntensity), void 0 !== e.specularMap && (i.specularMap = n(e.specularMap)), void 0 !== e.envMap && (i.envMap = n(e.envMap)), void 0 !== e.envMapIntensity && (i.envMapIntensity = e.envMapIntensity), void 0 !== e.reflectivity && (i.reflectivity = e.reflectivity), void 0 !== e.refractionRatio && (i.refractionRatio = e.refractionRatio), void 0 !== e.lightMap && (i.lightMap = n(e.lightMap)), void 0 !== e.lightMapIntensity && (i.lightMapIntensity = e.lightMapIntensity), void 0 !== e.aoMap && (i.aoMap = n(e.aoMap)), void 0 !== e.aoMapIntensity && (i.aoMapIntensity = e.aoMapIntensity), void 0 !== e.gradientMap && (i.gradientMap = n(e.gradientMap)), void 0 !== e.clearcoatNormalMap && (i.clearcoatNormalMap = n(e.clearcoatNormalMap)), void 0 !== e.clearcoatNormalScale && (i.clearcoatNormalScale = (new Rt).fromArray(e.clearcoatNormalScale)), i
    },
    setTextures: function(e) {
      return this.textures = e, this
    }
  });
  var oh = {
    decodeText: function(e) {
      if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(e);
      for (var t = "", n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]);
      try {
        return decodeURIComponent(escape(t))
      } catch (e) {
        return t
      }
    },
    extractUrlBase: function(e) {
      var t = e.lastIndexOf("/");
      return -1 === t ? "./" : e.substr(0, t + 1)
    }
  };

  function sh() {
    Oi.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
  }

  function ch(e, t, n, i) {
    "number" == typeof n && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), di.call(this, e, t, n), this.meshPerAttribute = i || 1
  }

  function lh(e) {
    ml.call(this, e)
  }
  sh.prototype = Object.assign(Object.create(Oi.prototype), {
    constructor: sh,
    isInstancedBufferGeometry: !0,
    copy: function(e) {
      return Oi.prototype.copy.call(this, e), this.maxInstancedCount = e.maxInstancedCount, this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    toJSON: function() {
      var e = Oi.prototype.toJSON.call(this);
      return e.maxInstancedCount = this.maxInstancedCount, e.isInstancedBufferGeometry = !0, e
    }
  }), ch.prototype = Object.assign(Object.create(di.prototype), {
    constructor: ch,
    isInstancedBufferAttribute: !0,
    copy: function(e) {
      return di.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
    },
    toJSON: function() {
      var e = di.prototype.toJSON.call(this);
      return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e
    }
  }), lh.prototype = Object.assign(Object.create(ml.prototype), {
    constructor: lh,
    load: function(e, t, n, i) {
      var r = this,
        a = new gl(r.manager);
      a.setPath(r.path), a.load(e, (function(e) {
        t(r.parse(JSON.parse(e)))
      }), n, i)
    },
    parse: function(e) {
      var t = e.isInstancedBufferGeometry ? new sh : new Oi,
        n = e.data.index;
      if (void 0 !== n) {
        var i = new hh[n.type](n.array);
        t.setIndex(new di(i, 1))
      }
      var r = e.data.attributes;
      for (var a in r) {
        var o = r[a],
          s = (i = new hh[o.type](o.array), new(o.isInstancedBufferAttribute ? ch : di)(i, o.itemSize, o.normalized));
        void 0 !== o.name && (s.name = o.name), t.setAttribute(a, s)
      }
      var c = e.data.morphAttributes;
      if (c)
        for (var a in c) {
          for (var l = c[a], h = [], u = 0, p = l.length; u < p; u++) {
            o = l[u], s = new di(i = new hh[o.type](o.array), o.itemSize, o.normalized);
            void 0 !== o.name && (s.name = o.name), h.push(s)
          }
          t.morphAttributes[a] = h
        }
      var d = e.data.groups || e.data.drawcalls || e.data.offsets;
      if (void 0 !== d) {
        u = 0;
        for (var f = d.length; u !== f; ++u) {
          var m = d[u];
          t.addGroup(m.start, m.count, m.materialIndex)
        }
      }
      var v = e.data.boundingSphere;
      if (void 0 !== v) {
        var g = new It;
        void 0 !== v.center && g.fromArray(v.center), t.boundingSphere = new On(g, v.radius)
      }
      return e.name && (t.name = e.name), e.userData && (t.userData = e.userData), t
    }
  });
  var hh = {
    Int8Array: Int8Array,
    Uint8Array: Uint8Array,
    Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
    Int16Array: Int16Array,
    Uint16Array: Uint16Array,
    Int32Array: Int32Array,
    Uint32Array: Uint32Array,
    Float32Array: Float32Array,
    Float64Array: Float64Array
  };

  function uh(e) {
    ml.call(this, e)
  }
  uh.prototype = Object.assign(Object.create(ml.prototype), {
    constructor: uh,
    load: function(e, t, n, i) {
      var r = this,
        a = "" === this.path ? oh.extractUrlBase(e) : this.path;
      this.resourcePath = this.resourcePath || a;
      var o = new gl(r.manager);
      o.setPath(this.path), o.load(e, (function(n) {
        var a = null;
        try {
          a = JSON.parse(n)
        } catch (t) {
          return void 0 !== i && i(t), void console.error("THREE:ObjectLoader: Can't parse " + e + ".", t.message)
        }
        var o = a.metadata;
        void 0 !== o && void 0 !== o.type && "geometry" !== o.type.toLowerCase() ? r.parse(a, t) : console.error("THREE.ObjectLoader: Can't load " + e)
      }), n, i)
    },
    parse: function(e, t) {
      var n = this.parseShape(e.shapes),
        i = this.parseGeometries(e.geometries, n),
        r = this.parseImages(e.images, (function() {
          void 0 !== t && t(s)
        })),
        a = this.parseTextures(e.textures, r),
        o = this.parseMaterials(e.materials, a),
        s = this.parseObject(e.object, i, o);
      return e.animations && (s.animations = this.parseAnimations(e.animations)), void 0 !== e.images && 0 !== e.images.length || void 0 !== t && t(s), s
    },
    parseShape: function(e) {
      var t = {};
      if (void 0 !== e)
        for (var n = 0, i = e.length; n < i; n++) {
          var r = (new ql).fromJSON(e[n]);
          t[r.uuid] = r
        }
      return t
    },
    parseGeometries: function(e, t) {
      var n = {};
      if (void 0 !== e)
        for (var i = new lh, r = 0, a = e.length; r < a; r++) {
          var o, s = e[r];
          switch (s.type) {
            case "PlaneGeometry":
            case "PlaneBufferGeometry":
              o = new Bc[s.type](s.width, s.height, s.widthSegments, s.heightSegments);
              break;
            case "BoxGeometry":
            case "BoxBufferGeometry":
            case "CubeGeometry":
              o = new Bc[s.type](s.width, s.height, s.depth, s.widthSegments, s.heightSegments, s.depthSegments);
              break;
            case "CircleGeometry":
            case "CircleBufferGeometry":
              o = new Bc[s.type](s.radius, s.segments, s.thetaStart, s.thetaLength);
              break;
            case "CylinderGeometry":
            case "CylinderBufferGeometry":
              o = new Bc[s.type](s.radiusTop, s.radiusBottom, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
              break;
            case "ConeGeometry":
            case "ConeBufferGeometry":
              o = new Bc[s.type](s.radius, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
              break;
            case "SphereGeometry":
            case "SphereBufferGeometry":
              o = new Bc[s.type](s.radius, s.widthSegments, s.heightSegments, s.phiStart, s.phiLength, s.thetaStart, s.thetaLength);
              break;
            case "DodecahedronGeometry":
            case "DodecahedronBufferGeometry":
            case "IcosahedronGeometry":
            case "IcosahedronBufferGeometry":
            case "OctahedronGeometry":
            case "OctahedronBufferGeometry":
            case "TetrahedronGeometry":
            case "TetrahedronBufferGeometry":
              o = new Bc[s.type](s.radius, s.detail);
              break;
            case "RingGeometry":
            case "RingBufferGeometry":
              o = new Bc[s.type](s.innerRadius, s.outerRadius, s.thetaSegments, s.phiSegments, s.thetaStart, s.thetaLength);
              break;
            case "TorusGeometry":
            case "TorusBufferGeometry":
              o = new Bc[s.type](s.radius, s.tube, s.radialSegments, s.tubularSegments, s.arc);
              break;
            case "TorusKnotGeometry":
            case "TorusKnotBufferGeometry":
              o = new Bc[s.type](s.radius, s.tube, s.tubularSegments, s.radialSegments, s.p, s.q);
              break;
            case "TubeGeometry":
            case "TubeBufferGeometry":
              o = new Bc[s.type]((new kl[s.path.type]).fromJSON(s.path), s.tubularSegments, s.radius, s.radialSegments, s.closed);
              break;
            case "LatheGeometry":
            case "LatheBufferGeometry":
              o = new Bc[s.type](s.points, s.segments, s.phiStart, s.phiLength);
              break;
            case "PolyhedronGeometry":
            case "PolyhedronBufferGeometry":
              o = new Bc[s.type](s.vertices, s.indices, s.radius, s.details);
              break;
            case "ShapeGeometry":
            case "ShapeBufferGeometry":
              for (var c = [], l = 0, h = s.shapes.length; l < h; l++) {
                var u = t[s.shapes[l]];
                c.push(u)
              }
              o = new Bc[s.type](c, s.curveSegments);
              break;
            case "ExtrudeGeometry":
            case "ExtrudeBufferGeometry":
              for (c = [], l = 0, h = s.shapes.length; l < h; l++) {
                u = t[s.shapes[l]];
                c.push(u)
              }
              var p = s.options.extrudePath;
              void 0 !== p && (s.options.extrudePath = (new kl[p.type]).fromJSON(p)), o = new Bc[s.type](c, s.options);
              break;
            case "BufferGeometry":
            case "InstancedBufferGeometry":
              o = i.parse(s);
              break;
            case "Geometry":
              if ("THREE" in window && "LegacyJSONLoader" in THREE) o = (new THREE.LegacyJSONLoader).parse(s, this.resourcePath).geometry;
              else console.error('THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type "Geometry".');
              break;
            default:
              console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
              continue
          }
          o.uuid = s.uuid, void 0 !== s.name && (o.name = s.name), !0 === o.isBufferGeometry && void 0 !== s.userData && (o.userData = s.userData), n[s.uuid] = o
        }
      return n
    },
    parseMaterials: function(e, t) {
      var n = {},
        i = {};
      if (void 0 !== e) {
        var r = new ah;
        r.setTextures(t);
        for (var a = 0, o = e.length; a < o; a++) {
          var s = e[a];
          if ("MultiMaterial" === s.type) {
            for (var c = [], l = 0; l < s.materials.length; l++) {
              var h = s.materials[l];
              void 0 === n[h.uuid] && (n[h.uuid] = r.parse(h)), c.push(n[h.uuid])
            }
            i[s.uuid] = c
          } else void 0 === n[s.uuid] && (n[s.uuid] = r.parse(s)), i[s.uuid] = n[s.uuid]
        }
      }
      return i
    },
    parseAnimations: function(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var i = e[n],
          r = hl.parse(i);
        void 0 !== i.uuid && (r.uuid = i.uuid), t.push(r)
      }
      return t
    },
    parseImages: function(e, t) {
      var n = this,
        i = {};

      function r(e) {
        return n.manager.itemStart(e), a.load(e, (function() {
          n.manager.itemEnd(e)
        }), void 0, (function() {
          n.manager.itemError(e), n.manager.itemEnd(e)
        }))
      }
      if (void 0 !== e && e.length > 0) {
        var a = new wl(new dl(t));
        a.setCrossOrigin(this.crossOrigin);
        for (var o = 0, s = e.length; o < s; o++) {
          var c = e[o],
            l = c.url;
          if (Array.isArray(l)) {
            i[c.uuid] = [];
            for (var h = 0, u = l.length; h < u; h++) {
              var p = l[h],
                d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(p) ? p : n.resourcePath + p;
              i[c.uuid].push(r(d))
            }
          } else {
            d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url) ? c.url : n.resourcePath + c.url;
            i[c.uuid] = r(d)
          }
        }
      }
      return i
    },
    parseTextures: function(e, t) {
      function n(e, t) {
        return "number" == typeof e ? e : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", e), t[e])
      }
      var i = {};
      if (void 0 !== e)
        for (var r = 0, a = e.length; r < a; r++) {
          var o, s = e[r];
          void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === t[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image), (o = Array.isArray(t[s.image]) ? new Br(t[s.image]) : new Bt(t[s.image])).needsUpdate = !0, o.uuid = s.uuid, void 0 !== s.name && (o.name = s.name), void 0 !== s.mapping && (o.mapping = n(s.mapping, dh)), void 0 !== s.offset && o.offset.fromArray(s.offset), void 0 !== s.repeat && o.repeat.fromArray(s.repeat), void 0 !== s.center && o.center.fromArray(s.center), void 0 !== s.rotation && (o.rotation = s.rotation), void 0 !== s.wrap && (o.wrapS = n(s.wrap[0], fh), o.wrapT = n(s.wrap[1], fh)), void 0 !== s.format && (o.format = s.format), void 0 !== s.type && (o.type = s.type), void 0 !== s.encoding && (o.encoding = s.encoding), void 0 !== s.minFilter && (o.minFilter = n(s.minFilter, mh)), void 0 !== s.magFilter && (o.magFilter = n(s.magFilter, mh)), void 0 !== s.anisotropy && (o.anisotropy = s.anisotropy), void 0 !== s.flipY && (o.flipY = s.flipY), void 0 !== s.premultiplyAlpha && (o.premultiplyAlpha = s.premultiplyAlpha), void 0 !== s.unpackAlignment && (o.unpackAlignment = s.unpackAlignment), i[s.uuid] = o
        }
      return i
    },
    parseObject: function(e, t, n) {
      var i;

      function r(e) {
        return void 0 === t[e] && console.warn("THREE.ObjectLoader: Undefined geometry", e), t[e]
      }

      function a(e) {
        if (void 0 !== e) {
          if (Array.isArray(e)) {
            for (var t = [], i = 0, r = e.length; i < r; i++) {
              var a = e[i];
              void 0 === n[a] && console.warn("THREE.ObjectLoader: Undefined material", a), t.push(n[a])
            }
            return t
          }
          return void 0 === n[e] && console.warn("THREE.ObjectLoader: Undefined material", e), n[e]
        }
      }
      switch (e.type) {
        case "Scene":
          i = new vn, void 0 !== e.background && Number.isInteger(e.background) && (i.background = new ai(e.background)), void 0 !== e.fog && ("Fog" === e.fog.type ? i.fog = new Oo(e.fog.color, e.fog.near, e.fog.far) : "FogExp2" === e.fog.type && (i.fog = new Co(e.fog.color, e.fog.density)));
          break;
        case "PerspectiveCamera":
          i = new pr(e.fov, e.aspect, e.near, e.far), void 0 !== e.focus && (i.focus = e.focus), void 0 !== e.zoom && (i.zoom = e.zoom), void 0 !== e.filmGauge && (i.filmGauge = e.filmGauge), void 0 !== e.filmOffset && (i.filmOffset = e.filmOffset), void 0 !== e.view && (i.view = Object.assign({}, e.view));
          break;
        case "OrthographicCamera":
          i = new eh(e.left, e.right, e.top, e.bottom, e.near, e.far), void 0 !== e.zoom && (i.zoom = e.zoom), void 0 !== e.view && (i.view = Object.assign({}, e.view));
          break;
        case "AmbientLight":
          i = new ih(e.color, e.intensity);
          break;
        case "DirectionalLight":
          i = new nh(e.color, e.intensity);
          break;
        case "PointLight":
          i = new $l(e.color, e.intensity, e.distance, e.decay);
          break;
        case "RectAreaLight":
          i = new rh(e.color, e.intensity, e.width, e.height);
          break;
        case "SpotLight":
          i = new Kl(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay);
          break;
        case "HemisphereLight":
          i = new Yl(e.color, e.groundColor, e.intensity);
          break;
        case "SkinnedMesh":
          console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
        case "Mesh":
          var o = r(e.geometry),
            s = a(e.material);
          i = o.bones && o.bones.length > 0 ? new $o(o, s) : new Ji(o, s);
          break;
        case "InstancedMesh":
          o = r(e.geometry), s = a(e.material);
          var c = e.count,
            l = e.instanceMatrix;
          (i = new rs(o, s, c)).instanceMatrix = new di(new Float32Array(l.array), 16);
          break;
        case "LOD":
          i = new Qo;
          break;
        case "Line":
          i = new us(r(e.geometry), a(e.material), e.mode);
          break;
        case "LineLoop":
          i = new ms(r(e.geometry), a(e.material));
          break;
        case "LineSegments":
          i = new fs(r(e.geometry), a(e.material));
          break;
        case "PointCloud":
        case "Points":
          i = new ws(r(e.geometry), a(e.material));
          break;
        case "Sprite":
          i = new Yo(a(e.material));
          break;
        case "Group":
          i = new _o;
          break;
        default:
          i = new mn
      }
      if (i.uuid = e.uuid, void 0 !== e.name && (i.name = e.name), void 0 !== e.matrix ? (i.matrix.fromArray(e.matrix), void 0 !== e.matrixAutoUpdate && (i.matrixAutoUpdate = e.matrixAutoUpdate), i.matrixAutoUpdate && i.matrix.decompose(i.position, i.quaternion, i.scale)) : (void 0 !== e.position && i.position.fromArray(e.position), void 0 !== e.rotation && i.rotation.fromArray(e.rotation), void 0 !== e.quaternion && i.quaternion.fromArray(e.quaternion), void 0 !== e.scale && i.scale.fromArray(e.scale)), void 0 !== e.castShadow && (i.castShadow = e.castShadow), void 0 !== e.receiveShadow && (i.receiveShadow = e.receiveShadow), e.shadow && (void 0 !== e.shadow.bias && (i.shadow.bias = e.shadow.bias), void 0 !== e.shadow.radius && (i.shadow.radius = e.shadow.radius), void 0 !== e.shadow.mapSize && i.shadow.mapSize.fromArray(e.shadow.mapSize), void 0 !== e.shadow.camera && (i.shadow.camera = this.parseObject(e.shadow.camera))), void 0 !== e.visible && (i.visible = e.visible), void 0 !== e.frustumCulled && (i.frustumCulled = e.frustumCulled), void 0 !== e.renderOrder && (i.renderOrder = e.renderOrder), void 0 !== e.userData && (i.userData = e.userData), void 0 !== e.layers && (i.layers.mask = e.layers), void 0 !== e.drawMode && i.setDrawMode(e.drawMode), void 0 !== e.children)
        for (var h = e.children, u = 0; u < h.length; u++) i.add(this.parseObject(h[u], t, n));
      if ("LOD" === e.type)
        for (var p = e.levels, d = 0; d < p.length; d++) {
          var f = p[d],
            m = i.getObjectByProperty("uuid", f.object);
          void 0 !== m && i.addLevel(m, f.distance)
        }
      return i
    }
  });
  var ph, dh = {
      UVMapping: 300,
      CubeReflectionMapping: ee,
      CubeRefractionMapping: te,
      EquirectangularReflectionMapping: ne,
      EquirectangularRefractionMapping: ie,
      SphericalReflectionMapping: re,
      CubeUVReflectionMapping: ae,
      CubeUVRefractionMapping: oe
    },
    fh = {
      RepeatWrapping: se,
      ClampToEdgeWrapping: ce,
      MirroredRepeatWrapping: le
    },
    mh = {
      NearestFilter: he,
      NearestMipmapNearestFilter: ue,
      NearestMipmapLinearFilter: pe,
      LinearFilter: de,
      LinearMipmapNearestFilter: fe,
      LinearMipmapLinearFilter: me
    };

  function vh(e) {
    "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), ml.call(this, e), this.options = void 0
  }

  function gh() {
    this.type = "ShapePath", this.color = new ai, this.subPaths = [], this.currentPath = null
  }

  function yh(e) {
    this.type = "Font", this.data = e
  }

  function xh(e, t, n, i, r) {
    var a = r.glyphs[e] || r.glyphs["?"];
    if (a) {
      var o, s, c, l, h, u, p, d, f = new gh;
      if (a.o)
        for (var m = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), v = 0, g = m.length; v < g;) {
          switch (m[v++]) {
            case "m":
              o = m[v++] * t + n, s = m[v++] * t + i, f.moveTo(o, s);
              break;
            case "l":
              o = m[v++] * t + n, s = m[v++] * t + i, f.lineTo(o, s);
              break;
            case "q":
              c = m[v++] * t + n, l = m[v++] * t + i, h = m[v++] * t + n, u = m[v++] * t + i, f.quadraticCurveTo(h, u, c, l);
              break;
            case "b":
              c = m[v++] * t + n, l = m[v++] * t + i, h = m[v++] * t + n, u = m[v++] * t + i, p = m[v++] * t + n, d = m[v++] * t + i, f.bezierCurveTo(h, u, p, d, c, l)
          }
        }
      return {
        offsetX: a.ha * t,
        path: f
      }
    }
    console.error('THREE.Font: character "' + e + '" does not exists in font family ' + r.familyName + ".")
  }

  function bh(e) {
    ml.call(this, e)
  }
  vh.prototype = Object.assign(Object.create(ml.prototype), {
    constructor: vh,
    setOptions: function(e) {
      return this.options = e, this
    },
    load: function(e, t, n, i) {
      void 0 === e && (e = ""), void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
      var r = this,
        a = pl.get(e);
      if (void 0 !== a) return r.manager.itemStart(e), setTimeout((function() {
        t && t(a), r.manager.itemEnd(e)
      }), 0), a;
      fetch(e).then((function(e) {
        return e.blob()
      })).then((function(e) {
        return void 0 === r.options ? createImageBitmap(e) : createImageBitmap(e, r.options)
      })).then((function(n) {
        pl.add(e, n), t && t(n), r.manager.itemEnd(e)
      })).catch((function(t) {
        i && i(t), r.manager.itemError(e), r.manager.itemEnd(e)
      })), r.manager.itemStart(e)
    }
  }), Object.assign(gh.prototype, {
    moveTo: function(e, t) {
      return this.currentPath = new Wl, this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this
    },
    lineTo: function(e, t) {
      return this.currentPath.lineTo(e, t), this
    },
    quadraticCurveTo: function(e, t, n, i) {
      return this.currentPath.quadraticCurveTo(e, t, n, i), this
    },
    bezierCurveTo: function(e, t, n, i, r, a) {
      return this.currentPath.bezierCurveTo(e, t, n, i, r, a), this
    },
    splineThru: function(e) {
      return this.currentPath.splineThru(e), this
    },
    toShapes: function(e, t) {
      function n(e) {
        for (var t = [], n = 0, i = e.length; n < i; n++) {
          var r = e[n],
            a = new ql;
          a.curves = r.curves, t.push(a)
        }
        return t
      }

      function i(e, t) {
        for (var n = t.length, i = !1, r = n - 1, a = 0; a < n; r = a++) {
          var o = t[r],
            s = t[a],
            c = s.x - o.x,
            l = s.y - o.y;
          if (Math.abs(l) > Number.EPSILON) {
            if (l < 0 && (o = t[a], c = -c, s = t[r], l = -l), e.y < o.y || e.y > s.y) continue;
            if (e.y === o.y) {
              if (e.x === o.x) return !0
            } else {
              var h = l * (e.x - o.x) - c * (e.y - o.y);
              if (0 === h) return !0;
              if (h < 0) continue;
              i = !i
            }
          } else {
            if (e.y !== o.y) continue;
            if (s.x <= e.x && e.x <= o.x || o.x <= e.x && e.x <= s.x) return !0
          }
        }
        return i
      }
      var r = fc.isClockWise,
        a = this.subPaths;
      if (0 === a.length) return [];
      if (!0 === t) return n(a);
      var o, s, c, l = [];
      if (1 === a.length) return s = a[0], (c = new ql).curves = s.curves, l.push(c), l;
      var h = !r(a[0].getPoints());
      h = e ? !h : h;
      var u, p, d = [],
        f = [],
        m = [],
        v = 0;
      f[v] = void 0, m[v] = [];
      for (var g = 0, y = a.length; g < y; g++) o = r(u = (s = a[g]).getPoints()), (o = e ? !o : o) ? (!h && f[v] && v++, f[v] = {
        s: new ql,
        p: u
      }, f[v].s.curves = s.curves, h && v++, m[v] = []) : m[v].push({
        h: s,
        p: u[0]
      });
      if (!f[0]) return n(a);
      if (f.length > 1) {
        for (var x = !1, b = [], w = 0, _ = f.length; w < _; w++) d[w] = [];
        for (w = 0, _ = f.length; w < _; w++)
          for (var M = m[w], S = 0; S < M.length; S++) {
            for (var T = M[S], E = !0, A = 0; A < f.length; A++) i(T.p, f[A].p) && (w !== A && b.push({
              froms: w,
              tos: A,
              hole: S
            }), E ? (E = !1, d[A].push(T)) : x = !0);
            E && d[w].push(T)
          }
        b.length > 0 && (x || (m = d))
      }
      g = 0;
      for (var L = f.length; g < L; g++) {
        c = f[g].s, l.push(c);
        for (var R = 0, P = (p = m[g]).length; R < P; R++) c.holes.push(p[R].h)
      }
      return l
    }
  }), Object.assign(yh.prototype, {
    isFont: !0,
    generateShapes: function(e, t) {
      void 0 === t && (t = 100);
      for (var n = [], i = function(e, t, n) {
          for (var i = Array.from ? Array.from(e) : String(e).split(""), r = t / n.resolution, a = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * r, o = [], s = 0, c = 0, l = 0; l < i.length; l++) {
            var h = i[l];
            if ("\n" === h) s = 0, c -= a;
            else {
              var u = xh(h, r, s, c, n);
              s += u.offsetX, o.push(u.path)
            }
          }
          return o
        }(e, t, this.data), r = 0, a = i.length; r < a; r++) Array.prototype.push.apply(n, i[r].toShapes());
      return n
    }
  }), bh.prototype = Object.assign(Object.create(ml.prototype), {
    constructor: bh,
    load: function(e, t, n, i) {
      var r = this,
        a = new gl(this.manager);
      a.setPath(this.path), a.load(e, (function(e) {
        var n;
        try {
          n = JSON.parse(e)
        } catch (t) {
          console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), n = JSON.parse(e.substring(65, e.length - 2))
        }
        var i = r.parse(n);
        t && t(i)
      }), n, i)
    },
    parse: function(e) {
      return new yh(e)
    }
  });
  var wh = {
    getContext: function() {
      return void 0 === ph && (ph = new(window.AudioContext || window.webkitAudioContext)), ph
    },
    setContext: function(e) {
      ph = e
    }
  };

  function _h(e) {
    ml.call(this, e)
  }

  function Mh() {
    this.coefficients = [];
    for (var e = 0; e < 9; e++) this.coefficients.push(new It)
  }

  function Sh(e, t) {
    Xl.call(this, void 0, t), this.sh = void 0 !== e ? e : new Mh
  }

  function Th(e, t, n) {
    Sh.call(this, void 0, n);
    var i = (new ai).set(e),
      r = (new ai).set(t),
      a = new It(i.r, i.g, i.b),
      o = new It(r.r, r.g, r.b),
      s = Math.sqrt(Math.PI),
      c = s * Math.sqrt(.75);
    this.sh.coefficients[0].copy(a).add(o).multiplyScalar(s), this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)
  }

  function Eh(e, t) {
    Sh.call(this, void 0, t);
    var n = (new ai).set(e);
    this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI))
  }
  _h.prototype = Object.assign(Object.create(ml.prototype), {
    constructor: _h,
    load: function(e, t, n, i) {
      var r = new gl(this.manager);
      r.setResponseType("arraybuffer"), r.setPath(this.path), r.load(e, (function(e) {
        var n = e.slice(0);
        wh.getContext().decodeAudioData(n, (function(e) {
          t(e)
        }))
      }), n, i)
    }
  }), Object.assign(Mh.prototype, {
    isSphericalHarmonics3: !0,
    set: function(e) {
      for (var t = 0; t < 9; t++) this.coefficients[t].copy(e[t]);
      return this
    },
    zero: function() {
      for (var e = 0; e < 9; e++) this.coefficients[e].set(0, 0, 0);
      return this
    },
    getAt: function(e, t) {
      var n = e.x,
        i = e.y,
        r = e.z,
        a = this.coefficients;
      return t.copy(a[0]).multiplyScalar(.282095), t.addScale(a[1], .488603 * i), t.addScale(a[2], .488603 * r), t.addScale(a[3], .488603 * n), t.addScale(a[4], n * i * 1.092548), t.addScale(a[5], i * r * 1.092548), t.addScale(a[6], .315392 * (3 * r * r - 1)), t.addScale(a[7], n * r * 1.092548), t.addScale(a[8], .546274 * (n * n - i * i)), t
    },
    getIrradianceAt: function(e, t) {
      var n = e.x,
        i = e.y,
        r = e.z,
        a = this.coefficients;
      return t.copy(a[0]).multiplyScalar(.886227), t.addScale(a[1], 1.023328 * i), t.addScale(a[2], 1.023328 * r), t.addScale(a[3], 1.023328 * n), t.addScale(a[4], .858086 * n * i), t.addScale(a[5], .858086 * i * r), t.addScale(a[6], .743125 * r * r - .247708), t.addScale(a[7], .858086 * n * r), t.addScale(a[8], .429043 * (n * n - i * i)), t
    },
    add: function(e) {
      for (var t = 0; t < 9; t++) this.coefficients[t].add(e.coefficients[t]);
      return this
    },
    scale: function(e) {
      for (var t = 0; t < 9; t++) this.coefficients[t].multiplyScalar(e);
      return this
    },
    lerp: function(e, t) {
      for (var n = 0; n < 9; n++) this.coefficients[n].lerp(e.coefficients[n], t);
      return this
    },
    equals: function(e) {
      for (var t = 0; t < 9; t++)
        if (!this.coefficients[t].equals(e.coefficients[t])) return !1;
      return !0
    },
    copy: function(e) {
      return this.set(e.coefficients)
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    fromArray: function(e, t) {
      void 0 === t && (t = 0);
      for (var n = this.coefficients, i = 0; i < 9; i++) n[i].fromArray(e, t + 3 * i);
      return this
    },
    toArray: function(e, t) {
      void 0 === e && (e = []), void 0 === t && (t = 0);
      for (var n = this.coefficients, i = 0; i < 9; i++) n[i].toArray(e, t + 3 * i);
      return e
    }
  }), Object.assign(Mh, {
    getBasisAt: function(e, t) {
      var n = e.x,
        i = e.y,
        r = e.z;
      t[0] = .282095, t[1] = .488603 * i, t[2] = .488603 * r, t[3] = .488603 * n, t[4] = 1.092548 * n * i, t[5] = 1.092548 * i * r, t[6] = .315392 * (3 * r * r - 1), t[7] = 1.092548 * n * r, t[8] = .546274 * (n * n - i * i)
    }
  }), Sh.prototype = Object.assign(Object.create(Xl.prototype), {
    constructor: Sh,
    isLightProbe: !0,
    copy: function(e) {
      return Xl.prototype.copy.call(this, e), this.sh.copy(e.sh), this.intensity = e.intensity, this
    },
    toJSON: function(e) {
      return Xl.prototype.toJSON.call(this, e)
    }
  }), Th.prototype = Object.assign(Object.create(Sh.prototype), {
    constructor: Th,
    isHemisphereLightProbe: !0,
    copy: function(e) {
      return Sh.prototype.copy.call(this, e), this
    },
    toJSON: function(e) {
      return Sh.prototype.toJSON.call(this, e)
    }
  }), Eh.prototype = Object.assign(Object.create(Sh.prototype), {
    constructor: Eh,
    isAmbientLightProbe: !0,
    copy: function(e) {
      return Sh.prototype.copy.call(this, e), this
    },
    toJSON: function(e) {
      return Sh.prototype.toJSON.call(this, e)
    }
  });
  var Ah = new Jt,
    Lh = new Jt;

  function Rh(e) {
    this.autoStart = void 0 === e || e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
  }
  Object.assign(function() {
    this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new pr, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new pr, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
      focus: null,
      fov: null,
      aspect: null,
      near: null,
      far: null,
      zoom: null,
      eyeSep: null
    }
  }.prototype, {
    update: function(e) {
      var t = this._cache;
      if (t.focus !== e.focus || t.fov !== e.fov || t.aspect !== e.aspect * this.aspect || t.near !== e.near || t.far !== e.far || t.zoom !== e.zoom || t.eyeSep !== this.eyeSep) {
        t.focus = e.focus, t.fov = e.fov, t.aspect = e.aspect * this.aspect, t.near = e.near, t.far = e.far, t.zoom = e.zoom, t.eyeSep = this.eyeSep;
        var n, i, r = e.projectionMatrix.clone(),
          a = t.eyeSep / 2,
          o = a * t.near / t.focus,
          s = t.near * Math.tan(Lt.DEG2RAD * t.fov * .5) / t.zoom;
        Lh.elements[12] = -a, Ah.elements[12] = a, n = -s * t.aspect + o, i = s * t.aspect + o, r.elements[0] = 2 * t.near / (i - n), r.elements[8] = (i + n) / (i - n), this.cameraL.projectionMatrix.copy(r), n = -s * t.aspect - o, i = s * t.aspect - o, r.elements[0] = 2 * t.near / (i - n), r.elements[8] = (i + n) / (i - n), this.cameraR.projectionMatrix.copy(r)
      }
      this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Lh), this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Ah)
    }
  }), Object.assign(Rh.prototype, {
    start: function() {
      this.startTime = ("undefined" == typeof performance ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
    },
    stop: function() {
      this.getElapsedTime(), this.running = !1, this.autoStart = !1
    },
    getElapsedTime: function() {
      return this.getDelta(), this.elapsedTime
    },
    getDelta: function() {
      var e = 0;
      if (this.autoStart && !this.running) return this.start(), 0;
      if (this.running) {
        var t = ("undefined" == typeof performance ? Date : performance).now();
        e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e
      }
      return e
    }
  });
  var Ph = new It,
    Ch = new Pt,
    Oh = new It,
    Ih = new It;

  function Nh() {
    mn.call(this), this.type = "AudioListener", this.context = wh.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new Rh
  }

  function Dh(e) {
    mn.call(this), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this._startedAt = 0, this._pausedAt = 0, this.filters = []
  }
  Nh.prototype = Object.assign(Object.create(mn.prototype), {
    constructor: Nh,
    getInput: function() {
      return this.gain
    },
    removeFilter: function() {
      return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this
    },
    getFilter: function() {
      return this.filter
    },
    setFilter: function(e) {
      return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this
    },
    getMasterVolume: function() {
      return this.gain.gain.value
    },
    setMasterVolume: function(e) {
      return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this
    },
    updateMatrixWorld: function(e) {
      mn.prototype.updateMatrixWorld.call(this, e);
      var t = this.context.listener,
        n = this.up;
      if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(Ph, Ch, Oh), Ih.set(0, 0, -1).applyQuaternion(Ch), t.positionX) {
        var i = this.context.currentTime + this.timeDelta;
        t.positionX.linearRampToValueAtTime(Ph.x, i), t.positionY.linearRampToValueAtTime(Ph.y, i), t.positionZ.linearRampToValueAtTime(Ph.z, i), t.forwardX.linearRampToValueAtTime(Ih.x, i), t.forwardY.linearRampToValueAtTime(Ih.y, i), t.forwardZ.linearRampToValueAtTime(Ih.z, i), t.upX.linearRampToValueAtTime(n.x, i), t.upY.linearRampToValueAtTime(n.y, i), t.upZ.linearRampToValueAtTime(n.z, i)
      } else t.setPosition(Ph.x, Ph.y, Ph.z), t.setOrientation(Ih.x, Ih.y, Ih.z, n.x, n.y, n.z)
    }
  }), Dh.prototype = Object.assign(Object.create(mn.prototype), {
    constructor: Dh,
    getOutput: function() {
      return this.gain
    },
    setNodeSource: function(e) {
      return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this
    },
    setMediaElementSource: function(e) {
      return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this
    },
    setMediaStreamSource: function(e) {
      return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this
    },
    setBuffer: function(e) {
      return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this
    },
    play: function(e) {
      if (void 0 === e && (e = 0), !0 !== this.isPlaying) {
        if (!1 !== this.hasPlaybackControl) {
          this._startedAt = this.context.currentTime + e;
          var t = this.context.createBufferSource();
          return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._pausedAt + this.offset, this.duration), this.isPlaying = !0, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect()
        }
        console.warn("THREE.Audio: this Audio has no playback control.")
      } else console.warn("THREE.Audio: Audio is already playing.")
    },
    pause: function() {
      if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this._pausedAt = (this.context.currentTime - this._startedAt) * this.playbackRate, this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
      console.warn("THREE.Audio: this Audio has no playback control.")
    },
    stop: function() {
      if (!1 !== this.hasPlaybackControl) return this._pausedAt = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
      console.warn("THREE.Audio: this Audio has no playback control.")
    },
    connect: function() {
      if (this.filters.length > 0) {
        this.source.connect(this.filters[0]);
        for (var e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].connect(this.filters[e]);
        this.filters[this.filters.length - 1].connect(this.getOutput())
      } else this.source.connect(this.getOutput());
      return this
    },
    disconnect: function() {
      if (this.filters.length > 0) {
        this.source.disconnect(this.filters[0]);
        for (var e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].disconnect(this.filters[e]);
        this.filters[this.filters.length - 1].disconnect(this.getOutput())
      } else this.source.disconnect(this.getOutput());
      return this
    },
    getFilters: function() {
      return this.filters
    },
    setFilters: function(e) {
      return e || (e = []), !0 === this.isPlaying ? (this.disconnect(), this.filters = e, this.connect()) : this.filters = e, this
    },
    setDetune: function(e) {
      if (this.detune = e, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this
    },
    getDetune: function() {
      return this.detune
    },
    getFilter: function() {
      return this.getFilters()[0]
    },
    setFilter: function(e) {
      return this.setFilters(e ? [e] : [])
    },
    setPlaybackRate: function(e) {
      if (!1 !== this.hasPlaybackControl) return this.playbackRate = e, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
      console.warn("THREE.Audio: this Audio has no playback control.")
    },
    getPlaybackRate: function() {
      return this.playbackRate
    },
    onEnded: function() {
      this.isPlaying = !1
    },
    getLoop: function() {
      return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
    },
    setLoop: function(e) {
      if (!1 !== this.hasPlaybackControl) return this.loop = e, !0 === this.isPlaying && (this.source.loop = this.loop), this;
      console.warn("THREE.Audio: this Audio has no playback control.")
    },
    setLoopStart: function(e) {
      return this.loopStart = e, this
    },
    setLoopEnd: function(e) {
      return this.loopEnd = e, this
    },
    getVolume: function() {
      return this.gain.gain.value
    },
    setVolume: function(e) {
      return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this
    }
  });
  var zh = new It,
    Uh = new Pt,
    Fh = new It,
    Bh = new It;

  function Gh(e) {
    Dh.call(this, e), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain)
  }

  function Hh(e, t) {
    this.analyser = e.context.createAnalyser(), this.analyser.fftSize = void 0 !== t ? t : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), e.getOutput().connect(this.analyser)
  }

  function Vh(e, t, n) {
    this.binding = e, this.valueSize = n;
    var i, r = Float64Array;
    switch (t) {
      case "quaternion":
        i = this._slerp;
        break;
      case "string":
      case "bool":
        r = Array, i = this._select;
        break;
      default:
        i = this._lerp
    }
    this.buffer = new r(4 * n), this._mixBufferRegion = i, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0
  }
  Gh.prototype = Object.assign(Object.create(Dh.prototype), {
    constructor: Gh,
    getOutput: function() {
      return this.panner
    },
    getRefDistance: function() {
      return this.panner.refDistance
    },
    setRefDistance: function(e) {
      return this.panner.refDistance = e, this
    },
    getRolloffFactor: function() {
      return this.panner.rolloffFactor
    },
    setRolloffFactor: function(e) {
      return this.panner.rolloffFactor = e, this
    },
    getDistanceModel: function() {
      return this.panner.distanceModel
    },
    setDistanceModel: function(e) {
      return this.panner.distanceModel = e, this
    },
    getMaxDistance: function() {
      return this.panner.maxDistance
    },
    setMaxDistance: function(e) {
      return this.panner.maxDistance = e, this
    },
    setDirectionalCone: function(e, t, n) {
      return this.panner.coneInnerAngle = e, this.panner.coneOuterAngle = t, this.panner.coneOuterGain = n, this
    },
    updateMatrixWorld: function(e) {
      if (mn.prototype.updateMatrixWorld.call(this, e), !0 !== this.hasPlaybackControl || !1 !== this.isPlaying) {
        this.matrixWorld.decompose(zh, Uh, Fh), Bh.set(0, 0, 1).applyQuaternion(Uh);
        var t = this.panner;
        if (t.positionX) {
          var n = this.context.currentTime + this.listener.timeDelta;
          t.positionX.linearRampToValueAtTime(zh.x, n), t.positionY.linearRampToValueAtTime(zh.y, n), t.positionZ.linearRampToValueAtTime(zh.z, n), t.orientationX.linearRampToValueAtTime(Bh.x, n), t.orientationY.linearRampToValueAtTime(Bh.y, n), t.orientationZ.linearRampToValueAtTime(Bh.z, n)
        } else t.setPosition(zh.x, zh.y, zh.z), t.setOrientation(Bh.x, Bh.y, Bh.z)
      }
    }
  }), Object.assign(Hh.prototype, {
    getFrequencyData: function() {
      return this.analyser.getByteFrequencyData(this.data), this.data
    },
    getAverageFrequency: function() {
      for (var e = 0, t = this.getFrequencyData(), n = 0; n < t.length; n++) e += t[n];
      return e / t.length
    }
  }), Object.assign(Vh.prototype, {
    accumulate: function(e, t) {
      var n = this.buffer,
        i = this.valueSize,
        r = e * i + i,
        a = this.cumulativeWeight;
      if (0 === a) {
        for (var o = 0; o !== i; ++o) n[r + o] = n[o];
        a = t
      } else {
        var s = t / (a += t);
        this._mixBufferRegion(n, r, 0, s, i)
      }
      this.cumulativeWeight = a
    },
    apply: function(e) {
      var t = this.valueSize,
        n = this.buffer,
        i = e * t + t,
        r = this.cumulativeWeight,
        a = this.binding;
      if (this.cumulativeWeight = 0, r < 1) {
        var o = 3 * t;
        this._mixBufferRegion(n, i, o, 1 - r, t)
      }
      for (var s = t, c = t + t; s !== c; ++s)
        if (n[s] !== n[s + t]) {
          a.setValue(n, i);
          break
        }
    },
    saveOriginalState: function() {
      var e = this.binding,
        t = this.buffer,
        n = this.valueSize,
        i = 3 * n;
      e.getValue(t, i);
      for (var r = n, a = i; r !== a; ++r) t[r] = t[i + r % n];
      this.cumulativeWeight = 0
    },
    restoreOriginalState: function() {
      var e = 3 * this.valueSize;
      this.binding.setValue(this.buffer, e)
    },
    _select: function(e, t, n, i, r) {
      if (i >= .5)
        for (var a = 0; a !== r; ++a) e[t + a] = e[n + a]
    },
    _slerp: function(e, t, n, i) {
      Pt.slerpFlat(e, t, e, t, e, n, i)
    },
    _lerp: function(e, t, n, i, r) {
      for (var a = 1 - i, o = 0; o !== r; ++o) {
        var s = t + o;
        e[s] = e[s] * a + e[n + o] * i
      }
    }
  });
  var kh = new RegExp("[\\[\\]\\.:\\/]", "g"),
    jh = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
    Wh = /((?:WC+[\/:])*)/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
    qh = /(WCOD+)?/.source.replace("WCOD", jh),
    Xh = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
    Yh = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
    Zh = new RegExp("^" + Wh + qh + Xh + Yh + "$"),
    Jh = ["material", "materials", "bones"];

  function Kh(e, t, n) {
    var i = n || Qh.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i)
  }

  function Qh(e, t, n) {
    this.path = t, this.parsedPath = n || Qh.parseTrackName(t), this.node = Qh.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e
  }

  function $h(e, t, n) {
    this._mixer = e, this._clip = t, this._localRoot = n || null;
    for (var i = t.tracks, r = i.length, a = new Array(r), o = {
        endingStart: ot,
        endingEnd: ot
      }, s = 0; s !== r; ++s) {
      var c = i[s].createInterpolant(null);
      a[s] = c, c.settings = o
    }
    this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(r), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = at, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
  }

  function eu(e) {
    this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
  }

  function tu(e) {
    "string" == typeof e && (console.warn("THREE.Uniform: Type parameter is no longer needed."), e = arguments[1]), this.value = e
  }

  function nu(e, t, n) {
    Io.call(this, e, t), this.meshPerAttribute = n || 1
  }

  function iu(e, t) {
    return e.distance - t.distance
  }

  function ru(e, t, n, i) {
    if (!1 !== e.visible && (e.raycast(t, n), !0 === i))
      for (var r = e.children, a = 0, o = r.length; a < o; a++) ru(r[a], t, n, !0)
  }
  Object.assign(Kh.prototype, {
      getValue: function(e, t) {
        this.bind();
        var n = this._targetGroup.nCachedObjects_,
          i = this._bindings[n];
        void 0 !== i && i.getValue(e, t)
      },
      setValue: function(e, t) {
        for (var n = this._bindings, i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(e, t)
      },
      bind: function() {
        for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind()
      },
      unbind: function() {
        for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind()
      }
    }), Object.assign(Qh, {
      Composite: Kh,
      create: function(e, t, n) {
        return e && e.isAnimationObjectGroup ? new Qh.Composite(e, t, n) : new Qh(e, t, n)
      },
      sanitizeNodeName: function(e) {
        return e.replace(/\s/g, "_").replace(kh, "")
      },
      parseTrackName: function(e) {
        var t = Zh.exec(e);
        if (!t) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
        var n = {
            nodeName: t[2],
            objectName: t[3],
            objectIndex: t[4],
            propertyName: t[5],
            propertyIndex: t[6]
          },
          i = n.nodeName && n.nodeName.lastIndexOf(".");
        if (void 0 !== i && -1 !== i) {
          var r = n.nodeName.substring(i + 1); - 1 !== Jh.indexOf(r) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r)
        }
        if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
        return n
      },
      findNode: function(e, t) {
        if (!t || "" === t || "root" === t || "." === t || -1 === t || t === e.name || t === e.uuid) return e;
        if (e.skeleton) {
          var n = e.skeleton.getBoneByName(t);
          if (void 0 !== n) return n
        }
        if (e.children) {
          var i = function(e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                if (r.name === t || r.uuid === t) return r;
                var a = i(r.children);
                if (a) return a
              }
              return null
            },
            r = i(e.children);
          if (r) return r
        }
        return null
      }
    }), Object.assign(Qh.prototype, {
      _getValue_unavailable: function() {},
      _setValue_unavailable: function() {},
      BindingType: {
        Direct: 0,
        EntireArray: 1,
        ArrayElement: 2,
        HasFromToArray: 3
      },
      Versioning: {
        None: 0,
        NeedsUpdate: 1,
        MatrixWorldNeedsUpdate: 2
      },
      GetterByBindingType: [function(e, t) {
        e[t] = this.node[this.propertyName]
      }, function(e, t) {
        for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) e[t++] = n[i]
      }, function(e, t) {
        e[t] = this.resolvedProperty[this.propertyIndex]
      }, function(e, t) {
        this.resolvedProperty.toArray(e, t)
      }],
      SetterByBindingTypeAndVersioning: [
        [function(e, t) {
          this.targetObject[this.propertyName] = e[t]
        }, function(e, t) {
          this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0
        }, function(e, t) {
          this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
        }],
        [function(e, t) {
          for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) n[i] = e[t++]
        }, function(e, t) {
          for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
          this.targetObject.needsUpdate = !0
        }, function(e, t) {
          for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
          this.targetObject.matrixWorldNeedsUpdate = !0
        }],
        [function(e, t) {
          this.resolvedProperty[this.propertyIndex] = e[t]
        }, function(e, t) {
          this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0
        }, function(e, t) {
          this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
        }],
        [function(e, t) {
          this.resolvedProperty.fromArray(e, t)
        }, function(e, t) {
          this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0
        }, function(e, t) {
          this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0
        }]
      ],
      getValue: function(e, t) {
        this.bind(), this.getValue(e, t)
      },
      setValue: function(e, t) {
        this.bind(), this.setValue(e, t)
      },
      bind: function() {
        var e = this.node,
          t = this.parsedPath,
          n = t.objectName,
          i = t.propertyName,
          r = t.propertyIndex;
        if (e || (e = Qh.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, e) {
          if (n) {
            var a = t.objectIndex;
            switch (n) {
              case "materials":
                if (!e.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                if (!e.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                e = e.material.materials;
                break;
              case "bones":
                if (!e.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                e = e.skeleton.bones;
                for (var o = 0; o < e.length; o++)
                  if (e[o].name === a) {
                    a = o;
                    break
                  } break;
              default:
                if (void 0 === e[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                e = e[n]
            }
            if (void 0 !== a) {
              if (void 0 === e[a]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
              e = e[a]
            }
          }
          var s = e[i];
          if (void 0 !== s) {
            var c = this.Versioning.None;
            this.targetObject = e, void 0 !== e.needsUpdate ? c = this.Versioning.NeedsUpdate : void 0 !== e.matrixWorldNeedsUpdate && (c = this.Versioning.MatrixWorldNeedsUpdate);
            var l = this.BindingType.Direct;
            if (void 0 !== r) {
              if ("morphTargetInfluences" === i) {
                if (!e.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                if (e.geometry.isBufferGeometry) {
                  if (!e.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                  for (o = 0; o < this.node.geometry.morphAttributes.position.length; o++)
                    if (e.geometry.morphAttributes.position[o].name === r) {
                      r = o;
                      break
                    }
                } else {
                  if (!e.geometry.morphTargets) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
                  for (o = 0; o < this.node.geometry.morphTargets.length; o++)
                    if (e.geometry.morphTargets[o].name === r) {
                      r = o;
                      break
                    }
                }
              }
              l = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r
            } else void 0 !== s.fromArray && void 0 !== s.toArray ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (l = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;
            this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][c]
          } else {
            var h = t.nodeName;
            console.error("THREE.PropertyBinding: Trying to update property for track: " + h + "." + i + " but it wasn't found.", e)
          }
        } else console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.")
      },
      unbind: function() {
        this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
      }
    }),
    //!\ DECLARE ALIAS AFTER assign prototype !
    Object.assign(Qh.prototype, {
      _getValue_unbound: Qh.prototype.getValue,
      _setValue_unbound: Qh.prototype.setValue
    }), Object.assign(function() {
      this.uuid = Lt.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
      var e = {};
      this._indicesByUUID = e;
      for (var t = 0, n = arguments.length; t !== n; ++t) e[arguments[t].uuid] = t;
      this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
      var i = this;
      this.stats = {
        objects: {
          get total() {
            return i._objects.length
          },
          get inUse() {
            return this.total - i.nCachedObjects_
          }
        },
        get bindingsPerObject() {
          return i._bindings.length
        }
      }
    }.prototype, {
      isAnimationObjectGroup: !0,
      add: function() {
        for (var e = this._objects, t = e.length, n = this.nCachedObjects_, i = this._indicesByUUID, r = this._paths, a = this._parsedPaths, o = this._bindings, s = o.length, c = void 0, l = 0, h = arguments.length; l !== h; ++l) {
          var u = arguments[l],
            p = u.uuid,
            d = i[p];
          if (void 0 === d) {
            d = t++, i[p] = d, e.push(u);
            for (var f = 0, m = s; f !== m; ++f) o[f].push(new Qh(u, r[f], a[f]))
          } else if (d < n) {
            c = e[d];
            var v = --n,
              g = e[v];
            i[g.uuid] = d, e[d] = g, i[p] = v, e[v] = u;
            for (f = 0, m = s; f !== m; ++f) {
              var y = o[f],
                x = y[v],
                b = y[d];
              y[d] = x, void 0 === b && (b = new Qh(u, r[f], a[f])), y[v] = b
            }
          } else e[d] !== c && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
        }
        this.nCachedObjects_ = n
      },
      remove: function() {
        for (var e = this._objects, t = this.nCachedObjects_, n = this._indicesByUUID, i = this._bindings, r = i.length, a = 0, o = arguments.length; a !== o; ++a) {
          var s = arguments[a],
            c = s.uuid,
            l = n[c];
          if (void 0 !== l && l >= t) {
            var h = t++,
              u = e[h];
            n[u.uuid] = l, e[l] = u, n[c] = h, e[h] = s;
            for (var p = 0, d = r; p !== d; ++p) {
              var f = i[p],
                m = f[h],
                v = f[l];
              f[l] = m, f[h] = v
            }
          }
        }
        this.nCachedObjects_ = t
      },
      uncache: function() {
        for (var e = this._objects, t = e.length, n = this.nCachedObjects_, i = this._indicesByUUID, r = this._bindings, a = r.length, o = 0, s = arguments.length; o !== s; ++o) {
          var c = arguments[o],
            l = c.uuid,
            h = i[l];
          if (void 0 !== h)
            if (delete i[l], h < n) {
              var u = --n,
                p = e[u],
                d = e[y = --t];
              i[p.uuid] = h, e[h] = p, i[d.uuid] = u, e[u] = d, e.pop();
              for (var f = 0, m = a; f !== m; ++f) {
                var v = (x = r[f])[u],
                  g = x[y];
                x[h] = v, x[u] = g, x.pop()
              }
            } else {
              var y;
              i[(d = e[y = --t]).uuid] = h, e[h] = d, e.pop();
              for (f = 0, m = a; f !== m; ++f) {
                var x;
                (x = r[f])[h] = x[y], x.pop()
              }
            }
        }
        this.nCachedObjects_ = n
      },
      subscribe_: function(e, t) {
        var n = this._bindingsIndicesByPath,
          i = n[e],
          r = this._bindings;
        if (void 0 !== i) return r[i];
        var a = this._paths,
          o = this._parsedPaths,
          s = this._objects,
          c = s.length,
          l = this.nCachedObjects_,
          h = new Array(c);
        i = r.length, n[e] = i, a.push(e), o.push(t), r.push(h);
        for (var u = l, p = s.length; u !== p; ++u) {
          var d = s[u];
          h[u] = new Qh(d, e, t)
        }
        return h
      },
      unsubscribe_: function(e) {
        var t = this._bindingsIndicesByPath,
          n = t[e];
        if (void 0 !== n) {
          var i = this._paths,
            r = this._parsedPaths,
            a = this._bindings,
            o = a.length - 1,
            s = a[o];
          t[e[o]] = n, a[n] = s, a.pop(), r[n] = r[o], r.pop(), i[n] = i[o], i.pop()
        }
      }
    }), Object.assign($h.prototype, {
      play: function() {
        return this._mixer._activateAction(this), this
      },
      stop: function() {
        return this._mixer._deactivateAction(this), this.reset()
      },
      reset: function() {
        return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
      },
      isRunning: function() {
        return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
      },
      isScheduled: function() {
        return this._mixer._isActiveAction(this)
      },
      startAt: function(e) {
        return this._startTime = e, this
      },
      setLoop: function(e, t) {
        return this.loop = e, this.repetitions = t, this
      },
      setEffectiveWeight: function(e) {
        return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading()
      },
      getEffectiveWeight: function() {
        return this._effectiveWeight
      },
      fadeIn: function(e) {
        return this._scheduleFading(e, 0, 1)
      },
      fadeOut: function(e) {
        return this._scheduleFading(e, 1, 0)
      },
      crossFadeFrom: function(e, t, n) {
        if (e.fadeOut(t), this.fadeIn(t), n) {
          var i = this._clip.duration,
            r = e._clip.duration,
            a = r / i,
            o = i / r;
          e.warp(1, a, t), this.warp(o, 1, t)
        }
        return this
      },
      crossFadeTo: function(e, t, n) {
        return e.crossFadeFrom(this, t, n)
      },
      stopFading: function() {
        var e = this._weightInterpolant;
        return null !== e && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
      },
      setEffectiveTimeScale: function(e) {
        return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping()
      },
      getEffectiveTimeScale: function() {
        return this._effectiveTimeScale
      },
      setDuration: function(e) {
        return this.timeScale = this._clip.duration / e, this.stopWarping()
      },
      syncWith: function(e) {
        return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping()
      },
      halt: function(e) {
        return this.warp(this._effectiveTimeScale, 0, e)
      },
      warp: function(e, t, n) {
        var i = this._mixer,
          r = i.time,
          a = this._timeScaleInterpolant,
          o = this.timeScale;
        null === a && (a = i._lendControlInterpolant(), this._timeScaleInterpolant = a);
        var s = a.parameterPositions,
          c = a.sampleValues;
        return s[0] = r, s[1] = r + n, c[0] = e / o, c[1] = t / o, this
      },
      stopWarping: function() {
        var e = this._timeScaleInterpolant;
        return null !== e && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
      },
      getMixer: function() {
        return this._mixer
      },
      getClip: function() {
        return this._clip
      },
      getRoot: function() {
        return this._localRoot || this._mixer._root
      },
      _update: function(e, t, n, i) {
        if (this.enabled) {
          var r = this._startTime;
          if (null !== r) {
            var a = (e - r) * n;
            if (a < 0 || 0 === n) return;
            this._startTime = null, t = n * a
          }
          t *= this._updateTimeScale(e);
          var o = this._updateTime(t),
            s = this._updateWeight(e);
          if (s > 0)
            for (var c = this._interpolants, l = this._propertyBindings, h = 0, u = c.length; h !== u; ++h) c[h].evaluate(o), l[h].accumulate(i, s)
        } else this._updateWeight(e)
      },
      _updateWeight: function(e) {
        var t = 0;
        if (this.enabled) {
          t = this.weight;
          var n = this._weightInterpolant;
          if (null !== n) {
            var i = n.evaluate(e)[0];
            t *= i, e > n.parameterPositions[1] && (this.stopFading(), 0 === i && (this.enabled = !1))
          }
        }
        return this._effectiveWeight = t, t
      },
      _updateTimeScale: function(e) {
        var t = 0;
        if (!this.paused) {
          t = this.timeScale;
          var n = this._timeScaleInterpolant;
          if (null !== n) t *= n.evaluate(e)[0], e > n.parameterPositions[1] && (this.stopWarping(), 0 === t ? this.paused = !0 : this.timeScale = t)
        }
        return this._effectiveTimeScale = t, t
      },
      _updateTime: function(e) {
        var t = this.time + e,
          n = this._clip.duration,
          i = this.loop,
          r = this._loopCount,
          a = 2202 === i;
        if (0 === e) return -1 === r ? t : a && 1 == (1 & r) ? n - t : t;
        if (2200 === i) {
          -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
          e: {
            if (t >= n) t = n;
            else {
              if (!(t < 0)) {
                this.time = t;
                break e
              }
              t = 0
            }
            this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
            this.time = t,
            this._mixer.dispatchEvent({
              type: "finished",
              action: this,
              direction: e < 0 ? -1 : 1
            })
          }
        } else {
          if (-1 === r && (e >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)), t >= n || t < 0) {
            var o = Math.floor(t / n);
            t -= n * o, r += Math.abs(o);
            var s = this.repetitions - r;
            if (s <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, t = e > 0 ? n : 0, this.time = t, this._mixer.dispatchEvent({
              type: "finished",
              action: this,
              direction: e > 0 ? 1 : -1
            });
            else {
              if (1 === s) {
                var c = e < 0;
                this._setEndings(c, !c, a)
              } else this._setEndings(!1, !1, a);
              this._loopCount = r, this.time = t, this._mixer.dispatchEvent({
                type: "loop",
                action: this,
                loopDelta: o
              })
            }
          } else this.time = t;
          if (a && 1 == (1 & r)) return n - t
        }
        return t
      },
      _setEndings: function(e, t, n) {
        var i = this._interpolantSettings;
        n ? (i.endingStart = 2401, i.endingEnd = 2401) : (i.endingStart = e ? this.zeroSlopeAtStart ? 2401 : ot : 2402, i.endingEnd = t ? this.zeroSlopeAtEnd ? 2401 : ot : 2402)
      },
      _scheduleFading: function(e, t, n) {
        var i = this._mixer,
          r = i.time,
          a = this._weightInterpolant;
        null === a && (a = i._lendControlInterpolant(), this._weightInterpolant = a);
        var o = a.parameterPositions,
          s = a.sampleValues;
        return o[0] = r, s[0] = t, o[1] = r + e, s[1] = n, this
      }
    }), eu.prototype = Object.assign(Object.create(Tt.prototype), {
      constructor: eu,
      _bindAction: function(e, t) {
        var n = e._localRoot || this._root,
          i = e._clip.tracks,
          r = i.length,
          a = e._propertyBindings,
          o = e._interpolants,
          s = n.uuid,
          c = this._bindingsByRootAndName,
          l = c[s];
        void 0 === l && (l = {}, c[s] = l);
        for (var h = 0; h !== r; ++h) {
          var u = i[h],
            p = u.name,
            d = l[p];
          if (void 0 !== d) a[h] = d;
          else {
            if (void 0 !== (d = a[h])) {
              null === d._cacheIndex && (++d.referenceCount, this._addInactiveBinding(d, s, p));
              continue
            }
            var f = t && t._propertyBindings[h].binding.parsedPath;
            ++(d = new Vh(Qh.create(n, p, f), u.ValueTypeName, u.getValueSize())).referenceCount, this._addInactiveBinding(d, s, p), a[h] = d
          }
          o[h].resultBuffer = d.buffer
        }
      },
      _activateAction: function(e) {
        if (!this._isActiveAction(e)) {
          if (null === e._cacheIndex) {
            var t = (e._localRoot || this._root).uuid,
              n = e._clip.uuid,
              i = this._actionsByClip[n];
            this._bindAction(e, i && i.knownActions[0]), this._addInactiveAction(e, n, t)
          }
          for (var r = e._propertyBindings, a = 0, o = r.length; a !== o; ++a) {
            var s = r[a];
            0 == s.useCount++ && (this._lendBinding(s), s.saveOriginalState())
          }
          this._lendAction(e)
        }
      },
      _deactivateAction: function(e) {
        if (this._isActiveAction(e)) {
          for (var t = e._propertyBindings, n = 0, i = t.length; n !== i; ++n) {
            var r = t[n];
            0 == --r.useCount && (r.restoreOriginalState(), this._takeBackBinding(r))
          }
          this._takeBackAction(e)
        }
      },
      _initMemoryManager: function() {
        this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
        var e = this;
        this.stats = {
          actions: {
            get total() {
              return e._actions.length
            },
            get inUse() {
              return e._nActiveActions
            }
          },
          bindings: {
            get total() {
              return e._bindings.length
            },
            get inUse() {
              return e._nActiveBindings
            }
          },
          controlInterpolants: {
            get total() {
              return e._controlInterpolants.length
            },
            get inUse() {
              return e._nActiveControlInterpolants
            }
          }
        }
      },
      _isActiveAction: function(e) {
        var t = e._cacheIndex;
        return null !== t && t < this._nActiveActions
      },
      _addInactiveAction: function(e, t, n) {
        var i = this._actions,
          r = this._actionsByClip,
          a = r[t];
        if (void 0 === a) a = {
          knownActions: [e],
          actionByRoot: {}
        }, e._byClipCacheIndex = 0, r[t] = a;
        else {
          var o = a.knownActions;
          e._byClipCacheIndex = o.length, o.push(e)
        }
        e._cacheIndex = i.length, i.push(e), a.actionByRoot[n] = e
      },
      _removeInactiveAction: function(e) {
        var t = this._actions,
          n = t[t.length - 1],
          i = e._cacheIndex;
        n._cacheIndex = i, t[i] = n, t.pop(), e._cacheIndex = null;
        var r = e._clip.uuid,
          a = this._actionsByClip,
          o = a[r],
          s = o.knownActions,
          c = s[s.length - 1],
          l = e._byClipCacheIndex;
        c._byClipCacheIndex = l, s[l] = c, s.pop(), e._byClipCacheIndex = null, delete o.actionByRoot[(e._localRoot || this._root).uuid], 0 === s.length && delete a[r], this._removeInactiveBindingsForAction(e)
      },
      _removeInactiveBindingsForAction: function(e) {
        for (var t = e._propertyBindings, n = 0, i = t.length; n !== i; ++n) {
          var r = t[n];
          0 == --r.referenceCount && this._removeInactiveBinding(r)
        }
      },
      _lendAction: function(e) {
        var t = this._actions,
          n = e._cacheIndex,
          i = this._nActiveActions++,
          r = t[i];
        e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r
      },
      _takeBackAction: function(e) {
        var t = this._actions,
          n = e._cacheIndex,
          i = --this._nActiveActions,
          r = t[i];
        e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r
      },
      _addInactiveBinding: function(e, t, n) {
        var i = this._bindingsByRootAndName,
          r = i[t],
          a = this._bindings;
        void 0 === r && (r = {}, i[t] = r), r[n] = e, e._cacheIndex = a.length, a.push(e)
      },
      _removeInactiveBinding: function(e) {
        var t = this._bindings,
          n = e.binding,
          i = n.rootNode.uuid,
          r = n.path,
          a = this._bindingsByRootAndName,
          o = a[i],
          s = t[t.length - 1],
          c = e._cacheIndex;
        s._cacheIndex = c, t[c] = s, t.pop(), delete o[r], 0 === Object.keys(o).length && delete a[i]
      },
      _lendBinding: function(e) {
        var t = this._bindings,
          n = e._cacheIndex,
          i = this._nActiveBindings++,
          r = t[i];
        e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r
      },
      _takeBackBinding: function(e) {
        var t = this._bindings,
          n = e._cacheIndex,
          i = --this._nActiveBindings,
          r = t[i];
        e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r
      },
      _lendControlInterpolant: function() {
        var e = this._controlInterpolants,
          t = this._nActiveControlInterpolants++,
          n = e[t];
        return void 0 === n && ((n = new el(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = t, e[t] = n), n
      },
      _takeBackControlInterpolant: function(e) {
        var t = this._controlInterpolants,
          n = e.__cacheIndex,
          i = --this._nActiveControlInterpolants,
          r = t[i];
        e.__cacheIndex = i, t[i] = e, r.__cacheIndex = n, t[n] = r
      },
      _controlInterpolantsResultBuffer: new Float32Array(1),
      clipAction: function(e, t) {
        var n = t || this._root,
          i = n.uuid,
          r = "string" == typeof e ? hl.findByName(n, e) : e,
          a = null !== r ? r.uuid : e,
          o = this._actionsByClip[a],
          s = null;
        if (void 0 !== o) {
          var c = o.actionByRoot[i];
          if (void 0 !== c) return c;
          s = o.knownActions[0], null === r && (r = s._clip)
        }
        if (null === r) return null;
        var l = new $h(this, r, t);
        return this._bindAction(l, s), this._addInactiveAction(l, a, i), l
      },
      existingAction: function(e, t) {
        var n = t || this._root,
          i = n.uuid,
          r = "string" == typeof e ? hl.findByName(n, e) : e,
          a = r ? r.uuid : e,
          o = this._actionsByClip[a];
        return void 0 !== o && o.actionByRoot[i] || null
      },
      stopAllAction: function() {
        var e = this._actions,
          t = this._nActiveActions,
          n = this._bindings,
          i = this._nActiveBindings;
        this._nActiveActions = 0, this._nActiveBindings = 0;
        for (var r = 0; r !== t; ++r) e[r].reset();
        for (r = 0; r !== i; ++r) n[r].useCount = 0;
        return this
      },
      update: function(e) {
        e *= this.timeScale;
        for (var t = this._actions, n = this._nActiveActions, i = this.time += e, r = Math.sign(e), a = this._accuIndex ^= 1, o = 0; o !== n; ++o) {
          t[o]._update(i, e, r, a)
        }
        var s = this._bindings,
          c = this._nActiveBindings;
        for (o = 0; o !== c; ++o) s[o].apply(a);
        return this
      },
      setTime: function(e) {
        this.time = 0;
        for (var t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
        return this.update(e)
      },
      getRoot: function() {
        return this._root
      },
      uncacheClip: function(e) {
        var t = this._actions,
          n = e.uuid,
          i = this._actionsByClip,
          r = i[n];
        if (void 0 !== r) {
          for (var a = r.knownActions, o = 0, s = a.length; o !== s; ++o) {
            var c = a[o];
            this._deactivateAction(c);
            var l = c._cacheIndex,
              h = t[t.length - 1];
            c._cacheIndex = null, c._byClipCacheIndex = null, h._cacheIndex = l, t[l] = h, t.pop(), this._removeInactiveBindingsForAction(c)
          }
          delete i[n]
        }
      },
      uncacheRoot: function(e) {
        var t = e.uuid,
          n = this._actionsByClip;
        for (var i in n) {
          var r = n[i].actionByRoot[t];
          void 0 !== r && (this._deactivateAction(r), this._removeInactiveAction(r))
        }
        var a = this._bindingsByRootAndName[t];
        if (void 0 !== a)
          for (var o in a) {
            var s = a[o];
            s.restoreOriginalState(), this._removeInactiveBinding(s)
          }
      },
      uncacheAction: function(e, t) {
        var n = this.existingAction(e, t);
        null !== n && (this._deactivateAction(n), this._removeInactiveAction(n))
      }
    }), tu.prototype.clone = function() {
      return new tu(void 0 === this.value.clone ? this.value : this.value.clone())
    }, nu.prototype = Object.assign(Object.create(Io.prototype), {
      constructor: nu,
      isInstancedInterleavedBuffer: !0,
      copy: function(e) {
        return Io.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
      }
    }), Object.assign(function(e, t, n, i) {
      this.ray = new Gn(e, t), this.near = n || 0, this.far = i || 1 / 0, this.camera = null, this.params = {
        Mesh: {},
        Line: {},
        LOD: {},
        Points: {
          threshold: 1
        },
        Sprite: {}
      }, Object.defineProperties(this.params, {
        PointCloud: {
          get: function() {
            return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
          }
        }
      })
    }.prototype, {
      linePrecision: 1,
      set: function(e, t) {
        this.ray.set(e, t)
      },
      setFromCamera: function(e, t) {
        t && t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t && t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type.")
      },
      intersectObject: function(e, t, n) {
        var i = n || [];
        return ru(e, this, i, t), i.sort(iu), i
      },
      intersectObjects: function(e, t, n) {
        var i = n || [];
        if (!1 === Array.isArray(e)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), i;
        for (var r = 0, a = e.length; r < a; r++) ru(e[r], this, i, t);
        return i.sort(iu), i
      }
    }), Object.assign(function(e, t, n) {
      return this.radius = void 0 !== e ? e : 1, this.phi = void 0 !== t ? t : 0, this.theta = void 0 !== n ? n : 0, this
    }.prototype, {
      set: function(e, t, n) {
        return this.radius = e, this.phi = t, this.theta = n, this
      },
      clone: function() {
        return (new this.constructor).copy(this)
      },
      copy: function(e) {
        return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this
      },
      makeSafe: function() {
        return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this
      },
      setFromVector3: function(e) {
        return this.setFromCartesianCoords(e.x, e.y, e.z)
      },
      setFromCartesianCoords: function(e, t, n) {
        return this.radius = Math.sqrt(e * e + t * t + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(Lt.clamp(t / this.radius, -1, 1))), this
      }
    }), Object.assign(function(e, t, n) {
      return this.radius = void 0 !== e ? e : 1, this.theta = void 0 !== t ? t : 0, this.y = void 0 !== n ? n : 0, this
    }.prototype, {
      set: function(e, t, n) {
        return this.radius = e, this.theta = t, this.y = n, this
      },
      clone: function() {
        return (new this.constructor).copy(this)
      },
      copy: function(e) {
        return this.radius = e.radius, this.theta = e.theta, this.y = e.y, this
      },
      setFromVector3: function(e) {
        return this.setFromCartesianCoords(e.x, e.y, e.z)
      },
      setFromCartesianCoords: function(e, t, n) {
        return this.radius = Math.sqrt(e * e + n * n), this.theta = Math.atan2(e, n), this.y = t, this
      }
    });
  var au = new Rt;

  function ou(e, t) {
    this.min = void 0 !== e ? e : new Rt(1 / 0, 1 / 0), this.max = void 0 !== t ? t : new Rt(-1 / 0, -1 / 0)
  }
  Object.assign(ou.prototype, {
    set: function(e, t) {
      return this.min.copy(e), this.max.copy(t), this
    },
    setFromPoints: function(e) {
      this.makeEmpty();
      for (var t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
      return this
    },
    setFromCenterAndSize: function(e, t) {
      var n = au.copy(t).multiplyScalar(.5);
      return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(e) {
      return this.min.copy(e.min), this.max.copy(e.max), this
    },
    makeEmpty: function() {
      return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
    },
    isEmpty: function() {
      return this.max.x < this.min.x || this.max.y < this.min.y
    },
    getCenter: function(e) {
      return void 0 === e && (console.warn("THREE.Box2: .getCenter() target is now required"), e = new Rt), this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
    },
    getSize: function(e) {
      return void 0 === e && (console.warn("THREE.Box2: .getSize() target is now required"), e = new Rt), this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min)
    },
    expandByPoint: function(e) {
      return this.min.min(e), this.max.max(e), this
    },
    expandByVector: function(e) {
      return this.min.sub(e), this.max.add(e), this
    },
    expandByScalar: function(e) {
      return this.min.addScalar(-e), this.max.addScalar(e), this
    },
    containsPoint: function(e) {
      return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y)
    },
    containsBox: function(e) {
      return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y
    },
    getParameter: function(e, t) {
      return void 0 === t && (console.warn("THREE.Box2: .getParameter() target is now required"), t = new Rt), t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
    },
    intersectsBox: function(e) {
      return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y)
    },
    clampPoint: function(e, t) {
      return void 0 === t && (console.warn("THREE.Box2: .clampPoint() target is now required"), t = new Rt), t.copy(e).clamp(this.min, this.max)
    },
    distanceToPoint: function(e) {
      return au.copy(e).clamp(this.min, this.max).sub(e).length()
    },
    intersect: function(e) {
      return this.min.max(e.min), this.max.min(e.max), this
    },
    union: function(e) {
      return this.min.min(e.min), this.max.max(e.max), this
    },
    translate: function(e) {
      return this.min.add(e), this.max.add(e), this
    },
    equals: function(e) {
      return e.min.equals(this.min) && e.max.equals(this.max)
    }
  });
  var su = new It,
    cu = new It;

  function lu(e, t) {
    this.start = void 0 !== e ? e : new It, this.end = void 0 !== t ? t : new It
  }

  function hu(e) {
    mn.call(this), this.material = e, this.render = function() {}
  }
  Object.assign(lu.prototype, {
    set: function(e, t) {
      return this.start.copy(e), this.end.copy(t), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(e) {
      return this.start.copy(e.start), this.end.copy(e.end), this
    },
    getCenter: function(e) {
      return void 0 === e && (console.warn("THREE.Line3: .getCenter() target is now required"), e = new It), e.addVectors(this.start, this.end).multiplyScalar(.5)
    },
    delta: function(e) {
      return void 0 === e && (console.warn("THREE.Line3: .delta() target is now required"), e = new It), e.subVectors(this.end, this.start)
    },
    distanceSq: function() {
      return this.start.distanceToSquared(this.end)
    },
    distance: function() {
      return this.start.distanceTo(this.end)
    },
    at: function(e, t) {
      return void 0 === t && (console.warn("THREE.Line3: .at() target is now required"), t = new It), this.delta(t).multiplyScalar(e).add(this.start)
    },
    closestPointToPointParameter: function(e, t) {
      su.subVectors(e, this.start), cu.subVectors(this.end, this.start);
      var n = cu.dot(cu),
        i = cu.dot(su) / n;
      return t && (i = Lt.clamp(i, 0, 1)), i
    },
    closestPointToPoint: function(e, t, n) {
      var i = this.closestPointToPointParameter(e, t);
      return void 0 === n && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), n = new It), this.delta(n).multiplyScalar(i).add(this.start)
    },
    applyMatrix4: function(e) {
      return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this
    },
    equals: function(e) {
      return e.start.equals(this.start) && e.end.equals(this.end)
    }
  }), hu.prototype = Object.create(mn.prototype), hu.prototype.constructor = hu, hu.prototype.isImmediateRenderObject = !0;
  var uu = new It,
    pu = new It,
    du = new zt,
    fu = ["a", "b", "c"];

  function mu(e, t, n, i) {
    this.object = e, this.size = void 0 !== t ? t : 1;
    var r = void 0 !== n ? n : 16711680,
      a = void 0 !== i ? i : 1,
      o = 0,
      s = this.object.geometry;
    s && s.isGeometry ? o = 3 * s.faces.length : s && s.isBufferGeometry && (o = s.attributes.normal.count);
    var c = new Oi,
      l = new wi(2 * o * 3, 3);
    c.setAttribute("position", l), fs.call(this, c, new as({
      color: r,
      linewidth: a
    })), this.matrixAutoUpdate = !1, this.update()
  }
  mu.prototype = Object.create(fs.prototype), mu.prototype.constructor = mu, mu.prototype.update = function() {
    this.object.updateMatrixWorld(!0), du.getNormalMatrix(this.object.matrixWorld);
    var e = this.object.matrixWorld,
      t = this.geometry.attributes.position,
      n = this.object.geometry;
    if (n && n.isGeometry)
      for (var i = n.vertices, r = n.faces, a = 0, o = 0, s = r.length; o < s; o++)
        for (var c = r[o], l = 0, h = c.vertexNormals.length; l < h; l++) {
          var u = i[c[fu[l]]],
            p = c.vertexNormals[l];
          uu.copy(u).applyMatrix4(e), pu.copy(p).applyMatrix3(du).normalize().multiplyScalar(this.size).add(uu), t.setXYZ(a, uu.x, uu.y, uu.z), a += 1, t.setXYZ(a, pu.x, pu.y, pu.z), a += 1
        } else if (n && n.isBufferGeometry) {
          var d = n.attributes.position,
            f = n.attributes.normal;
          for (a = 0, l = 0, h = d.count; l < h; l++) uu.set(d.getX(l), d.getY(l), d.getZ(l)).applyMatrix4(e), pu.set(f.getX(l), f.getY(l), f.getZ(l)), pu.applyMatrix3(du).normalize().multiplyScalar(this.size).add(uu), t.setXYZ(a, uu.x, uu.y, uu.z), a += 1, t.setXYZ(a, pu.x, pu.y, pu.z), a += 1
        } t.needsUpdate = !0
  };
  var vu = new It;

  function gu(e, t) {
    mn.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = t;
    for (var n = new Oi, i = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], r = 0, a = 1; r < 32; r++, a++) {
      var o = r / 32 * Math.PI * 2,
        s = a / 32 * Math.PI * 2;
      i.push(Math.cos(o), Math.sin(o), 1, Math.cos(s), Math.sin(s), 1)
    }
    n.setAttribute("position", new wi(i, 3));
    var c = new as({
      fog: !1
    });
    this.cone = new fs(n, c), this.add(this.cone), this.update()
  }
  gu.prototype = Object.create(mn.prototype), gu.prototype.constructor = gu, gu.prototype.dispose = function() {
    this.cone.geometry.dispose(), this.cone.material.dispose()
  }, gu.prototype.update = function() {
    this.light.updateMatrixWorld();
    var e = this.light.distance ? this.light.distance : 1e3,
      t = e * Math.tan(this.light.angle);
    this.cone.scale.set(t, t, e), vu.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(vu), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
  };
  var yu = new It,
    xu = new Jt,
    bu = new Jt;

  function wu(e) {
    for (var t = function e(t) {
        var n = [];
        t && t.isBone && n.push(t);
        for (var i = 0; i < t.children.length; i++) n.push.apply(n, e(t.children[i]));
        return n
      }(e), n = new Oi, i = [], r = [], a = new ai(0, 0, 1), o = new ai(0, 1, 0), s = 0; s < t.length; s++) {
      var c = t[s];
      c.parent && c.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(a.r, a.g, a.b), r.push(o.r, o.g, o.b))
    }
    n.setAttribute("position", new wi(i, 3)), n.setAttribute("color", new wi(r, 3));
    var l = new as({
      vertexColors: f,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0
    });
    fs.call(this, n, l), this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1
  }

  function _u(e, t, n) {
    this.light = e, this.light.updateMatrixWorld(), this.color = n;
    var i = new Sc(t, 4, 2),
      r = new pi({
        wireframe: !0,
        fog: !1
      });
    Ji.call(this, i, r), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
  }

  function Mu(e, t) {
    this.type = "RectAreaLightHelper", this.light = e, this.color = t;
    var n = new Oi;
    n.setAttribute("position", new wi([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0], 3)), n.computeBoundingSphere();
    var i = new as({
      fog: !1
    });
    us.call(this, n, i);
    var r = new Oi;
    r.setAttribute("position", new wi([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0], 3)), r.computeBoundingSphere(), this.add(new Ji(r, new pi({
      side: h,
      fog: !1
    }))), this.update()
  }
  wu.prototype = Object.create(fs.prototype), wu.prototype.constructor = wu, wu.prototype.updateMatrixWorld = function(e) {
    var t = this.bones,
      n = this.geometry,
      i = n.getAttribute("position");
    bu.getInverse(this.root.matrixWorld);
    for (var r = 0, a = 0; r < t.length; r++) {
      var o = t[r];
      o.parent && o.parent.isBone && (xu.multiplyMatrices(bu, o.matrixWorld), yu.setFromMatrixPosition(xu), i.setXYZ(a, yu.x, yu.y, yu.z), xu.multiplyMatrices(bu, o.parent.matrixWorld), yu.setFromMatrixPosition(xu), i.setXYZ(a + 1, yu.x, yu.y, yu.z), a += 2)
    }
    n.getAttribute("position").needsUpdate = !0, mn.prototype.updateMatrixWorld.call(this, e)
  }, _u.prototype = Object.create(Ji.prototype), _u.prototype.constructor = _u, _u.prototype.dispose = function() {
    this.geometry.dispose(), this.material.dispose()
  }, _u.prototype.update = function() {
    void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
  }, Mu.prototype = Object.create(us.prototype), Mu.prototype.constructor = Mu, Mu.prototype.update = function() {
    if (this.scale.set(.5 * this.light.width, .5 * this.light.height, 1), void 0 !== this.color) this.material.color.set(this.color), this.children[0].material.color.set(this.color);
    else {
      this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
      var e = this.material.color,
        t = Math.max(e.r, e.g, e.b);
      t > 1 && e.multiplyScalar(1 / t), this.children[0].material.color.copy(this.material.color)
    }
  }, Mu.prototype.dispose = function() {
    this.geometry.dispose(), this.material.dispose(), this.children[0].geometry.dispose(), this.children[0].material.dispose()
  };
  var Su = new It,
    Tu = new ai,
    Eu = new ai;

  function Au(e, t, n) {
    mn.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n;
    var i = new Ds(t);
    i.rotateY(.5 * Math.PI), this.material = new pi({
      wireframe: !0,
      fog: !1
    }), void 0 === this.color && (this.material.vertexColors = f);
    var r = i.getAttribute("position"),
      a = new Float32Array(3 * r.count);
    i.setAttribute("color", new di(a, 3)), this.add(new Ji(i, this.material)), this.update()
  }

  function Lu(e, t) {
    this.lightProbe = e, this.size = t;
    var n = {
        GAMMA_OUTPUT: ""
      },
      i = new hr({
        defines: n,
        uniforms: {
          sh: {
            value: this.lightProbe.sh.coefficients
          },
          intensity: {
            value: this.lightProbe.intensity
          }
        },
        vertexShader: ["varying vec3 vNormal;", "void main() {", "\tvNormal = normalize( normalMatrix * normal );", "\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
        fragmentShader: ["#define RECIPROCAL_PI 0.318309886", "vec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {", "\t// matrix is assumed to be orthogonal", "\treturn normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );", "}", "vec3 linearToOutput( in vec3 a ) {", "\t#ifdef GAMMA_OUTPUT", "\t\treturn pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );", "\t#else", "\t\treturn a;", "\t#endif", "}", "// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf", "vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {", "\t// normal is assumed to have unit length", "\tfloat x = normal.x, y = normal.y, z = normal.z;", "\t// band 0", "\tvec3 result = shCoefficients[ 0 ] * 0.886227;", "\t// band 1", "\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;", "\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;", "\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;", "\t// band 2", "\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;", "\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;", "\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );", "\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;", "\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );", "\treturn result;", "}", "uniform vec3 sh[ 9 ]; // sh coefficients", "uniform float intensity; // light probe intensity", "varying vec3 vNormal;", "void main() {", "\tvec3 normal = normalize( vNormal );", "\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );", "\tvec3 irradiance = shGetIrradianceAt( worldNormal, sh );", "\tvec3 outgoingLight = RECIPROCAL_PI * irradiance * intensity;", "\toutgoingLight = linearToOutput( outgoingLight );", "\tgl_FragColor = vec4( outgoingLight, 1.0 );", "}"].join("\n")
      }),
      r = new Sc(1, 32, 16);
    Ji.call(this, r, i), this.onBeforeRender()
  }

  function Ru(e, t, n, i) {
    e = e || 10, t = t || 10, n = new ai(void 0 !== n ? n : 4473924), i = new ai(void 0 !== i ? i : 8947848);
    for (var r = t / 2, a = e / t, o = e / 2, s = [], c = [], l = 0, h = 0, u = -o; l <= t; l++, u += a) {
      s.push(-o, 0, u, o, 0, u), s.push(u, 0, -o, u, 0, o);
      var p = l === r ? n : i;
      p.toArray(c, h), h += 3, p.toArray(c, h), h += 3, p.toArray(c, h), h += 3, p.toArray(c, h), h += 3
    }
    var d = new Oi;
    d.setAttribute("position", new wi(s, 3)), d.setAttribute("color", new wi(c, 3));
    var m = new as({
      vertexColors: f
    });
    fs.call(this, d, m)
  }

  function Pu(e, t, n, i, r, a) {
    e = e || 10, t = t || 16, n = n || 8, i = i || 64, r = new ai(void 0 !== r ? r : 4473924), a = new ai(void 0 !== a ? a : 8947848);
    var o, s, c, l, h, u, p, d = [],
      m = [];
    for (l = 0; l <= t; l++) c = l / t * (2 * Math.PI), o = Math.sin(c) * e, s = Math.cos(c) * e, d.push(0, 0, 0), d.push(o, 0, s), p = 1 & l ? r : a, m.push(p.r, p.g, p.b), m.push(p.r, p.g, p.b);
    for (l = 0; l <= n; l++)
      for (p = 1 & l ? r : a, u = e - e / n * l, h = 0; h < i; h++) c = h / i * (2 * Math.PI), o = Math.sin(c) * u, s = Math.cos(c) * u, d.push(o, 0, s), m.push(p.r, p.g, p.b), c = (h + 1) / i * (2 * Math.PI), o = Math.sin(c) * u, s = Math.cos(c) * u, d.push(o, 0, s), m.push(p.r, p.g, p.b);
    var v = new Oi;
    v.setAttribute("position", new wi(d, 3)), v.setAttribute("color", new wi(m, 3));
    var g = new as({
      vertexColors: f
    });
    fs.call(this, v, g)
  }

  function Cu(e, t, n, i) {
    this.audio = e, this.range = t || 1, this.divisionsInnerAngle = n || 16, this.divisionsOuterAngle = i || 2;
    var r = new Oi,
      a = this.divisionsInnerAngle + 2 * this.divisionsOuterAngle,
      o = new Float32Array(3 * (3 * a + 3));
    r.setAttribute("position", new di(o, 3));
    var s = new as({
        color: 65280
      }),
      c = new as({
        color: 16776960
      });
    us.call(this, r, [c, s]), this.update()
  }
  Au.prototype = Object.create(mn.prototype), Au.prototype.constructor = Au, Au.prototype.dispose = function() {
    this.children[0].geometry.dispose(), this.children[0].material.dispose()
  }, Au.prototype.update = function() {
    var e = this.children[0];
    if (void 0 !== this.color) this.material.color.set(this.color);
    else {
      var t = e.geometry.getAttribute("color");
      Tu.copy(this.light.color), Eu.copy(this.light.groundColor);
      for (var n = 0, i = t.count; n < i; n++) {
        var r = n < i / 2 ? Tu : Eu;
        t.setXYZ(n, r.r, r.g, r.b)
      }
      t.needsUpdate = !0
    }
    e.lookAt(Su.setFromMatrixPosition(this.light.matrixWorld).negate())
  }, Lu.prototype = Object.create(Ji.prototype), Lu.prototype.constructor = Lu, Lu.prototype.dispose = function() {
    this.geometry.dispose(), this.material.dispose()
  }, Lu.prototype.onBeforeRender = function() {
    this.position.copy(this.lightProbe.position), this.scale.set(1, 1, 1).multiplyScalar(this.size), this.material.uniforms.intensity.value = this.lightProbe.intensity
  }, Ru.prototype = Object.assign(Object.create(fs.prototype), {
    constructor: Ru,
    copy: function(e) {
      return fs.prototype.copy.call(this, e), this.geometry.copy(e.geometry), this.material.copy(e.material), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    }
  }), Pu.prototype = Object.create(fs.prototype), Pu.prototype.constructor = Pu, Cu.prototype = Object.create(us.prototype), Cu.prototype.constructor = Cu, Cu.prototype.update = function() {
    var e, t, n = this.audio,
      i = this.range,
      r = this.divisionsInnerAngle,
      a = this.divisionsOuterAngle,
      o = Lt.degToRad(n.panner.coneInnerAngle),
      s = Lt.degToRad(n.panner.coneOuterAngle),
      c = o / 2,
      l = s / 2,
      h = 0,
      u = 0,
      p = this.geometry,
      d = p.attributes.position;

    function f(n, r, a, o) {
      var s = (r - n) / a;
      for (d.setXYZ(h, 0, 0, 0), u++, e = n; e < r; e += s) t = h + u, d.setXYZ(t, Math.sin(e) * i, 0, Math.cos(e) * i), d.setXYZ(t + 1, Math.sin(Math.min(e + s, r)) * i, 0, Math.cos(Math.min(e + s, r)) * i), d.setXYZ(t + 2, 0, 0, 0), u += 3;
      p.addGroup(h, u, o), h += u, u = 0
    }
    p.clearGroups(), f(-l, -c, a, 0), f(-c, c, r, 1), f(c, l, a, 0), d.needsUpdate = !0, o === s && (this.material[0].visible = !1)
  }, Cu.prototype.dispose = function() {
    this.geometry.dispose(), this.material[0].dispose(), this.material[1].dispose()
  };
  var Ou = new It,
    Iu = new It,
    Nu = new zt;

  function Du(e, t, n, i) {
    this.object = e, this.size = void 0 !== t ? t : 1;
    var r = void 0 !== n ? n : 16776960,
      a = void 0 !== i ? i : 1,
      o = 0,
      s = this.object.geometry;
    s && s.isGeometry ? o = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
    var c = new Oi,
      l = new wi(2 * o * 3, 3);
    c.setAttribute("position", l), fs.call(this, c, new as({
      color: r,
      linewidth: a
    })), this.matrixAutoUpdate = !1, this.update()
  }
  Du.prototype = Object.create(fs.prototype), Du.prototype.constructor = Du, Du.prototype.update = function() {
    this.object.updateMatrixWorld(!0), Nu.getNormalMatrix(this.object.matrixWorld);
    for (var e = this.object.matrixWorld, t = this.geometry.attributes.position, n = this.object.geometry, i = n.vertices, r = n.faces, a = 0, o = 0, s = r.length; o < s; o++) {
      var c = r[o],
        l = c.normal;
      Ou.copy(i[c.a]).add(i[c.b]).add(i[c.c]).divideScalar(3).applyMatrix4(e), Iu.copy(l).applyMatrix3(Nu).normalize().multiplyScalar(this.size).add(Ou), t.setXYZ(a, Ou.x, Ou.y, Ou.z), a += 1, t.setXYZ(a, Iu.x, Iu.y, Iu.z), a += 1
    }
    t.needsUpdate = !0
  };
  var zu = new It,
    Uu = new It,
    Fu = new It;

  function Bu(e, t, n) {
    mn.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, void 0 === t && (t = 1);
    var i = new Oi;
    i.setAttribute("position", new wi([-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0], 3));
    var r = new as({
      fog: !1
    });
    this.lightPlane = new us(i, r), this.add(this.lightPlane), (i = new Oi).setAttribute("position", new wi([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new us(i, r), this.add(this.targetLine), this.update()
  }
  Bu.prototype = Object.create(mn.prototype), Bu.prototype.constructor = Bu, Bu.prototype.dispose = function() {
    this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
  }, Bu.prototype.update = function() {
    zu.setFromMatrixPosition(this.light.matrixWorld), Uu.setFromMatrixPosition(this.light.target.matrixWorld), Fu.subVectors(Uu, zu), this.lightPlane.lookAt(Uu), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(Uu), this.targetLine.scale.z = Fu.length()
  };
  var Gu = new It,
    Hu = new ur;

  function Vu(e) {
    var t = new Oi,
      n = new as({
        color: 16777215,
        vertexColors: d
      }),
      i = [],
      r = [],
      a = {},
      o = new ai(16755200),
      s = new ai(16711680),
      c = new ai(43775),
      l = new ai(16777215),
      h = new ai(3355443);

    function u(e, t, n) {
      p(e, n), p(t, n)
    }

    function p(e, t) {
      i.push(0, 0, 0), r.push(t.r, t.g, t.b), void 0 === a[e] && (a[e] = []), a[e].push(i.length / 3 - 1)
    }
    u("n1", "n2", o), u("n2", "n4", o), u("n4", "n3", o), u("n3", "n1", o), u("f1", "f2", o), u("f2", "f4", o), u("f4", "f3", o), u("f3", "f1", o), u("n1", "f1", o), u("n2", "f2", o), u("n3", "f3", o), u("n4", "f4", o), u("p", "n1", s), u("p", "n2", s), u("p", "n3", s), u("p", "n4", s), u("u1", "u2", c), u("u2", "u3", c), u("u3", "u1", c), u("c", "t", l), u("p", "c", h), u("cn1", "cn2", h), u("cn3", "cn4", h), u("cf1", "cf2", h), u("cf3", "cf4", h), t.setAttribute("position", new wi(i, 3)), t.setAttribute("color", new wi(r, 3)), fs.call(this, t, n), this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update()
  }

  function ku(e, t, n, i, r, a, o) {
    Gu.set(r, a, o).unproject(i);
    var s = t[e];
    if (void 0 !== s)
      for (var c = n.getAttribute("position"), l = 0, h = s.length; l < h; l++) c.setXYZ(s[l], Gu.x, Gu.y, Gu.z)
  }
  Vu.prototype = Object.create(fs.prototype), Vu.prototype.constructor = Vu, Vu.prototype.update = function() {
    var e = this.geometry,
      t = this.pointMap;
    Hu.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), ku("c", t, e, Hu, 0, 0, -1), ku("t", t, e, Hu, 0, 0, 1), ku("n1", t, e, Hu, -1, -1, -1), ku("n2", t, e, Hu, 1, -1, -1), ku("n3", t, e, Hu, -1, 1, -1), ku("n4", t, e, Hu, 1, 1, -1), ku("f1", t, e, Hu, -1, -1, 1), ku("f2", t, e, Hu, 1, -1, 1), ku("f3", t, e, Hu, -1, 1, 1), ku("f4", t, e, Hu, 1, 1, 1), ku("u1", t, e, Hu, .7, 1.1, -1), ku("u2", t, e, Hu, -.7, 1.1, -1), ku("u3", t, e, Hu, 0, 2, -1), ku("cf1", t, e, Hu, -1, 0, 1), ku("cf2", t, e, Hu, 1, 0, 1), ku("cf3", t, e, Hu, 0, -1, 1), ku("cf4", t, e, Hu, 0, 1, 1), ku("cn1", t, e, Hu, -1, 0, -1), ku("cn2", t, e, Hu, 1, 0, -1), ku("cn3", t, e, Hu, 0, -1, -1), ku("cn4", t, e, Hu, 0, 1, -1), e.getAttribute("position").needsUpdate = !0
  };
  var ju = new Rn;

  function Wu(e, t) {
    this.object = e, void 0 === t && (t = 16776960);
    var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
      i = new Float32Array(24),
      r = new Oi;
    r.setIndex(new di(n, 1)), r.setAttribute("position", new di(i, 3)), fs.call(this, r, new as({
      color: t
    })), this.matrixAutoUpdate = !1, this.update()
  }

  function qu(e, t) {
    this.type = "Box3Helper", this.box = e, t = t || 16776960;
    var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
      i = new Oi;
    i.setIndex(new di(n, 1)), i.setAttribute("position", new wi([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), fs.call(this, i, new as({
      color: t
    })), this.geometry.computeBoundingSphere()
  }

  function Xu(e, t, n) {
    this.type = "PlaneHelper", this.plane = e, this.size = void 0 === t ? 1 : t;
    var i = void 0 !== n ? n : 16776960,
      r = new Oi;
    r.setAttribute("position", new wi([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), r.computeBoundingSphere(), us.call(this, r, new as({
      color: i
    }));
    var a = new Oi;
    a.setAttribute("position", new wi([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), a.computeBoundingSphere(), this.add(new Ji(a, new pi({
      color: i,
      opacity: .2,
      transparent: !0,
      depthWrite: !1
    })))
  }
  Wu.prototype = Object.create(fs.prototype), Wu.prototype.constructor = Wu, Wu.prototype.update = function(e) {
    if (void 0 !== e && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && ju.setFromObject(this.object), !ju.isEmpty()) {
      var t = ju.min,
        n = ju.max,
        i = this.geometry.attributes.position,
        r = i.array;
      r[0] = n.x, r[1] = n.y, r[2] = n.z, r[3] = t.x, r[4] = n.y, r[5] = n.z, r[6] = t.x, r[7] = t.y, r[8] = n.z, r[9] = n.x, r[10] = t.y, r[11] = n.z, r[12] = n.x, r[13] = n.y, r[14] = t.z, r[15] = t.x, r[16] = n.y, r[17] = t.z, r[18] = t.x, r[19] = t.y, r[20] = t.z, r[21] = n.x, r[22] = t.y, r[23] = t.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere()
    }
  }, Wu.prototype.setFromObject = function(e) {
    return this.object = e, this.update(), this
  }, Wu.prototype.copy = function(e) {
    return fs.prototype.copy.call(this, e), this.object = e.object, this
  }, Wu.prototype.clone = function() {
    return (new this.constructor).copy(this)
  }, qu.prototype = Object.create(fs.prototype), qu.prototype.constructor = qu, qu.prototype.updateMatrixWorld = function(e) {
    var t = this.box;
    t.isEmpty() || (t.getCenter(this.position), t.getSize(this.scale), this.scale.multiplyScalar(.5), mn.prototype.updateMatrixWorld.call(this, e))
  }, Xu.prototype = Object.create(us.prototype), Xu.prototype.constructor = Xu, Xu.prototype.updateMatrixWorld = function(e) {
    var t = -this.plane.constant;
    Math.abs(t) < 1e-8 && (t = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, t), this.children[0].material.side = t < 0 ? h : l, this.lookAt(this.plane.normal), mn.prototype.updateMatrixWorld.call(this, e)
  };
  var Yu, Zu, Ju = new It;

  function Ku(e, t, n, i, r, a) {
    mn.call(this), void 0 === e && (e = new It(0, 0, 1)), void 0 === t && (t = new It(0, 0, 0)), void 0 === n && (n = 1), void 0 === i && (i = 16776960), void 0 === r && (r = .2 * n), void 0 === a && (a = .2 * r), void 0 === Yu && ((Yu = new Oi).setAttribute("position", new wi([0, 0, 0, 0, 1, 0], 3)), (Zu = new Nc(0, .5, 1, 5, 1)).translate(0, -.5, 0)), this.position.copy(t), this.line = new us(Yu, new as({
      color: i
    })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new Ji(Zu, new pi({
      color: i
    })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(e), this.setLength(n, r, a)
  }

  function Qu(e) {
    var t = [0, 0, 0, e = e || 1, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e],
      n = new Oi;
    n.setAttribute("position", new wi(t, 3)), n.setAttribute("color", new wi([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3));
    var i = new as({
      vertexColors: f
    });
    fs.call(this, n, i)
  }
  Ku.prototype = Object.create(mn.prototype), Ku.prototype.constructor = Ku, Ku.prototype.setDirection = function(e) {
    if (e.y > .99999) this.quaternion.set(0, 0, 0, 1);
    else if (e.y < -.99999) this.quaternion.set(1, 0, 0, 0);
    else {
      Ju.set(e.z, 0, -e.x).normalize();
      var t = Math.acos(e.y);
      this.quaternion.setFromAxisAngle(Ju, t)
    }
  }, Ku.prototype.setLength = function(e, t, n) {
    void 0 === t && (t = .2 * e), void 0 === n && (n = .2 * t), this.line.scale.set(1, Math.max(1e-4, e - t), 1), this.line.updateMatrix(), this.cone.scale.set(n, t, n), this.cone.position.y = e, this.cone.updateMatrix()
  }, Ku.prototype.setColor = function(e) {
    this.line.material.color.set(e), this.cone.material.color.set(e)
  }, Ku.prototype.copy = function(e) {
    return mn.prototype.copy.call(this, e, !1), this.line.copy(e.line), this.cone.copy(e.cone), this
  }, Ku.prototype.clone = function() {
    return (new this.constructor).copy(this)
  }, Qu.prototype = Object.create(fs.prototype), Qu.prototype.constructor = Qu;

  function $u(e) {
    console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), Ol.call(this, e), this.type = "catmullrom"
  }
  Sl.create = function(e, t) {
    return console.log("THREE.Curve.create() has been deprecated"), e.prototype = Object.create(Sl.prototype), e.prototype.constructor = e, e.prototype.getPoint = t, e
  }, Object.assign(jl.prototype, {
    createPointsGeometry: function(e) {
      console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
      var t = this.getPoints(e);
      return this.createGeometry(t)
    },
    createSpacedPointsGeometry: function(e) {
      console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
      var t = this.getSpacedPoints(e);
      return this.createGeometry(t)
    },
    createGeometry: function(e) {
      console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
      for (var t = new ir, n = 0, i = e.length; n < i; n++) {
        var r = e[n];
        t.vertices.push(new It(r.x, r.y, r.z || 0))
      }
      return t
    }
  }), Object.assign(Wl.prototype, {
    fromPoints: function(e) {
      return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(e)
    }
  }), Object.create(Ol.prototype), Object.create(Ol.prototype), $u.prototype = Object.create(Ol.prototype), Object.assign($u.prototype, {
    initFromArray: function() {
      console.error("THREE.Spline: .initFromArray() has been removed.")
    },
    getControlPointsArray: function() {
      console.error("THREE.Spline: .getControlPointsArray() has been removed.")
    },
    reparametrizeByArcLength: function() {
      console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
    }
  }), Ru.prototype.setColors = function() {
    console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
  }, wu.prototype.update = function() {
    console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
  }, Object.assign(ml.prototype, {
    extractUrlBase: function(e) {
      return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), oh.extractUrlBase(e)
    }
  }), ml.Handlers = {
    add: function() {
      console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")
    },
    get: function() {
      console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")
    }
  }, Object.assign(uh.prototype, {
    setTexturePath: function(e) {
      return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(e)
    }
  }), Object.assign(ou.prototype, {
    center: function(e) {
      return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(e)
    },
    empty: function() {
      return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
    },
    isIntersectionBox: function(e) {
      return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
    },
    size: function(e) {
      return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(e)
    }
  }), Object.assign(Rn.prototype, {
    center: function(e) {
      return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(e)
    },
    empty: function() {
      return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
    },
    isIntersectionBox: function(e) {
      return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
    },
    isIntersectionSphere: function(e) {
      return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e)
    },
    size: function(e) {
      return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(e)
    }
  }), lu.prototype.center = function(e) {
    return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(e)
  }, Object.assign(Lt, {
    random16: function() {
      return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random()
    },
    nearestPowerOfTwo: function(e) {
      return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), Lt.floorPowerOfTwo(e)
    },
    nextPowerOfTwo: function(e) {
      return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), Lt.ceilPowerOfTwo(e)
    }
  }), Object.assign(zt.prototype, {
    flattenToArrayOffset: function(e, t) {
      return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t)
    },
    multiplyVector3: function(e) {
      return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this)
    },
    multiplyVector3Array: function() {
      console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
    },
    applyToBuffer: function(e) {
      return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(e)
    },
    applyToVector3Array: function() {
      console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
    }
  }), Object.assign(Jt.prototype, {
    extractPosition: function(e) {
      return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e)
    },
    flattenToArrayOffset: function(e, t) {
      return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t)
    },
    getPosition: function() {
      return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), (new It).setFromMatrixColumn(this, 3)
    },
    setRotationFromQuaternion: function(e) {
      return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(e)
    },
    multiplyToArray: function() {
      console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
    },
    multiplyVector3: function(e) {
      return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
    },
    multiplyVector4: function(e) {
      return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
    },
    multiplyVector3Array: function() {
      console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
    },
    rotateAxis: function(e) {
      console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e.transformDirection(this)
    },
    crossVector: function(e) {
      return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
    },
    translate: function() {
      console.error("THREE.Matrix4: .translate() has been removed.")
    },
    rotateX: function() {
      console.error("THREE.Matrix4: .rotateX() has been removed.")
    },
    rotateY: function() {
      console.error("THREE.Matrix4: .rotateY() has been removed.")
    },
    rotateZ: function() {
      console.error("THREE.Matrix4: .rotateZ() has been removed.")
    },
    rotateByAxis: function() {
      console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
    },
    applyToBuffer: function(e) {
      return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(e)
    },
    applyToVector3Array: function() {
      console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
    },
    makeFrustum: function(e, t, n, i, r, a) {
      return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(e, t, i, n, r, a)
    }
  }), jn.prototype.isIntersectionLine = function(e) {
    return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(e)
  }, Pt.prototype.multiplyVector3 = function(e) {
    return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this)
  }, Object.assign(Gn.prototype, {
    isIntersectionBox: function(e) {
      return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
    },
    isIntersectionPlane: function(e) {
      return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(e)
    },
    isIntersectionSphere: function(e) {
      return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e)
    }
  }), Object.assign(ti.prototype, {
    area: function() {
      return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea()
    },
    barycoordFromPoint: function(e, t) {
      return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(e, t)
    },
    midpoint: function(e) {
      return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(e)
    },
    normal: function(e) {
      return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(e)
    },
    plane: function(e) {
      return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(e)
    }
  }), Object.assign(ti, {
    barycoordFromPoint: function(e, t, n, i, r) {
      return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), ti.getBarycoord(e, t, n, i, r)
    },
    normal: function(e, t, n, i) {
      return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), ti.getNormal(e, t, n, i)
    }
  }), Object.assign(ql.prototype, {
    extractAllPoints: function(e) {
      return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(e)
    },
    extrude: function(e) {
      return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new gc(this, e)
    },
    makeGeometry: function(e) {
      return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new Rc(this, e)
    }
  }), Object.assign(Rt.prototype, {
    fromAttribute: function(e, t, n) {
      return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n)
    },
    distanceToManhattan: function(e) {
      return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e)
    },
    lengthManhattan: function() {
      return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
    }
  }), Object.assign(It.prototype, {
    setEulerFromRotationMatrix: function() {
      console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
    },
    setEulerFromQuaternion: function() {
      console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
    },
    getPositionFromMatrix: function(e) {
      return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(e)
    },
    getScaleFromMatrix: function(e) {
      return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(e)
    },
    getColumnFromMatrix: function(e, t) {
      return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(t, e)
    },
    applyProjection: function(e) {
      return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(e)
    },
    fromAttribute: function(e, t, n) {
      return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n)
    },
    distanceToManhattan: function(e) {
      return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e)
    },
    lengthManhattan: function() {
      return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
    }
  }), Object.assign(Gt.prototype, {
    fromAttribute: function(e, t, n) {
      return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n)
    },
    lengthManhattan: function() {
      return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
    }
  }), Object.assign(ir.prototype, {
    computeTangents: function() {
      console.error("THREE.Geometry: .computeTangents() has been removed.")
    },
    computeLineDistances: function() {
      console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")
    }
  }), Object.assign(mn.prototype, {
    getChildByName: function(e) {
      return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e)
    },
    renderDepth: function() {
      console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
    },
    translate: function(e, t) {
      return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(t, e)
    },
    getWorldRotation: function() {
      console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
    }
  }), Object.defineProperties(mn.prototype, {
    eulerOrder: {
      get: function() {
        return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
      },
      set: function(e) {
        console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = e
      }
    },
    useQuaternion: {
      get: function() {
        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
      },
      set: function() {
        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
      }
    }
  }), Object.defineProperties(Qo.prototype, {
    objects: {
      get: function() {
        return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
      }
    }
  }), Object.defineProperty(ns.prototype, "useVertexTexture", {
    get: function() {
      console.warn("THREE.Skeleton: useVertexTexture has been removed.")
    },
    set: function() {
      console.warn("THREE.Skeleton: useVertexTexture has been removed.")
    }
  }), $o.prototype.initBones = function() {
    console.error("THREE.SkinnedMesh: initBones() has been removed.")
  }, Object.defineProperty(Sl.prototype, "__arcLengthDivisions", {
    get: function() {
      return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions
    },
    set: function(e) {
      console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = e
    }
  }), pr.prototype.setLens = function(e, t) {
    console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== t && (this.filmGauge = t), this.setFocalLength(e)
  }, Object.defineProperties(Xl.prototype, {
    onlyShadow: {
      set: function() {
        console.warn("THREE.Light: .onlyShadow has been removed.")
      }
    },
    shadowCameraFov: {
      set: function(e) {
        console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = e
      }
    },
    shadowCameraLeft: {
      set: function(e) {
        console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = e
      }
    },
    shadowCameraRight: {
      set: function(e) {
        console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = e
      }
    },
    shadowCameraTop: {
      set: function(e) {
        console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = e
      }
    },
    shadowCameraBottom: {
      set: function(e) {
        console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = e
      }
    },
    shadowCameraNear: {
      set: function(e) {
        console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = e
      }
    },
    shadowCameraFar: {
      set: function(e) {
        console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = e
      }
    },
    shadowCameraVisible: {
      set: function() {
        console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
      }
    },
    shadowBias: {
      set: function(e) {
        console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = e
      }
    },
    shadowDarkness: {
      set: function() {
        console.warn("THREE.Light: .shadowDarkness has been removed.")
      }
    },
    shadowMapWidth: {
      set: function(e) {
        console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = e
      }
    },
    shadowMapHeight: {
      set: function(e) {
        console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = e
      }
    }
  }), Object.defineProperties(di.prototype, {
    length: {
      get: function() {
        return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
      }
    },
    dynamic: {
      get: function() {
        return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), 35048 === this.usage
      },
      set: function() {
        console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(35048)
      }
    }
  }), Object.assign(di.prototype, {
    setDynamic: function(e) {
      return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === e ? 35048 : St), this
    },
    copyIndicesArray: function() {
      console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
    },
    setArray: function() {
      console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
    }
  }), Object.assign(Oi.prototype, {
    addIndex: function(e) {
      console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(e)
    },
    addAttribute: function(e, t) {
      return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), t && t.isBufferAttribute || t && t.isInterleavedBufferAttribute ? "index" === e ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(t), this) : this.setAttribute(e, t) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(e, new di(arguments[1], arguments[2])))
    },
    addDrawCall: function(e, t, n) {
      void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(e, t)
    },
    clearDrawCalls: function() {
      console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
    },
    computeTangents: function() {
      console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
    },
    computeOffsets: function() {
      console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
    },
    removeAttribute: function(e) {
      return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(e)
    }
  }), Object.defineProperties(Oi.prototype, {
    drawcalls: {
      get: function() {
        return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
      }
    },
    offsets: {
      get: function() {
        return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
      }
    }
  }), Object.defineProperties(Io.prototype, {
    dynamic: {
      get: function() {
        return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), 35048 === this.usage
      },
      set: function(e) {
        console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.setUsage(e)
      }
    }
  }), Object.assign(Io.prototype, {
    setDynamic: function(e) {
      return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === e ? 35048 : St), this
    },
    setArray: function() {
      console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
    }
  }), Object.assign(yc.prototype, {
    getArrays: function() {
      console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")
    },
    addShapeList: function() {
      console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")
    },
    addShape: function() {
      console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")
    }
  }), Object.defineProperties(tu.prototype, {
    dynamic: {
      set: function() {
        console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
      }
    },
    onUpdate: {
      value: function() {
        return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this
      }
    }
  }), Object.defineProperties(ui.prototype, {
    wrapAround: {
      get: function() {
        console.warn("THREE.Material: .wrapAround has been removed.")
      },
      set: function() {
        console.warn("THREE.Material: .wrapAround has been removed.")
      }
    },
    overdraw: {
      get: function() {
        console.warn("THREE.Material: .overdraw has been removed.")
      },
      set: function() {
        console.warn("THREE.Material: .overdraw has been removed.")
      }
    },
    wrapRGB: {
      get: function() {
        return console.warn("THREE.Material: .wrapRGB has been removed."), new ai
      }
    },
    shading: {
      get: function() {
        console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
      },
      set: function(e) {
        console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === e
      }
    },
    stencilMask: {
      get: function() {
        return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask
      },
      set: function(e) {
        console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = e
      }
    }
  }), Object.defineProperties(jc.prototype, {
    metal: {
      get: function() {
        return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1
      },
      set: function() {
        console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
      }
    }
  }), Object.defineProperties(hr.prototype, {
    derivatives: {
      get: function() {
        return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
      },
      set: function(e) {
        console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = e
      }
    }
  }), Object.assign(Po.prototype, {
    clearTarget: function(e, t, n, i) {
      console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(e), this.clear(t, n, i)
    },
    animate: function(e) {
      console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(e)
    },
    getCurrentRenderTarget: function() {
      return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
    },
    getMaxAnisotropy: function() {
      return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy()
    },
    getPrecision: function() {
      return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
    },
    resetGLState: function() {
      return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset()
    },
    supportsFloatTextures: function() {
      return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
    },
    supportsHalfFloatTextures: function() {
      return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
    },
    supportsStandardDerivatives: function() {
      return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
    },
    supportsCompressedTextureS3TC: function() {
      return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
    },
    supportsCompressedTexturePVRTC: function() {
      return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
    },
    supportsBlendMinMax: function() {
      return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
    },
    supportsVertexTextures: function() {
      return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
    },
    supportsInstancedArrays: function() {
      return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
    },
    enableScissorTest: function(e) {
      console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(e)
    },
    initMaterial: function() {
      console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
    },
    addPrePlugin: function() {
      console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
    },
    addPostPlugin: function() {
      console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
    },
    updateShadowMap: function() {
      console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
    },
    setFaceCulling: function() {
      console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
    },
    allocTextureUnit: function() {
      console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")
    },
    setTexture: function() {
      console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")
    },
    setTexture2D: function() {
      console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")
    },
    setTextureCube: function() {
      console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")
    },
    getActiveMipMapLevel: function() {
      return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel()
    }
  }), Object.defineProperties(Po.prototype, {
    shadowMapEnabled: {
      get: function() {
        return this.shadowMap.enabled
      },
      set: function(e) {
        console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = e
      }
    },
    shadowMapType: {
      get: function() {
        return this.shadowMap.type
      },
      set: function(e) {
        console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = e
      }
    },
    shadowMapCullFace: {
      get: function() {
        console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
      },
      set: function() {
        console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
      }
    },
    context: {
      get: function() {
        return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext()
      }
    }
  }), Object.defineProperties(vo.prototype, {
    cullFace: {
      get: function() {
        console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
      },
      set: function() {
        console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
      }
    },
    renderReverseSided: {
      get: function() {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
      },
      set: function() {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
      }
    },
    renderSingleSided: {
      get: function() {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
      },
      set: function() {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
      }
    }
  }), Object.defineProperties(vr.prototype, {
    activeCubeFace: {
      set: function() {
        console.warn("THREE.WebGLRenderTargetCube: .activeCubeFace has been removed. It is now the second parameter of WebGLRenderer.setRenderTarget().")
      }
    },
    activeMipMapLevel: {
      set: function() {
        console.warn("THREE.WebGLRenderTargetCube: .activeMipMapLevel has been removed. It is now the third parameter of WebGLRenderer.setRenderTarget().")
      }
    }
  }), Object.defineProperties(Ht.prototype, {
    wrapS: {
      get: function() {
        return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
      },
      set: function(e) {
        console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = e
      }
    },
    wrapT: {
      get: function() {
        return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
      },
      set: function(e) {
        console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = e
      }
    },
    magFilter: {
      get: function() {
        return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
      },
      set: function(e) {
        console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = e
      }
    },
    minFilter: {
      get: function() {
        return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
      },
      set: function(e) {
        console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = e
      }
    },
    anisotropy: {
      get: function() {
        return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
      },
      set: function(e) {
        console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = e
      }
    },
    offset: {
      get: function() {
        return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
      },
      set: function(e) {
        console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = e
      }
    },
    repeat: {
      get: function() {
        return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
      },
      set: function(e) {
        console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = e
      }
    },
    format: {
      get: function() {
        return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
      },
      set: function(e) {
        console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = e
      }
    },
    type: {
      get: function() {
        return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
      },
      set: function(e) {
        console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = e
      }
    },
    generateMipmaps: {
      get: function() {
        return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
      },
      set: function(e) {
        console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = e
      }
    }
  }), Object.defineProperties(Lo.prototype, {
    standing: {
      set: function() {
        console.warn("THREE.WebVRManager: .standing has been removed.")
      }
    },
    userHeight: {
      set: function() {
        console.warn("THREE.WebVRManager: .userHeight has been removed.")
      }
    }
  }), Object.defineProperties(Dh.prototype, {
    load: {
      value: function(e) {
        console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
        var t = this;
        return (new _h).load(e, (function(e) {
          t.setBuffer(e)
        })), this
      }
    },
    startTime: {
      set: function() {
        console.warn("THREE.Audio: .startTime is now .play( delay ).")
      }
    }
  }), Hh.prototype.getData = function() {
    return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData()
  }, mr.prototype.updateCubeMap = function(e, t) {
    return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(e, t)
  };
  Ut.crossOrigin = void 0, Ut.loadTexture = function(e, t, n, i) {
    console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
    var r = new Ml;
    r.setCrossOrigin(this.crossOrigin);
    var a = r.load(e, n, void 0, i);
    return t && (a.mapping = t), a
  }, Ut.loadTextureCube = function(e, t, n, i) {
    console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
    var r = new _l;
    r.setCrossOrigin(this.crossOrigin);
    var a = r.load(e, n, void 0, i);
    return t && (a.mapping = t), a
  }, Ut.loadCompressedTexture = function() {
    console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
  }, Ut.loadCompressedTextureCube = function() {
    console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
  };
  "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
    detail: {
      revision: "110"
    }
  }));
  var ep = function() {
    function e(e) {
      ml.call(this, e), this.dracoLoader = null, this.ddsLoader = null
    }

    function t() {
      var e = {};
      return {
        get: function(t) {
          return e[t]
        },
        add: function(t, n) {
          e[t] = n
        },
        remove: function(t) {
          delete e[t]
        },
        removeAll: function() {
          e = {}
        }
      }
    }
    e.prototype = Object.assign(Object.create(ml.prototype), {
      constructor: e,
      load: function(e, t, n, i) {
        var r, a = this;
        r = "" !== this.resourcePath ? this.resourcePath : "" !== this.path ? this.path : oh.extractUrlBase(e), a.manager.itemStart(e);
        var o = function(t) {
            i ? i(t) : console.error(t), a.manager.itemError(e), a.manager.itemEnd(e)
          },
          s = new gl(a.manager);
        s.setPath(this.path), s.setResponseType("arraybuffer"), "use-credentials" === a.crossOrigin && s.setWithCredentials(!0), s.load(e, (function(n) {
          try {
            a.parse(n, r, (function(n) {
              t(n), a.manager.itemEnd(e)
            }), o)
          } catch (e) {
            o(e)
          }
        }), n, o)
      },
      setDRACOLoader: function(e) {
        return this.dracoLoader = e, this
      },
      setDDSLoader: function(e) {
        return this.ddsLoader = e, this
      },
      parse: function(e, t, s, c) {
        var l, u = {};
        if ("string" == typeof e) l = e;
        else if (oh.decodeText(new Uint8Array(e, 0, 4)) === o) {
          try {
            u[n.KHR_BINARY_GLTF] = new h(e)
          } catch (e) {
            return void(c && c(e))
          }
          l = u[n.KHR_BINARY_GLTF].content
        } else l = oh.decodeText(new Uint8Array(e));
        var f = JSON.parse(l);
        if (void 0 === f.asset || f.asset.version[0] < 2) c && c(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported. Use LegacyGLTFLoader instead."));
        else {
          if (f.extensionsUsed)
            for (var v = 0; v < f.extensionsUsed.length; ++v) {
              var g = f.extensionsUsed[v],
                y = f.extensionsRequired || [];
              switch (g) {
                case n.KHR_LIGHTS_PUNCTUAL:
                  u[g] = new r(f);
                  break;
                case n.KHR_MATERIALS_UNLIT:
                  u[g] = new a;
                  break;
                case n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                  u[g] = new m;
                  break;
                case n.KHR_DRACO_MESH_COMPRESSION:
                  u[g] = new p(f, this.dracoLoader);
                  break;
                case n.MSFT_TEXTURE_DDS:
                  u[g] = new i(this.ddsLoader);
                  break;
                case n.KHR_TEXTURE_TRANSFORM:
                  u[g] = new d;
                  break;
                default:
                  y.indexOf(g) >= 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + g + '".')
              }
            }
          new V(f, u, {
            path: t || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            manager: this.manager
          }).parse(s, c)
        }
      }
    });
    var n = {
      KHR_BINARY_GLTF: "KHR_binary_glTF",
      KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
      KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
      KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
      KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
      KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
      MSFT_TEXTURE_DDS: "MSFT_texture_dds"
    };

    function i(e) {
      if (!e) throw new Error("THREE.GLTFLoader: Attempting to load .dds texture without importing DDSLoader");
      this.name = n.MSFT_TEXTURE_DDS, this.ddsLoader = e
    }

    function r(e) {
      this.name = n.KHR_LIGHTS_PUNCTUAL;
      var t = e.extensions && e.extensions[n.KHR_LIGHTS_PUNCTUAL] || {};
      this.lightDefs = t.lights || []
    }

    function a() {
      this.name = n.KHR_MATERIALS_UNLIT
    }
    r.prototype.loadLight = function(e) {
      var t, n = this.lightDefs[e],
        i = new ai(16777215);
      void 0 !== n.color && i.fromArray(n.color);
      var r = void 0 !== n.range ? n.range : 0;
      switch (n.type) {
        case "directional":
          (t = new nh(i)).target.position.set(0, 0, -1), t.add(t.target);
          break;
        case "point":
          (t = new $l(i)).distance = r;
          break;
        case "spot":
          (t = new Kl(i)).distance = r, n.spot = n.spot || {}, n.spot.innerConeAngle = void 0 !== n.spot.innerConeAngle ? n.spot.innerConeAngle : 0, n.spot.outerConeAngle = void 0 !== n.spot.outerConeAngle ? n.spot.outerConeAngle : Math.PI / 4, t.angle = n.spot.outerConeAngle, t.penumbra = 1 - n.spot.innerConeAngle / n.spot.outerConeAngle, t.target.position.set(0, 0, -1), t.add(t.target);
          break;
        default:
          throw new Error('THREE.GLTFLoader: Unexpected light type, "' + n.type + '".')
      }
      return t.position.set(0, 0, 0), t.decay = 2, void 0 !== n.intensity && (t.intensity = n.intensity), t.name = n.name || "light_" + e, Promise.resolve(t)
    }, a.prototype.getMaterialType = function() {
      return pi
    }, a.prototype.extendParams = function(e, t, n) {
      var i = [];
      e.color = new ai(1, 1, 1), e.opacity = 1;
      var r = t.pbrMetallicRoughness;
      if (r) {
        if (Array.isArray(r.baseColorFactor)) {
          var a = r.baseColorFactor;
          e.color.fromArray(a), e.opacity = a[3]
        }
        void 0 !== r.baseColorTexture && i.push(n.assignTexture(e, "map", r.baseColorTexture))
      }
      return Promise.all(i)
    };
    var o = "glTF",
      s = 12,
      c = {
        JSON: 1313821514,
        BIN: 5130562
      };

    function h(e) {
      this.name = n.KHR_BINARY_GLTF, this.content = null, this.body = null;
      var t = new DataView(e, 0, s);
      if (this.header = {
          magic: oh.decodeText(new Uint8Array(e.slice(0, 4))),
          version: t.getUint32(4, !0),
          length: t.getUint32(8, !0)
        }, this.header.magic !== o) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
      if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected. Use LegacyGLTFLoader instead.");
      for (var i = new DataView(e, s), r = 0; r < i.byteLength;) {
        var a = i.getUint32(r, !0);
        r += 4;
        var l = i.getUint32(r, !0);
        if (r += 4, l === c.JSON) {
          var h = new Uint8Array(e, s + r, a);
          this.content = oh.decodeText(h)
        } else if (l === c.BIN) {
          var u = s + r;
          this.body = e.slice(u, u + a)
        }
        r += a
      }
      if (null === this.content) throw new Error("THREE.GLTFLoader: JSON content not found.")
    }

    function p(e, t) {
      if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
      this.name = n.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t
    }

    function d() {
      this.name = n.KHR_TEXTURE_TRANSFORM
    }

    function m() {
      return {
        name: n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,
        specularGlossinessParams: ["color", "map", "lightMap", "lightMapIntensity", "aoMap", "aoMapIntensity", "emissive", "emissiveIntensity", "emissiveMap", "bumpMap", "bumpScale", "normalMap", "displacementMap", "displacementScale", "displacementBias", "specularMap", "specular", "glossinessMap", "glossiness", "alphaMap", "envMap", "envMapIntensity", "refractionRatio"],
        getMaterialType: function() {
          return hr
        },
        extendParams: function(e, t, n) {
          var i = t.extensions[this.name],
            r = Mr.standard,
            a = sr.clone(r.uniforms),
            o = ["#ifdef USE_SPECULARMAP", "\tuniform sampler2D specularMap;", "#endif"].join("\n"),
            s = ["#ifdef USE_GLOSSINESSMAP", "\tuniform sampler2D glossinessMap;", "#endif"].join("\n"),
            c = ["vec3 specularFactor = specular;", "#ifdef USE_SPECULARMAP", "\tvec4 texelSpecular = texture2D( specularMap, vUv );", "\ttexelSpecular = sRGBToLinear( texelSpecular );", "\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tspecularFactor *= texelSpecular.rgb;", "#endif"].join("\n"),
            l = ["float glossinessFactor = glossiness;", "#ifdef USE_GLOSSINESSMAP", "\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );", "\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tglossinessFactor *= texelGlossiness.a;", "#endif"].join("\n"),
            h = ["PhysicalMaterial material;", "material.diffuseColor = diffuseColor.rgb;", "material.specularRoughness = clamp( 1.0 - glossinessFactor, 0.04, 1.0 );", "material.specularColor = specularFactor.rgb;"].join("\n"),
            u = r.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", o).replace("#include <metalnessmap_pars_fragment>", s).replace("#include <roughnessmap_fragment>", c).replace("#include <metalnessmap_fragment>", l).replace("#include <lights_physical_fragment>", h);
          delete a.roughness, delete a.metalness, delete a.roughnessMap, delete a.metalnessMap, a.specular = {
            value: (new ai).setHex(1118481)
          }, a.glossiness = {
            value: .5
          }, a.specularMap = {
            value: null
          }, a.glossinessMap = {
            value: null
          }, e.vertexShader = r.vertexShader, e.fragmentShader = u, e.uniforms = a, e.defines = {
            STANDARD: ""
          }, e.color = new ai(1, 1, 1), e.opacity = 1;
          var p = [];
          if (Array.isArray(i.diffuseFactor)) {
            var d = i.diffuseFactor;
            e.color.fromArray(d), e.opacity = d[3]
          }
          if (void 0 !== i.diffuseTexture && p.push(n.assignTexture(e, "map", i.diffuseTexture)), e.emissive = new ai(0, 0, 0), e.glossiness = void 0 !== i.glossinessFactor ? i.glossinessFactor : 1, e.specular = new ai(1, 1, 1), Array.isArray(i.specularFactor) && e.specular.fromArray(i.specularFactor), void 0 !== i.specularGlossinessTexture) {
            var f = i.specularGlossinessTexture;
            p.push(n.assignTexture(e, "glossinessMap", f)), p.push(n.assignTexture(e, "specularMap", f))
          }
          return Promise.all(p)
        },
        createMaterial: function(e) {
          var t = new hr({
            defines: e.defines,
            vertexShader: e.vertexShader,
            fragmentShader: e.fragmentShader,
            uniforms: e.uniforms,
            fog: !0,
            lights: !0,
            opacity: e.opacity,
            transparent: e.transparent
          });
          return t.isGLTFSpecularGlossinessMaterial = !0, t.color = e.color, t.map = void 0 === e.map ? null : e.map, t.lightMap = null, t.lightMapIntensity = 1, t.aoMap = void 0 === e.aoMap ? null : e.aoMap, t.aoMapIntensity = 1, t.emissive = e.emissive, t.emissiveIntensity = 1, t.emissiveMap = void 0 === e.emissiveMap ? null : e.emissiveMap, t.bumpMap = void 0 === e.bumpMap ? null : e.bumpMap, t.bumpScale = 1, t.normalMap = void 0 === e.normalMap ? null : e.normalMap, e.normalScale && (t.normalScale = e.normalScale), t.displacementMap = null, t.displacementScale = 1, t.displacementBias = 0, t.specularMap = void 0 === e.specularMap ? null : e.specularMap, t.specular = e.specular, t.glossinessMap = void 0 === e.glossinessMap ? null : e.glossinessMap, t.glossiness = e.glossiness, t.alphaMap = null, t.envMap = void 0 === e.envMap ? null : e.envMap, t.envMapIntensity = 1, t.refractionRatio = .98, t.extensions.derivatives = !0, t
        },
        cloneMaterial: function(e) {
          var t = e.clone();
          t.isGLTFSpecularGlossinessMaterial = !0;
          for (var n = this.specularGlossinessParams, i = 0, r = n.length; i < r; i++) {
            var a = e[n[i]];
            t[n[i]] = a && a.isColor ? a.clone() : a
          }
          return t
        },
        refreshUniforms: function(e, t, n, i, r) {
          if (!0 === r.isGLTFSpecularGlossinessMaterial) {
            var a, o = r.uniforms,
              s = r.defines;
            o.opacity.value = r.opacity, o.diffuse.value.copy(r.color), o.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), o.map.value = r.map, o.specularMap.value = r.specularMap, o.alphaMap.value = r.alphaMap, o.lightMap.value = r.lightMap, o.lightMapIntensity.value = r.lightMapIntensity, o.aoMap.value = r.aoMap, o.aoMapIntensity.value = r.aoMapIntensity, r.map ? a = r.map : r.specularMap ? a = r.specularMap : r.displacementMap ? a = r.displacementMap : r.normalMap ? a = r.normalMap : r.bumpMap ? a = r.bumpMap : r.glossinessMap ? a = r.glossinessMap : r.alphaMap ? a = r.alphaMap : r.emissiveMap && (a = r.emissiveMap), void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture), !0 === a.matrixAutoUpdate && a.updateMatrix(), o.uvTransform.value.copy(a.matrix)), r.envMap && (o.envMap.value = r.envMap, o.envMapIntensity.value = r.envMapIntensity, o.flipEnvMap.value = r.envMap.isCubeTexture ? -1 : 1, o.reflectivity.value = r.reflectivity, o.refractionRatio.value = r.refractionRatio, o.maxMipLevel.value = e.properties.get(r.envMap).__maxMipLevel), o.specular.value.copy(r.specular), o.glossiness.value = r.glossiness, o.glossinessMap.value = r.glossinessMap, o.emissiveMap.value = r.emissiveMap, o.bumpMap.value = r.bumpMap, o.normalMap.value = r.normalMap, o.displacementMap.value = r.displacementMap, o.displacementScale.value = r.displacementScale, o.displacementBias.value = r.displacementBias, null !== o.glossinessMap.value && void 0 === s.USE_GLOSSINESSMAP && (s.USE_GLOSSINESSMAP = "", s.USE_ROUGHNESSMAP = ""), null === o.glossinessMap.value && void 0 !== s.USE_GLOSSINESSMAP && (delete s.USE_GLOSSINESSMAP, delete s.USE_ROUGHNESSMAP)
          }
        }
      }
    }

    function v(e, t, n, i) {
      Qc.call(this, e, t, n, i)
    }
    p.prototype.decodePrimitive = function(e, t) {
      var n = this.json,
        i = this.dracoLoader,
        r = e.extensions[this.name].bufferView,
        a = e.extensions[this.name].attributes,
        o = {},
        s = {},
        c = {};
      for (var l in a) {
        var h = R[l] || l.toLowerCase();
        o[h] = a[l]
      }
      for (l in e.attributes) {
        h = R[l] || l.toLowerCase();
        if (void 0 !== a[l]) {
          var u = n.accessors[e.attributes[l]],
            p = T[u.componentType];
          c[h] = p, s[h] = !0 === u.normalized
        }
      }
      return t.getDependency("bufferView", r).then((function(e) {
        return new Promise((function(t) {
          i.decodeDracoFile(e, (function(e) {
            for (var n in e.attributes) {
              var i = e.attributes[n],
                r = s[n];
              void 0 !== r && (i.normalized = r)
            }
            t(e)
          }), o, c)
        }))
      }))
    }, d.prototype.extendTexture = function(e, t) {
      return e = e.clone(), void 0 !== t.offset && e.offset.fromArray(t.offset), void 0 !== t.rotation && (e.rotation = t.rotation), void 0 !== t.scale && e.repeat.fromArray(t.scale), void 0 !== t.texCoord && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), e.needsUpdate = !0, e
    }, v.prototype = Object.create(Qc.prototype), v.prototype.constructor = v, v.prototype.copySampleValue_ = function(e) {
      for (var t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i * 3 + i, a = 0; a !== i; a++) t[a] = n[r + a];
      return t
    }, v.prototype.beforeStart_ = v.prototype.copySampleValue_, v.prototype.afterEnd_ = v.prototype.copySampleValue_, v.prototype.interpolate_ = function(e, t, n, i) {
      for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = 2 * o, c = 3 * o, l = i - t, h = (n - t) / l, u = h * h, p = u * h, d = e * c, f = d - c, m = -2 * p + 3 * u, v = p - u, g = 1 - m, y = v - u + h, x = 0; x !== o; x++) {
        var b = a[f + x + o],
          w = a[f + x + s] * l,
          _ = a[d + x + o],
          M = a[d + x] * l;
        r[x] = g * b + y * w + m * _ + v * M
      }
      return r
    };
    var g, y = 0,
      x = 1,
      b = 2,
      w = 3,
      _ = 4,
      M = 5,
      S = 6,
      T = {
        5120: Int8Array,
        5121: Uint8Array,
        5122: Int16Array,
        5123: Uint16Array,
        5125: Uint32Array,
        5126: Float32Array
      },
      E = {
        9728: he,
        9729: de,
        9984: ue,
        9985: fe,
        9986: pe,
        9987: me
      },
      A = {
        33071: ce,
        33648: le,
        10497: se
      },
      L = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      R = {
        POSITION: "position",
        NORMAL: "normal",
        TANGENT: "tangent",
        TEXCOORD_0: "uv",
        TEXCOORD_1: "uv2",
        COLOR_0: "color",
        WEIGHTS_0: "skinWeight",
        JOINTS_0: "skinIndex"
      },
      P = {
        scale: "scale",
        translation: "position",
        rotation: "quaternion",
        weights: "morphTargetInfluences"
      },
      C = {
        CUBICSPLINE: void 0,
        LINEAR: 2301,
        STEP: 2300
      },
      O = "OPAQUE",
      I = "MASK",
      N = "BLEND",
      D = {
        "image/png": Pe,
        "image/jpeg": Re
      };

    function z(e, t) {
      return "string" != typeof e || "" === e ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) ? e : /^data:.*,.*$/i.test(e) ? e : /^blob:.*$/i.test(e) ? e : t + e)
    }

    function U(e, t, n) {
      for (var i in n.extensions) void 0 === e[i] && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[i] = n.extensions[i])
    }

    function F(e, t) {
      void 0 !== t.extras && ("object" == typeof t.extras ? Object.assign(e.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras))
    }

    function B(e, t) {
      if (e.updateMorphTargets(), void 0 !== t.weights)
        for (var n = 0, i = t.weights.length; n < i; n++) e.morphTargetInfluences[n] = t.weights[n];
      if (t.extras && Array.isArray(t.extras.targetNames)) {
        var r = t.extras.targetNames;
        if (e.morphTargetInfluences.length === r.length) {
          e.morphTargetDictionary = {};
          for (n = 0, i = r.length; n < i; n++) e.morphTargetDictionary[r[n]] = n
        } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
      }
    }

    function G(e) {
      for (var t = "", n = Object.keys(e).sort(), i = 0, r = n.length; i < r; i++) t += n[i] + ":" + e[n[i]] + ";";
      return t
    }

    function H(e) {
      if (e.isInterleavedBufferAttribute) {
        for (var t = e.count, n = e.itemSize, i = e.array.slice(0, t * n), r = 0, a = 0; r < t; ++r) i[a++] = e.getX(r), n >= 2 && (i[a++] = e.getY(r)), n >= 3 && (i[a++] = e.getZ(r)), n >= 4 && (i[a++] = e.getW(r));
        return new di(i, n, e.normalized)
      }
      return e.clone()
    }

    function V(e, n, i) {
      this.json = e || {}, this.extensions = n || {}, this.options = i || {}, this.cache = new t, this.primitiveCache = {}, this.textureLoader = new Ml(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.fileLoader = new gl(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), "use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0)
    }

    function k(e, t, n) {
      var i = t.attributes,
        r = [];

      function a(t, i) {
        return n.getDependency("accessor", t).then((function(t) {
          e.setAttribute(i, t)
        }))
      }
      for (var o in i) {
        var s = R[o] || o.toLowerCase();
        s in e.attributes || r.push(a(i[o], s))
      }
      if (void 0 !== t.indices && !e.index) {
        var c = n.getDependency("accessor", t.indices).then((function(t) {
          e.setIndex(t)
        }));
        r.push(c)
      }
      return F(e, t), Promise.all(r).then((function() {
        return void 0 !== t.targets ? function(e, t, n) {
          for (var i = !1, r = !1, a = 0, o = t.length; a < o; a++) {
            if (void 0 !== (l = t[a]).POSITION && (i = !0), void 0 !== l.NORMAL && (r = !0), i && r) break
          }
          if (!i && !r) return Promise.resolve(e);
          var s = [],
            c = [];
          for (a = 0, o = t.length; a < o; a++) {
            var l = t[a];
            if (i) {
              var h = void 0 !== l.POSITION ? n.getDependency("accessor", l.POSITION) : e.attributes.position;
              s.push(h)
            }
            if (r) {
              h = void 0 !== l.NORMAL ? n.getDependency("accessor", l.NORMAL) : e.attributes.normal;
              c.push(h)
            }
          }
          return Promise.all([Promise.all(s), Promise.all(c)]).then((function(n) {
            for (var a = n[0], o = n[1], s = 0, c = a.length; s < c; s++) e.attributes.position !== a[s] && (a[s] = H(a[s]));
            for (s = 0, c = o.length; s < c; s++) e.attributes.normal !== o[s] && (o[s] = H(o[s]));
            for (s = 0, c = t.length; s < c; s++) {
              var l = t[s],
                h = "morphTarget" + s;
              if (i && void 0 !== l.POSITION) {
                var u = a[s];
                u.name = h;
                for (var p = e.attributes.position, d = 0, f = u.count; d < f; d++) u.setXYZ(d, u.getX(d) + p.getX(d), u.getY(d) + p.getY(d), u.getZ(d) + p.getZ(d))
              }
              if (r && void 0 !== l.NORMAL) {
                var m = o[s];
                m.name = h;
                var v = e.attributes.normal;
                for (d = 0, f = m.count; d < f; d++) m.setXYZ(d, m.getX(d) + v.getX(d), m.getY(d) + v.getY(d), m.getZ(d) + v.getZ(d))
              }
            }
            return i && (e.morphAttributes.position = a), r && (e.morphAttributes.normal = o), e
          }))
        }(e, t.targets, n) : e
      }))
    }
    return V.prototype.parse = function(e, t) {
      var n = this,
        i = this.json,
        r = this.extensions;
      this.cache.removeAll(), this.markDefs(), Promise.all([this.getDependencies("scene"), this.getDependencies("animation"), this.getDependencies("camera")]).then((function(t) {
        var a = {
          scene: t[0][i.scene || 0],
          scenes: t[0],
          animations: t[1],
          cameras: t[2],
          asset: i.asset,
          parser: n,
          userData: {}
        };
        U(r, a, i), F(a, i), e(a)
      })).catch(t)
    }, V.prototype.markDefs = function() {
      for (var e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [], i = {}, r = {}, a = 0, o = t.length; a < o; a++)
        for (var s = t[a].joints, c = 0, l = s.length; c < l; c++) e[s[c]].isBone = !0;
      for (var h = 0, u = e.length; h < u; h++) {
        var p = e[h];
        void 0 !== p.mesh && (void 0 === i[p.mesh] && (i[p.mesh] = r[p.mesh] = 0), i[p.mesh]++, void 0 !== p.skin && (n[p.mesh].isSkinnedMesh = !0))
      }
      this.json.meshReferences = i, this.json.meshUses = r
    }, V.prototype.getDependency = function(e, t) {
      var i = e + ":" + t,
        r = this.cache.get(i);
      if (!r) {
        switch (e) {
          case "scene":
            r = this.loadScene(t);
            break;
          case "node":
            r = this.loadNode(t);
            break;
          case "mesh":
            r = this.loadMesh(t);
            break;
          case "accessor":
            r = this.loadAccessor(t);
            break;
          case "bufferView":
            r = this.loadBufferView(t);
            break;
          case "buffer":
            r = this.loadBuffer(t);
            break;
          case "material":
            r = this.loadMaterial(t);
            break;
          case "texture":
            r = this.loadTexture(t);
            break;
          case "skin":
            r = this.loadSkin(t);
            break;
          case "animation":
            r = this.loadAnimation(t);
            break;
          case "camera":
            r = this.loadCamera(t);
            break;
          case "light":
            r = this.extensions[n.KHR_LIGHTS_PUNCTUAL].loadLight(t);
            break;
          default:
            throw new Error("Unknown type: " + e)
        }
        this.cache.add(i, r)
      }
      return r
    }, V.prototype.getDependencies = function(e) {
      var t = this.cache.get(e);
      if (!t) {
        var n = this,
          i = this.json[e + ("mesh" === e ? "es" : "s")] || [];
        t = Promise.all(i.map((function(t, i) {
          return n.getDependency(e, i)
        }))), this.cache.add(e, t)
      }
      return t
    }, V.prototype.loadBuffer = function(e) {
      var t = this.json.buffers[e],
        i = this.fileLoader;
      if (t.type && "arraybuffer" !== t.type) throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
      if (void 0 === t.uri && 0 === e) return Promise.resolve(this.extensions[n.KHR_BINARY_GLTF].body);
      var r = this.options;
      return new Promise((function(e, n) {
        i.load(z(t.uri, r.path), e, void 0, (function() {
          n(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'))
        }))
      }))
    }, V.prototype.loadBufferView = function(e) {
      var t = this.json.bufferViews[e];
      return this.getDependency("buffer", t.buffer).then((function(e) {
        var n = t.byteLength || 0,
          i = t.byteOffset || 0;
        return e.slice(i, i + n)
      }))
    }, V.prototype.loadAccessor = function(e) {
      var t = this,
        n = this.json,
        i = this.json.accessors[e];
      if (void 0 === i.bufferView && void 0 === i.sparse) return Promise.resolve(null);
      var r = [];
      return void 0 !== i.bufferView ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), void 0 !== i.sparse && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then((function(e) {
        var r, a = e[0],
          o = L[i.type],
          s = T[i.componentType],
          c = s.BYTES_PER_ELEMENT,
          l = c * o,
          h = i.byteOffset || 0,
          u = void 0 !== i.bufferView ? n.bufferViews[i.bufferView].byteStride : void 0,
          p = !0 === i.normalized;
        if (u && u !== l) {
          var d = Math.floor(h / u),
            f = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + d + ":" + i.count,
            m = t.cache.get(f);
          m || (m = new Io(new s(a, d * u, i.count * u / c), u / c), t.cache.add(f, m)), r = new No(m, o, h % u / c, p)
        } else r = new di(null === a ? new s(i.count * o) : new s(a, h, i.count * o), o, p);
        if (void 0 !== i.sparse) {
          var v = L.SCALAR,
            g = T[i.sparse.indices.componentType],
            y = i.sparse.indices.byteOffset || 0,
            x = i.sparse.values.byteOffset || 0,
            b = new g(e[1], y, i.sparse.count * v),
            w = new s(e[2], x, i.sparse.count * o);
          null !== a && (r = new di(r.array.slice(), r.itemSize, r.normalized));
          for (var _ = 0, M = b.length; _ < M; _++) {
            var S = b[_];
            if (r.setX(S, w[_ * o]), o >= 2 && r.setY(S, w[_ * o + 1]), o >= 3 && r.setZ(S, w[_ * o + 2]), o >= 4 && r.setW(S, w[_ * o + 3]), o >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
          }
        }
        return r
      }))
    }, V.prototype.loadTexture = function(e) {
      var t, i = this,
        r = this.json,
        a = this.options,
        o = this.textureLoader,
        s = window.URL || window.webkitURL,
        c = r.textures[e],
        l = c.extensions || {},
        h = (t = l[n.MSFT_TEXTURE_DDS] ? r.images[l[n.MSFT_TEXTURE_DDS].source] : r.images[c.source]).uri,
        u = !1;
      return void 0 !== t.bufferView && (h = i.getDependency("bufferView", t.bufferView).then((function(e) {
        u = !0;
        var n = new Blob([e], {
          type: t.mimeType
        });
        return h = s.createObjectURL(n)
      }))), Promise.resolve(h).then((function(e) {
        var t = a.manager.getHandler(e);
        return t || (t = l[n.MSFT_TEXTURE_DDS] ? i.extensions[n.MSFT_TEXTURE_DDS].ddsLoader : o), new Promise((function(n, i) {
          t.load(z(e, a.path), n, void 0, i)
        }))
      })).then((function(e) {
        !0 === u && s.revokeObjectURL(h), e.flipY = !1, void 0 !== c.name && (e.name = c.name), t.mimeType in D && (e.format = D[t.mimeType]);
        var n = (r.samplers || {})[c.sampler] || {};
        return e.magFilter = E[n.magFilter] || de, e.minFilter = E[n.minFilter] || me, e.wrapS = A[n.wrapS] || se, e.wrapT = A[n.wrapT] || se, e
      }))
    }, V.prototype.assignTexture = function(e, t, i) {
      var r = this;
      return this.getDependency("texture", i.index).then((function(a) {
        if (!a.isCompressedTexture) switch (t) {
          case "aoMap":
          case "emissiveMap":
          case "metalnessMap":
          case "normalMap":
          case "roughnessMap":
            a.format = Re
        }
        if (r.extensions[n.KHR_TEXTURE_TRANSFORM]) {
          var o = void 0 !== i.extensions ? i.extensions[n.KHR_TEXTURE_TRANSFORM] : void 0;
          o && (a = r.extensions[n.KHR_TEXTURE_TRANSFORM].extendTexture(a, o))
        }
        e[t] = a
      }))
    }, V.prototype.assignFinalMaterial = function(e) {
      var t = e.geometry,
        i = e.material,
        r = this.extensions,
        a = void 0 !== t.attributes.tangent,
        o = void 0 !== t.attributes.color,
        s = void 0 === t.attributes.normal,
        c = !0 === e.isSkinnedMesh,
        l = Object.keys(t.morphAttributes).length > 0,
        h = l && void 0 !== t.morphAttributes.normal;
      if (e.isPoints) {
        var u = "PointsMaterial:" + i.uuid,
          p = this.cache.get(u);
        p || (p = new vs, ui.prototype.copy.call(p, i), p.color.copy(i.color), p.map = i.map, p.sizeAttenuation = !1, this.cache.add(u, p)), i = p
      } else if (e.isLine) {
        u = "LineBasicMaterial:" + i.uuid;
        var d = this.cache.get(u);
        d || (d = new as, ui.prototype.copy.call(d, i), d.color.copy(i.color), this.cache.add(u, d)), i = d
      }
      if (a || o || s || c || l) {
        u = "ClonedMaterial:" + i.uuid + ":";
        i.isGLTFSpecularGlossinessMaterial && (u += "specular-glossiness:"), c && (u += "skinning:"), a && (u += "vertex-tangents:"), o && (u += "vertex-colors:"), s && (u += "flat-shading:"), l && (u += "morph-targets:"), h && (u += "morph-normals:");
        var m = this.cache.get(u);
        m || (m = i.isGLTFSpecularGlossinessMaterial ? r[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].cloneMaterial(i) : i.clone(), c && (m.skinning = !0), a && (m.vertexTangents = !0), o && (m.vertexColors = f), s && (m.flatShading = !0), l && (m.morphTargets = !0), h && (m.morphNormals = !0), this.cache.add(u, m)), i = m
      }
      i.aoMap && void 0 === t.attributes.uv2 && void 0 !== t.attributes.uv && (console.log("THREE.GLTFLoader: Duplicating UVs to support aoMap."), t.setAttribute("uv2", new di(t.attributes.uv.array, 2))), i.isGLTFSpecularGlossinessMaterial && (e.onBeforeRender = r[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].refreshUniforms), e.material = i
    }, V.prototype.loadMaterial = function(e) {
      var t, i = this.json,
        r = this.extensions,
        a = i.materials[e],
        o = {},
        s = a.extensions || {},
        c = [];
      if (s[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
        var l = r[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
        t = l.getMaterialType(), c.push(l.extendParams(o, a, this))
      } else if (s[n.KHR_MATERIALS_UNLIT]) {
        var h = r[n.KHR_MATERIALS_UNLIT];
        t = h.getMaterialType(), c.push(h.extendParams(o, a, this))
      } else {
        t = Vc;
        var p = a.pbrMetallicRoughness || {};
        if (o.color = new ai(1, 1, 1), o.opacity = 1, Array.isArray(p.baseColorFactor)) {
          var d = p.baseColorFactor;
          o.color.fromArray(d), o.opacity = d[3]
        }
        void 0 !== p.baseColorTexture && c.push(this.assignTexture(o, "map", p.baseColorTexture)), o.metalness = void 0 !== p.metallicFactor ? p.metallicFactor : 1, o.roughness = void 0 !== p.roughnessFactor ? p.roughnessFactor : 1, void 0 !== p.metallicRoughnessTexture && (c.push(this.assignTexture(o, "metalnessMap", p.metallicRoughnessTexture)), c.push(this.assignTexture(o, "roughnessMap", p.metallicRoughnessTexture)))
      }!0 === a.doubleSided && (o.side = u);
      var f = a.alphaMode || O;
      return f === N ? o.transparent = !0 : (o.transparent = !1, f === I && (o.alphaTest = void 0 !== a.alphaCutoff ? a.alphaCutoff : .5)), void 0 !== a.normalTexture && t !== pi && (c.push(this.assignTexture(o, "normalMap", a.normalTexture)), o.normalScale = new Rt(1, 1), void 0 !== a.normalTexture.scale && o.normalScale.set(a.normalTexture.scale, a.normalTexture.scale)), void 0 !== a.occlusionTexture && t !== pi && (c.push(this.assignTexture(o, "aoMap", a.occlusionTexture)), void 0 !== a.occlusionTexture.strength && (o.aoMapIntensity = a.occlusionTexture.strength)), void 0 !== a.emissiveFactor && t !== pi && (o.emissive = (new ai).fromArray(a.emissiveFactor)), void 0 !== a.emissiveTexture && t !== pi && c.push(this.assignTexture(o, "emissiveMap", a.emissiveTexture)), Promise.all(c).then((function() {
        var e;
        return e = t === hr ? r[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o) : new t(o), void 0 !== a.name && (e.name = a.name), e.map && (e.map.encoding = ut), e.emissiveMap && (e.emissiveMap.encoding = ut), e.specularMap && (e.specularMap.encoding = ut), F(e, a), a.extensions && U(r, e, a), e
      }))
    }, V.prototype.loadGeometries = function(e) {
      var t = this,
        i = this.extensions,
        r = this.primitiveCache;

      function a(e) {
        return i[n.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then((function(n) {
          return k(n, e, t)
        }))
      }
      for (var o, s, c = [], l = 0, h = e.length; l < h; l++) {
        var u, p = e[l],
          d = (s = void 0, (s = (o = p).extensions && o.extensions[n.KHR_DRACO_MESH_COMPRESSION]) ? "draco:" + s.bufferView + ":" + s.indices + ":" + G(s.attributes) : o.indices + ":" + G(o.attributes) + ":" + o.mode),
          f = r[d];
        if (f) c.push(f.promise);
        else u = p.extensions && p.extensions[n.KHR_DRACO_MESH_COMPRESSION] ? a(p) : k(new Oi, p, t), r[d] = {
          primitive: p,
          promise: u
        }, c.push(u)
      }
      return Promise.all(c)
    }, V.prototype.loadMesh = function(e) {
      for (var t = this, n = this.json.meshes[e], i = n.primitives, r = [], a = 0, o = i.length; a < o; a++) {
        var s = void 0 === i[a].material ? g = g || new Vc({
          color: 16777215,
          emissive: 0,
          metalness: 1,
          roughness: 1,
          transparent: !1,
          depthTest: !0,
          side: l
        }) : this.getDependency("material", i[a].material);
        r.push(s)
      }
      return Promise.all(r).then((function(r) {
        return t.loadGeometries(i).then((function(a) {
          for (var o = [], s = 0, c = a.length; s < c; s++) {
            var l, h = a[s],
              u = i[s],
              p = r[s];
            if (u.mode === _ || u.mode === M || u.mode === S || void 0 === u.mode) !0 !== (l = !0 === n.isSkinnedMesh ? new $o(h, p) : new Ji(h, p)).isSkinnedMesh || l.geometry.attributes.skinWeight.normalized || l.normalizeSkinWeights(), u.mode === M ? l.drawMode = ct : u.mode === S && (l.drawMode = lt);
            else if (u.mode === x) l = new fs(h, p);
            else if (u.mode === w) l = new us(h, p);
            else if (u.mode === b) l = new ms(h, p);
            else {
              if (u.mode !== y) throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + u.mode);
              l = new ws(h, p)
            }
            Object.keys(l.geometry.morphAttributes).length > 0 && B(l, n), l.name = n.name || "mesh_" + e, a.length > 1 && (l.name += "_" + s), F(l, n), t.assignFinalMaterial(l), o.push(l)
          }
          if (1 === o.length) return o[0];
          var d = new _o;
          for (s = 0, c = o.length; s < c; s++) d.add(o[s]);
          return d
        }))
      }))
    }, V.prototype.loadCamera = function(e) {
      var t, n = this.json.cameras[e],
        i = n[n.type];
      if (i) return "perspective" === n.type ? t = new pr(Lt.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : "orthographic" === n.type && (t = new eh(i.xmag / -2, i.xmag / 2, i.ymag / 2, i.ymag / -2, i.znear, i.zfar)), void 0 !== n.name && (t.name = n.name), F(t, n), Promise.resolve(t);
      console.warn("THREE.GLTFLoader: Missing camera parameters.")
    }, V.prototype.loadSkin = function(e) {
      var t = this.json.skins[e],
        n = {
          joints: t.joints
        };
      return void 0 === t.inverseBindMatrices ? Promise.resolve(n) : this.getDependency("accessor", t.inverseBindMatrices).then((function(e) {
        return n.inverseBindMatrices = e, n
      }))
    }, V.prototype.loadAnimation = function(e) {
      for (var t = this.json.animations[e], n = [], i = [], r = [], a = [], o = [], s = 0, c = t.channels.length; s < c; s++) {
        var l = t.channels[s],
          h = t.samplers[l.sampler],
          u = l.target,
          p = void 0 !== u.node ? u.node : u.id,
          d = void 0 !== t.parameters ? t.parameters[h.input] : h.input,
          f = void 0 !== t.parameters ? t.parameters[h.output] : h.output;
        n.push(this.getDependency("node", p)), i.push(this.getDependency("accessor", d)), r.push(this.getDependency("accessor", f)), a.push(h), o.push(u)
      }
      return Promise.all([Promise.all(n), Promise.all(i), Promise.all(r), Promise.all(a), Promise.all(o)]).then((function(n) {
        for (var i = n[0], r = n[1], a = n[2], o = n[3], s = n[4], c = [], l = 0, h = i.length; l < h; l++) {
          var u = i[l],
            p = r[l],
            d = a[l],
            f = o[l],
            m = s[l];
          if (void 0 !== u) {
            var g;
            switch (u.updateMatrix(), u.matrixAutoUpdate = !0, P[m.path]) {
              case P.weights:
                g = al;
                break;
              case P.rotation:
                g = sl;
                break;
              case P.position:
              case P.scale:
              default:
                g = ll
            }
            var y = u.name ? u.name : u.uuid,
              x = void 0 !== f.interpolation ? C[f.interpolation] : 2301,
              b = [];
            P[m.path] === P.weights ? u.traverse((function(e) {
              !0 === e.isMesh && e.morphTargetInfluences && b.push(e.name ? e.name : e.uuid)
            })) : b.push(y);
            var w = d.array;
            if (d.normalized) {
              var _;
              if (w.constructor === Int8Array) _ = 1 / 127;
              else if (w.constructor === Uint8Array) _ = 1 / 255;
              else if (w.constructor == Int16Array) _ = 1 / 32767;
              else {
                if (w.constructor !== Uint16Array) throw new Error("THREE.GLTFLoader: Unsupported output accessor component type.");
                _ = 1 / 65535
              }
              for (var M = new Float32Array(w.length), S = 0, T = w.length; S < T; S++) M[S] = w[S] * _;
              w = M
            }
            for (S = 0, T = b.length; S < T; S++) {
              var E = new g(b[S] + "." + P[m.path], p.array, w, x);
              "CUBICSPLINE" === f.interpolation && (E.createInterpolant = function(e) {
                return new v(this.times, this.values, this.getValueSize() / 3, e)
              }, E.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), c.push(E)
            }
          }
        }
        return new hl(void 0 !== t.name ? t.name : "animation_" + e, void 0, c)
      }))
    }, V.prototype.loadNode = function(e) {
      var t, i = this.json,
        r = this.extensions,
        a = this,
        o = i.meshReferences,
        s = i.meshUses,
        c = i.nodes[e];
      return (t = [], void 0 !== c.mesh && t.push(a.getDependency("mesh", c.mesh).then((function(e) {
        var t;
        if (o[c.mesh] > 1) {
          var n = s[c.mesh]++;
          (t = e.clone()).name += "_instance_" + n, t.onBeforeRender = e.onBeforeRender;
          for (var i = 0, r = t.children.length; i < r; i++) t.children[i].name += "_instance_" + n, t.children[i].onBeforeRender = e.children[i].onBeforeRender
        } else t = e;
        return void 0 !== c.weights && t.traverse((function(e) {
          if (e.isMesh)
            for (var t = 0, n = c.weights.length; t < n; t++) e.morphTargetInfluences[t] = c.weights[t]
        })), t
      }))), void 0 !== c.camera && t.push(a.getDependency("camera", c.camera)), c.extensions && c.extensions[n.KHR_LIGHTS_PUNCTUAL] && void 0 !== c.extensions[n.KHR_LIGHTS_PUNCTUAL].light && t.push(a.getDependency("light", c.extensions[n.KHR_LIGHTS_PUNCTUAL].light)), Promise.all(t)).then((function(e) {
        var t;
        if ((t = !0 === c.isBone ? new is : e.length > 1 ? new _o : 1 === e.length ? e[0] : new mn) !== e[0])
          for (var n = 0, i = e.length; n < i; n++) t.add(e[n]);
        if (void 0 !== c.name && (t.userData.name = c.name, t.name = Qh.sanitizeNodeName(c.name)), F(t, c), c.extensions && U(r, t, c), void 0 !== c.matrix) {
          var a = new Jt;
          a.fromArray(c.matrix), t.applyMatrix(a)
        } else void 0 !== c.translation && t.position.fromArray(c.translation), void 0 !== c.rotation && t.quaternion.fromArray(c.rotation), void 0 !== c.scale && t.scale.fromArray(c.scale);
        return t
      }))
    }, V.prototype.loadScene = function() {
      function e(t, n, i, r) {
        var a = i.nodes[t];
        return r.getDependency("node", t).then((function(e) {
          return void 0 === a.skin ? e : r.getDependency("skin", a.skin).then((function(e) {
            for (var n = [], i = 0, a = (t = e).joints.length; i < a; i++) n.push(r.getDependency("node", t.joints[i]));
            return Promise.all(n)
          })).then((function(n) {
            return e.traverse((function(e) {
              if (e.isMesh) {
                for (var i = [], r = [], a = 0, o = n.length; a < o; a++) {
                  var s = n[a];
                  if (s) {
                    i.push(s);
                    var c = new Jt;
                    void 0 !== t.inverseBindMatrices && c.fromArray(t.inverseBindMatrices.array, 16 * a), r.push(c)
                  } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[a])
                }
                e.bind(new ns(i, r), e.matrixWorld)
              }
            })), e
          }));
          var t
        })).then((function(t) {
          n.add(t);
          var o = [];
          if (a.children)
            for (var s = a.children, c = 0, l = s.length; c < l; c++) {
              var h = s[c];
              o.push(e(h, t, i, r))
            }
          return Promise.all(o)
        }))
      }
      return function(t) {
        var n = this.json,
          i = this.extensions,
          r = this.json.scenes[t],
          a = new vn;
        void 0 !== r.name && (a.name = r.name), F(a, r), r.extensions && U(i, a, r);
        for (var o = r.nodes || [], s = [], c = 0, l = o.length; c < l; c++) s.push(e(o[c], a, n, this));
        return Promise.all(s).then((function() {
          return a
        }))
      }
    }(), e
  }();
  let tp, np, ip, rp, ap, op, sp, cp, lp, hp = new Rh,
    up = 0;

  function pp(e, t, n) {
    let i = function(e, t, n) {
      let i, r, a, o, s = 0,
        c = 0,
        l = {
          x: window.innerWidth,
          y: window.innerHeight
        };
      e <= l.x / 2 && (s = n * (r = (i = l.x / 2 - e) / (l.x / 2) * 100) / 100 * -1);
      e >= l.x / 2 && (s = n * (r = (i = e - l.x / 2) / (l.x / 2) * 100) / 100);
      t <= l.y / 2 && (c = .5 * n * (o = (a = l.y / 2 - t) / (l.y / 2) * 100) / 100 * -1);
      t >= l.y / 2 && (c = n * (o = (a = t - l.y / 2) / (l.y / 2) * 100) / 100);
      return {
        x: s,
        y: c
      }
    }(e.x, e.y, n);
    t.rotation.y = Lt.degToRad(i.x), t.rotation.x = Lt.degToRad(i.y)
  }

  function dp(e) {
    return {
      x: e.clientX,
      y: e.clientY
    }
  }

  function fp(e) {
    const t = window.innerWidth;
    let n = "None";
    e < 0 ? up = 0 : e <= t / 2 ? n = "left" : e >= t / 2 && (n = "right"), up = "left" == n ? -1 : "right" == n ? 1 : 0
  }
  document.body.appendChild((() => {
      const e = document.createElement("canvas");
      return e.id = "c", e
    })()),
    function() {
      const e = document.querySelector("#c");
      (tp = new vn).background = new ai(15856113), tp.fog = new Oo(15856113, 60, 100), (np = new Po({
          canvas: e,
          antialias: !0
        })).setSize(window.innerWidth, window.innerHeight), np.shadowMap.enabled = !0, np.setPixelRatio(window.devicePixelRatio), np.gammaFactor = 1.7, np.gammaOutput = !0, document.body.appendChild(np.domElement), (ip = new pr(50, window.innerWidth / window.innerHeight, 7, 1e3)).position.z = 30, ip.position.x = 0, ip.position.y = -3,

        (new ep).load("./assets/models/gess.glb", e => {
          rp = e.scene;
          let t = e.animations;
          rp.traverse(e => {
            e.isMesh && (e.castShadow = !0, e.receiveShadow = !0), e.isBone && "mixamorigNeck" === e.name && (ap = e), e.isBone && "mixamorigSpine" === e.name && (op = e)
          }), rp.position.y = -11, rp.scale.set(7, 7, 7), tp.add(rp), sp = new eu(rp);
          const n = t[1];
          n.tracks.splice(3, 12), (cp = sp.clipAction(n)).play();

          const i = t[0];
          i.tracks.splice(3, 12), lp = sp.clipAction(i)

        }, void 0, (function(e) {
          console.error(e)
        }));


      let t = new Ji(new Mc(7, 32, 32), new pi({
        color: "#3ffcc7"
      }));
      t.position.z = -15, t.position.y = 0, t.position.x = -.25, tp.add(t);
      let n = new Yl(16777215, 16777215, .61);
      n.position.set(0, 50, 0), tp.add(n);
      let i = new nh(16777215, .54);
      i.position.set(-8, 12, 8), i.castShadow = !0, i.shadow.mapSize = new Rt(1024, 1024), i.shadow.camera.near = 7, i.shadow.camera.far = 1500, i.shadow.camera.left = -50, i.shadow.camera.right = 50, i.shadow.camera.top = 50, i.shadow.camera.bottom = -50, tp.add(i);
      let r = new Ji(new Er(5e3, 5e3, 1, 1), new jc({
        color: 15658734,
        shininess: 0
      }));
      r.rotation.x = -.5 * Math.PI, r.receiveShadow = !0, r.position.y = -11, tp.add(r)
    }(),
    function e() {
      sp && sp.update(hp.getDelta()), rp && (rp.position.x += .1 * up, 0 != up ? (lp.setLoop(at), lp.play(), cp.stop()) : (cp.play(), lp.stop())), np.render(tp, ip), requestAnimationFrame(e)
    }(), document.addEventListener("mousemove", (function(e) {
      var t = dp(e);
      ap && op && (pp(t, ap, 50), pp(t, op, 30))
    })), document.addEventListener("pointerdown", e => {
      fp(dp(e).x)
    }), document.addEventListener("pointerup", e => {
      fp(-1)
    }), window.addEventListener("resize", (function() {
      np.setSize(window.innerWidth, window.innerHeight)
    }))
}]);