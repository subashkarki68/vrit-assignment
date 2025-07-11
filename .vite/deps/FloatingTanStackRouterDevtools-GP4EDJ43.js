import {
  BaseTanStackRouterDevtoolsPanel,
  clsx,
  useIsMounted,
  useLocalStorage,
  useStyles
} from "./chunk-XHWM2LS5.js";
import {
  DevtoolsOnCloseContext,
  Dynamic,
  className,
  createComponent,
  createEffect,
  createMemo,
  createRenderEffect,
  createSignal,
  createUniqueId,
  insert,
  mergeProps,
  setAttribute,
  spread,
  template
} from "./chunk-ZM6LNCIB.js";
import "./chunk-2UNUHEGO.js";
import "./chunk-5WRI5ZAA.js";

// node_modules/.pnpm/@tanstack+router-devtools-core@1.125.4_@tanstack+router-core@1.125.4_csstype@3.1.3_solid-js@1.9.7_tiny-invariant@1.3.3/node_modules/@tanstack/router-devtools-core/dist/esm/logo.js
var _tmpl$ = template(`<svg xmlns=http://www.w3.org/2000/svg enable-background="new 0 0 634 633"viewBox="0 0 634 633"><g transform=translate(1)><linearGradient x1=-641.486 x2=-641.486 y1=856.648 y2=855.931 gradientTransform="matrix(633 0 0 -633 406377 542258)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#6bdaff></stop><stop offset=0.319 stop-color=#f9ffb5></stop><stop offset=0.706 stop-color=#ffa770></stop><stop offset=1 stop-color=#ff7373></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5 fill-rule=evenodd clip-rule=evenodd></circle><defs><filter width=454 height=396.9 x=-137.5 y=412 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=412 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=610.5 fill=#015064 fill-rule=evenodd stroke=#00CFE2 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=412 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=412 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=610.5 fill=#015064 fill-rule=evenodd stroke=#00CFE2 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=-137.5 y=450 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=450 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=648.5 fill=#015064 fill-rule=evenodd stroke=#00A8B8 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=450 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=450 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=648.5 fill=#015064 fill-rule=evenodd stroke=#00A8B8 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=-137.5 y=486 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=486 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=684.5 fill=#015064 fill-rule=evenodd stroke=#007782 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=486 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=486 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=684.5 fill=#015064 fill-rule=evenodd stroke=#007782 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=176.9 height=129.3 x=272.2 y=308 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=176.9 height=129.3 x=272.2 y=308 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><path fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11 d="M436 403.2l-5 28.6m-140-90.3l-10.9 62m52.8-19.4l-4.3 27.1"></path><linearGradient x1=-645.656 x2=-646.499 y1=854.878 y2=854.788 gradientTransform="matrix(-184.159 -32.4722 11.4608 -64.9973 -128419.844 34938.836)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ee2700></stop><stop offset=1 stop-color=#ff008e></stop></linearGradient><path fill-rule=evenodd d="M344.1 363l97.7 17.2c5.8 2.1 8.2 6.2 7.1 12.1-1 5.9-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1.8-12.8 3.7-3.7 8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd></path><path fill=#D8D8D8 fill-rule=evenodd stroke=#FFF stroke-linecap=round stroke-linejoin=bevel stroke-width=7 d="M428.3 384.5l.9-6.5m-33.9 1.5l.9-6.5m-34 .5l.9-6.1m-38.9-16.1l4.2-3.9m-25.2-16.1l4.2-3.9"clip-rule=evenodd></path></g><defs><filter width=280.6 height=317.4 x=73.2 y=113.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=280.6 height=317.4 x=73.2 y=113.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><linearGradient x1=-646.8 x2=-646.8 y1=854.844 y2=853.844 gradientTransform="matrix(-100.1751 48.8587 -97.9753 -200.879 19124.773 203538.61)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#a17500></stop><stop offset=1 stop-color=#5d2100></stop></linearGradient><path fill-rule=evenodd d="M192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.2-2.9 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6-3.4-18.7-10.8-51.8-22.2-99.6l-25.3 4.6"clip-rule=evenodd></path><linearGradient x1=-635.467 x2=-635.467 y1=852.115 y2=851.115 gradientTransform="matrix(92.6873 4.8575 2.0257 -38.6535 57323.695 36176.047)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd></path><linearGradient x1=-636.573 x2=-636.573 y1=855.444 y2=854.444 gradientTransform="matrix(109.9945 5.7646 6.3597 -121.3507 64719.133 107659.336)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.3 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20 49.6-53.1 49.6-53.1z"clip-rule=evenodd></path><linearGradient x1=-632.145 x2=-632.145 y1=854.174 y2=853.174 gradientTransform="matrix(62.9558 3.2994 3.5021 -66.8246 37035.367 59284.227)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M195 183.9c-.8-21.9 6-38 20.6-48.2 14.6-10.2 29.8-15.3 45.5-15.3-6.1 21.4-14.5 35.8-25.2 43.4-10.7 7.5-24.4 14.2-40.9 20.1z"clip-rule=evenodd></path><linearGradient x1=-638.224 x2=-638.224 y1=853.801 y2=852.801 gradientTransform="matrix(152.4666 7.9904 3.0934 -59.0251 94939.86 55646.855)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c31.9-30 64.1-39.7 96.7-29 32.6 10.7 50.8 30.4 54.6 59.1-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd></path><linearGradient x1=-637.723 x2=-637.723 y1=855.103 y2=854.103 gradientTransform="matrix(136.467 7.1519 5.2165 -99.5377 82830.875 89859.578)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c35.8-7.6 65.6-.2 89.2 22 23.6 22.2 37.7 49 42.3 80.3-39.8-9.7-68.3-23.8-85.5-42.4-17.2-18.5-32.5-38.5-46-59.9z"clip-rule=evenodd></path><linearGradient x1=-631.79 x2=-631.79 y1=855.872 y2=854.872 gradientTransform="matrix(60.8683 3.19 8.7771 -167.4773 31110.818 145537.61)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6-6.5 29.9-3.6 63.1 8.7 99.6 27.4-40.3 43.2-69.6 47.4-88 4.2-18.3 5.5-44.1 4-77.2z"clip-rule=evenodd></path><path fill=none stroke=#2F8A00 stroke-linecap=round stroke-width=8 d="M196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4-5.7 18-9.4 33-11.1 45.1"></path><path fill=none stroke=#2F8A00 stroke-linecap=round stroke-width=8 d="M194.8 185.7c-24.4 1.7-43.8 9-58.1 21.8-14.3 12.8-24.7 25.4-31.3 37.8m99.1-68.9c29.7-6.7 52-8.4 67-5 15 3.4 26.9 8.7 35.8 15.9m-110.8-5.9c20.3 9.9 38.2 20.5 53.9 31.9 15.7 11.4 27.4 22.1 35.1 32"></path></g><defs><filter width=532 height=633 x=50.5 y=399 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=532 height=633 x=50.5 y=399 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><linearGradient x1=-641.104 x2=-641.278 y1=856.577 y2=856.183 gradientTransform="matrix(532 0 0 -633 341484.5 542657)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#fff400></stop><stop offset=1 stop-color=#3c8700></stop></linearGradient><ellipse cx=316.5 cy=715.5 fill-rule=evenodd clip-rule=evenodd rx=266 ry=316.5></ellipse><defs><filter width=288 height=283 x=391 y=-24 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=288 height=283 x=391 y=-24 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><g transform="translate(397 -24)"><linearGradient x1=-1036.672 x2=-1036.672 y1=880.018 y2=879.018 gradientTransform="matrix(227 0 0 -227 235493 199764)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffdf00></stop><stop offset=1 stop-color=#ff9d00></stop></linearGradient><circle cx=168.5 cy=113.5 r=113.5 fill-rule=evenodd clip-rule=evenodd></circle><linearGradient x1=-1017.329 x2=-1018.602 y1=658.003 y2=657.998 gradientTransform="matrix(30 0 0 -1 30558 771)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M30 113H0"></path><linearGradient x1=-1014.501 x2=-1015.774 y1=839.985 y2=839.935 gradientTransform="matrix(26.5 0 0 -5.5 26925 4696.5)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M33.5 79.5L7 74"></path><linearGradient x1=-1016.59 x2=-1017.862 y1=852.671 y2=852.595 gradientTransform="matrix(29 0 0 -8 29523 6971)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M34 146l-29 8"></path><linearGradient x1=-1011.984 x2=-1013.257 y1=863.523 y2=863.229 gradientTransform="matrix(24 0 0 -13 24339 11407)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M45 177l-24 13"></path><linearGradient x1=-1006.673 x2=-1007.946 y1=869.279 y2=868.376 gradientTransform="matrix(20 0 0 -19 20205 16720)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M67 204l-20 19"></path><linearGradient x1=-992.85 x2=-993.317 y1=871.258 y2=870.258 gradientTransform="matrix(13.8339 0 0 -22.8467 13825.796 20131.938)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M94.4 227l-13.8 22.8"></path><linearGradient x1=-953.835 x2=-953.965 y1=871.9 y2=870.9 gradientTransform="matrix(7.5 0 0 -24.5 7278 21605)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M127.5 243.5L120 268"></path><linearGradient x1=244.504 x2=244.496 y1=871.898 y2=870.898 gradientTransform="matrix(.5 0 0 -24.5 45.5 21614)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M167.5 252.5l.5 24.5">`);
function TanStackLogo() {
  const id = createUniqueId();
  return (() => {
    var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$4.nextSibling, _el$6 = _el$5.firstChild, _el$7 = _el$5.nextSibling, _el$8 = _el$7.firstChild, _el$9 = _el$7.nextSibling, _el$0 = _el$9.nextSibling, _el$1 = _el$0.firstChild, _el$10 = _el$0.nextSibling, _el$11 = _el$10.firstChild, _el$12 = _el$10.nextSibling, _el$13 = _el$12.nextSibling, _el$14 = _el$13.firstChild, _el$15 = _el$13.nextSibling, _el$16 = _el$15.firstChild, _el$17 = _el$15.nextSibling, _el$18 = _el$17.nextSibling, _el$19 = _el$18.firstChild, _el$20 = _el$18.nextSibling, _el$21 = _el$20.firstChild, _el$22 = _el$20.nextSibling, _el$23 = _el$22.nextSibling, _el$24 = _el$23.firstChild, _el$25 = _el$23.nextSibling, _el$26 = _el$25.firstChild, _el$27 = _el$25.nextSibling, _el$28 = _el$27.nextSibling, _el$29 = _el$28.firstChild, _el$30 = _el$28.nextSibling, _el$31 = _el$30.firstChild, _el$32 = _el$30.nextSibling, _el$33 = _el$32.nextSibling, _el$34 = _el$33.firstChild, _el$35 = _el$33.nextSibling, _el$36 = _el$35.firstChild, _el$37 = _el$35.nextSibling, _el$38 = _el$37.firstChild, _el$39 = _el$38.nextSibling, _el$40 = _el$39.nextSibling, _el$41 = _el$37.nextSibling, _el$42 = _el$41.firstChild, _el$43 = _el$41.nextSibling, _el$44 = _el$43.firstChild, _el$45 = _el$43.nextSibling, _el$46 = _el$45.firstChild, _el$47 = _el$46.nextSibling, _el$48 = _el$47.nextSibling, _el$49 = _el$48.nextSibling, _el$50 = _el$49.nextSibling, _el$51 = _el$50.nextSibling, _el$52 = _el$51.nextSibling, _el$53 = _el$52.nextSibling, _el$54 = _el$53.nextSibling, _el$55 = _el$54.nextSibling, _el$56 = _el$55.nextSibling, _el$57 = _el$56.nextSibling, _el$58 = _el$57.nextSibling, _el$59 = _el$58.nextSibling, _el$60 = _el$45.nextSibling, _el$61 = _el$60.firstChild, _el$62 = _el$60.nextSibling, _el$63 = _el$62.firstChild, _el$64 = _el$62.nextSibling, _el$65 = _el$64.nextSibling, _el$66 = _el$65.nextSibling, _el$67 = _el$66.firstChild, _el$68 = _el$66.nextSibling, _el$69 = _el$68.firstChild, _el$70 = _el$68.nextSibling, _el$71 = _el$70.firstChild, _el$72 = _el$71.firstChild, _el$73 = _el$72.nextSibling, _el$74 = _el$73.nextSibling, _el$75 = _el$74.nextSibling, _el$76 = _el$75.nextSibling, _el$77 = _el$76.nextSibling, _el$78 = _el$77.nextSibling, _el$79 = _el$78.nextSibling, _el$80 = _el$79.nextSibling, _el$81 = _el$80.nextSibling, _el$82 = _el$81.nextSibling, _el$83 = _el$82.nextSibling, _el$84 = _el$83.nextSibling, _el$85 = _el$84.nextSibling, _el$86 = _el$85.nextSibling, _el$87 = _el$86.nextSibling, _el$88 = _el$87.nextSibling, _el$89 = _el$88.nextSibling;
    setAttribute(_el$3, "id", `a-${id}`);
    setAttribute(_el$4, "fill", `url(#a-${id})`);
    setAttribute(_el$6, "id", `b-${id}`);
    setAttribute(_el$7, "id", `c-${id}`);
    setAttribute(_el$8, "filter", `url(#b-${id})`);
    setAttribute(_el$9, "mask", `url(#c-${id})`);
    setAttribute(_el$1, "id", `d-${id}`);
    setAttribute(_el$10, "id", `e-${id}`);
    setAttribute(_el$11, "filter", `url(#d-${id})`);
    setAttribute(_el$12, "mask", `url(#e-${id})`);
    setAttribute(_el$14, "id", `f-${id}`);
    setAttribute(_el$15, "id", `g-${id}`);
    setAttribute(_el$16, "filter", `url(#f-${id})`);
    setAttribute(_el$17, "mask", `url(#g-${id})`);
    setAttribute(_el$19, "id", `h-${id}`);
    setAttribute(_el$20, "id", `i-${id}`);
    setAttribute(_el$21, "filter", `url(#h-${id})`);
    setAttribute(_el$22, "mask", `url(#i-${id})`);
    setAttribute(_el$24, "id", `j-${id}`);
    setAttribute(_el$25, "id", `k-${id}`);
    setAttribute(_el$26, "filter", `url(#j-${id})`);
    setAttribute(_el$27, "mask", `url(#k-${id})`);
    setAttribute(_el$29, "id", `l-${id}`);
    setAttribute(_el$30, "id", `m-${id}`);
    setAttribute(_el$31, "filter", `url(#l-${id})`);
    setAttribute(_el$32, "mask", `url(#m-${id})`);
    setAttribute(_el$34, "id", `n-${id}`);
    setAttribute(_el$35, "id", `o-${id}`);
    setAttribute(_el$36, "filter", `url(#n-${id})`);
    setAttribute(_el$37, "mask", `url(#o-${id})`);
    setAttribute(_el$39, "id", `p-${id}`);
    setAttribute(_el$40, "fill", `url(#p-${id})`);
    setAttribute(_el$42, "id", `q-${id}`);
    setAttribute(_el$43, "id", `r-${id}`);
    setAttribute(_el$44, "filter", `url(#q-${id})`);
    setAttribute(_el$45, "mask", `url(#r-${id})`);
    setAttribute(_el$46, "id", `s-${id}`);
    setAttribute(_el$47, "fill", `url(#s-${id})`);
    setAttribute(_el$48, "id", `t-${id}`);
    setAttribute(_el$49, "fill", `url(#t-${id})`);
    setAttribute(_el$50, "id", `u-${id}`);
    setAttribute(_el$51, "fill", `url(#u-${id})`);
    setAttribute(_el$52, "id", `v-${id}`);
    setAttribute(_el$53, "fill", `url(#v-${id})`);
    setAttribute(_el$54, "id", `w-${id}`);
    setAttribute(_el$55, "fill", `url(#w-${id})`);
    setAttribute(_el$56, "id", `x-${id}`);
    setAttribute(_el$57, "fill", `url(#x-${id})`);
    setAttribute(_el$58, "id", `y-${id}`);
    setAttribute(_el$59, "fill", `url(#y-${id})`);
    setAttribute(_el$61, "id", `z-${id}`);
    setAttribute(_el$62, "id", `A-${id}`);
    setAttribute(_el$63, "filter", `url(#z-${id})`);
    setAttribute(_el$64, "id", `B-${id}`);
    setAttribute(_el$65, "fill", `url(#B-${id})`);
    setAttribute(_el$65, "mask", `url(#A-${id})`);
    setAttribute(_el$67, "id", `C-${id}`);
    setAttribute(_el$68, "id", `D-${id}`);
    setAttribute(_el$69, "filter", `url(#C-${id})`);
    setAttribute(_el$70, "mask", `url(#D-${id})`);
    setAttribute(_el$72, "id", `E-${id}`);
    setAttribute(_el$73, "fill", `url(#E-${id})`);
    setAttribute(_el$74, "id", `F-${id}`);
    setAttribute(_el$75, "stroke", `url(#F-${id})`);
    setAttribute(_el$76, "id", `G-${id}`);
    setAttribute(_el$77, "stroke", `url(#G-${id})`);
    setAttribute(_el$78, "id", `H-${id}`);
    setAttribute(_el$79, "stroke", `url(#H-${id})`);
    setAttribute(_el$80, "id", `I-${id}`);
    setAttribute(_el$81, "stroke", `url(#I-${id})`);
    setAttribute(_el$82, "id", `J-${id}`);
    setAttribute(_el$83, "stroke", `url(#J-${id})`);
    setAttribute(_el$84, "id", `K-${id}`);
    setAttribute(_el$85, "stroke", `url(#K-${id})`);
    setAttribute(_el$86, "id", `L-${id}`);
    setAttribute(_el$87, "stroke", `url(#L-${id})`);
    setAttribute(_el$88, "id", `M-${id}`);
    setAttribute(_el$89, "stroke", `url(#M-${id})`);
    return _el$;
  })();
}

// node_modules/.pnpm/@tanstack+router-devtools-core@1.125.4_@tanstack+router-core@1.125.4_csstype@3.1.3_solid-js@1.9.7_tiny-invariant@1.3.3/node_modules/@tanstack/router-devtools-core/dist/esm/FloatingTanStackRouterDevtools.js
var _tmpl$2 = template(`<button type=button><div><div></div><div></div></div><div>-</div><div>TanStack Router`);
function FloatingTanStackRouterDevtools({
  initialIsOpen,
  panelProps = {},
  closeButtonProps = {},
  toggleButtonProps = {},
  position = "bottom-left",
  containerElement: Container = "footer",
  router,
  routerState,
  shadowDOMTarget
}) {
  const [rootEl, setRootEl] = createSignal();
  let panelRef = void 0;
  const [isOpen, setIsOpen] = useLocalStorage("tanstackRouterDevtoolsOpen", initialIsOpen);
  const [devtoolsHeight, setDevtoolsHeight] = useLocalStorage("tanstackRouterDevtoolsHeight", null);
  const [isResolvedOpen, setIsResolvedOpen] = createSignal(false);
  const [isResizing, setIsResizing] = createSignal(false);
  const isMounted = useIsMounted();
  const styles = useStyles();
  const handleDragStart = (panelElement, startEvent) => {
    if (startEvent.button !== 0) return;
    setIsResizing(true);
    const dragInfo = {
      originalHeight: (panelElement == null ? void 0 : panelElement.getBoundingClientRect().height) ?? 0,
      pageY: startEvent.pageY
    };
    const run = (moveEvent) => {
      const delta = dragInfo.pageY - moveEvent.pageY;
      const newHeight = dragInfo.originalHeight + delta;
      setDevtoolsHeight(newHeight);
      if (newHeight < 70) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    const unsub = () => {
      setIsResizing(false);
      document.removeEventListener("mousemove", run);
      document.removeEventListener("mouseUp", unsub);
    };
    document.addEventListener("mousemove", run);
    document.addEventListener("mouseup", unsub);
  };
  isOpen() ?? false;
  createEffect(() => {
    setIsResolvedOpen(isOpen() ?? false);
  });
  createEffect(() => {
    var _a, _b, _c;
    if (isResolvedOpen()) {
      const previousValue = (_b = (_a = rootEl()) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.style.paddingBottom;
      const run = () => {
        var _a2;
        const containerHeight = panelRef.getBoundingClientRect().height;
        if ((_a2 = rootEl()) == null ? void 0 : _a2.parentElement) {
          setRootEl((prev) => {
            if (prev == null ? void 0 : prev.parentElement) {
              prev.parentElement.style.paddingBottom = `${containerHeight}px`;
            }
            return prev;
          });
        }
      };
      run();
      if (typeof window !== "undefined") {
        window.addEventListener("resize", run);
        return () => {
          var _a2;
          window.removeEventListener("resize", run);
          if (((_a2 = rootEl()) == null ? void 0 : _a2.parentElement) && typeof previousValue === "string") {
            setRootEl((prev) => {
              prev.parentElement.style.paddingBottom = previousValue;
              return prev;
            });
          }
        };
      }
    } else {
      if ((_c = rootEl()) == null ? void 0 : _c.parentElement) {
        setRootEl((prev) => {
          if (prev == null ? void 0 : prev.parentElement) {
            prev.parentElement.removeAttribute("style");
          }
          return prev;
        });
      }
    }
    return;
  });
  createEffect(() => {
    if (rootEl()) {
      const el = rootEl();
      const fontSize = getComputedStyle(el).fontSize;
      el == null ? void 0 : el.style.setProperty("--tsrd-font-size", fontSize);
    }
  });
  const {
    style: panelStyle = {},
    ...otherPanelProps
  } = panelProps;
  const {
    style: closeButtonStyle = {},
    onClick: onCloseClick,
    ...otherCloseButtonProps
  } = closeButtonProps;
  const {
    onClick: onToggleClick,
    class: toggleButtonClassName,
    ...otherToggleButtonProps
  } = toggleButtonProps;
  if (!isMounted()) return null;
  const resolvedHeight = createMemo(() => devtoolsHeight() ?? 500);
  const basePanelClass = createMemo(() => {
    return clsx(styles().devtoolsPanelContainer, styles().devtoolsPanelContainerVisibility(!!isOpen()), styles().devtoolsPanelContainerResizing(isResizing), styles().devtoolsPanelContainerAnimation(isResolvedOpen(), resolvedHeight() + 16));
  });
  const basePanelStyle = createMemo(() => {
    return {
      height: `${resolvedHeight()}px`,
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      ...panelStyle || {}
    };
  });
  const buttonStyle = createMemo(() => {
    return clsx(styles().mainCloseBtn, styles().mainCloseBtnPosition(position), styles().mainCloseBtnAnimation(!!isOpen()), toggleButtonClassName);
  });
  return createComponent(Dynamic, {
    component: Container,
    ref: setRootEl,
    "class": "TanStackRouterDevtools",
    get children() {
      return [createComponent(DevtoolsOnCloseContext.Provider, {
        value: {
          onCloseClick: onCloseClick ?? (() => {
          })
        },
        get children() {
          return createComponent(BaseTanStackRouterDevtoolsPanel, mergeProps({
            ref(r$) {
              var _ref$ = panelRef;
              typeof _ref$ === "function" ? _ref$(r$) : panelRef = r$;
            }
          }, otherPanelProps, {
            router,
            routerState,
            className: basePanelClass,
            style: basePanelStyle,
            get isOpen() {
              return isResolvedOpen();
            },
            setIsOpen,
            handleDragStart: (e) => handleDragStart(panelRef, e),
            shadowDOMTarget
          }));
        }
      }), (() => {
        var _el$ = _tmpl$2(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$2.nextSibling, _el$6 = _el$5.nextSibling;
        spread(_el$, mergeProps(otherToggleButtonProps, {
          "aria-label": "Open TanStack Router Devtools",
          "onClick": (e) => {
            setIsOpen(true);
            onToggleClick && onToggleClick(e);
          },
          get ["class"]() {
            return buttonStyle();
          }
        }), false, true);
        insert(_el$3, createComponent(TanStackLogo, {}));
        insert(_el$4, createComponent(TanStackLogo, {}));
        createRenderEffect((_p$) => {
          var _v$ = styles().mainCloseBtnIconContainer, _v$2 = styles().mainCloseBtnIconOuter, _v$3 = styles().mainCloseBtnIconInner, _v$4 = styles().mainCloseBtnDivider, _v$5 = styles().routerLogoCloseButton;
          _v$ !== _p$.e && className(_el$2, _p$.e = _v$);
          _v$2 !== _p$.t && className(_el$3, _p$.t = _v$2);
          _v$3 !== _p$.a && className(_el$4, _p$.a = _v$3);
          _v$4 !== _p$.o && className(_el$5, _p$.o = _v$4);
          _v$5 !== _p$.i && className(_el$6, _p$.i = _v$5);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0,
          o: void 0,
          i: void 0
        });
        return _el$;
      })()];
    }
  });
}
export {
  FloatingTanStackRouterDevtools,
  FloatingTanStackRouterDevtools as default
};
//# sourceMappingURL=FloatingTanStackRouterDevtools-GP4EDJ43.js.map
