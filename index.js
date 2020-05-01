/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} robot
 */

  module.exports = robot => {
    robot.on('issues.opened',async context => {
      const { body } = context.payload.issue;

      // create a comment
      const comment = context.issue({
          body: body.includes('Thanks')
             ? 'You are Welcome!'
             : 'Thanks!'
      });
      // publish it
      return context.github.issues.createComment(comment); 
    });
}
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/

