(ns lt.plugins.gist
  (:require [lt.object :as object]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.proc :as proc]
            [lt.objs.command :as cmd]
            [lt.objs.notifos :as notifos]
            [lt.util.js :as util])
  (:require-macros [lt.macros :refer [behavior defui]]))

;; Object

(def gist (object/create (object/object* ::gist
                                         :name "Gist data"
                                         :behaviors [::submit-gist ::on-out ::on-error])))


(defn get-current-file []
    (let [ed   (pool/last-active)
          info (:info @ed)
          path (:path info)]
;;      (.log js/console path)
      path))

;; Behaviors

(behavior ::submit-gist
          :triggers #{:gist-submit}
          :reaction (fn [this]
                      (proc/exec {:command "gist" :args [(get-current-file)]:obj gist})))

(behavior ::on-out
          :triggers #{:proc.out :proc.error} ;; proc/exec has a copy of the gist object
          :reaction (fn [this data]
                      (let [out (.toString data)]
                        (.set editor/clipboard out "text")
                        (notifos/set-msg! (str "Copied " out " to clipboard")))))

;; Commands
(cmd/command {:command :gist.submit
              :desc "Gist: Submit this file as Gist"
              :exec (fn [] (object/raise gist :gist-submit))})

