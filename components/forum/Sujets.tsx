import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function SujetsPage() {
  const { data: sujets, error } = useSWR("/api/forum/sujet", fetcher);

  if (error) return <div>Erreur lors du chargement des sujets</div>;
  if (!sujets) return <div>Chargement des sujets...</div>;

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/forum/sujet`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      if (response.ok) console.log("Sujet supprimé avec succès");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-fit h-fit px-4 py-2 text-custom-black-regular">
      <h1>Sujets</h1>
      <ul className="p-6 rounded-md border-custom-gray border-2 max-w-2xl">
        {sujets.map((sujet: any) => (
          <li key={sujet.id} className="h1">
            <h2 className="h2">{sujet.titre}</h2>
            <p className="text">{sujet.description}</p>
            <p className="text font-semibold">
              Auteur: {sujet.utilisateur.nom}
            </p>
            <button
              className=" btn"
              onClick={() => handleDelete(sujet.id_sujet as string)}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SujetsPage;
