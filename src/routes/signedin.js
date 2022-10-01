import firebaseApp from "../firebase/client";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

export default function SignedIn() {
  const [user, loading, error] = useAuthState(firebaseApp.auth());
  console.log(user, "|", loading, "|", error);

  //const [tasks, taskloading, taskerror] = useCollection(collection("tasks"), {
  //  snapshotListenOptions: { includeMetadataChanges: true },
  //});
  //const [tasks, taskloading, taskerror] = useCollection(collection(getFirestore(firebaseApp), "tasks"), {});
  const db = firebaseApp.firestore();
  const [tasks, taskloading, taskerror] = useCollection(firebaseApp.firestore().collection("tasks"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  console.log(tasks, "|", taskloading, "|", taskerror);
  return (
    <>
      <h1>Hello !</h1>
      {tasks?.docs?.map((doc) => {
        const Accept = async () => {
          const id = doc.id;
          const userid = user.id;
          await db.collection("tasks").doc(db, "tasks", id).update({ status: "accepted", user: userid });
        };
        return (
          <div key={doc.id}>
            {console.log(doc.data())}
            <p>{doc.data().videolink}</p>
            <p>{doc.data().phone}</p>
            <button onClick={Accept(doc.data(), doc.id, user.uid)}>Accept</button>
            {/*<p>{doc.data().location}</p>*/}
          </div>
        );
      })}
    </>
  );
}
