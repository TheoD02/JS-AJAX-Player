using MySql.Data.MySqlClient;
using Org.BouncyCastle.Math.EC;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Projet_Titre_Pro_Upload
{
    class DB
    {
        private MySqlConnection connection;
        public void ConnectDB()
        {
            // Connection String.
            String connString = "Server=" + Properties.Settings.Default.sqlHost + ";Database=" + Properties.Settings.Default.sqlDB
                + ";port=" + Properties.Settings.Default.sqlPort + ";User Id=" + Properties.Settings.Default.sqlUser + ";password=" + Properties.Settings.Default.sqlPass;

            connection = new MySqlConnection(connString);
        }

        public void addMusic(MusicData music)
        {
            try
            {
                // Ouverture de la connexion SQL
                this.connection.Open();

                // Création d'une commande SQL en fonction de l'objet connection
                MySqlCommand cmd = this.connection.CreateCommand();

                // Requête SQL
                cmd.CommandText = "INSERT INTO music (titre, artiste, filepath) VALUES (@titre, @artiste, @filepath)";

                // utilisation de l'objet contact passé en paramètre
                cmd.Parameters.AddWithValue("@titre", music.titre);
                cmd.Parameters.AddWithValue("@artiste", music.artiste);
                cmd.Parameters.AddWithValue("@filepath", music.path);
                // Exécution de la commande SQL
                cmd.ExecuteNonQuery();

                // Fermeture de la connexion
                this.connection.Close();
            }
            catch (Exception e)
            {

                MessageBox.Show(e.ToString());
                // Gestion des erreurs :
                // Possibilité de créer un Logger pour les exceptions SQL reçus
                // Possibilité de créer une méthode avec un booléan en retour pour savoir si le contact à été ajouté correctement.
            }
        }
    }
}
