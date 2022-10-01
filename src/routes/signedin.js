import firebaseApp from "../firebase/client";
import { collection, getFirestore } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

export default function SignedIn() {
  const [user, loading, error] = useAuthState(firebaseApp.auth());
  console.log(user, "|", loading, "|", error);

  //const [tasks, taskloading, taskerror] = useCollection(collection("tasks"), {
  //  snapshotListenOptions: { includeMetadataChanges: true },
  //});
  //const [tasks, taskloading, taskerror] = useCollection(collection(getFirestore(firebaseApp), "tasks"), {});

  const [tasks, taskloading, taskerror] = useCollection(firebaseApp.firestore().collection("votes"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  console.log(tasks, "|", taskloading, "|", taskerror);

  return (
    <>
      <h1>Hello !</h1>
    </>
  );
}
