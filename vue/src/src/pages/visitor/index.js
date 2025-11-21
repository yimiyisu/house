import VisitorAppointment from "./appointment/appointment";
import VisitorContact from "./contact/contact";
import VisitorGate from "./gate/gate";
import VisitorRegistration from "./registration/registration";
import VisitorVisitor from "./visitor/visitor";

export default {
	'visitor/appointment': VisitorAppointment,
	'visitor/contact': VisitorContact,
	'visitor/gate': VisitorGate,
	'visitor/registration': VisitorRegistration,
	'visitor/visitor': VisitorVisitor
}