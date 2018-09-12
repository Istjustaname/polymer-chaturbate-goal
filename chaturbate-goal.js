import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class ChaturbateGoal extends PolymerElement {
  static get template() {
    return html `    <style>
  :host {
    --cb-info-color: #fff;
    --cb-chat-text-shadow-color: rgba(0, 0, 0, 0.65);
    --cb-default-background-color: rgba(0,0,0,0.5);
  }

  .progress {
    color: var(--cb-info-color);
    background-color: var(--cb-default-background-color);
    text-shadow: -1px 0 var(--cb-chat-text-shadow-color),
                 0 1px var(--cb-chat-text-shadow-color),
                 1px 0 var(--cb-chat-text-shadow-color),
                 0 -1px var(--cb-chat-text-shadow-color);
    border-radius: 4px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #bar {
    background-color: rgba(355,0,0,0.7);
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 4px;
  }

  #percent {
    z-index: 2;
    padding: 8px;
  }
</style>

<template is="dom-if" if="{{goal.hasGoal}}">
  <div class="progress">
    <div id="bar" style$="width: [[width]]%;"></div>
    <div id="percent">Goal - [[width]]%</div>
  </div>
</template>`;
  }

  static get properties() {
    return {
      goal: {
        type: Object,
        value: null
      },
      width: {
        type: Number,
        value: 0,
        computed: '_getWidth(goal)'
      }
    }
  }

  _getWidth(goal) {
    if (!goal) return 0;
    if (!goal.goalAmount) return 0;
    const val = Math.round((goal.goalCurrent / goal.goalAmount) * 100);
    return val;
  }
}

window.customElements.define('chaturbate-goal', ChaturbateGoal);
