(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@bhmb/bot')) :
    typeof define === 'function' && define.amd ? define(['@bhmb/bot'], factory) :
    (factory(global['@bhmb/bot']));
}(this, (function (bot) { 'use strict';
    const MessageBot = bot.MessageBot

    MessageBot.registerExtension('hailey/poll', function (ex, world) {
         ex.world.addCommand('poll', function() {
        ex.bot.send('Vote counted!')
    });
    
}))
