GLOBAL['#FairKey#']=(function(__initProps__){const __global__=this;return runCallback(function(__mod__){with(__mod__.imports){function _MyHomePageState(){const inner=_MyHomePageState.__inner__;if(this==__global__){return new _MyHomePageState({__args__:arguments});}else{const args=arguments.length>0?arguments[0].__args__||arguments:[];inner.apply(this,args);_MyHomePageState.prototype.ctor.apply(this,args);return this;}}_MyHomePageState.__inner__=function inner(){this.fairProps=__initProps__;this._counter=0;this._title=null;};_MyHomePageState.prototype={onLoad:function onLoad(){const __thiz__=this;with(__thiz__){_title=fairProps.__op_idx__('title');}},initState:function initState(){const __thiz__=this;with(__thiz__){fairProps=widget.data;onLoad();}},_incrementCounter:function _incrementCounter(){const __thiz__=this;with(__thiz__){setState('#FairKey#',function dummy(){_counter++;});}},};_MyHomePageState.prototype.ctor=function(){Object.prototype.ctor.call(this);};;return _MyHomePageState();}},[]);})(convertObjectLiteralToSetOrMap(JSON.parse('#FairProps#')));