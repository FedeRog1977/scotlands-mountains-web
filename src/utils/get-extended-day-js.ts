import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat.js';
import timezone from 'dayjs/plugin/timezone.js';
import utc from 'dayjs/plugin/utc.js';

dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

export default dayjs;
