using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Net.WebRequestMethods;

namespace Projet_Titre_Pro_Upload
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void databaseInfosToolStripMenuItem_Click(object sender, EventArgs e)
        {
            DatabaseConnect DC = new DatabaseConnect();
            DC.ShowDialog();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (openFileDialog1.ShowDialog() == DialogResult.OK)
            {
                DB SQL = new DB();
                SQL.ConnectDB();
                foreach (var file in openFileDialog1.FileNames)
                {
                    var MD = readTag(file);
                    uploadFileFTP(file);
                    SQL.addMusic(MD);
                }
                MessageBox.Show("Ajouter");
            }
        }
        private MusicData readTag(string path)
        {
            MusicData tempMD = new MusicData();

            ID3Tag.Core.TagParser.ID3v1Parser reader = new ID3Tag.Core.TagParser.ID3v1Parser();
            ID3Tag.Core.ID3TagObject resp = reader.Read(path);
            if (resp != null)
            {
                tempMD.titre = resp.Title;
                tempMD.artiste = resp.Artist;
            }
            var fileWithoutDangerChar = path.Replace("!", "%21").Replace("\"", "%22").Replace("#", "%23").Replace("$", "%24").Replace("%", "%25").Replace("&", "%26").Replace("'", "%27").Replace("*", "%2A").Replace("-", "%2D").Replace(".", "%2E").Replace("/", "%2F").Replace(":", "%3A").Replace(";", "%3B").Replace("=", "%3D").Replace("?", "%3F").Replace("@", "%40");
            tempMD.path = "assets/mp3/" + Path.GetFileName(fileWithoutDangerChar);


            return tempMD;
        }
        private void uploadFileFTP(string pathfile)
        {
            using (var client = new WebClient())
            {
                client.Credentials = new NetworkCredential("root", "");
                client.UploadFile("ftp://127.0.0.1/Test Ajax-PHP/assets/mp3/" + Path.GetFileName(pathfile), WebRequestMethods.Ftp.UploadFile, pathfile);
            }
        }
    }
}
