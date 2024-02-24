export const timeAgo = (timestamp) => {
  const timestampMillis = timestamp * 1000;
  const date = new Date(timestampMillis);
  const todaysDate = new Date();
  const differenceInMillis = todaysDate - date;

  const secondsAgo = Math.floor(differenceInMillis / 1000);
  const minutesAgo = Math.floor(secondsAgo / 60);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);
  var timeAgo;

  if (daysAgo >= 1) {
    timeAgo = daysAgo === 1 ? '1 day ago' : daysAgo + ' days ago';
  } else if (hoursAgo >= 1) {
    timeAgo = hoursAgo == 1 ? '1 hour ago' : hoursAgo + ' hours ago';
  } else if (minutesAgo >= 1) {
    timeAgo = minutesAgo === 1 ? '1 minute ago' : minutesAgo + ' minutes ago';
  } else {
    timeAgo = secondsAgo === 1 ? '1 second ago' : secondsAgo + ' seconds ago';
  }
  return timeAgo;
};
