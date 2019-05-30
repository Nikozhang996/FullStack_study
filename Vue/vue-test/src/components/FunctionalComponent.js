import Vue from 'vue';

export default {
  functional: true,
  render(h, context) {
    console.log(context);
    const {type, time} = context.props;

    const tag = `h${type}`;

    return <tag>
      <time>{time}</time>
      <div>{context.slots().header}</div>
      <div>{context.slots().default}</div>
      <div>{context.slots().footer}</div>
    </tag>;
  }
};
