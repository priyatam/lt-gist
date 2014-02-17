if(!lt.util.load.provided_QMARK_('lt.plugins.gist')) {
goog.provide('lt.plugins.gist');
goog.require('cljs.core');
goog.require('lt.util.js');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.proc');
goog.require('lt.objs.editor');
goog.require('lt.util.js');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.gist.get_current_file = (function get_current_file(){var ed = lt.objs.editor.pool.last_active.call(null);var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);return path;
});
lt.plugins.gist.__BEH__submit_gist = (function __BEH__submit_gist(this$){return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),"gist",new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.gist.get_current_file.call(null)], null),new cljs.core.Keyword(null,"obj","obj",1014014057),lt.plugins.gist.gist], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gist","submit-gist","lt.plugins.gist/submit-gist",4275136818),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gist.__BEH__submit_gist,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gist-submit","gist-submit",4742521300),null], null), null));
lt.plugins.gist.__BEH__on_out = (function __BEH__on_out(this$,data){var out = data.toString();lt.objs.editor.clipboard.set(out,"text");
return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Copied "),cljs.core.str(out),cljs.core.str(" to clipboard")].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gist","on-out","lt.plugins.gist/on-out",3422353434),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gist.__BEH__on_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null,new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));
lt.plugins.gist.gist = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gist","gist","lt.plugins.gist/gist",4275746759),new cljs.core.Keyword(null,"name","name",1017277949),"Gist data",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gist","submit-gist","lt.plugins.gist/submit-gist",4275136818),new cljs.core.Keyword("lt.plugins.gist","on-out","lt.plugins.gist/on-out",3422353434),new cljs.core.Keyword("lt.plugins.gist","on-error","lt.plugins.gist/on-error",4136438240)], null)));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gist.submit","gist.submit",1335057685),new cljs.core.Keyword(null,"desc","desc",1016984067),"Gist: Submit Gist",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.gist.gist,new cljs.core.Keyword(null,"gist-submit","gist-submit",4742521300));
})], null));
}

//# sourceMappingURL=gist_compiled.js.map