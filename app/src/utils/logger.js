const _0x25c2b6=_0xfd76;function _0x2e6c(){const _0x16b44f=['462460PgSiYV','315018hZzLvs',']:\x20','145288DzXhSm','warn','truncate','level','error','log/app.log','Failed\x20to\x20clear\x20the\x20log\x20file:\x20','2653798kaiNWO','8DQIqqK','logger','message','160834ZtTkHE','220945PenkDT','1584402iIsOLF','clear','info','File','debug'];_0x2e6c=function(){return _0x16b44f;};return _0x2e6c();}(function(_0x2ba2e9,_0x2e0de3){const _0x4d4db7=_0xfd76,_0x1d749d=_0x2ba2e9();while(!![]){try{const _0x4b5ef2=-parseInt(_0x4d4db7(0x1b0))/0x1+parseInt(_0x4d4db7(0x1a2))/0x2+parseInt(_0x4d4db7(0x1a3))/0x3+parseInt(_0x4d4db7(0x1a5))/0x4+parseInt(_0x4d4db7(0x1b1))/0x5+parseInt(_0x4d4db7(0x19d))/0x6+-parseInt(_0x4d4db7(0x1ac))/0x7*(parseInt(_0x4d4db7(0x1ad))/0x8);if(_0x4b5ef2===_0x2e0de3)break;else _0x1d749d['push'](_0x1d749d['shift']());}catch(_0xc5bdd1){_0x1d749d['push'](_0x1d749d['shift']());}}}(_0x2e6c,0x22642));import{createLogger,format,transports}from'winston';import _0xc0c418 from'fs';const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0x5c882f,message:_0x34e701,timestamp:_0x321c2b})=>{const _0x581a82=_0xfd76;return _0x321c2b+'\x20['+_0x5c882f+_0x581a82(0x1a4)+_0x34e701;});class Logger{constructor(){const _0x423046=_0xfd76;this[_0x423046(0x1ae)]=createLogger({'level':_0x423046(0x1a1),'format':combine(timestamp({'format':'YYYY-MM-DD\x20HH:mm:ss'}),colorize(),customFormat),'transports':[new transports['File']({'filename':_0x423046(0x1aa)})],'exceptionHandlers':[new transports[(_0x423046(0x1a0))]({'filename':_0x423046(0x1aa)})],'rejectionHandlers':[new transports['File']({'filename':'log/app.log'})]});}[_0x25c2b6(0x19f)](_0xe940c){const _0x31359e=_0x25c2b6;this['logger'][_0x31359e(0x19f)](_0xe940c);}[_0x25c2b6(0x1a6)](_0xe432ce){const _0x20ef25=_0x25c2b6;this['logger'][_0x20ef25(0x1a6)](_0xe432ce);}[_0x25c2b6(0x1a9)](_0x173c6c){const _0x4af4d8=_0x25c2b6;this[_0x4af4d8(0x1ae)]['error'](_0x173c6c);}[_0x25c2b6(0x1a1)](_0x4c01fd){const _0x381586=_0x25c2b6;this[_0x381586(0x1ae)]['debug'](_0x4c01fd);}['setLevel'](_0x5ce9b9){const _0x5e2b7a=_0x25c2b6;this[_0x5e2b7a(0x1ae)][_0x5e2b7a(0x1a8)]=_0x5ce9b9;}[_0x25c2b6(0x19e)](){const _0x27e203=_0x25c2b6;_0xc0c418[_0x27e203(0x1a7)]('log/app.log',0x0,_0x363877=>{const _0x2f0a5a=_0x27e203;_0x363877?this[_0x2f0a5a(0x1ae)][_0x2f0a5a(0x1a9)](_0x2f0a5a(0x1ab)+_0x363877[_0x2f0a5a(0x1af)]):this['logger'][_0x2f0a5a(0x19f)]('Log\x20file\x20cleared');});}}function _0xfd76(_0xb47175,_0x48d41f){const _0x2e6cf7=_0x2e6c();return _0xfd76=function(_0xfd7630,_0x323100){_0xfd7630=_0xfd7630-0x19d;let _0x20d773=_0x2e6cf7[_0xfd7630];return _0x20d773;},_0xfd76(_0xb47175,_0x48d41f);}export default new Logger();