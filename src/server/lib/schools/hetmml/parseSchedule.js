const { JSDOM } = require('jsdom');

function fixFirstLargeScheduleItem(trNodeList) {
  return Array.from(trNodeList).some((trNode, timeOfDay) => {
    const tdNodeList = trNode.children;

    return Array.from(tdNodeList).some((tdNode, dayOfWeek) => {
      const height = tdNode.rowSpan / 2;
      if (height === 1) {
        return false;
      }

      tdNode.rowSpan = 2; // eslint-disable-line no-param-reassign

      for (let i = 1; i < height; i += 1) {
        // Are we at the end of the table?
        if (dayOfWeek === 4) {
          // If so, we cannot use insertBefore, because the is no node to insert
          // it before. Use appendChild instead.
          trNodeList[timeOfDay + i].appendChild(tdNode.cloneNode(true));
        } else {
          trNodeList[timeOfDay + i]
            .insertBefore(
              tdNode.cloneNode(true),
              trNodeList[timeOfDay + i].children[dayOfWeek],
            );
        }
      }

      return true;
    });
  });
}

function parseSchedule(axiosResponse) {
  const dom = new JSDOM(axiosResponse.data);
  const { window } = dom;
  const { document } = window;

  const tableNode = document.querySelector('center > table');
  const tbodyNode = tableNode.querySelector('tbody');
  const trNodeList = tbodyNode.children;

  Array.from(trNodeList).forEach((trNode, timeOfDay) => {
    const tdNodeList = trNode.children;

    if (timeOfDay === 0 || trNode.children.length === 0) {
      tbodyNode.removeChild(trNode);
      return;
    }

    Array.from(tdNodeList).forEach((tdNode, dayOfWeek) => {
      if (dayOfWeek === 0) {
        trNode.removeChild(tdNode);
      }
    });
  });

  let shouldContinue = true;
  while (shouldContinue) {
    shouldContinue = fixFirstLargeScheduleItem(trNodeList);
  }

  const scheduleItems = [];

  Array.from(trNodeList).forEach((trNode, timeOfDay) => {
    const tdNodeList = trNode.children;
    Array.from(tdNodeList).forEach((tdNode, dayOfWeek) => {
      if (tdNode.textContent.trim() === '') {
        return;
      }

      const childTableNode = tdNode.querySelector('table');
      const childTrNodeList = childTableNode.querySelectorAll('tr');

      Array.from(childTrNodeList).forEach((childTrNode) => {
        const subject = childTrNode.children[0].textContent.trim();
        const attendees = childTrNode.children[1]
          ? childTrNode.children[1].textContent.trim()
          : undefined;
        const location = childTrNode.children[2]
          ? childTrNode.children[2].textContent.trim()
          : undefined;

        scheduleItems.push({
          startTime: timeOfDay,
          endTime: timeOfDay + 1,
          dayOfWeek,
          subject,
          attendees,
          location,
        });
      });
    });
  });

  return scheduleItems;
}

module.exports = parseSchedule;
