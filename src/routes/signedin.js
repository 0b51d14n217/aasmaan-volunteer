import firebaseApp from "../firebase/client";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { useEffect } from "react";

export default function SignedIn() {
  const [user, loading, error] = useAuthState(firebaseApp.auth());
  console.log(user, "|", loading, "|", error);
  const db = firebaseApp.firestore();
  const [tasks, taskloading, taskerror] = useCollection(firebaseApp.firestore().collection("tasks"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  console.log(tasks, "|", taskloading, "|", taskerror);
  return (
    <>
      {tasks?.docs?.map((doc) => {
        /*const Accept = () => {
          const id = doc.id;
          const userid = user.id;
          db.collection("tasks").doc(db, "tasks", id).update({  });
          console.log("accept function called");
        };
        })*/

        function Accept() {
          const id = doc.id;
          const userid = user.id;
          const taskref = db.collection("tasks").doc(id);
          taskref.update(JSON.parse(JSON.stringify({ status: "accepted", volunteer: userid })));
        }

        return (
          <div key={doc.id}>
            {/*console.log(doc.data())*/}
            <p>{doc.data().videolink}</p>
            <p>{doc.data().phone}</p>
            <p>{doc.data().status}</p>
            <button onClick={Accept}>Accept</button>
            {/*<p>{doc.data().location}</p>*/}
          </div>
        );
      })}

      
    </>
  );
}
