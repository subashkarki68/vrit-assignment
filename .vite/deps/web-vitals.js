import "./chunk-5WRI5ZAA.js";

// node_modules/.pnpm/web-vitals@4.2.4/node_modules/web-vitals/dist/web-vitals.js
var e;
var n;
var t;
var r;
var i;
var o = -1;
var a = function(e3) {
  addEventListener("pageshow", function(n2) {
    n2.persisted && (o = n2.timeStamp, e3(n2));
  }, true);
};
var c = function() {
  var e3 = self.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
  if (e3 && e3.responseStart > 0 && e3.responseStart < performance.now()) return e3;
};
var u = function() {
  var e3 = c();
  return e3 && e3.activationStart || 0;
};
var f = function(e3, n2) {
  var t2 = c(), r2 = "navigate";
  o >= 0 ? r2 = "back-forward-cache" : t2 && (document.prerendering || u() > 0 ? r2 = "prerender" : document.wasDiscarded ? r2 = "restore" : t2.type && (r2 = t2.type.replace(/_/g, "-")));
  return { name: e3, value: void 0 === n2 ? -1 : n2, rating: "good", delta: 0, entries: [], id: "v4-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12), navigationType: r2 };
};
var s = function(e3, n2, t2) {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(e3)) {
      var r2 = new PerformanceObserver(function(e4) {
        Promise.resolve().then(function() {
          n2(e4.getEntries());
        });
      });
      return r2.observe(Object.assign({ type: e3, buffered: true }, t2 || {})), r2;
    }
  } catch (e4) {
  }
};
var d = function(e3, n2, t2, r2) {
  var i2, o2;
  return function(a2) {
    n2.value >= 0 && (a2 || r2) && ((o2 = n2.value - (i2 || 0)) || void 0 === i2) && (i2 = n2.value, n2.delta = o2, n2.rating = function(e4, n3) {
      return e4 > n3[1] ? "poor" : e4 > n3[0] ? "needs-improvement" : "good";
    }(n2.value, t2), e3(n2));
  };
};
var l = function(e3) {
  requestAnimationFrame(function() {
    return requestAnimationFrame(function() {
      return e3();
    });
  });
};
var p = function(e3) {
  document.addEventListener("visibilitychange", function() {
    "hidden" === document.visibilityState && e3();
  });
};
var v = function(e3) {
  var n2 = false;
  return function() {
    n2 || (e3(), n2 = true);
  };
};
var m = -1;
var h = function() {
  return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0;
};
var g = function(e3) {
  "hidden" === document.visibilityState && m > -1 && (m = "visibilitychange" === e3.type ? e3.timeStamp : 0, T());
};
var y = function() {
  addEventListener("visibilitychange", g, true), addEventListener("prerenderingchange", g, true);
};
var T = function() {
  removeEventListener("visibilitychange", g, true), removeEventListener("prerenderingchange", g, true);
};
var E = function() {
  return m < 0 && (m = h(), y(), a(function() {
    setTimeout(function() {
      m = h(), y();
    }, 0);
  })), { get firstHiddenTime() {
    return m;
  } };
};
var C = function(e3) {
  document.prerendering ? addEventListener("prerenderingchange", function() {
    return e3();
  }, true) : e3();
};
var b = [1800, 3e3];
var S = function(e3, n2) {
  n2 = n2 || {}, C(function() {
    var t2, r2 = E(), i2 = f("FCP"), o2 = s("paint", function(e4) {
      e4.forEach(function(e5) {
        "first-contentful-paint" === e5.name && (o2.disconnect(), e5.startTime < r2.firstHiddenTime && (i2.value = Math.max(e5.startTime - u(), 0), i2.entries.push(e5), t2(true)));
      });
    });
    o2 && (t2 = d(e3, i2, b, n2.reportAllChanges), a(function(r3) {
      i2 = f("FCP"), t2 = d(e3, i2, b, n2.reportAllChanges), l(function() {
        i2.value = performance.now() - r3.timeStamp, t2(true);
      });
    }));
  });
};
var L = [0.1, 0.25];
var w = function(e3, n2) {
  n2 = n2 || {}, S(v(function() {
    var t2, r2 = f("CLS", 0), i2 = 0, o2 = [], c2 = function(e4) {
      e4.forEach(function(e5) {
        if (!e5.hadRecentInput) {
          var n3 = o2[0], t3 = o2[o2.length - 1];
          i2 && e5.startTime - t3.startTime < 1e3 && e5.startTime - n3.startTime < 5e3 ? (i2 += e5.value, o2.push(e5)) : (i2 = e5.value, o2 = [e5]);
        }
      }), i2 > r2.value && (r2.value = i2, r2.entries = o2, t2());
    }, u2 = s("layout-shift", c2);
    u2 && (t2 = d(e3, r2, L, n2.reportAllChanges), p(function() {
      c2(u2.takeRecords()), t2(true);
    }), a(function() {
      i2 = 0, r2 = f("CLS", 0), t2 = d(e3, r2, L, n2.reportAllChanges), l(function() {
        return t2();
      });
    }), setTimeout(t2, 0));
  }));
};
var A = 0;
var I = 1 / 0;
var P = 0;
var M = function(e3) {
  e3.forEach(function(e4) {
    e4.interactionId && (I = Math.min(I, e4.interactionId), P = Math.max(P, e4.interactionId), A = P ? (P - I) / 7 + 1 : 0);
  });
};
var k = function() {
  return e ? A : performance.interactionCount || 0;
};
var F = function() {
  "interactionCount" in performance || e || (e = s("event", M, { type: "event", buffered: true, durationThreshold: 0 }));
};
var D = [];
var x = /* @__PURE__ */ new Map();
var R = 0;
var B = function() {
  var e3 = Math.min(D.length - 1, Math.floor((k() - R) / 50));
  return D[e3];
};
var H = [];
var q = function(e3) {
  if (H.forEach(function(n3) {
    return n3(e3);
  }), e3.interactionId || "first-input" === e3.entryType) {
    var n2 = D[D.length - 1], t2 = x.get(e3.interactionId);
    if (t2 || D.length < 10 || e3.duration > n2.latency) {
      if (t2) e3.duration > t2.latency ? (t2.entries = [e3], t2.latency = e3.duration) : e3.duration === t2.latency && e3.startTime === t2.entries[0].startTime && t2.entries.push(e3);
      else {
        var r2 = { id: e3.interactionId, latency: e3.duration, entries: [e3] };
        x.set(r2.id, r2), D.push(r2);
      }
      D.sort(function(e4, n3) {
        return n3.latency - e4.latency;
      }), D.length > 10 && D.splice(10).forEach(function(e4) {
        return x.delete(e4.id);
      });
    }
  }
};
var O = function(e3) {
  var n2 = self.requestIdleCallback || self.setTimeout, t2 = -1;
  return e3 = v(e3), "hidden" === document.visibilityState ? e3() : (t2 = n2(e3), p(e3)), t2;
};
var N = [200, 500];
var j = function(e3, n2) {
  "PerformanceEventTiming" in self && "interactionId" in PerformanceEventTiming.prototype && (n2 = n2 || {}, C(function() {
    var t2;
    F();
    var r2, i2 = f("INP"), o2 = function(e4) {
      O(function() {
        e4.forEach(q);
        var n3 = B();
        n3 && n3.latency !== i2.value && (i2.value = n3.latency, i2.entries = n3.entries, r2());
      });
    }, c2 = s("event", o2, { durationThreshold: null !== (t2 = n2.durationThreshold) && void 0 !== t2 ? t2 : 40 });
    r2 = d(e3, i2, N, n2.reportAllChanges), c2 && (c2.observe({ type: "first-input", buffered: true }), p(function() {
      o2(c2.takeRecords()), r2(true);
    }), a(function() {
      R = k(), D.length = 0, x.clear(), i2 = f("INP"), r2 = d(e3, i2, N, n2.reportAllChanges);
    }));
  }));
};
var _ = [2500, 4e3];
var z = {};
var G = function(e3, n2) {
  n2 = n2 || {}, C(function() {
    var t2, r2 = E(), i2 = f("LCP"), o2 = function(e4) {
      n2.reportAllChanges || (e4 = e4.slice(-1)), e4.forEach(function(e5) {
        e5.startTime < r2.firstHiddenTime && (i2.value = Math.max(e5.startTime - u(), 0), i2.entries = [e5], t2());
      });
    }, c2 = s("largest-contentful-paint", o2);
    if (c2) {
      t2 = d(e3, i2, _, n2.reportAllChanges);
      var m2 = v(function() {
        z[i2.id] || (o2(c2.takeRecords()), c2.disconnect(), z[i2.id] = true, t2(true));
      });
      ["keydown", "click"].forEach(function(e4) {
        addEventListener(e4, function() {
          return O(m2);
        }, { once: true, capture: true });
      }), p(m2), a(function(r3) {
        i2 = f("LCP"), t2 = d(e3, i2, _, n2.reportAllChanges), l(function() {
          i2.value = performance.now() - r3.timeStamp, z[i2.id] = true, t2(true);
        });
      });
    }
  });
};
var J = [800, 1800];
var K = function e2(n2) {
  document.prerendering ? C(function() {
    return e2(n2);
  }) : "complete" !== document.readyState ? addEventListener("load", function() {
    return e2(n2);
  }, true) : setTimeout(n2, 0);
};
var Q = function(e3, n2) {
  n2 = n2 || {};
  var t2 = f("TTFB"), r2 = d(e3, t2, J, n2.reportAllChanges);
  K(function() {
    var i2 = c();
    i2 && (t2.value = Math.max(i2.responseStart - u(), 0), t2.entries = [i2], r2(true), a(function() {
      t2 = f("TTFB", 0), (r2 = d(e3, t2, J, n2.reportAllChanges))(true);
    }));
  });
};
var U = { passive: true, capture: true };
var V = /* @__PURE__ */ new Date();
var W = function(e3, i2) {
  n || (n = i2, t = e3, r = /* @__PURE__ */ new Date(), Z(removeEventListener), X());
};
var X = function() {
  if (t >= 0 && t < r - V) {
    var e3 = { entryType: "first-input", name: n.type, target: n.target, cancelable: n.cancelable, startTime: n.timeStamp, processingStart: n.timeStamp + t };
    i.forEach(function(n2) {
      n2(e3);
    }), i = [];
  }
};
var Y = function(e3) {
  if (e3.cancelable) {
    var n2 = (e3.timeStamp > 1e12 ? /* @__PURE__ */ new Date() : performance.now()) - e3.timeStamp;
    "pointerdown" == e3.type ? function(e4, n3) {
      var t2 = function() {
        W(e4, n3), i2();
      }, r2 = function() {
        i2();
      }, i2 = function() {
        removeEventListener("pointerup", t2, U), removeEventListener("pointercancel", r2, U);
      };
      addEventListener("pointerup", t2, U), addEventListener("pointercancel", r2, U);
    }(n2, e3) : W(n2, e3);
  }
};
var Z = function(e3) {
  ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(n2) {
    return e3(n2, Y, U);
  });
};
var $ = [100, 300];
var ee = function(e3, r2) {
  r2 = r2 || {}, C(function() {
    var o2, c2 = E(), u2 = f("FID"), l2 = function(e4) {
      e4.startTime < c2.firstHiddenTime && (u2.value = e4.processingStart - e4.startTime, u2.entries.push(e4), o2(true));
    }, m2 = function(e4) {
      e4.forEach(l2);
    }, h2 = s("first-input", m2);
    o2 = d(e3, u2, $, r2.reportAllChanges), h2 && (p(v(function() {
      m2(h2.takeRecords()), h2.disconnect();
    })), a(function() {
      var a2;
      u2 = f("FID"), o2 = d(e3, u2, $, r2.reportAllChanges), i = [], t = -1, n = null, Z(addEventListener), a2 = l2, i.push(a2), X();
    }));
  });
};
export {
  L as CLSThresholds,
  b as FCPThresholds,
  $ as FIDThresholds,
  N as INPThresholds,
  _ as LCPThresholds,
  J as TTFBThresholds,
  w as onCLS,
  S as onFCP,
  ee as onFID,
  j as onINP,
  G as onLCP,
  Q as onTTFB
};
//# sourceMappingURL=web-vitals.js.map
