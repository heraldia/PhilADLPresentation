namespace WebApplication1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "ActivityModels",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        Username = c.String(),
                        Longitude = c.String(),
                        Latitude = c.String(),
                        Action = c.String(),
                        ActionPic = c.String(),
                        Date = c.String(),
                        Time = c.String(),
                        WiFi = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("ActivityModels");
        }
    }
}
