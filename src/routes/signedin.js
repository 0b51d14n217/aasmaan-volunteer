import firebaseApp from "../firebase/client";
import firebase from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

export default function SignedIn() {
  const [user, loading, error] = useAuthState(firebaseApp.auth());
  console.log(user, "|", loading, "|", error);

  const [tasks, taskloading, taskerror] = useCollection(firebase.firestore.collection("tasks"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  console.log(tasks, "|", taskloading, "|", taskerror);

  return (
    <>
      <h1>Hello !</h1>
    </>
  );
}
