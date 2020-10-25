using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Projet_Titre_Pro_Upload
{
    public partial class DatabaseConnect : Form
    {
        public DatabaseConnect()
        {
            InitializeComponent();
        }

        private void btn_Save_Click(object sender, EventArgs e)
        {
            Properties.Settings.Default.sqlHost = txtBox_Host.Text;
            Properties.Settings.Default.sqlDB = txtBox_dbName.Text;
            Properties.Settings.Default.sqlUser = txtBox_User.Text;
            Properties.Settings.Default.sqlPass = txtBox_Pass.Text;
            Properties.Settings.Default.sqlPort = (int)numUpDown_Port.Value;
            Properties.Settings.Default.Save();
            MessageBox.Show("Données bien sauvegardée !", "Sauvegarde effectuée", MessageBoxButtons.OK, MessageBoxIcon.Information);
            this.Close();
        }

        private void btn_Leave_Click(object sender, EventArgs e)
        {
            if (MessageBox.Show("Est-tu sûr de vouloir quitter cette fenêtre et annuler tous changements effectuer ?", "Tu est sur ?", MessageBoxButtons.OKCancel, MessageBoxIcon.Warning) == DialogResult.OK)
            {
                this.Close();
            }
        }

        private void DatabaseConnect_Load(object sender, EventArgs e)
        {
            txtBox_Host.Text = Properties.Settings.Default.sqlHost;
            txtBox_dbName.Text = Properties.Settings.Default.sqlDB;
            txtBox_User.Text = Properties.Settings.Default.sqlUser;
            txtBox_Pass.Text = Properties.Settings.Default.sqlPass;
            numUpDown_Port.Value = Properties.Settings.Default.sqlPort;
        }
    }
}
