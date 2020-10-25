namespace Projet_Titre_Pro_Upload
{
    partial class DatabaseConnect
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.txtBox_Host = new System.Windows.Forms.TextBox();
            this.txtBox_dbName = new System.Windows.Forms.TextBox();
            this.txtBox_User = new System.Windows.Forms.TextBox();
            this.txtBox_Pass = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.numUpDown_Port = new System.Windows.Forms.NumericUpDown();
            this.label5 = new System.Windows.Forms.Label();
            this.btn_Save = new System.Windows.Forms.Button();
            this.btn_Leave = new System.Windows.Forms.Button();
            this.checkBox_ShowPass = new System.Windows.Forms.CheckBox();
            ((System.ComponentModel.ISupportInitialize)(this.numUpDown_Port)).BeginInit();
            this.SuspendLayout();
            // 
            // txtBox_Host
            // 
            this.txtBox_Host.Location = new System.Drawing.Point(27, 27);
            this.txtBox_Host.Name = "txtBox_Host";
            this.txtBox_Host.Size = new System.Drawing.Size(197, 20);
            this.txtBox_Host.TabIndex = 0;
            // 
            // txtBox_dbName
            // 
            this.txtBox_dbName.Location = new System.Drawing.Point(27, 66);
            this.txtBox_dbName.Name = "txtBox_dbName";
            this.txtBox_dbName.Size = new System.Drawing.Size(197, 20);
            this.txtBox_dbName.TabIndex = 0;
            // 
            // txtBox_User
            // 
            this.txtBox_User.Location = new System.Drawing.Point(27, 105);
            this.txtBox_User.Name = "txtBox_User";
            this.txtBox_User.Size = new System.Drawing.Size(197, 20);
            this.txtBox_User.TabIndex = 0;
            // 
            // txtBox_Pass
            // 
            this.txtBox_Pass.Location = new System.Drawing.Point(27, 144);
            this.txtBox_Pass.Name = "txtBox_Pass";
            this.txtBox_Pass.Size = new System.Drawing.Size(197, 20);
            this.txtBox_Pass.TabIndex = 0;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(105, 11);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(38, 13);
            this.label1.TabIndex = 1;
            this.label1.Text = "Host : ";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(80, 50);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(88, 13);
            this.label2.TabIndex = 2;
            this.label2.Text = "Database name :";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(107, 89);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(35, 13);
            this.label3.TabIndex = 3;
            this.label3.Text = "User :";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(106, 128);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(36, 13);
            this.label4.TabIndex = 4;
            this.label4.Text = "Pass :";
            // 
            // numUpDown_Port
            // 
            this.numUpDown_Port.Location = new System.Drawing.Point(27, 183);
            this.numUpDown_Port.Maximum = new decimal(new int[] {
            9999999,
            0,
            0,
            0});
            this.numUpDown_Port.Name = "numUpDown_Port";
            this.numUpDown_Port.Size = new System.Drawing.Size(195, 20);
            this.numUpDown_Port.TabIndex = 5;
            this.numUpDown_Port.Value = new decimal(new int[] {
            3306,
            0,
            0,
            0});
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(108, 167);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(32, 13);
            this.label5.TabIndex = 6;
            this.label5.Text = "Port :";
            // 
            // btn_Save
            // 
            this.btn_Save.Location = new System.Drawing.Point(27, 209);
            this.btn_Save.Name = "btn_Save";
            this.btn_Save.Size = new System.Drawing.Size(197, 23);
            this.btn_Save.TabIndex = 7;
            this.btn_Save.Text = "Sauvegarder";
            this.btn_Save.UseVisualStyleBackColor = true;
            this.btn_Save.Click += new System.EventHandler(this.btn_Save_Click);
            // 
            // btn_Leave
            // 
            this.btn_Leave.Location = new System.Drawing.Point(27, 238);
            this.btn_Leave.Name = "btn_Leave";
            this.btn_Leave.Size = new System.Drawing.Size(197, 23);
            this.btn_Leave.TabIndex = 8;
            this.btn_Leave.Text = "Quitter";
            this.btn_Leave.UseVisualStyleBackColor = true;
            this.btn_Leave.Click += new System.EventHandler(this.btn_Leave_Click);
            // 
            // checkBox_ShowPass
            // 
            this.checkBox_ShowPass.AutoSize = true;
            this.checkBox_ShowPass.Location = new System.Drawing.Point(144, 127);
            this.checkBox_ShowPass.Name = "checkBox_ShowPass";
            this.checkBox_ShowPass.Size = new System.Drawing.Size(83, 17);
            this.checkBox_ShowPass.TabIndex = 9;
            this.checkBox_ShowPass.Text = "showPass ?";
            this.checkBox_ShowPass.UseVisualStyleBackColor = true;
            // 
            // DatabaseConnect
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(248, 273);
            this.ControlBox = false;
            this.Controls.Add(this.checkBox_ShowPass);
            this.Controls.Add(this.btn_Leave);
            this.Controls.Add(this.btn_Save);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.numUpDown_Port);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.txtBox_Pass);
            this.Controls.Add(this.txtBox_User);
            this.Controls.Add(this.txtBox_dbName);
            this.Controls.Add(this.txtBox_Host);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "DatabaseConnect";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterParent;
            this.Text = "DatabaseConnect";
            this.Load += new System.EventHandler(this.DatabaseConnect_Load);
            ((System.ComponentModel.ISupportInitialize)(this.numUpDown_Port)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox txtBox_Host;
        private System.Windows.Forms.TextBox txtBox_dbName;
        private System.Windows.Forms.TextBox txtBox_User;
        private System.Windows.Forms.TextBox txtBox_Pass;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.NumericUpDown numUpDown_Port;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Button btn_Save;
        private System.Windows.Forms.Button btn_Leave;
        private System.Windows.Forms.CheckBox checkBox_ShowPass;
    }
}