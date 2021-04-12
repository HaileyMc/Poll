function notAnIIFE(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factoryFunction(require('@bhmb/bot')) :
    typeof define === 'function' && define.amd ? define(['@bhmb/bot'], factoryFunction) :
    (factoryFunction(global['@bhmb/bot']));
}

function factoryFunction(bot) {
    'use strict';
    const MessageBot = bot.MessageBot

    MessageBot.registerExtension('hailey/poll', function (ex, world) {
        console.log('got here 1')
        ex.world.addCommand('/poll', function() {
          console.log('got here 2')
          ex.bot.send('Vote counted!');
        })
    })
}

notAnIIFE(this, factoryFunction(factoryFunction(global['@bhmb/bot']))
