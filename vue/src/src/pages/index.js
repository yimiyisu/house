import announcement from './announcement/index';
import daily from './daily/index';
import equipment from './equipment/index';
import finance from './finance/index';
import landlord from './landlord/index';
import patrol from './patrol/index';
import setting from './setting/index';
import visitor from './visitor/index';
import workorder from './workorder/index';

export default {
  ...announcement,
	...daily,
	...equipment,
	...finance,
	...landlord,
	...patrol,
	...setting,
	...visitor,
	...workorder
};